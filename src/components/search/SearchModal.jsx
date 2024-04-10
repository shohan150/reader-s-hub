import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Card from "../../components/homePage/Card";
import CardSkeleton from "../../components/homePage/CardSkeleton";
import useDebounce from "../../hooks/useDebounce";

export default function SearchModal() {
  const [isHovered, setIsHovered] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleChange = (value) => {
    setSearchTerm(value);
    performSearch(value);
  };

  const performSearch = useDebounce((term) => {
    fetchSearchedBooks(term);
  }, 500);

  async function fetchSearchedBooks(searchTerm) {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching the booklist...",
      });
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=12&key=${
          import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
        }`
      );
      if (!response.ok) {
        const errorMessage = `Fetching books failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      // console.log(data);
      // console.log(response);
      setSearchedBooks(data.items);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  }

  // useEffect(() => {
  //   fetchSearchedBooks(searchTerm);
  // }, [searchTerm]);

  return (
    <>
      <button
        className="btn hover:flex hover:items-center transition duration-300 ease-in-out"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={() => document.getElementById("search_modal").showModal()}
      >
        <FaSearch />
        {isHovered && <span>Search </span>}
      </button>
      <dialog id="search_modal" className="modal">
        <div className="modal-box w-3/4 max-w-5xl">
          <h3 className="font-bold text-lg">Search Books Here:</h3>
          <input
            type="text"
            placeholder="Search Here"
            className="my-4 w-full border-2 rounded py-1 px-2"
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          ></input>
          <div className="grid lg:grid-cols-3  grid-cols-2 lg:gap-6 gap-3">
            {searchedBooks.map((book, index) =>
              loading.state ? (
                <CardSkeleton key={index} />
              ) : (
                <Card key={book?.id} book={book} />
              )
            )}
          </div>
          {searchedBooks.length > 0 && (
            <button className="btn btn-primary w-full mt-6 mb-1">
              Load More
            </button>
          )}
        </div>

        <form method="dialog" className="modal-backdrop">
          <button></button>
        </form>
      </dialog>
    </>
  );
}

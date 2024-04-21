import { useEffect, useState } from "react";

const useBooksAPI = ({
  searchTerm = "top-rated-books",
  startIndex = 0,
  printType = "books",
  maxResults = 24,
  orderBy = "newest",
}) => {
  const [books, setBooks] = useState(new Array(18).fill({}));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchData() {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching the booklist...",
      });
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=${printType}&maxResults=${maxResults}&orderBy=${orderBy}&startIndex=${startIndex}&key=${
          import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
        }`
      );
      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      // console.log(data);
      // console.log(response);
      setBooks(data.items);
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

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(books, loading, error);
  return { books, loading, error };
};

export default useBooksAPI;

import { FaHeart } from "react-icons/fa";
import { useFavourites } from "../../hooks";

export default function FavouriteBox({ book }) {
  const { bookList, toggleFavourite } = useFavourites();
  // console.log(bookList);
  // const [isFavourite, setIsFavourite] = useState(
  //   bookList.some((favBook) => favBook?.id === book?.id)
  // );
  const isFavourite = bookList.some((favBook) => favBook?.id === book?.id);
  function handleFavouriteClick() {
    if (!isFavourite) {
      const favouritesData = {
        task_type: "add",
        data: {
          title: book.volumeInfo?.title,
          author: book.volumeInfo?.authors,
          image: book.volumeInfo?.imageLinks?.smallThumbnail,
          id: book?.id,
        },
      };
      toggleFavourite(favouritesData);
    } else {
      const favouritesData = {
        task_type: "remove",
        data: {
          id: book.id,
        },
      };
      toggleFavourite(favouritesData);
    }
  }
  //   console.log(book);
  return (
    <div className="w-fit  rounded-md bg-secondary px-4 py-2 my-1 text-neutral font-medium">
      <button
        className="flex items-center gap-2"
        onClick={handleFavouriteClick}
      >
        {isFavourite ? "Added" : "Add"} to Favourites
        <FaHeart fill={isFavourite ? "red" : "pink"} />
      </button>
    </div>
  );
}

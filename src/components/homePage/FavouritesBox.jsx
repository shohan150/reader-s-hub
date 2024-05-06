import { useFavourites } from "../../hooks";
import HorizontalCard from "./HorizontalCard";

export default function FavouritesBox() {
  const { bookList, toggleFavourite } = useFavourites();
  function handleRemoveFavourite(bookID) {
    const favouritesData = {
      task_type: "remove",
      data: {
        id: bookID,
      },
    };
    toggleFavourite(favouritesData);
  }

  return (
    <div
      className="border-secondary rounded-lg border-2 p-4 mb-4 scroll-mt-20"
      id="favourites"
    >
      <h1 className="font-bold text-2xl mb-3 text-secondary">
        This is the favourites box
      </h1>
      {bookList.map((favBook) => (
        <HorizontalCard
          key={favBook.id}
          data={favBook}
          handleRemoveFavourite={handleRemoveFavourite}
        />
      ))}
    </div>
  );
}

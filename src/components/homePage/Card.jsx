import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import imageNotFound from "../../assets/3.jpg";
export default function Card({ book }) {
  const bookInfo = book.volumeInfo;
  const [isFavourite, setIsFavourite] = useState(false);
  function handleFavouriteClick() {
    setIsFavourite(!isFavourite);
  }

  return (
    <div className="card bg-base-100 shadow-xl col-span-1">
      <figure>
        <img
          src={bookInfo?.imageLinks?.thumbnail ?? imageNotFound}
          alt={bookInfo?.title}
          className=""
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{bookInfo?.title}</h2>
        <div>
          {bookInfo?.authors?.map((author, index) => (
            <span className="font-medium text-md" key={index}>
              {index == 0 ? `${author}` : `, ${author}`}
            </span>
          ))}
        </div>

        <div className="card-actions justify-start">
          {bookInfo?.categories?.map(
            (cat, index) =>
              cat?.length < 30 && (
                <div className="badge badge-accent badge-outline" key={index}>
                  {cat}
                </div>
              )
          )}
        </div>
        <div className="w-fit border-2 border-pink-300 rounded-md bg-pink-200 px-2 py-1">
          <button
            className="flex items-center gap-2"
            onClick={handleFavouriteClick}
          >
            {isFavourite ? (
              <>
                Added to Favourites
                <FaHeart fill="red" />
              </>
            ) : (
              <>
                Add to Favourites
                <FaHeart fill="violet" />
              </>
            )}
          </button>
        </div>
        {bookInfo?.description ? (
          <p>
            {bookInfo?.description?.length < 85
              ? bookInfo?.description
              : `${bookInfo?.description.substring(0, 85)} ...`}
          </p>
        ) : (
          <p className="italic my-2">Description not available</p>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";
import { FaHeart } from "react-icons/fa";
export default function Card({ book }) {
  const [isFavourite, setIsFavourite] = useState(false);
  function handleFavouriteClick() {
    setIsFavourite(!isFavourite);
  }
  return (
    <div className="card bg-base-100 shadow-xl col-span-1">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{book?.title}</h2>
        <h4 className="card-title">{book?.author_name}</h4>
        <div className="card-actions justify-start">
          {console.log(book?.subject)}
          <div className="badge badge-accent badge-outline">Fashion</div>
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

        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
}

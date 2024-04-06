import { useState } from "react";
import { FaHeart } from "react-icons/fa";
export default function Card() {
  const [isFavourite, setIsFavourite] = useState(true);
  return (
    <div className="card bg-base-100 shadow-xl col-span-1">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">Shoes!</h2>
        <div className="card-actions justify-start">
          <div className="badge badge-accent badge-outline">Fashion</div>
          <div className="badge badge-accent badge-outline">Products</div>
        </div>
        <div className="w-fit border-2 border-pink-300 rounded-md bg-pink-200 px-2 py-1">
          {isFavourite ? (
            <button className="flex items-center gap-2">
              Added to Favourites
              <FaHeart fill="red" />
            </button>
          ) : (
            <button className="flex items-center gap-2">
              Add to Favourites
              <FaHeart fill="violet" />
            </button>
          )}
        </div>

        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
}

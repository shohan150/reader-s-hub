/* eslint-disable react/prop-types */

import imageNotFound from "../../assets/3.jpg";
import FavouriteBox from "./FavouriteBox";
export default function Card({ book }) {
  const bookInfo = book.volumeInfo;

  return (
    <div className="card bg-base-100 shadow-xl col-span-1">
      <figure>
        <img
          src={bookInfo?.imageLinks?.thumbnail ?? imageNotFound}
          alt={bookInfo?.title}
          className="w-full h-60 lg:h-64 xl:72"
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
                <div
                  className="badge badge-accent badge-outline my-1"
                  key={index}
                >
                  {cat}
                </div>
              )
          )}
        </div>

        <FavouriteBox book={book} />

        {bookInfo?.description ? (
          <span>
            {bookInfo?.description?.length < 85 ? (
              <span>{bookInfo?.description}</span>
            ) : (
              <span>
                {bookInfo?.description.substring(0, 85)}...{" "}
                <a
                  href="#"
                  className="inline italic text-sm underline text-red-400"
                >
                  Read More
                </a>
              </span>
            )}
          </span>
        ) : (
          <p className="italic my-2">Description not available</p>
        )}
      </div>
    </div>
  );
}

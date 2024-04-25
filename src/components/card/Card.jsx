/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import FavouriteBox from "./FavouriteBox";
import imageNotFound from "/assets/3.jpg";
export default function Card({ book }) {
  const bookInfo = book.volumeInfo;

  return (
    <div className="card bg-base-100 shadow-xl col-span-1">
      <Link to={`/book/${book.id}`}>
        <img
          src={bookInfo?.imageLinks?.thumbnail ?? imageNotFound}
          alt={bookInfo?.title}
          className="w-full h-60 lg:h-64 xl:72 rounded-t-2xl"
        />
      </Link>

      <div className="card-body p-4">
        <Link to={`/book/${book.id}`}>
          <h2 className="card-title">{bookInfo?.title}</h2>
        </Link>
        <div>
          {bookInfo?.authors?.map((author, index) => (
            <Link to={`/author/${author}`} key={index}>
              <span className="font-medium text-md">
                {index == 0 ? `${author}` : `, ${author}`}
              </span>
            </Link>
          ))}
        </div>

        <div className="card-actions justify-start">
          {bookInfo?.categories?.map(
            (cat, index) =>
              cat?.length < 30 && (
                <Link key={index} to={`/category/${cat}`}>
                  <div
                    className="badge badge-accent badge-outline my-1"
                    key={index}
                  >
                    {cat}
                  </div>
                </Link>
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
                <Link
                  to={`/book/${book.id}`}
                  className="inline italic text-sm underline text-red-400"
                >
                  Read More
                </Link>
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

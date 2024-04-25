import { Link } from "react-router-dom";
export default function HorizontalCard({ data, handleRemoveFavourite }) {
  // console.log(data);
  return (
    <div className="card card-side bg-base-100 shadow-xl my-4 w-full">
      <Link to={`/book/${data.id}`}>
        <img
          src={data.image}
          alt="Favourite Book"
          className="lg:h-28 lg:w-32 h-32 w-32 rounded-l-2xl"
        />
      </Link>
      <div className="lg:px-2 lg:py-1 px-3 py-2 w-full">
        <Link to={`/book/${data.id}`}>
          <h2 className="text-lg font-semibold">{data.title}</h2>
        </Link>
        <h3 className="text-md font-thin">
          <u>Authors:</u>{" "}
          {data?.author?.map((author, index) => (
            <Link to={`/author/${author}`} key={index}>
              <span className="text-sm text-gray-800">
                {index == 0 ? `${author}` : `, ${author}`}
              </span>
            </Link>
          ))}
        </h3>

        <div className="card-actions justify-end">
          <button
            className="btn btn-secondary "
            onClick={() => handleRemoveFavourite(data.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

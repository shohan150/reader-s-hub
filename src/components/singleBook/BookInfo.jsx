import { Link } from "react-router-dom";
import OtherDetails from "./OtherDetails";
import imgNotFound from "/assets/3.jpg";

export default function BookInfo({ data }) {
  function trimCategory(categoryName) {
    return categoryName.split("/")[0];
  }
  return (
    <>
      <img
        src={data?.imageLinks?.thumbnail ?? imgNotFound}
        alt="Book Cover"
        className="h-48 md:h-64 min-w-36 md:min-w-52"
      />

      <div className="space-y-4">
        <h1 className="text-white text-2xl md:text-4xl font-semibold tracking-wider">
          {data.title}
        </h1>
        <div>
          {data?.authors?.map((author, index) => (
            <Link to={`/author/${author}`} key={index}>
              <span className="text-sm text-gray-300">
                {index == 0 ? `${author}` : `, ${author}`}
              </span>
            </Link>
          ))}
        </div>
        <div className="card-actions justify-start">
          {data?.categories?.map((cat, index) => (
            <Link key={index} to={`/category/${trimCategory(cat)}`}>
              <div
                className="badge badge-accent badge-outline my-1"
                key={index}
              >
                {cat}
              </div>
            </Link>
          ))}
        </div>
        <p className="text-md text-gray-300">{data.description}</p>

        {/*preview button */}
        <a href={data?.previewLink} target="blank">
          <button className="text-white text-lg border-2 mt-6 mb-2 rounded-full px-16 py-3 hover:bg-white hover:text-neutral hover:scale-95 duration-200">
            Live Preview
          </button>
        </a>

        {/*other details*/}
        <OtherDetails data={data} />
      </div>
    </>
  );
}

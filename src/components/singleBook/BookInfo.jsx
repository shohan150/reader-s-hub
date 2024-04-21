import OtherDetails from "./OtherDetails";

export default function BookInfo({ data }) {
  return (
    <>
      <img
        src={data?.imageLinks?.thumbnail}
        alt="Book Cover"
        className="h-48 lg:h-64 min-w-32 lg:min-w-48"
      />
      <div className="space-y-4">
        <h1 className="text-white text-2xl md:text-4xl font-semibold tracking-wider">
          {data.title}
        </h1>
        <div>
          {data?.authors?.map((author, index) => (
            <span className="text-sm text-gray-300" key={index}>
              {index == 0 ? `${author}` : `, ${author}`}
            </span>
          ))}
        </div>
        <div className="card-actions justify-start">
          {data?.categories?.map((cat, index) => (
            <div className="badge badge-accent badge-outline my-1" key={index}>
              {cat}
            </div>
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

import { useLoaderData } from "react-router-dom";
export default function SingleBook() {
  const { bookData } = useLoaderData();
  const data = bookData.volumeInfo;
  console.log(data);
  return (
    <div className="mt-12 pt-16 my-container">
      <div className="flex gap-4 lg:gap-8">
        <img
          src={data.imageLinks.thumbnail}
          alt="Book Cover"
          className="h-48 lg:h-64"
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
          <p className="text-md text-gray-300">{data.description}</p>
        </div>
      </div>
    </div>
  );
}

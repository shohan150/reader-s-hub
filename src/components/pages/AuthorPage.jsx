import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../card/Card";

export default function AuthorPage() {
  const { bookData, authorName } = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [bookData]);
  return (
    <div className="mt-8 my-container">
      {bookData.totalItems ? (
        <h1 className="text-white text-4xl font-semibold tracking-wider my-10 lg:my-14">
          We have found {bookData.totalItems} books written by {authorName} :
        </h1>
      ) : (
        <h1 className="text-white text-4xl font-semibold tracking-wider mx-10 mt-32 lg:mt-60 min-h-screen text-center">
          No books found by {authorName}
        </h1>
      )}
      <div className="flex-1 grid lg:grid-cols-4 grid-cols-3 gap-6">
        {bookData?.items?.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

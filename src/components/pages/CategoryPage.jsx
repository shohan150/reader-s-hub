import { useLoaderData } from "react-router-dom";
import Card from "../card/Card";

import { useEffect } from "react";

export default function CategoryPage() {
  const { bookData, category } = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [bookData]);

  return (
    <div className="mt-8 my-container">
      <h1 className="text-white text-4xl font-semibold tracking-wider my-10 lg:my-14">
        Find books of {category} category :
      </h1>
      <div className="flex-1 grid lg:grid-cols-4 grid-cols-3 gap-6">
        {bookData?.items?.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

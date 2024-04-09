import { useEffect, useState } from "react";
import Card from "../homePage/Card";
import CardSkeleton from "../homePage/CardSkeleton";

export default function HomePage() {
  const [books, setBooks] = useState(new Array(20).fill({}));
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=top-rated-books&printType=books&maxResults=20&orderBy=newest&startIndex=10&key=AIzaSyAl1UDXHPMkpljBXO5yK0nHRSrv9f-fREc"
      );
      const data = await response.json();
      // console.log(data);
      // console.log(response);
      setBooks(data.items);
    }
    fetchData();
    setLoading(false);
  }, []);
  console.log(books);
  return (
    <div className="flex-1 grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-4">
      {books.map((book, index) =>
        loading ? (
          <CardSkeleton key={index} />
        ) : (
          <Card key={book.key} book={book} />
        )
      )}
    </div>
  );
}

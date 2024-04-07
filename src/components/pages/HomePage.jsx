import { useEffect, useState } from "react";
import Card from "../homePage/Card";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAl1UDXHPMkpljBXO5yK0nHRSrv9f-fREc"
      );
      const data = await response.json();
      // console.log(data);
      setBooks(data.items);
    }
    fetchData();
  }, []);
  console.log(books);
  return (
    <div className="flex-1 grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-4">
      {books.map((book) => (
        <Card key={book.key} book={book} />
      ))}
    </div>
  );
}

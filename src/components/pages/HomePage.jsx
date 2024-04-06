import { useEffect, useState } from "react";
import Card from "../homePage/Card";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://openlibrary.org/search.json?q=trending&limit=20"
      );
      const data = await response.json();
      // console.log(data);
      setBooks(data.docs);
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

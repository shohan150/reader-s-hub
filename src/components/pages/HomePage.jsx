import { useBooksAPI } from "../../hooks";
import Card from "../homePage/Card";
import CardSkeleton from "../homePage/CardSkeleton";

export default function HomePage() {
  const searchParams = { searchTerm: "popular-books" };
  // const fav = {};
  // const bookddd = useFavourites(fav);
  const { books, loading } = useBooksAPI(searchParams);
  console.log(books);
  return (
    <div className="flex-1 grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-4">
      {books.map((book, index) =>
        loading.state ? (
          <CardSkeleton key={index} />
        ) : (
          <Card key={book.id} book={book} />
        )
      )}
    </div>
  );
}

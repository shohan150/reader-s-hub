import { useLoaderData } from "react-router-dom";
import { useBooksAPI } from "../../hooks";
import Card from "../card/Card";
import CardSkeleton from "../card/CardSkeleton";
import BookInfo from "../singleBook/BookInfo";

export default function SingleBook() {
  const { bookData } = useLoaderData();
  const data = bookData?.volumeInfo;

  const searchParams = { searchTerm: data?.publisher };

  const { books, loading } = useBooksAPI(searchParams);

  console.log(books);

  return (
    <div className="mt-12 pt-16 my-container">
      <div className="flex gap-4 lg:gap-8">
        <BookInfo data={data} />
      </div>

      <div>
        <h3 className="text-white text-2xl mt-6">More Books</h3>
        {books.map((book, index) =>
          loading.state ? (
            <CardSkeleton key={index} />
          ) : (
            <Card key={book.id} book={book} />
          )
        )}
      </div>
    </div>
  );
}

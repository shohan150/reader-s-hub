import { useLoaderData } from "react-router-dom";
import { useBooksAPI } from "../../hooks";
import Card from "../card/Card";
import CardSkeleton from "../card/CardSkeleton";
import BookInfo from "../singleBook/BookInfo";

export default function SingleBook() {
  const { bookData } = useLoaderData();
  const data = bookData?.volumeInfo;

  const searchParams = { searchTerm: data?.publisher, maxResults: 4 };

  const { books, loading } = useBooksAPI(searchParams);

  return (
    <div className="mt-12 pt-16 my-container">
      <div className="flex gap-4 md:gap-8">
        <BookInfo data={data} />
      </div>

      <div>
        <h3 className="text-white text-4xl mt-16 lg:mt-28 mb-6">More Books</h3>
        <div className="flex-1 grid lg:grid-cols-4 grid-cols-2 gap-6">
          {books.map((book, index) =>
            loading.state ? (
              <CardSkeleton key={index} />
            ) : (
              <Card key={book.id} book={book} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

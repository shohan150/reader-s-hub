import Card from "../card/Card";
import CardSkeleton from "../card/CardSkeleton";

import { useEffect, useRef, useState } from "react";

export default function HomeContent() {
  const [books, setBooks] = useState(new Array(12).fill({}));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [bookIndex, setBookIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const loaderRef = useRef(null);
  // console.log(books);
  // console.log(bookIndex);

  useEffect(() => {
    async function fetchData(number, isLoaded) {
      try {
        setLoading({
          ...loading,
          state: true,
          message: "Fetching the booklist...",
        });
        //console.log(bookIndex);
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=popular+books&printType=books&maxResults=${number}&orderBy=relevance&startIndex=${bookIndex}&key=${
            import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
          }`
        );
        if (!response.ok) {
          const errorMessage = `Fetching book data failed: ${response.status}`;
          throw new Error(errorMessage);
        }
        const data = await response.json();
        //console.log(data.items);
        // console.log(response);

        if (data.items.length === 0) {
          setHasMore(false);
        } else {
          !isLoaded
            ? setBooks(data.items)
            : setBooks((state) => state.concat(data.items));

          setBookIndex((state) => state + 12);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading({
          ...loading,
          state: false,
          message: "",
        });
      }
    }

    const onIntersection = (items) => {
      const loaderItem = items[0];

      if (loaderItem.isIntersecting && hasMore) {
        fetchData(12, true);
      }
    };

    const observer = new IntersectionObserver(onIntersection);

    if (observer && loaderRef.current) {
      // jodi observer ta toiri hoi ebong loaderRef.current e reference thake, tahole observe kora shuru koro.
      observer.observe(loaderRef.current);
    }

    //somossa hocchilo ekhane. observer e fetchData call hobar por:
    // 1. scenerio 1: dependency te bookIndex chilo na. to actully bookindex update holeo, useEffect nijer scope e BookIndex k kokhono e update korchilo na. Always 0 rekhe dicchilo. Tai same data, mane 0 index diyei barbar call hocchilo.
    // 2. scenerio 2: dependency te bookIndex k rakhlam. observer active hle e, bookIndex k update korche, dependency te thakai re-render trigger korche. r re-render hle e, oi j initial fetchData(12, false) invoke hocche ebong loop e pore jacche jotokkhon na data.items===0 hocche.

    // so, dependency te bookIndex k rekhe, initial load detect kore ekbar invoke KeyboardEvent. etar obossoi better way ache. Tobe aj etuk e thak. useEffect niye ektu porashuna kore tokhon eta propperly kora jabe. apatoto eslint inactive thakuk.
    isInitialLoad && fetchData(12, false);
    setIsInitialLoad(false);

    return () => {
      if (observer) observer.disconnect();
    };
    //this is not the proper way. but I need to under useeffect more deepely. tarpor properly korar try kora jete pare.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookIndex, hasMore]);

  return (
    <div className="flex-1">
      <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-4">
        {books.map((book, index) =>
          loading.state ? (
            <CardSkeleton key={index} />
          ) : (
            <Card key={book.id} book={book} />
          )
        )}
      </div>
      <div className="flex justify-center">
        <span
          className="mt-12 mb-6 text-white loading loading-spinner loading-lg"
          ref={loaderRef}
        ></span>
      </div>
    </div>
  );
}

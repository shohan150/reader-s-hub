import { useState } from "react";
import { FavouriteContext } from "../context";

export default function FavouriteProvider({ children }) {
  const getStoredList = localStorage.getItem("myFavBookList");
  const storedBooklist = JSON.parse(getStoredList) ?? [];
  const [bookList, setBooklist] = useState(storedBooklist);
  // console.log(storedBooklist, bookList);

  return (
    <FavouriteContext.Provider value={{ bookList, setBooklist }}>
      {children}
    </FavouriteContext.Provider>
  );
}

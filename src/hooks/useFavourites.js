/* eslint-disable no-case-declarations */
import { useContext } from "react";
import { FavouriteContext } from "../context";

const storeFavourites = () => {
  const { bookList, setBooklist } = useContext(FavouriteContext);
  let updatedList;
  let stringifiedList;

  function toggleFavourite({ task_type, data }) {
    switch (task_type) {
      case "add":
        updatedList = [...bookList, data];
        stringifiedList = JSON.stringify(updatedList);
        localStorage.setItem("myFavBookList", stringifiedList);
        break;
      case "remove":
        updatedList = bookList.filter((book) => book.id !== data.id);
        stringifiedList = JSON.stringify(updatedList);
        localStorage.setItem("myFavBookList", stringifiedList);
        break;
    }
    setBooklist(updatedList);
  }

  return { bookList, toggleFavourite };
};
export default storeFavourites;

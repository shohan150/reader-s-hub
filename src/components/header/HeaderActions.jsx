import { FaRegHeart } from "react-icons/fa";
import { useFavourites } from "../../hooks";
import SearchModal from "../search/SearchModal";
import ThemeController from "./ThemeController";
export default function HeaderActions() {
  const { bookList } = useFavourites();
  return (
    <>
      <SearchModal />
      <button className="btn btn-ghost btn-circle">
        <div className="indicator">
          <FaRegHeart />
          <span
            className={`badge badge-xs badge-primary indicator-item ${
              bookList.length > 0 && "py-2"
            }`}
          >
            {bookList.length > 0 && bookList.length}
          </span>
        </div>
      </button>

      <ThemeController />
    </>
  );
}

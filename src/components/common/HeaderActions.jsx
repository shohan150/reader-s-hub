import { FaRegHeart } from "react-icons/fa";
import SearchModal from "../search/SearchModal";
import ThemeController from "./ThemeController";
export default function HeaderActions() {
  return (
    <>
      <SearchModal />

      <button className="btn btn-ghost btn-circle">
        <div className="indicator">
          <FaRegHeart />
          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>

      <ThemeController />
    </>
  );
}

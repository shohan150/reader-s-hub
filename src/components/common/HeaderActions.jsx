import { FaRegHeart, FaSearch } from "react-icons/fa";
import ThemeController from "./ThemeController";
export default function HeaderActions() {
  return (
    <>
      <button className="btn btn-ghost btn-circle">
        <FaSearch />
      </button>
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

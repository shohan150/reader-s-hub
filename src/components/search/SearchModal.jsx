import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchModal() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <>
      <button
        className="btn hover:flex hover:items-center transition duration-300 ease-in-out"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={() => document.getElementById("search_modal").showModal()}
      >
        <FaSearch />
        {isHovered && <span>Search </span>}
      </button>
      <dialog id="search_modal" className="modal">
        <div className="modal-box w-3/4 max-w-5xl">
          <h3 className="font-bold text-lg">Search Books Here:</h3>
          <input
            type="text"
            placeholder="Search Here"
            className="my-4 w-full border-2 rounded py-1 px-2"
          ></input>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button></button>
        </form>
      </dialog>
    </>
  );
}

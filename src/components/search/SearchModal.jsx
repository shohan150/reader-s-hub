import { FaSearch } from "react-icons/fa";

export default function SearchModal() {
  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("search_modal").showModal()}
      >
        <FaSearch />
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

import CategoriesBox from "./CategoriesBox";
import FavouritesBox from "./FavouritesBox";

export default function sidebar() {
  return (
    <div className=" xl:w-96 lg:w-80 md:w-64  md:ml-4 lg:ml-6">
      <CategoriesBox />
      <FavouritesBox />
    </div>
  );
}

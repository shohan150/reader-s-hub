import CategoriesBox from "../common/CategoriesBox";
import HomePage from "./HomePage";

export default function Content() {
  return (
    <div className="md:flex md:flex-row-reverse md:p-4 lg:p-6 xl:p-8 p-3">
      <CategoriesBox />
      <HomePage />
    </div>
  );
}

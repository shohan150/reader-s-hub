import { Link } from "react-router-dom";
import { categoryNames } from "../../data/categories";

export default function CategoriesBox() {
  const badgeColors = ["primary", "secondary", "accent", "info"];
  // badge-primary
  // badge-secondary
  // badge-accent
  // badge-info

  return (
    <div className="border-2 border-secondary rounded-lg p-4  mb-4">
      <h1 className="font-bold text-2xl mb-3 text-secondary">
        Find the books of your favourite category
      </h1>
      {categoryNames.map((category, index) => (
        <Link key={index} to={`/category/${category}`}>
          <div
            className={`py-4 px-5 m-1 text-[16px] font-medium badge   badge-${
              badgeColors[Math.floor(Math.random() * badgeColors.length)]
            }`}
          >
            {category}
          </div>
        </Link>
      ))}
    </div>
  );
}

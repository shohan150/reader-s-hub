import { categoryNames } from "../../data/categories";

export default function CategoriesBox() {
  const badgeColors = ["primary", "secondary", "accent"];

  return (
    <div className="border-2 border-secondary rounded-lg p-4  mb-4">
      <h1 className="font-bold text-2xl mb-3 text-secondary">
        Find the books of your favourite category
      </h1>
      {categoryNames.map((category, index) => (
        <div
          className={`py-4 px-5 m-1 text-[16px] font-medium badge   badge-${
            badgeColors[Math.floor(Math.random() * badgeColors.length)]
          }`}
          key={index}
        >
          {category}
        </div>
      ))}
    </div>
  );
}
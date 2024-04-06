import Card from "../homePage/Card";

export default function HomePage() {
  return (
    <div className="flex-1 border-4 grid lg:grid-cols-3 grid-cols-2 gap-2">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

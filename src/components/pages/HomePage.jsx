import Card from "../homePage/Card";

export default function HomePage() {
  return (
    <div className="flex-1 grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

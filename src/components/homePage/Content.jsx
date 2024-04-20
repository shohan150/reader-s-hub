import HomeContent from "./HomeContent";
import SideBar from "./SideBar";

export default function Content() {
  return (
    <div className="md:flex md:flex-row-reverse my-container mt-[-6px]">
      <SideBar />
      <HomeContent />
    </div>
  );
}

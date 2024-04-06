import SideBar from "../common/SideBar";
import HomePage from "./HomePage";

export default function Content() {
  return (
    <div className="md:flex md:flex-row-reverse md:p-4 lg:p-6 xl:p-8 p-3 bg-neutral mt-[-6px] lg:pb-12 xl:pb-14 pb-10">
      <SideBar />
      <HomePage />
    </div>
  );
}

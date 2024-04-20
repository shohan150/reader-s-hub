import { GiHamburgerMenu } from "react-icons/gi";
import HeaderActions from "./HeaderActions";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className="navbar bg-base-100 fixed z-10 top-0 ">
      <div className="navbar-start">
        {/* the hamburger menu for small devices */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <Menu />
          </ul>
        </div>
        {/* website title */}
        <a className="btn btn-ghost text-xl hover:bg-base-100" href="/">
          Reader's Hub
        </a>
      </div>
      {/* navmenu for large devices */}
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 ">
          <Menu />
        </ul>
      </div>
      <div className="navbar-end pr-2">
        <HeaderActions />
      </div>
    </div>
  );
}

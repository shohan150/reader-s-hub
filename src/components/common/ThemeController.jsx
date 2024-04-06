import { FaRegMoon, FaSun } from "react-icons/fa";

export default function ThemeController() {
  return (
    <label className="swap swap-rotate px-4">
      <input type="checkbox" className="theme-controller" value="forest" />
      <FaSun className="swap-off" />
      <FaRegMoon className="swap-on" />
    </label>
  );
}

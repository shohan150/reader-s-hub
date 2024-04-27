import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about-us">About Us</Link>
      </li>
      {/* <li>
        <details>
          <summary>Bestsellers</summary>
          <ul className="p-2 ">
            <li>
              <a>Monthly</a>
            </li>
            <li>
              <a>Yearly</a>
            </li>
          </ul>
        </details>
      </li> */}
    </>
  );
}

export default function Menu() {
  return (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Trending</a>
      </li>
      <li>
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
      </li>
    </>
  );
}

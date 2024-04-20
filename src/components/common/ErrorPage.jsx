import { Link, useRouteError } from "react-router-dom";
import errorImg from "/assets/6.png";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex items-center justify-center flex-col mt-10"
    >
      <h1 className="text-5xl font-semibold my-8">Oops!</h1>
      <img src={errorImg} className="h-72" />
      <p className="leading-10">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Error: {error.statusText || error.message}</i>
      </p>

      <h3 className="mt-6 text-lg font-medium">
        Go to{" "}
        <u className="text-primary">
          <Link to="/">Home Page</Link>
        </u>
      </h3>
    </div>
  );
}

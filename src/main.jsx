import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/common/ErrorPage";
import CategoryPage from "./components/pages/CategoryPage";
import HomePage from "./components/pages/HomePage";
import SingleBook from "./components/pages/SingleBook";
import "./index.css";
import { bookLoader, categoryLoader } from "./loaders/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/book/:bookId",
        element: <SingleBook />,
        loader: bookLoader,
      },
      {
        path: "/category/:categoryName",
        element: <CategoryPage />,
        loader: categoryLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

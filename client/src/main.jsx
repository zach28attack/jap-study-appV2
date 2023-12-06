import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ArticleIndex from "./pages/ArticleIndex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/articles",
        element: <ArticleIndex />,
      },
      {
        path: "/flashcards",
        element: "",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

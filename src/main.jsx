import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Literature, { loader as literatureLoader } from "./routes/Literature";
import Music, { loader as musicLoader } from "./routes/Music";
import Art, { loader as artLoader } from "./routes/Art";
import Works, { loader as worksLoader } from "./routes/Works";
import Hero, { loader as heroLoader } from "./routes/Hero";
import "./index.css";
import HeroBook, { loader as bookLoader } from "./routes/HeroBook";
import HeroMusic, { loader as songLoader } from "./routes/HeroMusic";
import HeroArt, { loader as artPieceLoader } from "./routes/HeroArt";
import Create, { action as createAction } from "./routes/Create";
import Update, { action as updateAction } from "./routes/Update";
import Delete, { action as deleteAction } from "./routes/Delete";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Hero />,
        loader: heroLoader,
      },
      {
        path: "literature/",
        element: <Literature />,
        loader: literatureLoader,
      },
      {
        path: "music",
        element: <Music />,
        loader: musicLoader,
      },
      {
        path: "art",
        element: <Art />,
        loader: artLoader,
      },
      {
        path: "works",
        element: <Works />,
        loader: worksLoader,
      },
      {
        path: "literature/:title/:id",
        element: <HeroBook />,
        loader: bookLoader,
      },
      {
        path: "music/:title/:id",
        element: <HeroMusic />,
        loader: songLoader,
      },
      {
        path: "art/:title/:id",
        element: <HeroArt />,
        loader: artPieceLoader,
      },
      {
        path: "create",
        element: <Create />,
        action: createAction,
      },
      {
        path: "update",
        element: <Update />,
        action: updateAction,
      },
      {
        path: "delete",
        element: <Delete />,
        action: deleteAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

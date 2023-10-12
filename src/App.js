import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Bilyard from "./pages/Bilyard";
import Catalogs from "./pages/catalogs";
import CollectionBilyard from "./pages/CollectionBilyard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/catalog",
    element: <Catalogs />,
  },
  {
    path: "bilyardCollection/:name",
    element: <CollectionBilyard />,
  },
  {
    path: "/bilyard",
    element: <Bilyard />,
  },

]);




const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
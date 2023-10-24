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
import BilliardCollectionMain from "./pages/BilliardCollectionMain";
import Svetilnik from "./pages/Svewtilnik";
import KeyMain from "./pages/KeyMain";
import KiiCollection from "./pages/KiiCollection";
import KeyItem from "./pages/KeyItem";
import KeyCategory from "./pages/KeyCategory";

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
    path: "/bilyardCollection",
    element: <BilliardCollectionMain />,
  },
  {
    path: "/bilyard",
    element: <Bilyard />,
  },
  {
    path: "/svetilnik/:link",
    element: <Bilyard />,
  },
  {
    path: "/svetilnik/:link/:name",
    element: <Bilyard />,
  },
  {
    path: "/svetilnik",
    element: <Svetilnik />,
  },

  {
    path: "/key/:category/:name/:key",
    element: <KeyItem />,
  },
  {
    path: "/key/:category/:name",
    element: <KeyCategory />,
  },
  {
    path: "/key/:category",
    element: <KiiCollection />,
  },
  {
    path: "/key",
    element: <KeyMain />,
  },


]);




const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);




const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
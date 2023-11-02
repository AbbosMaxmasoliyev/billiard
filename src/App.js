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
import KiyevnitsaMain from "./pages/KiyevnitsaMain";
import KiyevnitsaCategory from "./pages/KiyevnitsaCategory";
import KiyevnitsaItem from "./pages/KiyevnitsaItem";
import SvetilnikMain from "./pages/Svetilnik/Main";
import SvetilnikItem from "./pages/Svetilnik/Item";
import AksessuarMain from "./pages/Akssessuar/Main";
import AksessuarCategory from "./pages/Akssessuar/AksessuarCategory";
import AksessuarItem from "./pages/Akssessuar/Item";
import IgroAksessuarItem from "./pages/IgroAkksessuar/Item";
import IgroAksessuarCategory from "./pages/IgroAkksessuar/AksessuarCategory";
import IgroAksessuarMain from "./pages/IgroAkksessuar/Main";
import TubusMain from "./pages/Tubus/Main";
import TubusItem from "./pages/Tubus/Item";
import TubusCategory from "./pages/Tubus/TubusCategory";
import KiyAksessuarMain from "./pages/KiyAkssessuar/Main";
import SuknoCategory from "./pages/Sukno/SuknoCategory";
import SuknoMain from "./pages/Sukno/Main";
import SuknoItem from "./pages/Sukno/Item";
import SharMain from "./pages/Shar/Main";
import SharCategory from "./pages/Shar/SharCategory";
import SharItem from "./pages/Shar/Item";
import KomplektMain from "./pages/Komplekt/Main";
import KomplektCategory from "./pages/Komplekt/KomplektCategory";
import IgrotekaMain from "./pages/Igroteka/Main";
import TennisniyStol from "./pages/TennisniyStol/Main";
import TennisniyStolCategory from "./pages/TennisniyStol/TannisniyCategory";
import TennisniyStolItem from "./pages/TennisniyStol/Item";
import TrenajorMain from "./pages/Trenajor/Main";
import TrenajorCategory from "./pages/Trenajor/TubusCategory";
import TrenajorItem from "./pages/Trenajor/Item";
import SvetilnikCategory from "./pages/Svetilnik/SvetilnikCategory";
import KiyItem from "./components/KiyItem";
import BilliardStolMain from "./pages/BilliardStol/Main";

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
    path: "/bilyardCollection/:name",
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
    path: "/billiardStol/:category:name",
    element: <CollectionBilyard />,
  },
  {
    path: "/billiardStol/:category",
    element: <CollectionBilyard />,
  },
  {
    path: "/billiardStol",
    element: <BilliardStolMain />,
  },
  {
    path: "/bilyard",
    element: <Bilyard />,
  },
  {
    path: "/svetilnik/:category/:name",
    element: <SvetilnikItem />,
  },
  {
    path: "/svetilnik/:category",
    element: <SvetilnikCategory />,
  },
  {
    path: "/svetilnik",
    element: <SvetilnikMain />,
  },

  {
    path: "/key/:category/:name/",
    element: <KiyItem />,
  },
 
  {
    path: "/key/:category",
    element: <KeyCategory />,
  },
  {
    path: "/key",
    element: <KeyMain />,
  },
  {
    path: "/kiyevnitsa/:category/:name",
    element: <KiyevnitsaItem />,
  },
  {
    path: "/kiyevnitsa/:category",
    element: <KiyevnitsaCategory />,
  },

  {
    path: "/kiyevnitsa",
    element: <KiyevnitsaMain />,
  },
  {
    path: "/aksessuar/:category/:name",
    element: <AksessuarItem />,
  },
  {
    path: "/aksessuar/:category",
    element: <AksessuarCategory />,
  },

  {
    path: "/aksessuar",
    element: <AksessuarMain />,
  },

  {
    path: "/igroaksessuar/:category/:name",
    element: <IgroAksessuarItem />,
  },
  {
    path: "/igroaksessuar/:category",
    element: <IgroAksessuarCategory />,
  },

  {
    path: "/igroaksessuar",
    element: <IgroAksessuarMain />,
  },


  {
    path: "/tubus/:category/:name",
    element: <TubusItem />,
  },
  {
    path: "/tubus/:category",
    element: <TubusCategory />,
  },

  {
    path: "/tubus",
    element: <TubusMain />,
  },



  {
    path: "/kiyakksessuar/:category/:name",
    element: <TubusItem />,
  },
  {
    path: "/kiyakksessuar/:category",
    element: <TubusCategory />,
  },

  {
    path: "/kiyakksessuar",
    element: <KiyAksessuarMain />,
  },


  {
    path: "/sukno/:category/:name",
    element: <SuknoItem />,
  },
  {
    path: "/sukno/:category",
    element: <SuknoCategory />,
  },

  {
    path: "/sukno",
    element: <SuknoMain />,
  },


  {
    path: "/shar/:category/:name",
    element: <SharItem />,
  },
  {
    path: "/shar/:category",
    element: <SharCategory />,
  },

  {
    path: "/shar",
    element: <SharMain />,
  },


  {
    path: "/komplekt/:category",
    element: <KomplektCategory />,
  },

  {
    path: "/komplekt",
    element: <KomplektMain />,
  },

  {
    path: "/igroteka",
    element: <IgrotekaMain />,
  },
  {
    path: "/tennisniyStol/:category/:name",
    element: <TennisniyStolItem />,
  },
  {
    path: "/tennisniyStol/:category",
    element: <TennisniyStolCategory />,
  },
  {
    path: "/tennisniyStol",
    element: <TennisniyStol />,
  },

  {
    path: "/trenajor/:category/:name",
    element: <TrenajorItem />,
  },
  {
    path: "/trenajor/:category",
    element: <TrenajorCategory />,
  },
  {
    path: "/trenajor",
    element: <TrenajorMain />,
  },

]);




const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
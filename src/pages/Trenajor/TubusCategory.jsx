import logo from "../../logo.svg";
import "../../App.css";
import Header from "../../components/heaader";
import Topmenu from "../../components/topmenu";
import SliderCarousel from "../../components/slider";
import Predlagat from "../../components/predlagat";
import Info from "../../components/info";
import BigCarousel from "../../components/BigCarousel";
import BilyardCollection from "../../components/bilyardCollection";
import LeftNavbar from "../../components/leftNavbar";
import KeyNavbar from "../../components/keyNavbar";
import { useEffect, useState } from "react";
import keyLinksJson from "../../json/Links/keyChexliTubus.json";
import kiiJson from "../../json/chexlitubus.json";
import AksessuarNavbar from "../../components/Aksessuar/Navbar";

import { useParams } from "react-router-dom";
import TubusNavbar from "../../components/Tubus/Navbar";
import TubusCategoryComponent from "../../components/Tubus/AksessuarCategory";
import TrenajorCategoryComponent from "../../components/Trenajor/TrenajorCategory";
import TrenajorNavbar from "../../components/Trenajor/Navbar";

function TrenajorCategory() {
  return (
    <div className="container1">
      <Header />
      <Topmenu />
      <br />
      <div className="no-index">
        <TrenajorCategoryComponent />
        <TrenajorNavbar />
      </div>
      {/* <div style={{background:"#f7f0dd"}}>
        <SliderCarousel />
        <BigCarousel />
      </div> */}

      <br />
    </div>
  );
}

export default TrenajorCategory;

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
import keyLinksJson from "../../json/Links/chexolLinks.json";
import kiiJson from "../../json/chexol.json";
import AksessuarNavbar from "../../components/Aksessuar/Navbar";
import AksessuarCategoryComponent from "../../components/TennisniyStol/AksessuarCategory";
import { useParams } from "react-router-dom";
import TennisniyStolNavbar from "../../components/TennisniyStol/Navbar";

function TennisniyStolCategory() {
  

  return (
    <div className="container1">
      <Header />
      <Topmenu />
      <br />
      <div className="no-index">
        <AksessuarCategoryComponent />
        <TennisniyStolNavbar />
      </div>
      {/* <div style={{background:"#f7f0dd"}}>
        <SliderCarousel />
        <BigCarousel />
      </div> */}

      <br />
      <Info />
    </div>
  );
}

export default TennisniyStolCategory;

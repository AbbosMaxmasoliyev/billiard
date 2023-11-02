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

import { useParams } from "react-router-dom";
import SharNavbar from "../../components/Shar/Navbar";
import SharCategoryComponent from "../../components/Shar/SharCategory";
import Navbar from "../../components/Komplekt/Navbar";
import Plita from "../../components/Komplekt/Plita";
import Luz from "../../components/Komplekt/Luz";
import BortovayaRezina from "../../components/Komplekt/BortovayaRezina";

function KomplektCategory() {
  const params = useParams();
  const [item, setItem] = useState();
  useEffect(() => {
    console.log(params.category);
    switch (params.category) {
      case "plita":
        setItem((prev) => (prev = Plita));
        break;
      case "luz":
        setItem((prev) => (prev = Luz));
        break;
      case "bortovayarezina":
        setItem((prev) => (prev = BortovayaRezina));
        break;
    }
  }, [params]);
  useEffect(() => {
    console.log(params.category);
    switch (params.category) {
      case "plita":
        setItem((prev) => (prev = Plita));
        break;
      case "luz":
        setItem((prev) => (prev = Luz));
        break;
      case "bortovayarezina":
        setItem((prev) => (prev = BortovayaRezina));
        break;
    }
  }, []);

  return (
    <div className="container1">
      <Header />
      <Topmenu />
      <br />
      <div className="no-index">
        {item ? item() : null}
        <Navbar />
      </div>
      {/* <div style={{background:"#f7f0dd"}}>
        <SliderCarousel />
        <BigCarousel />
      </div> */}

      <br />
     
    </div>
  );
}

export default KomplektCategory;

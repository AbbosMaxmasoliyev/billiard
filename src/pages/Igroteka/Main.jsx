import React from "react";
import Header from "../../components/heaader";
import Topmenu from "../../components/topmenu";
import ContentLeft from "./ContentLeft";
import IgrotekaNavbar from "./Navbar";

const IgrotekaMain = () => {
  return (
    <div className="container1">
      <Header />
      <Topmenu />
      <br />
      <div className="no-index">
        <ContentLeft />
        <IgrotekaNavbar />
      </div>
      {/* <div style={{background:"#f7f0dd"}}>
      <SliderCarousel />
      <BigCarousel />
    </div> */}

      <br />
    </div>
  );
};

export default IgrotekaMain;

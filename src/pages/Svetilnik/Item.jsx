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
import keyLinksJson from "../../json/Links/keySvetilnikLinks.json";
import kiiJson from "../../json/svetilnik.json";
import { useParams } from "react-router-dom";
import TableKii from "../../components/tableKii";
import Properties from "../../components/properties";
import MainComponent from "../../components/mainComponent";
import SvetilnikLeftNavbar from "../../components/SvetilnikLeftNavbar";
import PropertiesSvetilnik from "../../components/Svetilnik/Properties";

function SvetilnikItem() {
  const params = useParams();
  const [data, setData] = useState({});
  const [coloursMaterial, setColoursMaterial] = useState(null);
  useEffect(() => {
    console.log(params.name);
    console.log(params.category);
    let objectKii = {};
    kiiJson.forEach((item, index) => {
      let keyName = Object.keys(item)[0];
      objectKii[keyName] = item[keyName];
    });
    setData((prev) => (prev = objectKii[params.name]));
    console.log(data?.parametres);
    console.log(data?.table);
  }, []);
  useEffect(() => {
    console.log(params.name);
    console.log(params.category);
    let objectKii = {};
    kiiJson.forEach((item, index) => {
      let keyName = Object.keys(item)[0];
      objectKii[keyName] = item[keyName];
    });

    setData((prev) => (prev = objectKii[params.name]));
  }, [params.name, params.category]);
  console.log(coloursMaterial);
  // console.log(data?.kiy_yakubovicha_yantar);
  // console.log(data[params.name]?.description);
  return (
    <div className="container1">
      <Header />
      <Topmenu />
      <br />
      <div className="no-index">
        {data?.images ? <MainComponent data={data.images} /> : null}
        {data?.image ? <MainComponent data={data.image} /> : null}

        {data?.table ? <TableKii data={data?.table} /> : null}
        {data?.parametres ? <TableKii parametres={data?.parametres} /> : null}
        {data?.description ? (
          <PropertiesSvetilnik
            opisaniya={data?.description}
            material={data?.coloursMaterial}
          />
        ) : null}

        <SvetilnikLeftNavbar />
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

export default SvetilnikItem;

import logo from '../logo.svg';
import '../App.css';
import Header from '../components/heaader';
import Topmenu from '../components/topmenu';
import SliderCarousel from '../components/slider';
import Predlagat from '../components/predlagat';
import Info from '../components/info';
import BigCarousel from '../components/BigCarousel';
import BilyardCollection from '../components/bilyardCollection';
import LeftNavbar from '../components/leftNavbar';
import KeyNavbar from '../components/keyNavbar';
import { useEffect } from 'react';
import keyLinksJson from "../json/Links/keyKiiLinks.json"
import kiiJson from "../json/key.json"
import KiyItem from '../components/KiyItem';



function KeyItem() {
    // useEffect(() => {
    //     // console.log(keyLinksJson["C удлинителем"]);
    //     let objectKii = {}
    //     kiiJson.forEach((item, index) => {
    //         let keyName = Object.keys(item)[0]
    //         objectKii[keyName] = item[keyName];
    //     })
    // }, [])

    return (
        <div className='container1'>
            <Header />
            <Topmenu />
            <br />
            <div className="no-index">

                <KiyItem />
                <KeyNavbar />
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


export default KeyItem
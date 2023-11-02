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
import { useEffect, useState } from 'react';
import keyLinksJson from "../json/Links/keyKiiLinks.json"
import kiiJson from "../json/kiyevnitsa.json"
import { Collection } from '../components/collection';
import { useParams } from 'react-router-dom';
import MainComponent from '../components/mainComponent';
import Table from '../components/table';
import Properties from '../components/properties';
import TableKii from '../components/tableKii';



function KeyCategory() {
    const params = useParams()
    const [data, setData] = useState({})
    useEffect(() => {
        console.log(params.name);
        let objectKii = {}
        kiiJson.forEach((item, index) => {
            let keyName = Object.keys(item)[0]
            objectKii[keyName] = item[keyName];
        })
        console.log(kiiJson);
    }, [])
    // console.log(data?.kiy_yakubovicha_yantar);
    // console.log(data[params.name]?.description);
    return (
        <div className='container1'>
            <Header />
            <Topmenu />
            <br />
            <div className="no-index">

                {
                    data[params.name] ? <MainComponent data={data[params.name].image ? data[params.name].image : data[params.name].images} /> : null
                }

                {
                    data[params.name]?.table ? <TableKii data={data[params.name]?.table} parametres={data[params.name]?.parametres}/> : null
                }
                {
                    data[params.name]?.description ? <Properties opisaniya={data[params.name]?.description} material={null} /> : null
                }
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


export default KeyCategory
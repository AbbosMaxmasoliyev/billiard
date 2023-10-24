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
import kiiJson from "../json/key.json"
import { Link, useParams } from 'react-router-dom';



function KiiCollection() {
    const params = useParams()
    const [objectKii, setObjectKii] = useState({})
    useEffect(() => {
        console.log(params.category)
        // console.log(keyLinksJson["C удлинителем"]);
        let objectKiiUse = {}
        kiiJson.forEach((item, index) => {
            let keyName = Object.keys(item)[0]
            objectKiiUse[keyName] = item[keyName];
        })

        setObjectKii(prev => prev = objectKiiUse)
    }, [])
    console.log(keyLinksJson[params.category].items);
    console.log(objectKii["drevko_dlya_mostika_d_2"]);
    return (
        <div className='container1'>
            <Header />
            <Topmenu />
            <br />
            <div className="no-index">

                <div class="main float-right width772 pos-relative center-right section_175">
                    <span class="h2">Бильярдные коллекции</span>

                </div>
                <div class="main float-right width772 pos-relative center-right section_175">
                    {
                        keyLinksJson[params.category].items.map((item, index) => {
                            console.log(objectKii[item]?.table[0]?.price.replace("₽", "") * 130);
                            return <>
                                <Link to={`/key/${params.category}/${item}`} title="Кий Клубный 0-1"><img src="/upload/resize_cache//medialibrary/e70/756_430_1/Кий-Клубный-0-1-Р_01.jpg" class="w756" /></Link>
                                <p>
                                    <Link class="cues" to={`/key/${params.category}/${item}`} title="Кий Клубный 0-1" style={{ marginRight: "15px" }}>{objectKii[item]?.name}</Link>
                                    цена
                                    <b>{objectKii[item]?.table[0]?.price.replace("₽", "") * 130}</b> UZS <Link to={`/key/${params.category}/${item}`} class="button72 btn_buy_in_detail" style={{ adding: "5px 20px", color: "#f7f0dd", textDecoration: "none", marginTop: "10px" }}>Купить</Link>
                                </p></>
                        })
                    }

                </div>

                <KeyNavbar />
            </div>


            <br />
            <Info />
        </div>
    );
}


export default KiiCollection
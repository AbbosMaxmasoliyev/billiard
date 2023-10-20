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
import { useEffect, useState } from 'react';
import axios from 'axios';
import key from "../json/bilyardcollection.json"


function Main() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(key);
    }, []);
    return (
        <div className='container1'>
            <Header />
            <Topmenu />
            <br />
            <div style={{ background: "#f7f0dd" }}>
                <SliderCarousel />
                <BigCarousel />
            </div>

            <br />
            <Info />
        </div>
    );
}

export default Main;

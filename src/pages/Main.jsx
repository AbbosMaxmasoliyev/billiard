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



function Main() {
    return (
        <div className='container1'>
            <Header />
            <Topmenu />
            <br />
            <div className="no-index">

                <BilyardCollection />
                <LeftNavbar />
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

export default Main;

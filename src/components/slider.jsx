import React from 'react'
import Slider from 'react-slick';
const SliderCarousel = () => {

    const data = [
        ["1920х495_столы_в_наличии.jpg",
            "1920х495_-слайдер.jpg",
            "1920х495_шаблон.jpg",
            "турнир_КУБОК_МИРА_1920х495.jpg",
            "1920х495_шаблон.jpg",
            "1920х495_шаблон.jpg",
            "FS_БИЛЬЯРД_1920х495.jpg",
            "1920х495_стало.jpg",
            "1920х495_Прайм_Снукер.jpg",
            "1920х495_бильярд.jpg",
            "1920х495_слайдер.jpg",
            "Victory_-слайдер_1920х495.jpg",
            "PBS_-слайдер_1920х495.jpg",
            "1920х495_-слайдер.jpg",
            "1920х495_Оборудование_Фабрики_Старт_01.jpg",
            "1920х495_шары_Dyna_spheres_ФБС_РК_02.jpg",
            "1920х495_-слайдер_02.jpg",
            "1920х495_Звезды-о-столах-Старт_2022.jpg",
            "2023_Столы_14_чемпионатов_1920х495.jpg",
            "2020_SS_ФБСР_НСК_1920х495.jpg"], [
            "1920х495_столы_в_наличии.jpg",
            "1920х495_-слайдер.jpg",
            "1920х495_шаблон.jpg",
            "турнир_КУБОК_МИРА_1920х495.jpg",
            "1920х495_шаблон.jpg",
            "1920х495_шаблон.jpg",
            "FS_БИЛЬЯРД_1920х495.jpg",
            "1920х495_стало.jpg",
            "1920х495_Прайм_Снукер.jpg",
            "1920х495_бильярд.jpg",
            "1920х495_слайдер.jpg",
            "Victory_-слайдер_1920х495.jpg",
            "PBS_-слайдер_1920х495.jpg",
            "1920х495_-слайдер.jpg",
            "1920х495_Оборудование_Фабрики_Старт_01.jpg",
            "1920х495_шары_Dyna_spheres_ФБС_РК_02.jpg",
            "1920х495_-слайдер_02.jpg",
            "1920х495_Звезды-о-столах-Старт_2022.jpg",
            "2023_Столы_14_чемпионатов_1920х495.jpg",
            "2020_SS_ФБСР_НСК_1920х495.jpg",
            "слайдер_1920х495.jpg",
            "Fusion_-слайдер_1920х495.jpg",
            "Techno_слайдер_1920х495.jpg",
            "1920х495_Бристоль.jpg",
            "1920х495_Прайм.jpg",
            "High-Style-Lux_слайдер_1920х495.jpg",
            "1920х495_Моцарт.jpg",
            "1920х495_Лофт_шпон_стандарт.jpg",
            "1920х495_Лофт_ноче_эко.jpg",
            "1920х495_Охота.jpg"
        ], [
            "1920х495_Интеграция Фабрики Старт START DESIGN_темный лого.png",
            "Vortex_1920х495.jpg",
            "Слайдер_РУССКИЙ_обновление-2023.jpg",
            "1920х495_-слайдер_Зайцев_02.jpg",
            "1920х495_-слайдер_01+ФБС_РК.jpg",
            "Manchester_70_1920х495.jpg",
            "Manchester_60_1920х495.jpg",
            "Слайдер_Якубович.jpg",
            "1920х495-слайдер--Moori.jpg",
            "Слайдер_Рябов.jpg",
            "Manchester_рекомендуем_слайдер_1920х495.jpg"
        ]
    ]

    const settings = {
        dots: true,
        infinite: true,

        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };



    return (
        <div style={{
            height: "450px",
            
            paddingTop: "50px"
        }}>


            <Slider {...settings} asNavFor={false} >
                {
                    data.map((dataItem, index) => (
                        <Slider key={index}
                            dots={false}
                            infinite={true}
                            speed={500}
                            slidesToShow={1}
                            slidesToScroll={1}
                            autoplay={true}
                            autoplaySpeed={1500}
                           className='sliderCarousel'
                        >
                            {dataItem.map((item, index) => {
                                console.log(item);
                                return(
                                    <div key={index} className='inner'>
                                        {/* <p>{item}</p> */}
                                        <img src={process.env.PUBLIC_URL + "/images/" + item} alt="" />
                                    </div>
                                )
                            })}
                        </Slider>
                    ))
                }
            </Slider>
            {/* <ul>
                        <li className="yi-current" style={{ width: 1349 + "px", height: 495 + "px", display: "list-item", left: 0 }}>
                            <a
                                href="https://www.fabrika-start.ru/kupit_stol_dlja_russkogo_biljarda/"
                                style={{ backgroundImage: "url(/upload/medialibrary/b9a/1920х495_столы_в_наличии.jpg)" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/catalog/sect/1073/"
                            style={{ backgroundImage: "url(/upload/medialibrary/fe6/1920х495_-слайдер.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/news/sport/id/49334/"
                            style={{ backgroundImage: "url(/upload/medialibrary/359/1920х495_шаблон.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/news/sport/id/49517/"
                            style={{ backgroundImage: "url(/upload/medialibrary/ade/турнир_КУБОК_МИРА_1920х495.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/news/sport/id/49619/"
                            style={{ backgroundImage: "url(/upload/medialibrary/9bd/1920х495_шаблон.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/news/sport/id/49280/"
                            style={{ backgroundImage: "url(/upload/medialibrary/91f/1920х495_шаблон.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/news/sale/id/49890/"
                            style={{ backgroundImage: "url(/upload/medialibrary/7d9/FS_БИЛЬЯРД_1920х495.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/news/sport/id/46799/"
                            style={{ backgroundImage: "url(/upload/medialibrary/5fe/1920х495_стало.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/news/company/id/46788/"
                            style={{ backgroundImage: "url(/upload/medialibrary/b1e/1920х495_Прайм_Снукер.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/news/company/id/44979/"
                            style={{ backgroundImage: "url(/upload/medialibrary/ba6/1920х495_бильярд.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/news/company/id/49563/"
                            style={{ backgroundImage: "url(/upload/medialibrary/472/1920х495_слайдер.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/catalog/sect/176/good/victory/"
                            style={{ backgroundImage: "url(/upload/medialibrary/bcc/Victory_-слайдер_1920х495.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/news/company/id/46347/"
                            style={{ backgroundImage: "url(/upload/medialibrary/17b/PBS_-слайдер_1920х495.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/catalog/sect/1054/"
                            style={{ backgroundImage: "url(/upload/medialibrary/a59/1920х495_-слайдер.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/news/company/id/45029/"
                            style={{ backgroundImage: "url(/upload/medialibrary/83a/1920х495_Оборудование_Фабрики_Старт_01.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/news/company/id/45055/"
                            style={{ backgroundImage: "url(/upload/medialibrary/2c6/1920х495_шары_Dyna_spheres_ФБС_РК_02.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/news/company/id/44690/"
                            style={{ backgroundImage: "url(/upload/medialibrary/f8a/1920х495_-слайдер_02.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/news/company/id/42836/"
                            style={{ backgroundImage: "url(/upload/medialibrary/ee3/1920х495_Звезды-о-столах-Старт_2022.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/kupit_stol_dlja_russkogo_biljarda/"
                            style={{ backgroundImage: "url(/upload/medialibrary/685/2023_Столы_14_чемпионатов_1920х495.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/news/company/id/44736/"
                            style={{ backgroundImage: "url(/upload/medialibrary/ad3/2020_SS_ФБСР_НСК_1920х495.jpg);" }}></a>
                        </li>
                    </ul>
                    <a href="https://www.fabrika-start.ru/#prev" className="yi-slider-child-prev" style={{ display: "none" }}></a><a
                        href="https://www.fabrika-start.ru/#next" className="yi-slider-child-next" style={{ display: "none" }}></a>
                </div>
                <div className="root" id="yi-root-2"
                    style={{ width: 1349 + "px", height: 495 + "px", position: "absolute", left: 0, top: 0, display: "none" }}>
                    <ul>
                        <li className="yi-current" style={{ width: 1349 + "px", height: 495 + "px", display: "list-item", left: 0 }}><a
                            href="https://www.fabrika-start.ru/catalog/sect/178/good/omega/"
                            style={{ backgroundImage: "url(/upload/medialibrary/4e0/слайдер_1920х495.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/catalog/sect/176/good/fusion/"
                            style={{ backgroundImage: "url(/upload/medialibrary/89d/Fusion_-слайдер_1920х495.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/catalog/sect/1017/good/techno_/"
                            style={{ backgroundImage: "url(/upload/medialibrary/5f0/Techno_слайдер_1920х495.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/catalog/sect/1017/good/bristol/"
                            style={{ backgroundImage: "url(/upload/medialibrary/ce7/1920х495_Бристоль.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/news/company/id/45112/"
                            style={{ backgroundImage: "url(/upload/medialibrary/598/1920х495_Прайм.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/catalog/sect/1017/good/high_style_lux/"
                            style={{ backgroundImage: "url(/upload/medialibrary/94f/High-Style-Lux_слайдер_1920х495.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/catalog/sect/177/good/motsart/"
                            style={{ backgroundImage: "url(/upload/medialibrary/985/1920х495_Моцарт.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/catalog/sect/178/good/loft_standart/"
                            style={{ backgroundImage: "url(/upload/medialibrary/5bb/1920х495_Лофт_шпон_стандарт.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/catalog/sect/178/good/loft/"
                            style={{ backgroundImage: "url(/upload/medialibrary/e6e/1920х495_Лофт_ноче_эко.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/catalog/sect/175/good/okhota_/"
                            style={{ backgroundImage: "url(/upload/medialibrary/a32/1920х495_Охота.jpg);" }}></a>
                        </li>
                    </ul>
                    <a href="https://www.fabrika-start.ru/#prev" className="yi-slider-child-prev" style={{ display: "none" }}></a><a
                        href="https://www.fabrika-start.ru/#next" className="yi-slider-child-next" style={{ display: "none" }}></a>
                </div >
                <div className="root" id="yi-root-3"
                    style={{ width: 1349 + " px", height: 495 + "px", position: "absolute", left: 0, top: 0, display: "block" }} >
                    <ul>
                        <li className="" style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }}><a
                            href="https://start-vip.ru/?roistat_visit=950814"
                            style={{ backgroundImage: "url(./fabrika-start-logo.png)" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/catalog/sect/1061/"
                            style={{ backgroundImage: "url(/upload/medialibrary/a06/Vortex_1920х495.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/catalog/sect/212/"
                            style={{ backgroundImage: "url(/upload/medialibrary/de5/Слайдер_РУССКИЙ_обновление-2023.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/catalog/sect/1018/"
                            style={{ backgroundImage: "url(/upload/medialibrary/318/1920х495_-слайдер_Зайцев_02.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/catalog/sect/1006/"
                            style={{ backgroundImage: "url(/upload/medialibrary/7ea/1920х495_-слайдер_01+ФБС_РК.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/news/company/id/43034/"
                            style={{ backgroundImage: "url(/upload/medialibrary/639/Manchester_70_1920х495.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/news/company/id/43033/"
                            style={{ backgroundImage: "url(/upload/medialibrary/6a6/Manchester_60_1920х495.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/catalog/sect/991/"
                            style={{ backgroundImage: "url(/upload/medialibrary/18c/Слайдер_Якубович.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/news/company/id/43399/"
                            style={{ backgroundImage: "url(/upload/medialibrary/6a6/1920х495-слайдер--Moori.jpg);" }}></a>
                        </li>
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "list-item", left: 0 }} className="yi-current" > <a
                            href="https://www.fabrika-start.ru/catalog/sect/184/"
                            style={{ backgroundImage: "url(/upload/medialibrary/348/Слайдер_Рябов.jpg);" }}></a>
                        </li >
                        <li style={{ width: 1349 + "px", height: 495 + "px", display: "none", left: (-1349) + "px" }} className=""><a
                            href="https://www.fabrika-start.ru/catalog/sect/989/"
                            style={{ backgroundImage: "url(/upload/medialibrary/816/Manchester_рекомендуем_слайдер_1920х495.jpg);" }}></a>
                        </li>
                    </ul >
                    <a href="https://www.fabrika-start.ru/#prev" className="yi-slider-child-prev" style={{ display: "none" }}></a><a
                        href="https://www.fabrika-start.ru/#next" className="yi-slider-child-next" style={{ display: "none" }}></a>
                </div >
                <ul className="yi-slider-root-nav">
                    <li><a href="https://www.fabrika-start.ru/#yi-root-1" className="">1</a></li>
                    <li><a href="https://www.fabrika-start.ru/#yi-root-2">2</a></li>
                    <li><a href="https://www.fabrika-start.ru/#yi-root-3">3</a></li>
                </ul> */}

        </div>
    )
}

export default SliderCarousel
import React, { useEffect, useState } from 'react'
import Header from '../components/heaader'
import Topmenu from '../components/topmenu'
import BilyardCollection from '../components/bilyardCollection'
import bilyardCollectionData from "../json/bilyardcollection.json"
import bilyardKeyData from "../json/key.json"
import bilyardStolData from "../json/stol.json"
import bilyardZerkaloData from "../json/zerkalo.json"
import LeftNavbar from '../components/leftNavbar'
import Info from '../components/info'
import { useNavigate } from 'react-router-dom'


function classification(unClassificationData, objectName) {
    let classificationObject = {}
    unClassificationData.forEach(stolItem => {
        let stolItemName = Object.keys(stolItem)[0]
        if (stolItem[stolItemName]["name"].includes(objectName)) {
            classificationObject = stolItem[stolItemName]
        }
    })
    return classificationObject
}



const BilliardCollectionMain = () => {
    const navigate = useNavigate()

    const [bilyardCollectionDataState, setBilyardCollectionDataState] = useState([])
    const collectionData = [bilyardStolData, bilyardZerkaloData]

    useEffect(() => {

        const data = {

        }

        bilyardCollectionData.map(item => {
            let itemName = Object.keys(item)[0]

            let objectName = item[itemName]["name"]
            console.log(bilyardStolData);
            collectionData.forEach(item => {
                let classData = classification(item, objectName)
                console.log(classData);
                setBilyardCollectionDataState(prev => [...prev, classData])
            });


            data[itemName] = item[itemName]
            return item[itemName]["name"]
        });

        console.log(bilyardCollectionDataState);
    }, [])
    // console.log(bilyardCollectionDataState);
    // console.log(bilyardKeyData);
    // console.log(bilyardStolData);
    // console.log(bilyardZerkaloData);
    return (
        <div className='container1' style={{
            background: "#f7f0dd"
        }}>
            <Header />
            <Topmenu />
            <br />
            <div className="no-index">

                <div class="wrap-content-left">
                    <div class="with-breadcrumbs" style={{
                        position: "relative", border: "1px solid red", boxSizing: "border-box"
                    }}>


                        <div class="bx-breadcrumb" >
                            <div class="bx-breadcrumb-item" id="bx_breadcrumb_0" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" itemref="bx_breadcrumb_1">

                                <a href="https://www.fabrika-start.ru/" title="Главная" itemprop="url">
                                    <span itemprop="title">Главная</span>
                                </a>
                            </div>
                            <div class="bx-breadcrumb-item" id="bx_breadcrumb_1" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" itemprop="child" itemref="bx_breadcrumb_2">
                                <i class="fa fa-angle-right"></i>
                                <a href="https://www.fabrika-start.ru/catalog/" title="Каталог товаров" itemprop="url">
                                    <span itemprop="title">Каталог товаров</span>
                                </a>
                            </div>
                            <div class="bx-breadcrumb-item" id="bx_breadcrumb_2" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" itemprop="child">
                                <i class="fa fa-angle-right"></i>
                                <a href="https://www.fabrika-start.ru/catalog/sect/854/" title="Бильярд" itemprop="url">
                                    <span itemprop="title">Бильярд</span>
                                </a>
                            </div>
                            <div class="bx-breadcrumb-item">
                                <i class="fa fa-angle-right"></i>
                                <span>Бильярдные коллекции</span>
                            </div><div style={{ clear: "both" }}></div></div>


                        <h1 class="float-right width772">Бильярдные коллекции</h1>


                        <div style={{ backgroundImage: "url(/images/banner_start_design_hunting.jpg)", width: "800px", height: "206px", marginTop: "50px", position: "relative;" }}>
                            <a href="https://start-vip.ru/?roistat_visit=1000397" target="_blank" style={{ border: "1px solid #C3A263", backgroundColor: "#C3A263", color: "#fff", textDecoration: "none", padding: "10px 20px", position: "absolute", bottom: "30px", left: "40px" }}>Подробнее</a>
                        </div>

                        <br />
                        <a style={{ float: "right", width: "150px", textAlign: "center", padding: "5px" }} class="button72" target="_blank" href="https://www.fabrika-start.ru/catgen/print.php?id=175">Распечатать каталог</a>




                        <div class="table_sizes_wrapper">
                            <div class="table_sizes">
                                <div>
                                    <a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-5-futov/"><img src="https://www.fabrika-start.ru/upload/sizes/5fn.png" /><br /> 5 футов</a></div>


                                <div><a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-6-futov/"><img src="https://www.fabrika-start.ru/upload/sizes/6fn.png" /><br /> 6 футов</a></div>

                                <div><a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-7-futov/"><img src="https://www.fabrika-start.ru/upload/sizes/7fn.png" /><br /> 7 футов</a></div>

                                <div><a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-8-futov/"><img src="https://www.fabrika-start.ru/upload/sizes/8fn.png" /><br /> 8 футов</a></div>


                                <div><a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-9-futov/"><img src="https://www.fabrika-start.ru/upload/sizes/9fn.png" /><br /> 9 футов</a></div>

                                <div><a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-10-futov/"><img src="https://www.fabrika-start.ru/upload/sizes/10fn.png" /><br /> 10 футов</a></div>

                                <div><a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-11-futov/"><img src="https://www.fabrika-start.ru/upload/sizes/11fn.png" /><br /> 11 футов</a></div>


                                <div><a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-12-futov/"><img src="https://www.fabrika-start.ru/upload/sizes/12fn.png" /><br /> 12 футов</a></div>

                            </div>
                        </div>

                        <ul class="pricefordownload float-right width772">
                            <li style={{ lineHeight: "14px!important", width: "300px" }}>
                                <a style={{ lineHeight: "14px!important" }} href="https://www.fabrika-start.ru/upload/iblock/f11/%D0%A0%D0%BE%D0%B7%D0%BD.%D0%9A%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D0%B8_21_08_2023.xls" target="_blank" class="excel">Скачать прайс-лист на бильярдные коллекции</a>
                            </li>

                            <li style={{ float: "right" }}>

                                <div style={{ width: "500px", marginTop: "-15px", marginRight: "-50px;" }}>
                                    <div style={{ transform: "scale(0.7)" }} class="marquiz__container"><a class="marquiz__button marquiz__button_blicked marquiz__button_rounded" href="#popup:marquiz_6144394c8d3d22003f7e60ce" data-version="2">Подобрать идеальный стол по вашим параметрам</a></div>
                                </div></li>
                            <li style={{ width: "100%", marginTop: "20px" }}><center><img src="/images/fbs_rk2.png" /><center></center></center></li>
                        </ul>

                        <div class="main float-right width772 pos-relative center-right collection_list">
                            <span class="h3">
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_renessans_gold/">Ренессанс Голд</a>
                            </span>
                            <a onClick={(event) => {
                                event.preventDefault()
                                let link = event.target.href.split("good")[1]

                                navigate(`/bilyardCollection${link}`)
                            }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_renessans_gold/" title="Ренессанс Голд"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/105/371_Interior-Renaissance-Gold.jpg');" }}></div></a>
                            <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/renessans_gold/" title="Ренессанс Голд"><img src="/upload/resize_cache//medialibrary/625/500_72_1/1.png" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/renessans_gold/" title="Ренессанс Голд">Ренессанс Голд</a>
                                            <br />
                                            Цена от                                <b>1 331 200</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_renessans_gold/" title="Диван «Ренессанс Голд»"><img src="/upload/resize_cache//medialibrary/339/500_72_1/Ренессанс-Голд_диван_01.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_renessans_gold/" title="Диван «Ренессанс Голд»">Диван «Ренессанс Голд»</a>
                                            <br />
                                            Цена:                                <b>321 860</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/lamp_renessans_gold/" title="«Ренессанс Голд»"><img src="/upload/resize_cache//medialibrary/c41/500_72_1/01_Lamp-Renaissance-Gilt.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/lamp_renessans_gold/" title="«Ренессанс Голд»">«Ренессанс Голд»</a>
                                            <br />
                                            Цена:                                <b>230 830</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kabinet_renessans_gold/" title="Кабинет «Ренессанс Голд»"><img src="/upload/resize_cache//medialibrary/483/500_72_1/Renaissance-Gilt_кабинет.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kabinet_renessans_gold/" title="Кабинет «Ренессанс Голд»">Кабинет «Ренессанс Голд»</a>
                                            <br />
                                            Цена:                                <b>227 370</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr-1-renessans_gold/" title="КР «Ренессанс Голд»"><img src="/upload/resize_cache//medialibrary/395/500_72_1/Киевница «Ренессанс Голд».jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr-1-renessans_gold/" title="КР «Ренессанс Голд»">КР «Ренессанс Голд»</a>
                                            <br />
                                            Цена:                                <b>225 560</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_renessans_gold/" title="Кресло «Ренессанс Голд»"><img src="/upload/resize_cache//medialibrary/e27/500_72_1/Ренессанс-Голд_кресло.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_renessans_gold/" title="Кресло «Ренессанс Голд»">Кресло «Ренессанс Голд»</a>
                                            <br />
                                            Цена:                                <b>202 400</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/k-12-renessans_gold/" title="К-12 «Ренессанс Голд»"><img src="/upload/resize_cache//medialibrary/bd3/500_72_1/bd304c492fcf72fbe16efb126e31560d.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/k-12-renessans_gold/" title="К-12 «Ренессанс Голд»">К-12 «Ренессанс Голд»</a>
                                            <br />
                                            Цена:                                <b>179 590</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/table_renessans_gold/" title="«Ренессанс Голд»"><img src="/upload/resize_cache//medialibrary/5f5/500_72_1/Table-Renaissance-gold_1022.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/table_renessans_gold/" title="«Ренессанс Голд»">«Ренессанс Голд»</a>
                                            <br />
                                            Цена:                                <b>137 030</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_renessans_gold/" title="Стул «Ренессанс Голд»"><img src="/upload/resize_cache//medialibrary/3c1/500_72_1/Ренессанс_голд_стул.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_renessans_gold/" title="Стул «Ренессанс Голд»">Стул «Ренессанс Голд»</a>
                                            <br />
                                            Цена:                                <b>121 730</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_renessans_gold/" title="Полка «Ренессанс Голд»"><img src="/upload/resize_cache//medialibrary/b73/500_72_1/b73c5bfdde84cb6bf82489d83f8a1535.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_renessans_gold/" title="Полка «Ренессанс Голд»">Полка «Ренессанс Голд»</a>
                                            <br />
                                            Цена:                                <b>105 570</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/280/good/tumba_renessans_gold/" title="Тумба «Ренессанс Голд»"><img src="/upload/resize_cache//medialibrary/540/500_72_1/Ренессанс_Голд_тумба_01.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/280/good/tumba_renessans_gold/" title="Тумба «Ренессанс Голд»">Тумба «Ренессанс Голд»</a>
                                            <br />
                                            Цена:                                <b>103 350</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_renessans_gold_azhurnoe/" title="«Ренессанс Голд» ажурное"><img src="/upload/resize_cache//medialibrary/d1c/500_72_1/d1cdadedd91c8822ac3a48d8aab55fb2.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_renessans_gold_azhurnoe/" title="«Ренессанс Голд» ажурное">«Ренессанс Голд» ажурное</a>
                                            <br />
                                            Цена:                                <b>90 530</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_renessans_gold_/" title="«Ренессанс Голд» "><img src="/upload/resize_cache//medialibrary/f11/500_72_1/Зеркало_Ренессанс_голд.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_renessans_gold_/" title="«Ренессанс Голд» ">«Ренессанс Голд» </a>
                                            <br />
                                            Цена:                                <b>90 530</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_renessans_gold/" title="«Ренессанс Голд»"><img src="/upload/resize_cache//medialibrary/ae4/500_72_1/Рама_Ренессанс_голд.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_renessans_gold/" title="«Ренессанс Голд»">«Ренессанс Голд»</a>
                                            <br />
                                            Цена:                                <b>61 360</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/220/good/chasy_renessans_gold/" title="Часы &quot;Ренессанс Голд&quot;"><img src="/upload/resize_cache//medialibrary/40b/500_72_1/Ренессанс_Голд_часы.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/220/good/chasy_renessans_gold/" title="Часы &quot;Ренессанс Голд&quot;">Часы "Ренессанс Голд"</a>
                                            <br />
                                            Цена:                                <b>28 430</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_renessans_gold/" title="Бра «Ренессанс Голд»"><img src="/upload/resize_cache//medialibrary/00a/500_72_1/Ренессанс_голд_new.png" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_renessans_gold/" title="Бра «Ренессанс Голд»">Бра «Ренессанс Голд»</a>
                                            <br />
                                            Цена:                                <b>18 300</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_renessans_gold/" title="Настольный светильник «Ренессанс Голд»"><img src="/upload/resize_cache//medialibrary/388/500_72_1/Ренессанс_голд.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_renessans_gold/" title="Настольный светильник «Ренессанс Голд»">Настольный светильник «Ренессанс Голд»</a>
                                            <br />
                                            Цена:                                <b>14 120</b> руб.
                                        </p></li>
                                </ul></div>
                                    <div class="jspVerticalBar">
                                        <div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "55px", top: "0px;" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>


                            <div class="main float-right width772 pos-relative center-right collection_list">
                                <span class="h3">
                                    <a onClick={(event) => {
                                        event.preventDefault()
                                        let link = event.target.href.split("good")[1]

                                        navigate(`/bilyardCollection${link}`)
                                    }} href="https://www.fabrika-start.ru/catalog/sect/175/good/renessans_granzh/">Ренессанс Гранж</a>
                                </span>
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/renessans_granzh/" title="Ренессанс Гранж"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/6d8/371%D0%A0%D0%B5%D0%BD%D0%B5%D1%81%D1%81%D0%B0%D0%BD%D1%81_%D0%B3%D1%80%D0%B0%D0%BD%D0%B6_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80.jpg');" }}></div></a>
                                <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                    <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/renessans_granzh_/" title="Ренессанс Гранж "><img src="/upload/resize_cache//medialibrary/301/500_72_1/2000Ренессанс_гранж_стол.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/renessans_granzh_/" title="Ренессанс Гранж ">Ренессанс Гранж </a>
                                                <br />
                                                Цена от                                <b>1 467 100</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_renessans_granzh/" title="Диван «Ренессанс Гранж»"><img src="/upload/resize_cache//medialibrary/f35/500_72_1/Ренессанс-Гранж_диван_01.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_renessans_granzh/" title="Диван «Ренессанс Гранж»">Диван «Ренессанс Гранж»</a>
                                                <br />
                                                Цена:                                <b>319 200</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_renessans_granzh_kr_1/" title="КР «Ренессанс Гранж»"><img src="/upload/resize_cache//medialibrary/0a2/500_72_1/1200Ренессанс_гранж_киевница.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_renessans_granzh_kr_1/" title="КР «Ренессанс Гранж»">КР «Ренессанс Гранж»</a>
                                                <br />
                                                Цена:                                <b>238 640</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_renessans_granzh/" title="«Ренессанс Гранж»"><img src="/upload/resize_cache//medialibrary/e53/500_72_1/02_Lamp-Renaissance-Grunj.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_renessans_granzh/" title="«Ренессанс Гранж»">«Ренессанс Гранж»</a>
                                                <br />
                                                Цена:                                <b>231 380</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_renessans_granzh/" title="Кресло «Ренессанс Гранж»"><img src="/upload/resize_cache//medialibrary/a36/500_72_1/Ренессанс-Гранж_кресло.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_renessans_granzh/" title="Кресло «Ренессанс Гранж»">Кресло «Ренессанс Гранж»</a>
                                                <br />
                                                Цена:                                <b>202 400</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_nastennaya_renessans_granzh_k_12/" title="К-12 «Ренессанс Гранж»"><img src="/upload/resize_cache//medialibrary/edc/500_72_1/Renaissance-Grunj-kievnica-2.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_nastennaya_renessans_granzh_k_12/" title="К-12 «Ренессанс Гранж»">К-12 «Ренессанс Гранж»</a>
                                                <br />
                                                Цена:                                <b>182 190</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/stolik_renessans_granzh/" title="«Ренессанс Гранж»"><img src="/upload/resize_cache//medialibrary/a22/500_72_1/Table-Renaissance-Grunj_1022.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/stolik_renessans_granzh/" title="«Ренессанс Гранж»">«Ренессанс Гранж»</a>
                                                <br />
                                                Цена:                                <b>139 610</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_renessans_granzh/" title="Стул «Ренессанс Гранж»"><img src="/upload/resize_cache//medialibrary/2df/500_72_1/Стул_Ренессанс_гранж.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_renessans_granzh/" title="Стул «Ренессанс Гранж»">Стул «Ренессанс Гранж»</a>
                                                <br />
                                                Цена:                                <b>127 520</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_renessans_granzh/" title="Полка «Ренессанс Гранж»"><img src="/upload/resize_cache//medialibrary/558/500_72_1/1200_Shelf-Renaissance-Grunj.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_renessans_granzh/" title="Полка «Ренессанс Гранж»">Полка «Ренессанс Гранж»</a>
                                                <br />
                                                Цена:                                <b>112 000</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_renessans_granzh_azhurnoe/" title="«Ренессанс Гранж» ажурное"><img src="/upload/resize_cache//medialibrary/115/500_72_1/980_Mirror-Renaissanse-Grunj.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_renessans_granzh_azhurnoe/" title="«Ренессанс Гранж» ажурное">«Ренессанс Гранж» ажурное</a>
                                                <br />
                                                Цена:                                <b>93 750</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_renessans_granzh_/" title="«Ренессанс Гранж» "><img src="/upload/resize_cache//medialibrary/359/500_72_1/Зеркало_Ренессанс_гранж.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_renessans_granzh_/" title="«Ренессанс Гранж» ">«Ренессанс Гранж» </a>
                                                <br />
                                                Цена:                                <b>93 750</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_renessans_granzh/" title="«Ренессанс Гранж»"><img src="/upload/resize_cache//medialibrary/11d/500_72_1/Рама-под-картину-«Ренессанс-Гранж».jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_renessans_granzh/" title="«Ренессанс Гранж»">«Ренессанс Гранж»</a>
                                                <br />
                                                Цена:                                <b>65 030</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_renessans_granzh/" title="Бра «Ренессанс Гранж»"><img src="/upload/resize_cache//medialibrary/3cd/500_72_1/Ренессанс_гранж_new.png" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_renessans_granzh/" title="Бра «Ренессанс Гранж»">Бра «Ренессанс Гранж»</a>
                                                <br />
                                                Цена:                                <b>18 300</b> руб.
                                            </p></li>
                                    </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "72px" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                            </div>
                            <div class="main float-right width772 pos-relative center-right collection_list">
                                <span class="h3">
                                    <a onClick={(event) => {
                                        event.preventDefault()
                                        let link = event.target.href.split("good")[1]

                                        navigate(`/bilyardCollection${link}`)
                                    }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_renessans/">Ренессанс</a>
                                </span>
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_renessans/" title="Ренессанс"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/7f4/Interior-Renaissance.jpg');" }}></div></a>
                                <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                    <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/renessans/" title="Ренессанс"><img src="/upload/resize_cache//medialibrary/c61/500_72_1/2000_Tb-Renaissance-Patina.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/renessans/" title="Ренессанс">Ренессанс</a>
                                                <br />
                                                Цена от                                <b>1 280 490</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_renessans/" title="Диван «Ренессанс»"><img src="/upload/resize_cache//medialibrary/ce1/500_72_1/Диван_Ренессанс_01.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_renessans/" title="Диван «Ренессанс»">Диван «Ренессанс»</a>
                                                <br />
                                                Цена:                                <b>293 920</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kabinet_renessans/" title="Кабинет «Ренессанс»"><img src="/upload/resize_cache//medialibrary/3b5/500_72_1/Renaissance_кабинет.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kabinet_renessans/" title="Кабинет «Ренессанс»">Кабинет «Ренессанс»</a>
                                                <br />
                                                Цена:                                <b>238 810</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_renessans/" title="Кресло «Ренессанс»"><img src="/upload/resize_cache//medialibrary/8cd/500_72_1/Кресло_Ренессанс.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_renessans/" title="Кресло «Ренессанс»">Кресло «Ренессанс»</a>
                                                <br />
                                                Цена:                                <b>193 190</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr-1-renessans/" title="КР «Ренессанс»"><img src="/upload/resize_cache//medialibrary/f83/500_72_1/Киевница «Ренессанс».jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr-1-renessans/" title="КР «Ренессанс»">КР «Ренессанс»</a>
                                                <br />
                                                Цена:                                <b>192 480</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_renessans/" title="«Ренессанс»"><img src="/upload/resize_cache//medialibrary/0d5/500_72_1/01_Lamp-Renaissance.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_renessans/" title="«Ренессанс»">«Ренессанс»</a>
                                                <br />
                                                Цена:                                <b>152 460</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/k-12-renessans/" title="К-12 «Ренессанс»"><img src="/upload/resize_cache//medialibrary/03e/500_72_1/824_kievnica_Renaissance-patina.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/k-12-renessans/" title="К-12 «Ренессанс»">К-12 «Ренессанс»</a>
                                                <br />
                                                Цена:                                <b>142 820</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/table_renessans/" title="«Ренессанс»"><img src="/upload/resize_cache//medialibrary/b63/500_72_1/Table-Renaissance-patina_1200.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/table_renessans/" title="«Ренессанс»">«Ренессанс»</a>
                                                <br />
                                                Цена:                                <b>118 820</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_renessans/" title="Стул «Ренессанс»"><img src="/upload/resize_cache//medialibrary/a51/500_72_1/Стул_Ренессанс.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_renessans/" title="Стул «Ренессанс»">Стул «Ренессанс»</a>
                                                <br />
                                                Цена:                                <b>96 480</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_renessans/" title="Полка «Ренессанс»"><img src="/upload/resize_cache//medialibrary/957/500_72_1/1200_Shelf-Renaissance.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_renessans/" title="Полка «Ренессанс»">Полка «Ренессанс»</a>
                                                <br />
                                                Цена:                                <b>92 530</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_renessans_azhurnoe/" title="«Ренессанс» ажурное"><img src="/upload/resize_cache//medialibrary/ade/500_72_1/2000_Mirror-Renaissanse-Patina.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_renessans_azhurnoe/" title="«Ренессанс» ажурное">«Ренессанс» ажурное</a>
                                                <br />
                                                Цена:                                <b>71 290</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_renessans/" title="Торшер «Ренессанс»"><img src="/upload/resize_cache//medialibrary/3ea/500_72_1/Император.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_renessans/" title="Торшер «Ренессанс»">Торшер «Ренессанс»</a>
                                                <br />
                                                Цена:                                <b>36 620</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_renessans/" title="Бра «Ренессанс»"><img src="/upload/resize_cache//medialibrary/720/500_72_1/Император_new.png" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_renessans/" title="Бра «Ренессанс»">Бра «Ренессанс»</a>
                                                <br />
                                                Цена:                                <b>18 300</b> руб.
                                            </p></li>
                                    </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "72px" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                            </div>
                            <div class="main float-right width772 pos-relative center-right collection_list">
                                <span class="h3">
                                    <a onClick={(event) => {
                                        event.preventDefault()
                                        let link = event.target.href.split("good")[1]

                                        navigate(`/bilyardCollection${link}`)
                                    }} href="https://www.fabrika-start.ru/catalog/sect/175/good/leo/">Лео</a>
                                </span>
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/leo/" title="Лео"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/108/Interior-Leo.jpg');" }}></div></a>
                                <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                    <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/278/good/modul_dlya_tv_leo1/" title="для TV «Лео»"><img src="/upload/resize_cache//medialibrary/8a8/500_72_1/02_Лео_модуль.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/278/good/modul_dlya_tv_leo1/" title="для TV «Лео»">для TV «Лео»</a>
                                                <br />
                                                Цена:                                <b>129 000</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/bilyardnyy_stol_leo/" title="Лео"><img src="/upload/resize_cache//medialibrary/196/500_72_1/Бильярдный стол Лео.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/bilyardnyy_stol_leo/" title="Лео">Лео</a>
                                                <br />
                                                Цена от                                <b>1 282 790</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_leo1/" title="Диван «Лео»"><img src="/upload/resize_cache//medialibrary/e22/500_72_1/01_Лео_диван-Мал.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_leo1/" title="Диван «Лео»">Диван «Лео»</a>
                                                <br />
                                                Цена:                                <b>316 880</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/barnyy_stolik_leo/" title="«Лео» барный"><img src="/upload/resize_cache//medialibrary/835/500_72_1/Столик_барный_Лео_01.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/barnyy_stolik_leo/" title="«Лео» барный">«Лео» барный</a>
                                                <br />
                                                Цена:                                <b>168 180</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/280/good/tumba_leo/" title="Тумба «Лео»"><img src="/upload/resize_cache//medialibrary/df6/500_72_1/Тумба_Лео_01.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/280/good/tumba_leo/" title="Тумба «Лео»">Тумба «Лео»</a>
                                                <br />
                                                Цена:                                <b>153 240</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_leo/" title="«Лео» напольная"><img src="/upload/resize_cache//medialibrary/87a/500_72_1/Лео.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_leo/" title="«Лео» напольная">«Лео» напольная</a>
                                                <br />
                                                Цена:                                <b>152 310</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_leo1/" title="Кресло «Лео»"><img src="/upload/resize_cache//medialibrary/654/500_72_1/Кресло_Лео.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_leo1/" title="Кресло «Лео»">Кресло «Лео»</a>
                                                <br />
                                                Цена:                                <b>146 800</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_leo_ii1/" title="«Лео»"><img src="/upload/resize_cache//medialibrary/382/500_72_1/Лео_лампа_01.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_leo_ii1/" title="«Лео»">«Лео»</a>
                                                <br />
                                                Цена:                                <b>123 590</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/stolik_leo/" title="«Лео»"><img src="/upload/resize_cache//medialibrary/d3f/500_72_1/Столик_Лео.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/stolik_leo/" title="«Лео»">«Лео»</a>
                                                <br />
                                                Цена:                                <b>112 890</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/puf_leo/" title="Пуф «Лео»"><img src="/upload/resize_cache//medialibrary/3fe/500_72_1/Пуф_Лео.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/puf_leo/" title="Пуф «Лео»">Пуф «Лео»</a>
                                                <br />
                                                Цена:                                <b>61 410</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_leo/" title="«Лео»"><img src="/upload/resize_cache//medialibrary/9c7/500_72_1/Зеркало Лео.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_leo/" title="«Лео»">«Лео»</a>
                                                <br />
                                                Цена:                                <b>52 140</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_leo_k_2/" title="К-2 «Лео»"><img src="/upload/resize_cache//medialibrary/f2d/500_72_1/Киевница_K_2_Лео.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_leo_k_2/" title="К-2 «Лео»">К-2 «Лео»</a>
                                                <br />
                                                Цена:                                <b>43 030</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_leo/" title="Торшер «Лео»"><img src="/upload/resize_cache//medialibrary/437/500_72_1/Лео.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_leo/" title="Торшер «Лео»">Торшер «Лео»</a>
                                                <br />
                                                Цена:                                <b>36 620</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_leo/" title="Бра «Лео»"><img src="/upload/resize_cache//medialibrary/2a4/500_72_1/Лео_new.png" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_leo/" title="Бра «Лео»">Бра «Лео»</a>
                                                <br />
                                                Цена:                                <b>18 300</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_leo/" title="Настольный светильник «Лео»"><img src="/upload/resize_cache//medialibrary/539/500_72_1/Лео.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_leo/" title="Настольный светильник «Лео»">Настольный светильник «Лео»</a>
                                                <br />
                                                Цена:                                <b>14 120</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_leo/" title="Стул «Лео»"><img src="/upload/resize_cache//medialibrary/bbc/500_72_1/Лео_стул.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_leo/" title="Стул «Лео»">Стул «Лео»</a>
                                            </p></li>
                                    </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "62px" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                            </div>
                            <div class="main float-right width772 pos-relative center-right collection_list">
                                <span class="h3">
                                    <a onClick={(event) => {
                                        event.preventDefault()
                                        let link = event.target.href.split("good")[1]

                                        navigate(`/bilyardCollection${link}`)
                                    }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_leo_ii/">Лео II</a>
                                </span>
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_leo_ii/" title="Лео II"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/38c/Interior-Leo%20II.jpg');" }}></div></a>
                                <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                    <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/leo_ii/" title="Лео II"><img src="/upload/resize_cache//medialibrary/18c/500_72_1/2000_Бильярдный стол ЛеоII.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/leo_ii/" title="Лео II">Лео II</a>
                                                <br />
                                                Цена от                                <b>1 282 790</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_leo_ii/" title="Диван «Лео II»"><img src="/upload/resize_cache//medialibrary/968/500_72_1/01_Лео_диван.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_leo_ii/" title="Диван «Лео II»">Диван «Лео II»</a>
                                                <br />
                                                Цена:                                <b>316 880</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_leo_ii/" title="«Лео II»"><img src="/upload/resize_cache//medialibrary/ee2/500_72_1/02_Lamp-Leo-II.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_leo_ii/" title="«Лео II»">«Лео II»</a>
                                                <br />
                                                Цена:                                <b>249 630</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/leo_ii_evolution/" title="«Лео II»"><img src="/upload/resize_cache//medialibrary/810/500_72_1/Лео_лампа_01.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/leo_ii_evolution/" title="«Лео II»">«Лео II»</a>
                                                <br />
                                                Цена:                                <b>249 630</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_leo_ii/" title="«Лео II» напольная"><img src="/upload/resize_cache//medialibrary/64f/500_72_1/716_Киевница Лео II.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_leo_ii/" title="«Лео II» напольная">«Лео II» напольная</a>
                                                <br />
                                                Цена:                                <b>246 460</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/barnyy_stolik_leo_ii/" title="«Лео II» барный"><img src="/upload/resize_cache//medialibrary/22c/500_72_1/Столик_барный_ЛеоII_01.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/barnyy_stolik_leo_ii/" title="«Лео II» барный">«Лео II» барный</a>
                                                <br />
                                                Цена:                                <b>214 510</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_leo_ii1/" title="Кресло «Лео II»"><img src="/upload/resize_cache//medialibrary/938/500_72_1/Кресло_ЛеоII.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_leo_ii1/" title="Кресло «Лео II»">Кресло «Лео II»</a>
                                                <br />
                                                Цена:                                <b>213 200</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/stolik_leo_ii/" title="«Лео II»"><img src="/upload/resize_cache//medialibrary/0fb/500_72_1/2000_столик_Leo-II.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/stolik_leo_ii/" title="«Лео II»">«Лео II»</a>
                                                <br />
                                                Цена:                                <b>173 580</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/280/good/tumba_leo_ii/" title="Тумба «Лео II»"><img src="/upload/resize_cache//medialibrary/46f/500_72_1/Тумба_ЛеоII_01.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/280/good/tumba_leo_ii/" title="Тумба «Лео II»">Тумба «Лео II»</a>
                                                <br />
                                                Цена:                                <b>161 210</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/puf_leo_ii/" title="Пуф «Лео II»"><img src="/upload/resize_cache//medialibrary/65e/500_72_1/Пуф_ЛеоII.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/puf_leo_ii/" title="Пуф «Лео II»">Пуф «Лео II»</a>
                                                <br />
                                                Цена:                                <b>83 950</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_leo_ii/" title="«Лео II»"><img src="/upload/resize_cache//medialibrary/e2f/500_72_1/1000_зеркало_Leo II.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_leo_ii/" title="«Лео II»">«Лео II»</a>
                                                <br />
                                                Цена:                                <b>69 950</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_leo_ii_k_2/" title="К-2 «Лео II»"><img src="/upload/resize_cache//medialibrary/0c3/500_72_1/Лео 2.png" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_leo_ii_k_2/" title="К-2 «Лео II»">К-2 «Лео II»</a>
                                                <br />
                                                Цена:                                <b>63 100</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_leo_ii/" title="Торшер «Лео II»"><img src="/upload/resize_cache//medialibrary/ae7/500_72_1/Лео_II.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_leo_ii/" title="Торшер «Лео II»">Торшер «Лео II»</a>
                                                <br />
                                                Цена:                                <b>36 620</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_leo_ii/" title="Бра «Лео II»"><img src="/upload/resize_cache//medialibrary/e58/500_72_1/Лео_II_new.png" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_leo_ii/" title="Бра «Лео II»">Бра «Лео II»</a>
                                                <br />
                                                Цена:                                <b>18 300</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_leo_ii/" title="Настольный светильник «Лео II»"><img src="/upload/resize_cache//medialibrary/7f8/500_72_1/Лео_II.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_leo_ii/" title="Настольный светильник «Лео II»">Настольный светильник «Лео II»</a>
                                                <br />
                                                Цена:                                <b>14 750</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/278/good/modul_dlya_tv_leo_ii1/" title="для TV «Лео II»"><img src="/upload/resize_cache//medialibrary/8f4/500_72_1/02_Лео_модуль.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/278/good/modul_dlya_tv_leo_ii1/" title="для TV «Лео II»">для TV «Лео II»</a>
                                                <br />
                                                Цена:                                <b>129 000</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_leo_ll/" title="Стул «Лео ll»"><img src="/upload/resize_cache//medialibrary/bbc/500_72_1/Лео_стул.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_leo_ll/" title="Стул «Лео ll»">Стул «Лео ll»</a>
                                            </p></li>
                                    </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "56px" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                            </div>
                            <div class="main float-right width772 pos-relative center-right collection_list">
                                <span class="h3">
                                    <a onClick={(event) => {
                                        event.preventDefault()
                                        let link = event.target.href.split("good")[1]

                                        navigate(`/bilyardCollection${link}`)
                                    }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kolekciya_grossmeyster/">Гроссмейстер</a>
                                    <span class="label">Новинка</span>            </span>
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kolekciya_grossmeyster/" title="Гроссмейстер"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/a8d/%D0%93%D1%80%D0%BE%D1%81%D1%81%D0%BC%D0%B5%D0%B9%D1%81%D1%82%D0%B5%D1%80%20%282%29.png');" }}></div></a>
                                <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                    <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/grossmeyster/" title="Гроссмейстер"><img src="/upload/resize_cache//medialibrary/a5c/500_72_1/2022_Tb_Queen_01_01.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/grossmeyster/" title="Гроссмейстер">Гроссмейстер</a>
                                                <br />
                                                Цена от                                <b>1 012 570</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/grossmeyster_/" title="«Гроссмейстер» "><img src="/upload/resize_cache//medialibrary/d4c/500_72_1/CueRack_Queen_03.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/grossmeyster_/" title="«Гроссмейстер» ">«Гроссмейстер» </a>
                                                <br />
                                                Цена:                                <b>218 400</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/745/good/svetilnik_grossmeyster/" title="«Гроссмейстер»"><img src="/upload/resize_cache//medialibrary/1f6/500_72_1/Evolution_Grandmaster_01.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/745/good/svetilnik_grossmeyster/" title="«Гроссмейстер»">«Гроссмейстер»</a>
                                                <br />
                                                Цена:                                <b>73 960</b> руб.
                                            </p></li>
                                    </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "251px" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                            </div>
                            <div class="main float-right width772 pos-relative center-right collection_list">
                                <span class="h3">
                                    <a onClick={(event) => {
                                        event.preventDefault()
                                        let link = event.target.href.split("good")[1]

                                        navigate(`/bilyardCollection${link}`)
                                    }} href="https://www.fabrika-start.ru/catalog/sect/175/good/motsart_collection/">Моцарт</a>
                                    <span class="label">Новинка</span>            </span>
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/motsart_collection/" title="Моцарт"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/9f4/Tb_Mozart.jpg');" }}></div></a>
                                <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                    <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/motsart/" title="Моцарт"><img src="/upload/resize_cache//medialibrary/ce2/500_72_1/2021_Tb_Mozart_01.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/motsart/" title="Моцарт">Моцарт</a>
                                                <br />
                                                Цена от                                <b>1 820 000</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr_motsart/" title="«Моцарт»"><img src="/upload/resize_cache//medialibrary/aa1/500_72_1/CueRack_Mozart_02.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr_motsart/" title="«Моцарт»">«Моцарт»</a>
                                                <br />
                                                Цена:                                <b>249 290</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/motsart_/" title="«Моцарт»"><img src="/upload/resize_cache//medialibrary/c72/500_72_1/Lamp_Mozart_01_white.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/motsart_/" title="«Моцарт»">«Моцарт»</a>
                                                <br />
                                                Цена:                                <b>75 780</b> руб.
                                            </p></li>
                                    </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "258px" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                            </div>
                            <div class="main float-right width772 pos-relative center-right collection_list">
                                <span class="h3">
                                    <a onClick={(event) => {
                                        event.preventDefault()
                                        let link = event.target.href.split("good")[1]

                                        navigate(`/bilyardCollection${link}`)
                                    }} href="https://www.fabrika-start.ru/catalog/sect/175/good/okhota_/">Охота</a>
                                    <span class="label">Новинка</span>            </span>
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/okhota_/" title="Охота"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/692/Tb_Ohota.jpg');" }}></div></a>
                                <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                    <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/okhota/" title="Охота"><img src="/upload/resize_cache//medialibrary/7dc/500_72_1/2021_Tb_Ohota_01.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/okhota/" title="Охота">Охота</a>
                                                <br />
                                                Цена от                                <b>948 390</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/k_21_okhota/" title="«Охота» "><img src="/upload/resize_cache//medialibrary/d8a/500_72_1/CueRack_Ohota_02.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/k_21_okhota/" title="«Охота» ">«Охота» </a>
                                                <br />
                                                Цена:                                <b>102 790</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/745/good/okhota_evolution/" title="«Охота»"><img src="/upload/resize_cache//medialibrary/73d/500_72_1/Evolution_Ohota_00.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/745/good/okhota_evolution/" title="«Охота»">«Охота»</a>
                                                <br />
                                                Цена:                                <b>61 630</b> руб.
                                            </p></li>
                                    </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "251px" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                            </div>
                            <div class="main float-right width772 pos-relative center-right collection_list">
                                <span class="h3">
                                    <a onClick={(event) => {
                                        event.preventDefault()
                                        let link = event.target.href.split("good")[1]

                                        navigate(`/bilyardCollection${link}`)
                                    }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_drakon_granzh/">Дракон Гранж</a>
                                </span>
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_drakon_granzh/" title="Дракон Гранж"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/453/Interior-Dragon-Grunj.jpg');" }}></div></a>
                                <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                    <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/drakon_granzh/" title="Дракон Гранж"><img src="/upload/resize_cache//medialibrary/0ed/500_72_1/01_Dragon_Grunge.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/drakon_granzh/" title="Дракон Гранж">Дракон Гранж</a>
                                                <br />
                                                Цена от                                <b>1 431 370</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_drakon_granzh/" title="«Дракон Гранж»"><img src="/upload/resize_cache//medialibrary/250/500_72_1/CueRack_Dragon_Grunge.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_drakon_granzh/" title="«Дракон Гранж»">«Дракон Гранж»</a>
                                                <br />
                                                Цена:                                <b>336 480</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_drakon_granzh/" title="Диван «Дракон Гранж»"><img src="/upload/resize_cache//medialibrary/987/500_72_1/Дракон-Гранж_диван_01.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_drakon_granzh/" title="Диван «Дракон Гранж»">Диван «Дракон Гранж»</a>
                                                <br />
                                                Цена:                                <b>333 200</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_drakon_granzh/" title="Кресло «Дракон Гранж»"><img src="/upload/resize_cache//medialibrary/8ec/500_72_1/Дракон-Гранж_кресло.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_drakon_granzh/" title="Кресло «Дракон Гранж»">Кресло «Дракон Гранж»</a>
                                                <br />
                                                Цена:                                <b>263 110</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/stolik_drakon_granzh/" title="«Дракон Гранж»"><img src="/upload/resize_cache//medialibrary/a12/500_72_1/Table-Dragon_Grunge_01.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/stolik_drakon_granzh/" title="«Дракон Гранж»">«Дракон Гранж»</a>
                                                <br />
                                                Цена:                                <b>162 390</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_drakon_granzh/" title="Стул «Дракон Гранж»"><img src="/upload/resize_cache//medialibrary/726/500_72_1/Кресло_Дракон_Гранж_01.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_drakon_granzh/" title="Стул «Дракон Гранж»">Стул «Дракон Гранж»</a>
                                                <br />
                                                Цена:                                <b>154 300</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_drakon_granzh/" title="«Дракон Гранж»"><img src="/upload/resize_cache//medialibrary/a77/500_72_1/Lamp_Dragon_Grunge_01.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_drakon_granzh/" title="«Дракон Гранж»">«Дракон Гранж»</a>
                                                <br />
                                                Цена:                                <b>131 610</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_drakon_granzh/" title="«Дракон Гранж»"><img src="/upload/resize_cache//medialibrary/068/500_72_1/Mirror-Dragon-Grunj_01.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_drakon_granzh/" title="«Дракон Гранж»">«Дракон Гранж»</a>
                                                <br />
                                                Цена:                                <b>84 900</b> руб.
                                            </p></li>
                                    </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "125px" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                            </div>
                            <div class="main float-right width772 pos-relative center-right collection_list">
                                <span class="h3">
                                    <a onClick={(event) => {
                                        event.preventDefault()
                                        let link = event.target.href.split("good")[1]

                                        navigate(`/bilyardCollection${link}`)
                                    }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_dragon/">Дракон</a>
                                </span>
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_dragon/" title="Дракон"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/013/Interior-Dragon.jpg');" }}></div></a>
                                <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                    <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/dragon/" title="Дракон"><img src="/upload/resize_cache//medialibrary/440/500_72_1/2000_Tb_Dragon_red.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/dragon/" title="Дракон">Дракон</a>
                                                <br />
                                                Цена от                                <b>1 383 900</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_dragon/" title="«Дракон»"><img src="/upload/resize_cache//medialibrary/a14/500_72_1/800_CueRack-Dragon.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_dragon/" title="«Дракон»">«Дракон»</a>
                                                <br />
                                                Цена:                                <b>409 150</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_drakon/" title="Диван «Дракон»"><img src="/upload/resize_cache//medialibrary/e7c/500_72_1/Дракон_диван_01.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_drakon/" title="Диван «Дракон»">Диван «Дракон»</a>
                                                <br />
                                                Цена:                                <b>305 200</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_drakon/" title="Кресло «Дракон»"><img src="/upload/resize_cache//medialibrary/18b/500_72_1/Дракон_кресло.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_drakon/" title="Кресло «Дракон»">Кресло «Дракон»</a>
                                                <br />
                                                Цена:                                <b>192 920</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_drakon/" title="«Дракон»"><img src="/upload/resize_cache//medialibrary/d3c/500_72_1/Зеркало_Dragon.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_drakon/" title="«Дракон»">«Дракон»</a>
                                                <br />
                                                Цена:                                <b>151 390</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/stolik_drakon/" title="«Дракон»"><img src="/upload/resize_cache//medialibrary/e44/500_72_1/Столик_Dragon.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/stolik_drakon/" title="«Дракон»">«Дракон»</a>
                                                <br />
                                                Цена:                                <b>150 210</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_drakon/" title="Стул «Дракон»"><img src="/upload/resize_cache//medialibrary/8d3/500_72_1/Дракон_стул.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_drakon/" title="Стул «Дракон»">Стул «Дракон»</a>
                                                <br />
                                                Цена:                                <b>140 270</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_drakon_2/" title="«Дракон»"><img src="/upload/resize_cache//medialibrary/970/500_72_1/01_Lamp_Dragon.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_drakon_2/" title="«Дракон»">«Дракон»</a>
                                                <br />
                                                Цена:                                <b>136 430</b> руб.
                                            </p></li>
                                    </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "125px" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                            </div>
                            <div class="main float-right width772 pos-relative center-right collection_list">
                                <span class="h3">
                                    <a onClick={(event) => {
                                        event.preventDefault()
                                        let link = event.target.href.split("good")[1]

                                        navigate(`/bilyardCollection${link}`)
                                    }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_imperator_lyuks/">Император-Люкс</a>
                                </span>
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_imperator_lyuks/" title="Император-Люкс"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/2ae/Interior-Imperator-Lux.jpg');" }}></div></a>
                                <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                    <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/imperator_lyuks/" title="Император-Люкс"><img src="/upload/resize_cache//medialibrary/c7b/500_72_1/2000_Tb_Imperator_Lux.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/imperator_lyuks/" title="Император-Люкс">Император-Люкс</a>
                                                <br />
                                                Цена от                                <b>1 127 380</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_imperator_lyuks_2/" title="Диван «Император-Люкс»"><img src="/upload/resize_cache//medialibrary/4e0/500_72_1/01_Император_Голд_диван.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_imperator_lyuks_2/" title="Диван «Император-Люкс»">Диван «Император-Люкс»</a>
                                                <br />
                                                Цена:                                <b>298 540</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kabinet_imperator_lyuks_kb_1/" title="КБ-1 «Император-Люкс»"><img src="/upload/resize_cache//medialibrary/d04/500_72_1/2000_cabinet-Imperator-Lux.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kabinet_imperator_lyuks_kb_1/" title="КБ-1 «Император-Люкс»">КБ-1 «Император-Люкс»</a>
                                                <br />
                                                Цена:                                <b>233 100</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_imperator_lyuks/" title="«Император-Люкс»"><img src="/upload/resize_cache//medialibrary/87d/500_72_1/01_Lamp-Imperator_Lux.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_imperator_lyuks/" title="«Император-Люкс»">«Император-Люкс»</a>
                                                <br />
                                                Цена:                                <b>197 530</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_imperator_lyuks/" title="Кресло «Император-Люкс»"><img src="/upload/resize_cache//medialibrary/848/500_72_1/Кресло_Император_люкс.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_imperator_lyuks/" title="Кресло «Император-Люкс»">Кресло «Император-Люкс»</a>
                                                <br />
                                                Цена:                                <b>184 000</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_imperator_lyuks_kr_1/" title="КР «Император-Люкс»"><img src="/upload/resize_cache//medialibrary/ce3/500_72_1/2000_CueRack_Imperator_Lux.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_imperator_lyuks_kr_1/" title="КР «Император-Люкс»">КР «Император-Люкс»</a>
                                                <br />
                                                Цена:                                <b>177 130</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_nastennaya_imperator_lyuks_k_12/" title="К-12 «Император-Люкс»"><img src="/upload/resize_cache//medialibrary/8f8/500_72_1/CueRack_Imperator-lux-k12.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_nastennaya_imperator_lyuks_k_12/" title="К-12 «Император-Люкс»">К-12 «Император-Люкс»</a>
                                                <br />
                                                Цена:                                <b>149 030</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/stolik_imperator_lyuks/" title="«Император-Люкс»"><img src="/upload/resize_cache//medialibrary/c62/500_72_1/Table-Imperator-Lux_1022.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/stolik_imperator_lyuks/" title="«Император-Люкс»">«Император-Люкс»</a>
                                                <br />
                                                Цена:                                <b>127 810</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_imperator_lyuks/" title="Стул «Император-Люкс»"><img src="/upload/resize_cache//medialibrary/61d/500_72_1/Стул_Император_люкс.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_imperator_lyuks/" title="Стул «Император-Люкс»">Стул «Император-Люкс»</a>
                                                <br />
                                                Цена:                                <b>99 120</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_imperator_lyuks/" title="Полка «Император-Люкс»"><img src="/upload/resize_cache//medialibrary/346/500_72_1/1000_ShelIf-Imperator-Lux.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_imperator_lyuks/" title="Полка «Император-Люкс»">Полка «Император-Люкс»</a>
                                                <br />
                                                Цена:                                <b>64 470</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_imperator_lyuks/" title="«Император-Люкс»"><img src="/upload/resize_cache//medialibrary/d97/500_72_1/1000_Mirror-Imperator_lux.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_imperator_lyuks/" title="«Император-Люкс»">«Император-Люкс»</a>
                                                <br />
                                                Цена:                                <b>59 350</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_imperator_lyuks/" title="«Император-Люкс»"><img src="/upload/resize_cache//medialibrary/22d/500_72_1/1000_Frame-Imperator-Lux.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_imperator_lyuks/" title="«Император-Люкс»">«Император-Люкс»</a>
                                                <br />
                                                Цена:                                <b>49 790</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_imperator_lyuks/" title="Торшер «Император-Люкс»"><img src="/upload/resize_cache//medialibrary/d9e/500_72_1/Император-Люкс.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_imperator_lyuks/" title="Торшер «Император-Люкс»">Торшер «Император-Люкс»</a>
                                                <br />
                                                Цена:                                <b>36 620</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_imperator_lyuks/" title="Бра «Император-Люкс»"><img src="/upload/resize_cache//medialibrary/b4e/500_72_1/Император_люкс_new.png" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_imperator_lyuks/" title="Бра «Император-Люкс»">Бра «Император-Люкс»</a>
                                                <br />
                                                Цена:                                <b>18 300</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_imperator_lyuks/" title="Настольный светильник «Император-Люкс»"><img src="/upload/resize_cache//medialibrary/f70/500_72_1/Император_люкс.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_imperator_lyuks/" title="Настольный светильник «Император-Люкс»">Настольный светильник «Император-Люкс»</a>
                                                <br />
                                                Цена:                                <b>14 120</b> руб.
                                            </p></li>
                                    </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "62px" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                            </div>
                            <div class="main float-right width772 pos-relative center-right collection_list">
                                <span class="h3">
                                    <a onClick={(event) => {
                                        event.preventDefault()
                                        let link = event.target.href.split("good")[1]

                                        navigate(`/bilyardCollection${link}`)
                                    }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_imperator_gold/">Император Голд</a>
                                </span>
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_imperator_gold/" title="Император Голд"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/93f/Interior-Imperator-Gold.jpg');" }}></div></a>
                                <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                    <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/imperator_gold/" title="Император Голд"><img src="/upload/resize_cache//medialibrary/b2a/500_72_1/TB_Imperator_gold_new_luza2000.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/imperator_gold/" title="Император Голд">Император Голд</a>
                                                <br />
                                                Цена от                                <b>1 147 820</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_imperator_gold/" title="Диван «Император Голд»"><img src="/upload/resize_cache//medialibrary/33c/500_72_1/Император_Голд_диван_01.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_imperator_gold/" title="Диван «Император Голд»">Диван «Император Голд»</a>
                                                <br />
                                                Цена:                                <b>317 940</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kabinet_imperator_gold/" title=" Кабинет «Император Голд»"><img src="/upload/resize_cache//medialibrary/cbd/500_72_1/Cabinet-Imperator-Gilt-kb-1.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kabinet_imperator_gold/" title=" Кабинет «Император Голд»"> Кабинет «Император Голд»</a>
                                                <br />
                                                Цена:                                <b>272 750</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/lamp_imperator_gold/" title="«Император Голд»"><img src="/upload/resize_cache//medialibrary/18f/500_72_1/01_Lamp-Imperator-gilt.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/lamp_imperator_gold/" title="«Император Голд»">«Император Голд»</a>
                                                <br />
                                                Цена:                                <b>204 010</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_imperator_gold/" title="Кресло «Император Голд»"><img src="/upload/resize_cache//medialibrary/5f3/500_72_1/Кресло_Император_голд.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_imperator_gold/" title="Кресло «Император Голд»">Кресло «Император Голд»</a>
                                                <br />
                                                Цена:                                <b>196 810</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr-1-imperator_gold/" title="КР «Император Голд»"><img src="/upload/resize_cache//medialibrary/e46/500_72_1/e46eca4e29618225932dec920ae7224b.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr-1-imperator_gold/" title="КР «Император Голд»">КР «Император Голд»</a>
                                                <br />
                                                Цена:                                <b>183 570</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/k_12_imperator_gold/" title="К-12 «Император Голд»"><img src="/upload/resize_cache//medialibrary/9ca/500_72_1/CueRack_Imperator-Gilt-k12.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/k_12_imperator_gold/" title="К-12 «Император Голд»">К-12 «Император Голд»</a>
                                                <br />
                                                Цена:                                <b>160 210</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/table_imperator_gold/" title="«Император Голд»"><img src="/upload/resize_cache//medialibrary/eed/500_72_1/eed1c26f4cbd956aeaa26e5a93e97e20.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/table_imperator_gold/" title="«Император Голд»">«Император Голд»</a>
                                                <br />
                                                Цена:                                <b>143 300</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_imperator_gold/" title="Стул «Император Голд»"><img src="/upload/resize_cache//medialibrary/da2/500_72_1/Император_Голд_стул.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_imperator_gold/" title="Стул «Император Голд»">Стул «Император Голд»</a>
                                                <br />
                                                Цена:                                <b>110 460</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_imperator_gold/" title="Полка «Император Голд»"><img src="/upload/resize_cache//medialibrary/4c0/500_72_1/4c0ebb169c1fdf1e358cd2d008e15bc6.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_imperator_gold/" title="Полка «Император Голд»">Полка «Император Голд»</a>
                                                <br />
                                                Цена:                                <b>73 610</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_imperator_gold/" title="«Император Голд»"><img src="/upload/resize_cache//medialibrary/eb2/500_72_1/император_голд.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_imperator_gold/" title="«Император Голд»">«Император Голд»</a>
                                                <br />
                                                Цена:                                <b>70 460</b> руб.
                                            </p></li>
                                        <li>

                                            <div><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_imperator_gold/" title="Бра «Император Голд»"><img src="/upload/resize_cache//medialibrary/165/500_72_1/Бра_Император_голд.jpg" class="w178" /></a></div>
                                            <p><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_imperator_gold/" title="Бра «Император Голд»">Бра «Император Голд»</a>
                                                <br />
                                                Цена:                                <b>18 300</b> руб.
                                            </p></li>
                                    </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "84px;" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                            </div>
                        </div>
                        <div class="main float-right width772 pos-relative center-right collection_list">
                            <span class="h3">
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_imperator/">Император</a>
                            </span>
                            <a onClick={(event) => {
                                event.preventDefault()
                                let link = event.target.href.split("good")[1]

                                navigate(`/bilyardCollection${link}`)
                            }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_imperator/" title="Император"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/9cd/Interior-Imperator.jpg');" }}></div></a>
                            <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/imperator/" title="Император"><img src="/upload/resize_cache//medialibrary/438/500_72_1/01_2019_Tb_Imperator.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/imperator/" title="Император">Император</a>
                                            <br />
                                            Цена от                                <b>1 053 060</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_imperator_1/" title="Диван «Император»"><img src="/upload/resize_cache//medialibrary/324/500_72_1/01_Император_диван.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_imperator_1/" title="Диван «Император»">Диван «Император»</a>
                                            <br />
                                            Цена:                                <b>297 530</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kb-1-imperator/" title="КБ-1 «Император»"><img src="/upload/resize_cache//medialibrary/247/500_72_1/247676983ed6eeaebeb28bce755f2d18.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kb-1-imperator/" title="КБ-1 «Император»">КБ-1 «Император»</a>
                                            <br />
                                            Цена:                                <b>229 910</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_imperator/" title="Кресло «Император»"><img src="/upload/resize_cache//medialibrary/a09/500_72_1/Кресло_Император.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_imperator/" title="Кресло «Император»">Кресло «Император»</a>
                                            <br />
                                            Цена:                                <b>185 350</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_imperator/" title="«Император»"><img src="/upload/resize_cache//medialibrary/a07/500_72_1/01_Lamp-Imperator.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_imperator/" title="«Император»">«Император»</a>
                                            <br />
                                            Цена:                                <b>160 020</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr-1-imperator/" title="КР «Император»"><img src="/upload/resize_cache//medialibrary/ec5/500_72_1/ec573f3326d6b4e647b16f3c96bf239e.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr-1-imperator/" title="КР «Император»">КР «Император»</a>
                                            <br />
                                            Цена:                                <b>157 620</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/table_imperator/" title="«Император»"><img src="/upload/resize_cache//medialibrary/75d/500_72_1/Table-Imperator_1022.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/table_imperator/" title="«Император»">«Император»</a>
                                            <br />
                                            Цена:                                <b>123 340</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/imperator_k_12_yasen/" title="«Император» К-12 ясень"><img src="/upload/resize_cache//medialibrary/c93/500_72_1/CueRack_Imperator-k12.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/imperator_k_12_yasen/" title="«Император» К-12 ясень">«Император» К-12 ясень</a>
                                            <br />
                                            Цена:                                <b>119 520</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_imperator/" title="Стул «Император»"><img src="/upload/resize_cache//medialibrary/43d/500_72_1/Стул_Император.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_imperator/" title="Стул «Император»">Стул «Император»</a>
                                            <br />
                                            Цена:                                <b>95 240</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_imperator/" title="Полка «Император»"><img src="/upload/resize_cache//medialibrary/ffe/500_72_1/ffeb788e111f806ce86413d69f9e2e2e.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_imperator/" title="Полка «Император»">Полка «Император»</a>
                                            <br />
                                            Цена:                                <b>58 610</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/mirror_imperator/" title="«Император»"><img src="/upload/resize_cache//medialibrary/6b2/500_72_1/Mirror-Imperator.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/mirror_imperator/" title="«Император»">«Император»</a>
                                            <br />
                                            Цена:                                <b>54 840</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_imperator/" title="Торшер «Император»"><img src="/upload/resize_cache//medialibrary/3ea/500_72_1/Император.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_imperator/" title="Торшер «Император»">Торшер «Император»</a>
                                            <br />
                                            Цена:                                <b>36 620</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_imperator/" title="Бра «Император»"><img src="/upload/resize_cache//medialibrary/720/500_72_1/Император_new.png" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_imperator/" title="Бра «Император»">Бра «Император»</a>
                                            <br />
                                            Цена:                                <b>18 300</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_imperator/" title="«Император»"><img src="/upload/resize_cache//medialibrary/707/500_72_1/kartina_imperator.png" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_imperator/" title="«Император»">«Император»</a>
                                            <br />
                                            Цена:                                <b>7 624</b> руб.
                                        </p></li>
                                </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "72px" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                        </div>
                        <div class="main float-right width772 pos-relative center-right collection_list">
                            <span class="h3">
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_veneciya/">Венеция</a>
                            </span>
                            <a onClick={(event) => {
                                event.preventDefault()
                                let link = event.target.href.split("good")[1]

                                navigate(`/bilyardCollection${link}`)
                            }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_veneciya/" title="Венеция"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/ea9/Interior-Venice.jpg');" }}></div></a>
                            <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/veneciya/" title="Венеция"><img src="/upload/resize_cache//medialibrary/ac1/500_72_1/Венеция.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/veneciya/" title="Венеция">Венеция</a>
                                            <br />
                                            Цена от                                <b>796 980</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_venetsiya/" title="Диван «Венеция»"><img src="/upload/resize_cache//medialibrary/933/500_72_1/Венеция_диван_01.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_venetsiya/" title="Диван «Венеция»">Диван «Венеция»</a>
                                            <br />
                                            Цена:                                <b>308 000</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_venetsiya/" title="Кресло «Венеция»"><img src="/upload/resize_cache//medialibrary/3e9/500_72_1/Венеция_кресла.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_venetsiya/" title="Кресло «Венеция»">Кресло «Венеция»</a>
                                            <br />
                                            Цена:                                <b>188 900</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr-1-veneciya/" title="КР «Венеция»"><img src="/upload/resize_cache//medialibrary/02f/500_72_1/Венеция.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr-1-veneciya/" title="КР «Венеция»">КР «Венеция»</a>
                                            <br />
                                            Цена:                                <b>154 930</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/table_veneciya/" title="«Венеция»"><img src="/upload/resize_cache//medialibrary/9ee/500_72_1/Table-Venice-c3_1200.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/table_veneciya/" title="«Венеция»">«Венеция»</a>
                                            <br />
                                            Цена:                                <b>116 080</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/lamp_veneciya/" title="«Венеция»"><img src="/upload/resize_cache//medialibrary/088/500_72_1/01_Lamp-Venice.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/lamp_veneciya/" title="«Венеция»">«Венеция»</a>
                                            <br />
                                            Цена:                                <b>110 820</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_venetsiya/" title="Стул «Венеция»"><img src="/upload/resize_cache//medialibrary/4f2/500_72_1/Венеция_стул.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_venetsiya/" title="Стул «Венеция»">Стул «Венеция»</a>
                                            <br />
                                            Цена:                                <b>84 760</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/mirror_veneciya/" title="«Венеция»"><img src="/upload/resize_cache//medialibrary/8b7/500_72_1/Venice-zerkalo.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/mirror_veneciya/" title="«Венеция»">«Венеция»</a>
                                            <br />
                                            Цена:                                <b>83 822</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kabinet_venetsiya_kb_1/" title="КБ-1 «Венеция»"><img src="/upload/resize_cache//medialibrary/c2d/500_72_1/cabinet-Venice_02.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kabinet_venetsiya_kb_1/" title="КБ-1 «Венеция»">КБ-1 «Венеция»</a>
                                            <br />
                                            Цена:                                <b>83 822</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_veneciya/" title="Полка «Венеция»"><img src="/upload/resize_cache//medialibrary/404/500_72_1/Venice-polka.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_veneciya/" title="Полка «Венеция»">Полка «Венеция»</a>
                                            <br />
                                            Цена:                                <b>59 220</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_venetsiya/" title="Бра «Венеция»"><img src="/upload/resize_cache//medialibrary/720/500_72_1/Император_new.png" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_venetsiya/" title="Бра «Венеция»">Бра «Венеция»</a>
                                            <br />
                                            Цена:                                <b>18 300</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/239/good/rama_veneciya/" title="«Венеция»"><img src="/upload/resize_cache//medialibrary/c48/500_72_1/Venice-kartina.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/239/good/rama_veneciya/" title="«Венеция»">«Венеция»</a>
                                            <br />
                                            Цена:                                <b>17 624</b> руб.
                                        </p></li>
                                </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "84px;" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                        </div>
                        <div class="main float-right width772 pos-relative center-right collection_list">
                            <span class="h3">
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_president_silver/">Президент Сильвер</a>
                            </span>
                            <a onClick={(event) => {
                                event.preventDefault()
                                let link = event.target.href.split("good")[1]

                                navigate(`/bilyardCollection${link}`)
                            }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_president_silver/" title="Президент Сильвер"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/f6b/2018_Presedent_Silver_in.jpg');" }}></div></a>
                            <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/prezident_silver/" title="Президент Сильвер"><img src="/upload/resize_cache//medialibrary/226/500_72_1/президент сильвер.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/prezident_silver/" title="Президент Сильвер">Президент Сильвер</a>
                                            <br />
                                            Цена от                                <b>723 620</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_prezident_silver/" title="Диван «Президент Сильвер»"><img src="/upload/resize_cache//medialibrary/176/500_72_1/Диван_Президент_Сильвер_01.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_prezident_silver/" title="Диван «Президент Сильвер»">Диван «Президент Сильвер»</a>
                                            <br />
                                            Цена:                                <b>249 280</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_prezident_silver/" title="Кресло «Президент Сильвер»"><img src="/upload/resize_cache//medialibrary/3b4/500_72_1/Кресло_Президент_Сильвер.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_prezident_silver/" title="Кресло «Президент Сильвер»">Кресло «Президент Сильвер»</a>
                                            <br />
                                            Цена:                                <b>155 420</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr-1-prezident-silver/" title="КР «Президент Сильвер»"><img src="/upload/resize_cache//medialibrary/5ba/500_72_1/5ba23a643eaee817468ddc50f87f46c3.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr-1-prezident-silver/" title="КР «Президент Сильвер»">КР «Президент Сильвер»</a>
                                            <br />
                                            Цена:                                <b>129 700</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/table_prezident_silver/" title="«Президент Сильвер»"><img src="/upload/resize_cache//medialibrary/ba5/500_72_1/ba50dce1ba314facb53a4200e4d6c35c.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/table_prezident_silver/" title="«Президент Сильвер»">«Президент Сильвер»</a>
                                            <br />
                                            Цена:                                <b>95 970</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/lamp_prezident_silver/" title="«Президент Сильвер»"><img src="/upload/resize_cache//medialibrary/822/500_72_1/01_Lamp-President-Silver.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/lamp_prezident_silver/" title="«Президент Сильвер»">«Президент Сильвер»</a>
                                            <br />
                                            Цена:                                <b>89 760</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_prezident_silver/" title="Стул «Президент Сильвер»"><img src="/upload/resize_cache//medialibrary/fc0/500_72_1/Стул_Президент_сильвер.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_prezident_silver/" title="Стул «Президент Сильвер»">Стул «Президент Сильвер»</a>
                                            <br />
                                            Цена:                                <b>64 280</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/mirror_prezident_silver/" title="«Президент Сильвер»"><img src="/upload/resize_cache//medialibrary/18b/500_72_1/18b6282a9043a454bdea39ed59d468b3.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/mirror_prezident_silver/" title="«Президент Сильвер»">«Президент Сильвер»</a>
                                            <br />
                                            Цена:                                <b>46 050</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_prezident_silver/" title="Полка «Президент Сильвер»"><img src="/upload/resize_cache//medialibrary/3c1/500_72_1/3c1a8ce2254339a6c496887cea89d647.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_prezident_silver/" title="Полка «Президент Сильвер»">Полка «Президент Сильвер»</a>
                                            <br />
                                            Цена:                                <b>42 560</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_prezident_silver/" title="Торшер «Президент Сильвер»"><img src="/upload/resize_cache//medialibrary/f49/500_72_1/Torchere-President-Silver.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_prezident_silver/" title="Торшер «Президент Сильвер»">Торшер «Президент Сильвер»</a>
                                            <br />
                                            Цена:                                <b>36 620</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_prezident_silver/" title="«Президент Сильвер»"><img src="/upload/resize_cache//medialibrary/897/500_72_1/Президент_Сильвер.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_prezident_silver/" title="«Президент Сильвер»">«Президент Сильвер»</a>
                                            <br />
                                            Цена:                                <b>31 780</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/taburet_vysokiy_prezident_silver/" title="Табурет «Президент Сильвер»"><img src="/upload/resize_cache//medialibrary/956/500_72_1/Табуреты_Президент_Сильвер.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/taburet_vysokiy_prezident_silver/" title="Табурет «Президент Сильвер»">Табурет «Президент Сильвер»</a>
                                            <br />
                                            Цена:                                <b>21 150</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_prezident_silver/" title="Бра «Президент Сильвер»"><img src="/upload/resize_cache//medialibrary/b4f/500_72_1/Президент_Сильвер_new.png" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_prezident_silver/" title="Бра «Президент Сильвер»">Бра «Президент Сильвер»</a>
                                            <br />
                                            Цена:                                <b>18 300</b> руб.
                                        </p></li>
                                </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "70px;" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                        </div>
                        <div class="main float-right width772 pos-relative center-right collection_list">
                            <span class="h3">
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_president/">Президент</a>
                            </span>
                            <a onClick={(event) => {
                                event.preventDefault()
                                let link = event.target.href.split("good")[1]

                                navigate(`/bilyardCollection${link}`)
                            }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_president/" title="Президент"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/6c8/Interior-President.jpg');" }}></div></a>
                            <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/174/good/prezident/" title="Президент"><img src="/upload/resize_cache//medialibrary/e37/500_72_1/Tb_Prezident_01.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/174/good/prezident/" title="Президент">Президент</a>
                                            <br />
                                            Цена от                                <b>610 610</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_prezident/" title="Диван «Президент»"><img src="/upload/resize_cache//medialibrary/8c8/500_72_1/Диван_Президент_01.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_prezident/" title="Диван «Президент»">Диван «Президент»</a>
                                            <br />
                                            Цена:                                <b>247 960</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_prezident/" title="Кресло «Президент»"><img src="/upload/resize_cache//medialibrary/e99/500_72_1/Кресло_Президент.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_prezident/" title="Кресло «Президент»">Кресло «Президент»</a>
                                            <br />
                                            Цена:                                <b>148 590</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr-1-prezident/" title="КР «Президент»"><img src="/upload/resize_cache//medialibrary/bf8/500_72_1/bf88abb9928015544944883f1f9fb015.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr-1-prezident/" title="КР «Президент»">КР «Президент»</a>
                                            <br />
                                            Цена:                                <b>114 690</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/table_prezident/" title="«Президент»"><img src="/upload/resize_cache//medialibrary/adf/500_72_1/president.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/table_prezident/" title="«Президент»">«Президент»</a>
                                            <br />
                                            Цена:                                <b>89 330</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/745/good/Evolution_prezident/" title="«Президент»"><img src="/upload/resize_cache//medialibrary/588/500_72_1/9_10_President_00.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/745/good/Evolution_prezident/" title="«Президент»">«Президент»</a>
                                            <br />
                                            Цена:                                <b>79 350</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/lamp_prezident/" title="«Президент»"><img src="/upload/resize_cache//medialibrary/7bb/500_72_1/01_Lamp-President.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/lamp_prezident/" title="«Президент»">«Президент»</a>
                                            <br />
                                            Цена:                                <b>67 320</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_prezident/" title="Стул «Президент»"><img src="/upload/resize_cache//medialibrary/466/500_72_1/Стул_Президент.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_prezident/" title="Стул «Президент»">Стул «Президент»</a>
                                            <br />
                                            Цена:                                <b>58 850</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/mirror_prezident/" title="«Президент»"><img src="/upload/resize_cache//medialibrary/016/500_72_1/0163403f4627ef3a8ca3250902af68ec.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/mirror_prezident/" title="«Президент»">«Президент»</a>
                                            <br />
                                            Цена:                                <b>42 230</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_prezident/" title="Торшер «Президент»"><img src="/upload/resize_cache//medialibrary/3ea/500_72_1/Император.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_prezident/" title="Торшер «Президент»">Торшер «Президент»</a>
                                            <br />
                                            Цена:                                <b>36 620</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_prezident/" title="Полка «Президент»"><img src="/upload/resize_cache//medialibrary/03a/500_72_1/03a0a81ddde30ecb7cac53b298722b68.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_prezident/" title="Полка «Президент»">Полка «Президент»</a>
                                            <br />
                                            Цена:                                <b>36 040</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/taburet_prezident/" title="Табурет «Президент»"><img src="/upload/resize_cache//medialibrary/a89/500_72_1/Табурет_мягкий.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/taburet_prezident/" title="Табурет «Президент»">Табурет «Президент»</a>
                                            <br />
                                            Цена:                                <b>30 980</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_prezident/" title="«Президент»"><img src="/upload/resize_cache//medialibrary/366/500_72_1/Президент.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_prezident/" title="«Президент»">«Президент»</a>
                                            <br />
                                            Цена:                                <b>27 090</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_prezident/" title="Бра «Президент»"><img src="/upload/resize_cache//medialibrary/720/500_72_1/Император_new.png" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_prezident/" title="Бра «Президент»">Бра «Президент»</a>
                                            <br />
                                            Цена:                                <b>18 300</b> руб.
                                        </p></li>
                                </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "72px" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                        </div>
                        <div class="main float-right width772 pos-relative center-right collection_list">
                            <span class="h3">
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/prezident_iii/">Президент III</a>
                            </span>
                            <a onClick={(event) => {
                                event.preventDefault()
                                let link = event.target.href.split("good")[1]

                                navigate(`/bilyardCollection${link}`)
                            }} href="https://www.fabrika-start.ru/catalog/sect/175/good/prezident_iii/" title="Президент III"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/71a/in_2018_Presedent_III.jpg');" }}></div></a>
                            <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/174/good/prezident3/" title="Президент III"><img src="/upload/resize_cache//medialibrary/9dd/500_72_1/2019_Tb_President_III_01.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/174/good/prezident3/" title="Президент III">Президент III</a>
                                            <br />
                                            Цена от                                <b>610 610</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_prezident/" title="Диван «Президент»"><img src="/upload/resize_cache//medialibrary/8c8/500_72_1/Диван_Президент_01.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_prezident/" title="Диван «Президент»">Диван «Президент»</a>
                                            <br />
                                            Цена:                                <b>247 960</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr-1-prezident/" title="КР «Президент»"><img src="/upload/resize_cache//medialibrary/bf8/500_72_1/bf88abb9928015544944883f1f9fb015.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr-1-prezident/" title="КР «Президент»">КР «Президент»</a>
                                            <br />
                                            Цена:                                <b>114 690</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/745/good/svetilnik_prezidentiii_2/" title="«Президент III»"><img src="/upload/resize_cache//medialibrary/588/500_72_1/9_10_President_00.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/745/good/svetilnik_prezidentiii_2/" title="«Президент III»">«Президент III»</a>
                                            <br />
                                            Цена:                                <b>79 350</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/stolik_prezident_iii/" title="«Президент III»"><img src="/upload/resize_cache//medialibrary/e47/500_72_1/900_Table-PresidentIII.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/stolik_prezident_iii/" title="«Президент III»">«Президент III»</a>
                                            <br />
                                            Цена:                                <b>65 400</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_prezident/" title="Стул «Президент»"><img src="/upload/resize_cache//medialibrary/466/500_72_1/Стул_Президент.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_prezident/" title="Стул «Президент»">Стул «Президент»</a>
                                            <br />
                                            Цена:                                <b>58 850</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/mirror_prezident/" title="«Президент»"><img src="/upload/resize_cache//medialibrary/016/500_72_1/0163403f4627ef3a8ca3250902af68ec.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/mirror_prezident/" title="«Президент»">«Президент»</a>
                                            <br />
                                            Цена:                                <b>42 230</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_prezident_iii/" title="Торшер «Президент III»"><img src="/upload/resize_cache//medialibrary/3ea/500_72_1/Император.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_prezident_iii/" title="Торшер «Президент III»">Торшер «Президент III»</a>
                                            <br />
                                            Цена:                                <b>36 620</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/taburet_vysokiy_prezidentiii/" title="Табурет высокий"><img src="/upload/resize_cache//medialibrary/a79/500_72_1/Табурет_жесткий.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/taburet_vysokiy_prezidentiii/" title="Табурет высокий">Табурет высокий</a>
                                            <br />
                                            Цена:                                <b>34 120</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_prezidentiii/" title="Полка «ПрезидентIII»"><img src="/upload/resize_cache//medialibrary/967/500_72_1/1100_Shelf-PresidentIII.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_prezidentiii/" title="Полка «ПрезидентIII»">Полка «ПрезидентIII»</a>
                                            <br />
                                            Цена:                                <b>31 710</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_prezidentiii/" title="«ПрезидентIII»"><img src="/upload/resize_cache//medialibrary/664/500_72_1/Президент3.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_prezidentiii/" title="«ПрезидентIII»">«ПрезидентIII»</a>
                                            <br />
                                            Цена:                                <b>18 710</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_prezident_iii/" title="Бра «Президент III»"><img src="/upload/resize_cache//medialibrary/720/500_72_1/Император_new.png" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_prezident_iii/" title="Бра «Президент III»">Бра «Президент III»</a>
                                            <br />
                                            Цена:                                <b>18 300</b> руб.
                                        </p></li>
                                </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "84px;" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                        </div>
                        <div class="main float-right width772 pos-relative center-right collection_list">
                            <span class="h3">
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_premer/">Премьер</a>
                            </span>
                            <a onClick={(event) => {
                                event.preventDefault()
                                let link = event.target.href.split("good")[1]

                                navigate(`/bilyardCollection${link}`)
                            }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_premer/" title="Премьер"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/5fe/2020_Prime_02.jpg');" }}></div></a>
                            <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/premer/" title="Премьер"><img src="/upload/resize_cache//medialibrary/1a5/500_72_1/2020_Tb_Prime_01.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/premer/" title="Премьер">Премьер</a>
                                            <br />
                                            Цена от                                <b>1 455 300</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_premer/" title="«Премьер»"><img src="/upload/resize_cache//medialibrary/a82/500_72_1/CueRack-Prime_02.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_premer/" title="«Премьер»">«Премьер»</a>
                                            <br />
                                            Цена:                                <b>180 280</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_premer/" title="«Премьер»"><img src="/upload/resize_cache//medialibrary/0d9/500_72_1/Lamp_Prime_green.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_premer/" title="«Премьер»">«Премьер»</a>
                                            <br />
                                            Цена:                                <b>100 820</b> руб.
                                        </p></li>
                                </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "258px" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                        </div>
                        <div class="main float-right width772 pos-relative center-right collection_list">
                            <span class="h3">
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_ampir/">Ампир</a>
                            </span>
                            <a onClick={(event) => {
                                event.preventDefault()
                                let link = event.target.href.split("good")[1]

                                navigate(`/bilyardCollection${link}`)
                            }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_ampir/" title="Ампир"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/db7/Interior-Ampir.jpg');" }}></div></a>
                            <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/ampir/" title="Ампир"><img src="/upload/resize_cache//medialibrary/5ec/500_72_1/Tb_Ampir.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/ampir/" title="Ампир">Ампир</a>
                                            <br />
                                            Цена от                                <b>1 206 810</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_ampir/" title="Диван «Ампир»"><img src="/upload/resize_cache//medialibrary/689/500_72_1/Диван_Ампир_01.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_ampir/" title="Диван «Ампир»">Диван «Ампир»</a>
                                            <br />
                                            Цена:                                <b>293 530</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_ampir/" title="Кресло «Ампир»"><img src="/upload/resize_cache//medialibrary/ff7/500_72_1/Кресло_Ампир.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_ampir/" title="Кресло «Ампир»">Кресло «Ампир»</a>
                                            <br />
                                            Цена:                                <b>175 160</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_ampir/" title="КР «Ампир»"><img src="/upload/resize_cache//medialibrary/023/500_72_1/CueRack-Ampir-kr1.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_ampir/" title="КР «Ампир»">КР «Ампир»</a>
                                            <br />
                                            Цена:                                <b>155 470</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/ampi/" title="«Ампир»"><img src="/upload/resize_cache//medialibrary/aa2/500_72_1/Table-Ampir.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/ampi/" title="«Ампир»">«Ампир»</a>
                                            <br />
                                            Цена:                                <b>116 380</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_ampir/" title="«Ампир»"><img src="/upload/resize_cache//medialibrary/c3a/500_72_1/01_Lamp-Ampir.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_ampir/" title="«Ампир»">«Ампир»</a>
                                            <br />
                                            Цена:                                <b>105 650</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_ampir/" title="Стул «Ампир»"><img src="/upload/resize_cache//medialibrary/822/500_72_1/Стул_Ампир.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_ampir/" title="Стул «Ампир»">Стул «Ампир»</a>
                                            <br />
                                            Цена:                                <b>84 760</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_ampir/" title="«Ампир»"><img src="/upload/resize_cache//medialibrary/f9d/500_72_1/Ампир_зеркало.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_ampir/" title="«Ампир»">«Ампир»</a>
                                            <br />
                                            Цена:                                <b>59 350</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_ampir/" title="Бра «Ампир»"><img src="/upload/resize_cache//medialibrary/720/500_72_1/Император_new.png" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_ampir/" title="Бра «Ампир»">Бра «Ампир»</a>
                                            <br />
                                            Цена:                                <b>18 300</b> руб.
                                        </p></li>
                                </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "100px;" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                        </div>
                        <div class="main float-right width772 pos-relative center-right collection_list">
                            <span class="h3">
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_neapol/">Неаполь</a>
                                <span class="label">Новинка</span>            </span>
                            <a onClick={(event) => {
                                event.preventDefault()
                                let link = event.target.href.split("good")[1]

                                navigate(`/bilyardCollection${link}`)
                            }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_neapol/" title="Неаполь"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/c7a/Tb_%D0%9D%D0%B5%D0%B0%D0%BF%D0%BE%D0%BB%D1%8C.jpg');" }}></div></a>
                            <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/neapol/" title="Неаполь"><img src="/upload/resize_cache//medialibrary/69e/500_72_1/2019_Tb_Неаполь_01.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/neapol/" title="Неаполь">Неаполь</a>
                                            <br />
                                            Цена от                                <b>1 490 470</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/andaluz/" title="«Неаполь»"><img src="/upload/resize_cache//medialibrary/1d7/500_72_1/Lamp_Andaluz_green.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/andaluz/" title="«Неаполь»">«Неаполь»</a>
                                            <br />
                                            Цена:                                <b>251 160</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_neapol/" title="«Неаполь»"><img src="/upload/resize_cache//medialibrary/d3f/500_72_1/CueRack-Andaluz_02.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_neapol/" title="«Неаполь»">«Неаполь»</a>
                                            <br />
                                            Цена:                                <b>238 040</b> руб.
                                        </p></li>
                                </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "250px" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                        </div>
                        <div class="main float-right width772 pos-relative center-right collection_list">
                            <span class="h3">
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/morskaya/">Морская</a>
                            </span>
                            <a onClick={(event) => {
                                event.preventDefault()
                                let link = event.target.href.split("good")[1]

                                navigate(`/bilyardCollection${link}`)
                            }} href="https://www.fabrika-start.ru/catalog/sect/175/good/morskaya/" title="Морская"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/747/Tb_Sea.jpg');" }}></div></a>
                            <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/morskoy/" title="Морской"><img src="/upload/resize_cache//medialibrary/c84/500_72_1/2018_Tb_Sea_01.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/morskoy/" title="Морской">Морской</a>
                                            <br />
                                            Цена от                                <b>1 328 880</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_morskoy/" title="«Морской»"><img src="/upload/resize_cache//medialibrary/7e3/500_72_1/Lamp_Sea_green.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_morskoy/" title="«Морской»">«Морской»</a>
                                            <br />
                                            Цена:                                <b>251 160</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_morskaya/" title="«Морская»"><img src="/upload/resize_cache//medialibrary/35b/500_72_1/CueRack-Sea_02.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_morskaya/" title="«Морская»">«Морская»</a>
                                            <br />
                                            Цена:                                <b>229 640</b> руб.
                                        </p></li>
                                </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "250px" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                        </div>
                        <div class="main float-right width772 pos-relative center-right collection_list">
                            <span class="h3">
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_hightech/">High-tech</a>
                                <span class="label">Новинка</span>            </span>
                            <a onClick={(event) => {
                                event.preventDefault()
                                let link = event.target.href.split("good")[1]

                                navigate(`/bilyardCollection${link}`)
                            }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_hightech/" title="High-tech"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/d35/Interior-High-Tech.jpg');" }}></div></a>
                            <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/176/good/high_tech/" title="High-tech"><img src="/upload/resize_cache//medialibrary/6ce/500_72_1/Tb_High-Tech_01.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/176/good/high_tech/" title="High-tech">High-tech</a>
                                            <br />
                                            Цена от                                <b>450 100</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/745/good/high_tech_evolution/" title="«High-tech»"><img src="/upload/resize_cache//medialibrary/641/500_72_1/10_12_Evolution_pvh.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/745/good/high_tech_evolution/" title="«High-tech»">«High-tech»</a>
                                            <br />
                                            Цена:                                <b>41 740</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_high_tech/" title="High-tech"><img src="/upload/resize_cache//medialibrary/3ef/500_72_1/1000_Mirror-High-Tech.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_high_tech/" title="High-tech">High-tech</a>
                                            <br />
                                            Цена:                                <b>20 910</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_high_tech/" title="High-tech"><img src="/upload/resize_cache//medialibrary/8f8/500_72_1/1000_Frame-High-Tech.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_high_tech/" title="High-tech">High-tech</a>
                                            <br />
                                            Цена:                                <b>12 710</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/k_18_high_tech/" title="К-18 «High-tech»"><img src="/upload/resize_cache//medialibrary/019/500_72_1/киевница_High-Tech_K-18_02.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/k_18_high_tech/" title="К-18 «High-tech»">К-18 «High-tech»</a>
                                            <br />
                                            Цена:                                <b>6 137</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_high_tech/" title="Стул «High-tech»"><img src="/upload/resize_cache//medialibrary/0b8/500_72_1/стул_High-Tech (1).jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_high_tech/" title="Стул «High-tech»">Стул «High-tech»</a>
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_high_tech/" title="Кресло «High-tech»"><img src="/upload/resize_cache//medialibrary/dfb/500_72_1/кресло_High-Tech (1).jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_high_tech/" title="Кресло «High-tech»">Кресло «High-tech»</a>
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_high_tech/" title="Диван «High-tech»"><img src="/upload/resize_cache//medialibrary/66c/500_72_1/диван_High-Tech (1).jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_high_tech/" title="Диван «High-tech»">Диван «High-tech»</a>
                                        </p></li>
                                </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "129px" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                        </div>
                        <div class="main float-right width772 pos-relative center-right collection_list">
                            <span class="h3">
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_liverpool/">Ливерпуль-Люкс</a>
                            </span>
                            <a onClick={(event) => {
                                event.preventDefault()
                                let link = event.target.href.split("good")[1]

                                navigate(`/bilyardCollection${link}`)
                            }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_liverpool/" title="Ливерпуль-Люкс"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/51a/Interior-Liverpool-.jpg');" }}></div></a>
                            <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/liverpool_lux/" title="Ливерпуль-Люкс"><img src="/upload/resize_cache//medialibrary/fb9/500_72_1/Tb_Liverpool-Lux.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/liverpool_lux/" title="Ливерпуль-Люкс">Ливерпуль-Люкс</a>
                                            <br />
                                            Цена от                                <b>384 520</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_liverpul_lyuks/" title="Диван «Ливерпуль-Люкс»"><img src="/upload/resize_cache//medialibrary/198/500_72_1/Диван_Ливерпуль_люкс_01.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_liverpul_lyuks/" title="Диван «Ливерпуль-Люкс»">Диван «Ливерпуль-Люкс»</a>
                                            <br />
                                            Цена:                                <b>200 616</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_liverpul_lyuks/" title="Кресло «Ливерпуль-Люкс»"><img src="/upload/resize_cache//medialibrary/d0b/500_72_1/Кресло_Ливерпуль_люкс.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_liverpul_lyuks/" title="Кресло «Ливерпуль-Люкс»">Кресло «Ливерпуль-Люкс»</a>
                                            <br />
                                            Цена:                                <b>148 390</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/stol_zhurnalnyy_liverpul/" title="«Ливерпуль» журнальный"><img src="/upload/resize_cache//medialibrary/b26/500_72_1/Table-Liverpoot-Lux_journal_01.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/stol_zhurnalnyy_liverpul/" title="«Ливерпуль» журнальный">«Ливерпуль» журнальный</a>
                                            <br />
                                            Цена:                                <b>139 210</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/280/good/tumba_liverpul_lyuks/" title="Тумба «Ливерпуль-Люкс»"><img src="/upload/resize_cache//medialibrary/de2/500_72_1/1200_01_Ливерпуль_люкс_тумба.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/280/good/tumba_liverpul_lyuks/" title="Тумба «Ливерпуль-Люкс»">Тумба «Ливерпуль-Люкс»</a>
                                            <br />
                                            Цена:                                <b>120 280</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr-1-liverpool_lux/" title="КР «Ливерпуль-Люкс»"><img src="/upload/resize_cache//medialibrary/b16/500_72_1/CueRack-Liverpool-Lux.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kr-1-liverpool_lux/" title="КР «Ливерпуль-Люкс»">КР «Ливерпуль-Люкс»</a>
                                            <br />
                                            Цена:                                <b>116 020</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/barnyy_stolik_liverpul/" title="«Ливерпуль-Люкс» барный"><img src="/upload/resize_cache//medialibrary/057/500_72_1/00_Ливерпуль_Барный_столик.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/barnyy_stolik_liverpul/" title="«Ливерпуль-Люкс» барный">«Ливерпуль-Люкс» барный</a>
                                            <br />
                                            Цена:                                <b>103 900</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/table_liverpool_lux/" title="«Ливерпуль-Люкс»"><img src="/upload/resize_cache//medialibrary/3a0/500_72_1/3a0e4b0cf8d4d23a8d464f6f75df01cf.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/table_liverpool_lux/" title="«Ливерпуль-Люкс»">«Ливерпуль-Люкс»</a>
                                            <br />
                                            Цена:                                <b>81 960</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_liverpul_lyuks/" title="Стул «Ливерпуль-Люкс»"><img src="/upload/resize_cache//medialibrary/cd9/500_72_1/Стул_Ливерпуль_люкс.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_liverpul_lyuks/" title="Стул «Ливерпуль-Люкс»">Стул «Ливерпуль-Люкс»</a>
                                            <br />
                                            Цена:                                <b>57 830</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_liverpul_lyuks/" title="Торшер «Ливерпуль-Люкс»"><img src="/upload/resize_cache//medialibrary/f27/500_72_1/Ливерпуль-Люкс.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_liverpul_lyuks/" title="Торшер «Ливерпуль-Люкс»">Торшер «Ливерпуль-Люкс»</a>
                                            <br />
                                            Цена:                                <b>36 620</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/liverpul_lyuks/" title="«Ливерпуль-Люкс»"><img src="/upload/resize_cache//medialibrary/8ab/500_72_1/01_Lamp-Liverpool-lux.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/liverpul_lyuks/" title="«Ливерпуль-Люкс»">«Ливерпуль-Люкс»</a>
                                            <br />
                                            Цена:                                <b>31 415</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_liverpul_lyuks/" title="«Ливерпуль-Люкс»"><img src="/upload/resize_cache//medialibrary/757/500_72_1/1200_Framer-Liverpool.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_pod_kartinu_liverpul_lyuks/" title="«Ливерпуль-Люкс»">«Ливерпуль-Люкс»</a>
                                            <br />
                                            Цена:                                <b>21 550</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_liverpul_lyuks/" title="Бра «Ливерпуль-Люкс»"><img src="/upload/resize_cache//medialibrary/ccd/500_72_1/Ливерпуль_люкс_new.png" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_liverpul_lyuks/" title="Бра «Ливерпуль-Люкс»">Бра «Ливерпуль-Люкс»</a>
                                            <br />
                                            Цена:                                <b>18 300</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/mirror_liverpool_lux/" title="«Ливерпуль-Люкс»"><img src="/upload/resize_cache//medialibrary/8cf/500_72_1/8cf80d0feab7f4ef67e8e633cdec20de.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/mirror_liverpool_lux/" title="«Ливерпуль-Люкс»">«Ливерпуль-Люкс»</a>
                                            <br />
                                            Цена:                                <b>13 616</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_liverpool_lux/" title="Полка «Ливерпуль-Люкс»"><img src="/upload/resize_cache//medialibrary/c73/500_72_1/1200_Shelf-Liverpool-Lux.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polka_liverpool_lux/" title="Полка «Ливерпуль-Люкс»">Полка «Ливерпуль-Люкс»</a>
                                            <br />
                                            Цена:                                <b>11 416</b> руб.
                                        </p></li>
                                </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "63px;" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                        </div>
                        <div class="main float-right width772 pos-relative center-right collection_list">
                            <span class="h3">
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_baron_lyuks/">Барон-Люкс</a>
                            </span>
                            <a onClick={(event) => {
                                event.preventDefault()
                                let link = event.target.href.split("good")[1]

                                navigate(`/bilyardCollection${link}`)
                            }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_baron_lyuks/" title="Барон-Люкс"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/f38/370_Interior-Baron-Lux.jpg');" }}></div></a>
                            <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/177/good/baron_lyuks/" title="Барон-Люкс"><img src="/upload/resize_cache//medialibrary/7ba/500_72_1/01_2019_Tb_Baron-Lux.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/177/good/baron_lyuks/" title="Барон-Люкс">Барон-Люкс</a>
                                            <br />
                                            Цена от                                <b>270 520</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/450/good/stolik_baron_lyuks/" title="«Барон-Люкс»"><img src="/upload/resize_cache//medialibrary/c0c/500_72_1/600_Table-Baron-lux.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/450/good/stolik_baron_lyuks/" title="«Барон-Люкс»">«Барон-Люкс»</a>
                                            <br />
                                            Цена:                                <b>86 450</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_baron_lyuks/" title="«Барон-Люкс»"><img src="/upload/resize_cache//medialibrary/681/500_72_1/2000_Aristokrat_Lux_chameleon.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_baron_lyuks/" title="«Барон-Люкс»">«Барон-Люкс»</a>
                                            <br />
                                            Цена:                                <b>37 920</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_baron_lyuks/" title="Торшер «Барон-Люкс»"><img src="/upload/resize_cache//medialibrary/3ea/500_72_1/Император.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_baron_lyuks/" title="Торшер «Барон-Люкс»">Торшер «Барон-Люкс»</a>
                                            <br />
                                            Цена:                                <b>36 620</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/239/good/zerkalo_baron_lyuks/" title="«Барон-Люкс»"><img src="/upload/resize_cache//medialibrary/749/500_72_1/1000_Mirror-Baron-Lux.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/239/good/zerkalo_baron_lyuks/" title="«Барон-Люкс»">«Барон-Люкс»</a>
                                            <br />
                                            Цена:                                <b>32 040</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/taburet_prezident/" title="Табурет «Президент»"><img src="/upload/resize_cache//medialibrary/a89/500_72_1/Табурет_мягкий.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/taburet_prezident/" title="Табурет «Президент»">Табурет «Президент»</a>
                                            <br />
                                            Цена:                                <b>30 980</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/239/good/rama_pod_kartinu_baron_lyuks/" title="«Барон-Люкс»"><img src="/upload/resize_cache//medialibrary/49f/500_72_1/1000_Frame-Baron-Lux.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/239/good/rama_pod_kartinu_baron_lyuks/" title="«Барон-Люкс»">«Барон-Люкс»</a>
                                            <br />
                                            Цена:                                <b>21 250</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_baron-lux/" title="Киевница «Барон-Люкс»    "><img src="/upload/resize_cache//medialibrary/ce9/500_72_1/Киевница-К-7_02.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_baron-lux/" title="Киевница «Барон-Люкс»    ">Киевница «Барон-Люкс»    </a>
                                            <br />
                                            Цена:                                <b>19 410</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_baron_lyuks/" title="Бра «Барон-Люкс»"><img src="/upload/resize_cache//medialibrary/720/500_72_1/Император_new.png" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_baron_lyuks/" title="Бра «Барон-Люкс»">Бра «Барон-Люкс»</a>
                                            <br />
                                            Цена:                                <b>18 300</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polochka_baron_lyuks/" title="Полка «Барон-Люкс»"><img src="/upload/resize_cache//medialibrary/278/500_72_1/П3.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/192/good/polochka_baron_lyuks/" title="Полка «Барон-Люкс»">Полка «Барон-Люкс»</a>
                                            <br />
                                            Цена:                                <b>8 530</b> руб.
                                        </p></li>
                                </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "100px;" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                        </div>
                        <div class="main float-right width772 pos-relative center-right collection_list">
                            <span class="h3">
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kollecia_high_style_lux/">High-Style Lux</a>
                                <span class="label">Новинка</span>            </span>
                            <a onClick={(event) => {
                                event.preventDefault()
                                let link = event.target.href.split("good")[1]

                                navigate(`/bilyardCollection${link}`)
                            }} href="https://www.fabrika-start.ru/catalog/sect/175/good/kollecia_high_style_lux/" title="High-Style Lux"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/10d/High-Style%20Lux.png');" }}></div></a>
                            <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/176/good/high_style_lux/" title="High-Style Lux"><img src="/upload/resize_cache//medialibrary/df1/500_72_1/Tb_High-Style-Lux_01-Iwan-Simonis-760-Grey.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/176/good/high_style_lux/" title="High-Style Lux">High-Style Lux</a>
                                            <br />
                                            Цена от                                <b>642 980</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_high_style_lux/" title="«High-Style Lux»"><img src="/upload/resize_cache//medialibrary/659/500_72_1/CueRack_High-Style-Lux_02.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_high_style_lux/" title="«High-Style Lux»">«High-Style Lux»</a>
                                            <br />
                                            Цена:                                <b>234 500</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_high_style_lux/" title="Диван «High-Style Lux»"><img src="/upload/resize_cache//medialibrary/a93/500_72_1/диван_High-Style-Lux.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_high_style_lux/" title="Диван «High-Style Lux»">Диван «High-Style Lux»</a>
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_high_style_lux/" title="Кресло «High-Style Lux»"><img src="/upload/resize_cache//medialibrary/575/500_72_1/кресло_High-Style-Lux.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_high_style_lux/" title="Кресло «High-Style Lux»">Кресло «High-Style Lux»</a>
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/NEO_high_style_lux/" title="«High-Style Lux»"><img src="/upload/resize_cache//medialibrary/ef4/500_72_1/светильник_High-Style-Lux_01 (1).jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/NEO_high_style_lux/" title="«High-Style Lux»">«High-Style Lux»</a>
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_high_style_lux/" title="«High-Style Lux»"><img src="/upload/resize_cache//medialibrary/5ae/500_72_1/зеркало_High-Style-Lux.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_high_style_lux/" title="«High-Style Lux»">«High-Style Lux»</a>
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_high_style_lux/" title="Стул «High-Style Lux»"><img src="/upload/resize_cache//medialibrary/649/500_72_1/стул_High-Style-Lux.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_high_style_lux/" title="Стул «High-Style Lux»">Стул «High-Style Lux»</a>
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_high_style_lux/" title="«High-Style Lux»"><img src="/upload/resize_cache//medialibrary/e49/500_72_1/рама_High-Style-Lux.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_high_style_lux/" title="«High-Style Lux»">«High-Style Lux»</a>
                                        </p></li>
                                </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "137px;" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                        </div>

                        <div class="main float-right width772 pos-relative center-right collection_list">
                            <span class="h3">
                                <a onClick={(event) => {
                                    event.preventDefault()
                                    let link = event.target.href.split("good")[1]

                                    navigate(`/bilyardCollection${link}`)
                                }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_high_style/">High-Style</a>
                                <span class="label">Новинка</span>            </span>
                            <a onClick={(event) => {
                                event.preventDefault()
                                let link = event.target.href.split("good")[1]

                                navigate(`/bilyardCollection${link}`)
                            }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_high_style/" title="High-Style"><div id="preview250" class="with-border" style={{ backgroundImage: "url('/upload/iblock/b4d/High-Style%20%281%29.png');" }}></div></a>
                            <div class="all_goods_in_collection jspScrollable" style={{ overflow: "hidden", padding: "0px", width: "405px;" }} tabindex="0">

                                <div class="jspContainer" style={{ width: "405px", height: "270px" }}><div class="jspPane" style={{ padding: "0px", width: "385px", top: "0px;" }}><ul class="related-products tables">
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/176/good/high_style/" title="High-Style"><img src="/upload/resize_cache//medialibrary/7a8/500_72_1/Tb_High-Style_01.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/176/good/high_style/" title="High-Style">High-Style</a>
                                            <br />
                                            Цена от                                <b>490 190</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_highstyle/" title="Киевница «High-Style»"><img src="/upload/resize_cache/medialibrary/542/500_72_1/Киевница_High-Style_К-20_02.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/966/good/kievnitsa_highstyle/" title="Киевница «High-Style»">Киевница «High-Style»</a>
                                            <br />
                                            Цена:                                <b>241 420</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/766/good/high_style_neo/" title="«High-Style»"><img src="/upload/resize_cache//medialibrary/1ea/500_72_1/светильник_High-Style_превью.png" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/766/good/high_style_neo/" title="«High-Style»">«High-Style»</a>
                                            <br />
                                            Цена:                                <b>64 300</b> руб.
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_high_style/" title="«High-Style»"><img src="/upload/resize_cache//medialibrary/2b4/500_72_1/зеркало_High-Style.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/240/good/zerkalo_high_style/" title="«High-Style»">«High-Style»</a>
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_high_style/" title="Стул «High-Style»"><img src="/upload/resize_cache//medialibrary/004/500_72_1/стул_High-Style.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/909/good/stul_high_style/" title="Стул «High-Style»">Стул «High-Style»</a>
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_high_style/" title="Диван «High-Style»"><img src="/upload/resize_cache//medialibrary/737/500_72_1/диван_High-Style.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1071/good/divan_high_style/" title="Диван «High-Style»">Диван «High-Style»</a>
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_high_style/" title="Кресло «High-Style»"><img src="/upload/resize_cache//medialibrary/a25/500_72_1/кресло_High-Style.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/1070/good/kreslo_high_style/" title="Кресло «High-Style»">Кресло «High-Style»</a>
                                        </p></li>
                                    <li>

                                        <div><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_high_style/" title="«High-Style»"><img src="/upload/resize_cache//medialibrary/fff/500_72_1/рама_High-Style.jpg" class="w178" /></a></div>
                                        <p><a href="https://www.fabrika-start.ru/catalog/sect/279/good/rama_high_style/" title="«High-Style»">«High-Style»</a>
                                        </p></li>
                                </ul></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style={{ height: "270px" }}><div class="jspDrag" style={{ height: "135px" }}><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div>
                        </div>



                        <br /><br />





                        <div class="main float-right width764 padding0088 section-description">
                            <table width="100%" class="nobordertable" cellspacing="1" cellpadding="1">
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign: "center" }}>
                                            <a onClick={(event) => {
                                                event.preventDefault()
                                                let link = event.target.href.split("good")[1]

                                                navigate(`/bilyardCollection${link}`)
                                            }} href="https://www.fabrika-start.ru/catalog/sect/175/www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_leo_ii/"><img width="227" src="/upload/medialibrary/bf5/collection01.jpg" height="141" border="0" /></a> <br />
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                            <a onClick={(event) => {
                                                event.preventDefault()
                                                let link = event.target.href.split("good")[1]

                                                navigate(`/bilyardCollection${link}`)
                                            }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_president_silver/"><img width="227" src="/upload/medialibrary/9c5/collection02.jpg" height="141" border="0" /></a> <br />
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                            <a onClick={(event) => {
                                                event.preventDefault()
                                                let link = event.target.href.split("good")[1]

                                                navigate(`/bilyardCollection${link}`)
                                            }} href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_liverpool/"><img width="227" alt="collection03.jpg" src="/upload/medialibrary/eb8/collection03.jpg" height="141" title="collection03.jpg" border="0" /></a> <br />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h2>Бильярдные коллекции Фабрики «Старт» для знатоков и ценителей искусства бильярда&nbsp;</h2>
                            <p>
                                Бильярдные коллекции Фабрики «Старт» - это уникальная галерея шедевров, которые создаются под изысканные интерьеры для самых требовательных клиентов. Они выглядят настолько роскошно, что достойны украшать экспозиции музеев. Дерево благородных пород, отделка дорогостоящими материалами, ручная резьба, авторская роспись. Бильярдные столы комплектуются известными, зачастую эксклюзивными материалами от ведущих мировых производителей и относятся к профессиональному и суперпрофессиональному уровню, обеспечивая игрокам высочайшее качество игры. <br />
                                Бильярдные коллекции «Старт» могут быть выполнены в эксклюзивной цветовой гамме, с отделкой сусальным золотом в 23 карата или серебряной потали, с эффектом искусственного старения (патинирование). Вся выкраска выполняется вручную в авторской технике. Обработка элементов лакокрасочными материалами проходит пять этапов. Мастера работают над поверхностью вручную, доводя до совершенства каждую деталь. <br />
                                Любая из коллекций гармонично дополнена аксессуарами: киевницей, светильником, барным столиком, зеркалом, полкой, необходимыми для создания неповторимой атмосферы единого пространства бильярдной комнаты.
                            </p>
                            <p>
                                Среди обладателей бильярдного эксклюзива от Фабрики «Старт»&nbsp; множество известных, статусных и публичных персон. Так, Николай Сергеевич Валуев <a target="_blank" href="https://www.fabrika-start.ru/news/company/id/44979/">по достоинству оценил</a> изготовленную персонально для него&nbsp;<a target="_blank" href="https://www.fabrika-start.ru/catalog/sect/177/%20https://www.fabrika-start.ru/catalog/sect/175/">бильярдную коллекцию</a>, резюмируя:<br />
                                «Результат работы говорит сам за себя. А мне приятно проводить время рядом с таким произведением бильярдного искусства.»<br />
                                Точнее и не скажешь. Эксклюзивные столы Фабрики «Старт»- это настоящие шедевры, не имеющие аналогов.
                            </p>
                            <p>
                                <br />
                                Все представленные бильярдные коллекции можно купить&nbsp;в любом&nbsp;<a href="https://www.fabrika-start.ru/contacts/" target="_blank">фирменном салоне</a>&nbsp;Фабрики, в розничных магазинах обширной&nbsp;<a href="https://www.fabrika-start.ru/dealers/" target="_blank">дилерской сети</a>&nbsp;«Старт»,&nbsp;а также с помощью оформления заказа непосредственно с сайта Фабрики «Старт».
                            </p>
                            <br />

                        </div>

                    </div>
                    <div class="with-breadcrumbs">
                    </div>
                </div>




                <LeftNavbar />
            </div >


            <br />
            <Info />
        </div >









    )
}

export default BilliardCollectionMain
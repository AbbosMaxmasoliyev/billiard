import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CollectionJson from "../json/collection.json"
import Header from '../components/heaader'
import Topmenu from '../components/topmenu'
import { CollectionWithHide } from '../components/collection'
import LeftNavbar from '../components/leftNavbar'
import Footer from '../components/Footer'
import Title from '../components/title'
import Titlebottom from '../components/titlebottom'
import MainComponent from '../components/mainComponent'
import Table from '../components/table'
import Opisaniye from '../components/opisaniye'
const CollectionBilyard = () => {
    const params = useParams()
    const data = CollectionJson.kollektsiya_ampir

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("authority", "www.fabrika-start.ru");
        myHeaders.append("Cookie", "PHPSESSID=48qca7st09qkaajmqdggndlg63");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
            mode: "no-cors"
        };

        fetch("https://www.fabrika-start.ru/catalog/good/get-spec.php?size=8&good=46855", requestOptions)
            .then(response => console.log(response.body))
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }, [])


    return (
        <>
            <Header />
            <Topmenu />
            <div id='container1'>
                <div className="no-index">
                    <div className='wrap-content-left'>
                        <div className="with-breadcrumbs">


                            <div className="bx-breadcrumb">
                                <div className="bx-breadcrumb-item" id="bx_breadcrumb_0" itemScope="" itemType="http://data-vocabulary.org/Breadcrumb">

                                    <a href="https://www.fabrika-start.ru/" title="Главная" itemProp="url">
                                        <span itemProp="title">Главная</span>
                                    </a>
                                </div>
                                <div className="bx-breadcrumb-item">
                                    <i className="fa fa-angle-right"></i>
                                    <span>Каталог товаров</span>
                                </div><div style={{ clear: "both" }}></div></div>
                            <Title name={data.name} />
                            <Titlebottom />
                        </div>
                        <MainComponent data={data.images} />
                        <Table data={data.table} sizesData={data.sizes} parametres={data.parametres} />
                        <Opisaniye />
                    </div>
                    <LeftNavbar />
                </div>


                <br />

            </div>
            <Footer />
        </>

    )
}

export default CollectionBilyard
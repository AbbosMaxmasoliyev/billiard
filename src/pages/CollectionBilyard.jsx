import React from 'react'
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
const CollectionBilyard = () => {
    const params = useParams()
    const data = CollectionJson.collection_high_style
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
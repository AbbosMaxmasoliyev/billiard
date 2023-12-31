import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CollectionJson from "../json/bilyardcollection.json"
import Header from '../components/heaader'
import Topmenu from '../components/topmenu'
import { CollectionWithHide } from '../components/collection'
import LeftNavbar from '../components/leftNavbar'
import Footer from '../components/Footer'
import Title from '../components/title'
import Titlebottom from '../components/titlebottom'
import MainComponent from '../components/mainComponent'
import Table from '../components/table'
import Properties from "../components/properties"
import BilyardCollectionLeftNavbar from './bilyardCollectionLeftNavbar'


const Svetilnik = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [data, setData] = useState()



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
                            {/* <Title name={data.name} /> */}
                            <Titlebottom />
                        </div>
                        
                    </div>
                    {/* <BilyardCollectionLeftNavbar click={(link) => {
                        navigate(`/bilyardCollection/${link}`)
                        setData(prev => prev = CollectionJson.filter(item => {
                            return Object.keys(item)[0] == link
                        })[0][link])
                        document.title = `Коллекция ${data.name}  `

                    }
                    } /> */}
                </div>


                <br />

            </div>
            <Footer />
        </>

    )
}

export default Svetilnik
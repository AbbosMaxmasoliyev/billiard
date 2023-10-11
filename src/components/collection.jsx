import React from 'react'
import * as IconName from "react-icons/bi"

const Collection = ({ data }) => {
    return (
        <div class="main float-right width772 pos-relative center-right section_175">
            <span class="h2">{data.name}</span>








            <ul class="related-products collection_tables" id="images">
                {
                    data.items.map((item, index) => (
                        <li key={index}>
                            <div className='item'>
                                <a href="https://www.fabrika-start.ru/catalog/sect/175/good/prezident_iii/" title="Президент III">
                                    {/* <img src={item.image} class="w366" /> */}
                                </a>
                            </div>
                            <div style={{ float: "left", position: "absolute", top: "-10px", right: "-80px" }}>
                                <a class="compare_btn" data-item="4419" style={{ textDecoration: "none" }} href="">
                                    <IconName.BiSolidBarChartAlt2 />
                                </a>

                                <a class="favor" data-item="4419" style={{ textDecoration: "none" }} href="">
                                    <IconName.BiHeart />
                                </a>
                            </div>
                            <a href="https://www.fabrika-start.ru/catalog/sect/175/good/prezident_iii/" title={item.name}>{item.name}</a>

                        </li>
                    ))
                }


                <li>и еще <b>17</b> наименований...<span class="h3" style={{ marginLeft: "0px", marginRight: "0px" }}><a rel="nofollow" href="https://www.fabrika-start.ru/catalog/sect/175/">Посмотреть все</a> »</span></li>
            </ul>





            <br /><br />
        </div>
    )
}

const CollectionPopular = ({ data }) => {
    return (<div class="main float-right width772 pos-relative center-right section_982">
        <span class="h2">{data.name} </span>








        {
            data.items && <ul class="related-products tables" id="images">

                {
                    data.items.map((item, index) => (


                        <li>
                            <div><a href="https://www.fabrika-start.ru/catalog/sect/982/good/kadet_kombi/" title={item.name}>
                                {/* <img src={item.image} class="w178" alt={item.name} /> */}
                            </a>
                            </div>
                            <div style={{ float: "left", position: "absolute", top: "-10px", right: "-80px" }}>
                                <a class="compare_btn" data-item="4419" style={{ textDecoration: "none" }} href="">
                                    <IconName.BiSolidBarChartAlt2 />
                                </a>

                                <a class="favor" data-item="4419" style={{ textDecoration: "none" }} href="">
                                    <IconName.BiHeart />
                                </a>
                            </div>
                            <a href="https://www.fabrika-start.ru/catalog/sect/982/good/kadet_kombi/" title={item.name}>{item.name}</a>
                            <br />
                            Цена                                 <b>{item.price}</b> ₽
                            <br /><br />
                            <a href="https://www.fabrika-start.ru/catalog/sect/982/good/kadet_kombi/" class="button72 btn_buy_in_detail" style={{ padding: "5px 20px", color: "#f7f0dd", textDecoration: "none", marginTop: "10px" }}>Купить</a>

                        </li>

                    ))
                }


                <li>и еще <b>11</b> наименований...</li>
            </ul>
        }





        <br /><br />
    </div>
    )
}

export { Collection, CollectionPopular }
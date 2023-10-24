import React from 'react'

const TableKii = ({ data, parametres }) => {

    // console.log(data);
    return (
        <div class="main float-right width772">
            <span class="h2">
                Кий Клубный 0-1            </span>


            <div class="float-right img-right">
                <noindex>
                    <a href="https://www.fabrika-start.ru/catalog/sect/185/good/0-1-r/" rel="nofollow" title="Перейти на страницу товара"><img alt="Кий Клубный 0-1" src="/upload/resize_cache//medialibrary/23c/178_250_1/Кий-Клубный-0-1-Р_02.jpg" /></a>                    </noindex>
            </div>

            {
                parametres && <dl className="parameters">

                    {
                        parametres.map((item, index) => {
                            if (item === "br") {
                                console.log(item);
                                return <br />
                            } else {

                                return (
                                    <>
                                        <dd>{item[0]}</dd>
                                        <dt>{item[1]}</dt>
                                    </>
                                )
                            }

                        })
                    }







                </dl>
            }


            {
                data[0] ? <table width="96%">

                    <thead style={{ backgroundColor: "#F4E7C8", color: "#000" }}>
                        <tr>
                            <td>Тип игры</td>
                            <td>Длина</td>
                            <td>Вес</td>
                            <td>Цена</td>
                            <td>Кредит Онлайн</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data?.map((sizeItem, index) => (
                                <tr className="spec-table-12" style={{ display: "table-row" }}>

                                    <td>{sizeItem.shape}</td>
                                    <td>{sizeItem.dlina} </td>
                                    <td>{sizeItem.weight}</td>
                                    <td><b>{sizeItem.price.replace("₽", "") * 130}</b> UZS</td>
                                    <td nowrap="nowrap" className="td_price" align="center">
                                        <input type="hidden" className="standart_price active" value="676 630" />
                                        <input type="hidden" className="special_price" value="0" />
                                        
                                    </td>

                                    <td>
                                        <input alt="36064-1" data-name="Бильярдный стол High-style" data-price="676630" data-url="/catalog/sect/175/good/collection_high_style/" data-img="/upload/resize_cache//medialibrary/7a8/500_72_1/Tb_High-Style_01.jpg" type="submit" className="order button72 js__detail-buy-btn btn_buy_in_detail" value="Купить" />
                                    </td>
                                </tr>
                            ))
                        }






                    </tbody>
                </table> : null
            }

        </div>
    )
}

export default TableKii
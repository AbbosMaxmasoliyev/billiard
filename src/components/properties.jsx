import React, { useEffect, useRef, useState } from 'react'

const Properties = ({ opisaniya, material, otziv }) => {
    const opisanieRef = useRef(null)
    useEffect(() => {
        opisanieRef.current.innerText = opisaniya
    }, [])
    const [activeClass, setActiveClass] = useState("opisaniya")
    console.log(material);
    return (
        <ul className="tabs float-right width774 ">
            {
                opisaniya && <li className={`tab-name tab-description ${activeClass == "opisaniya" ? "active" : null}`} onClick={() => setActiveClass(prev => prev = "opisaniya")}>Описание</li>
            }
            {
                material && <li className={`tab-name tab-description ${activeClass == "color" ? "active" : null}`} onClick={() => setActiveClass(prev => prev = "color")}>Цвет выкраски</li>
            }
            {otziv && <li className={`tab-name tab-description ${activeClass == "otziv" ? "active" : null}`} onClick={() => setActiveClass(prev => prev = "otziv")}>Отзывы</li>}
            {
                opisaniya ? <li id="tab-description" style={{ display: activeClass !== "opisaniya" ? "none" : null }}>
                    <div ref={opisanieRef} className="tab p80 width756 padding0088"></div>
                </li> : null
            }
            {
                material && <li id="tab-color" className="" style={{ display: activeClass !== "color" ? "none" : null }}>
                    <div className="tab width772 ">
                        <span className="h3">
                            <div className="color-part">Цвет выкраски: <a href="https://www.fabrika-start.ru/upload/medialibrary/43d/High-Style.jpg" className="click-color-table-cur" title="High-Style"><span className="curColorTableImg_big"><img src="/upload/resize_cache/medialibrary/43d/175_93_1/High-Style.jpg" border="0" /></span></a><span className="curColorTableId">High-Style</span></div>



                        </span>
                        <div style={{ clear: "both" }}></div>
                        <p><br />
                            <span className="h4">Цвета выкраски стола High-Style</span>
                        </p><ul className="colors_big">
                            <li className="selected"><a href="https://www.fabrika-start.ru/upload/medialibrary/43d/High-Style.jpg" className="click-color-table" title="High-Style" rel="High-Style"><img src="/upload/resize_cache/medialibrary/43d/175_93_1/High-Style.jpg" border="0" /></a></li>';
                        </ul>
                        <p><br />
                            <span className="h4">Стандартные цвета выкраски (цвет 11st рекомендуется для ясеня)</span>
                        </p><ul className="colors_big">
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/8af/1st.jpg" className="click-color-table" title="1st" rel="1st"><img src="/upload/resize_cache/medialibrary/8af/175_93_1/1st.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/cfd/2st.jpg" className="click-color-table" title="2st" rel="2st"><img src="/upload/resize_cache/medialibrary/cfd/175_93_1/2st.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/b5e/3st.jpg" className="click-color-table" title="3st" rel="3st"><img src="/upload/resize_cache/medialibrary/b5e/175_93_1/3st.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/753/4st.jpg" className="click-color-table" title="4st" rel="4st"><img src="/upload/resize_cache/medialibrary/753/175_93_1/4st.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/3cc/5st.jpg" className="click-color-table" title="5st" rel="5st"><img src="/upload/resize_cache/medialibrary/3cc/175_93_1/5st.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/a6b/6st.jpg" className="click-color-table" title="6st" rel="6st"><img src="/upload/resize_cache/medialibrary/a6b/175_93_1/6st.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/ae6/7st.jpg" className="click-color-table" title="7st" rel="7st"><img src="/upload/resize_cache/medialibrary/ae6/175_93_1/7st.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/3f4/11st.jpg" className="click-color-table" title="11st" rel="11st"><img src="/upload/resize_cache/medialibrary/3f4/175_93_1/11st.jpg" border="0" /></a></li>';
                        </ul>
                        <p><br />
                            <span className="h4">Эксклюзивные цвета выкраски (наносятся на массив ясеня, дуба) +10% к стоимости</span>
                        </p><ul className="colors_big">
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/075/1ex.jpg" className="click-color-table" title="1ex" rel="1ex"><img src="/upload/resize_cache/medialibrary/075/175_93_1/1ex.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/df2/2ex.jpg" className="click-color-table" title="2ex" rel="2ex"><img src="/upload/resize_cache/medialibrary/df2/175_93_1/2ex.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/f59/3ex.jpg" className="click-color-table" title="3ex" rel="3ex"><img src="/upload/resize_cache/medialibrary/f59/175_93_1/3ex.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/82b/4ex.jpg" className="click-color-table" title="4ex" rel="4ex"><img src="/upload/resize_cache/medialibrary/82b/175_93_1/4ex.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/6fa/5ex.jpg" className="click-color-table" title="5ex" rel="5ex"><img src="/upload/resize_cache/medialibrary/6fa/175_93_1/5ex.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/3c3/6ex.jpg" className="click-color-table" title="6ex" rel="6ex"><img src="/upload/resize_cache/medialibrary/3c3/175_93_1/6ex.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/9c3/7ex.jpg" className="click-color-table" title="7ex" rel="7ex"><img src="/upload/resize_cache/medialibrary/9c3/175_93_1/7ex.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/581/8ex.jpg" className="click-color-table" title="8ex" rel="8ex"><img src="/upload/resize_cache/medialibrary/581/175_93_1/8ex.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/dac/9ex.jpg" className="click-color-table" title="9ex" rel="9ex"><img src="/upload/resize_cache/medialibrary/dac/175_93_1/9ex.jpg" border="0" /></a></li>';
                        </ul>
                        <p><br />
                            <span className="h4">Патинированные цвета выкраски (наносятся на массив ясеня, дуба) +10% к стоимости</span>
                        </p><ul className="colors_big">
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/267/0p.jpg" className="click-color-table" title="0p" rel="0p"><img src="/upload/resize_cache/medialibrary/267/175_93_1/0p.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/515/1p.jpg" className="click-color-table" title="1p" rel="1p"><img src="/upload/resize_cache/medialibrary/515/175_93_1/1p.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/c05/2p.jpg" className="click-color-table" title="2p" rel="2p"><img src="/upload/resize_cache/medialibrary/c05/175_93_1/2p.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/677/3p.jpg" className="click-color-table" title="3p" rel="3p"><img src="/upload/resize_cache/medialibrary/677/175_93_1/3p.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/b63/4p.jpg" className="click-color-table" title="4p" rel="4p"><img src="/upload/resize_cache/medialibrary/b63/175_93_1/4p.jpg" border="0" /></a></li>';
                        </ul>
                        <p><br />
                            <span className="h4">Авторские цвета выкраски (а01,а02,а03)+15% к стоимости (craquelure01,02)+20% к стоимости</span>
                        </p><ul className="colors_big">
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/146/craquelure_01.jpg" className="click-color-table" title="craquelure_01" rel="craquelure_01"><img src="/upload/resize_cache/medialibrary/146/175_93_1/craquelure_01.jpg" border="0" /></a></li>';
                            <li><a href="https://www.fabrika-start.ru/upload/medialibrary/3a9/craquelure_02.jpg" className="click-color-table" title="craquelure_02" rel="craquelure_02"><img src="/upload/resize_cache/medialibrary/3a9/175_93_1/craquelure_02.jpg" border="0" /></a></li>';
                        </ul>




                    </div>



                </li>
            }


            <li id="tab-reviews" style={{ display: activeClass !== "otziv" ? "none" : null }}>
                <div className="tab width772 tab-reviews-content">
                    <div style={{ padding: "20px", minHeight: "600px" }}>

                        <div className="reviews_wrapper">






                            <div className="review_send_result">
                                Благодарим за оставленный отзыв.
                            </div>

                            <div className="review_wrapper">

                                <form id="review-form" action="index.html" method="post">
                                    <h2>Оставьте ваш отзыв</h2>
                                    <div id="rating">
                                        <fieldset className="rating">
                                            <input type="radio" checked="" id="star5" name="rating" value="5" /><label className="full" for="star5"></label>
                                            <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" for="star4half"></label>
                                            <input type="radio" id="star4" name="rating" value="4" /><label className="full" for="star4"></label>
                                            <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" for="star3half"></label>
                                            <input type="radio" id="star3" name="rating" value="3" /><label className="full" for="star3"></label>
                                            <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" for="star2half"></label>
                                            <input type="radio" id="star2" name="rating" value="2" /><label className="full" for="star2"></label>
                                            <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half"></label>
                                            <input type="radio" id="star1" name="rating" value="1" /><label className="full" for="star1"></label>
                                            <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" for="starhalf"></label>
                                        </fieldset>
                                    </div>


                                    <div className="form-group">
                                        <label className="control-label" for="review">Ваш отзыв:</label>
                                        <textarea className="form-control" rows="10" placeholder="Текст отзыва" name="review" id="review"></textarea>
                                        <span id="reviewInfo" className="help-block pull-right">
                                            <span id="remaining">999</span> доступно символов
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <label for="name">Ваше имя:</label>
                                        <input className="form-control" type="text" placeholder="Введите ваше имя" name="name" id="name" value="" />
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Электронная почта:</label>
                                        <input className="form-control" type="text" placeholder="Введите адрес вашей электронной почты" name="email" id="email" value="" />
                                    </div>


                                </form>
                                <button id="review_btn">Отправить отзыв</button>


                            </div>
                        </div>

                        <br />

                    </div>
                </div>
            </li>


        </ul>
    )
}

export default Properties
import React from 'react'

const Opisaniye = ({ title, opisaniyeInfo=[] }) => {
    return (
        <div class="tabs float-right width774 ">
            <a name="colors" class="" href=""></a>
            <li class="tab-name tab-description tab-active">Описание</li>

            {opisaniyeInfo.map((item, index) => {
                if (index == 0) {
                    return(
                        <li id="tab-description" style={{ display: "inline-block" }}>
                        <div class="tab p80 width756 padding0088"><h2>Высшее качество имперской роскоши, помпезности и торжественности в едином стиле ампир.<br />
                        </h2>
                            <br />
                            Коллекция «Ампир» – восхитительное сочетание высшего качества, имперской роскоши, помпезности и торжественности в едином стиле ампир.<br />
                            Дизайн коллекции передает точную стилистику одноименного стиля, зародившегося в искусстве в начале XIX века, во времена империи Наполеона. Из Франции стиль быстро распространился по всей Европе и за ее пределы. Роскошь в стиле ампир всегда выступает на первый план.&nbsp;&nbsp;<br />
                            Коллекция построена таким образом, что все предметы в ней строго сочетаются между собой. Общее впечатление призвано подчеркивать грандиозную пышность, монументальность, торжественную парадность.<br />
                            Бильярдный стол&nbsp;«Ампир» - это стол премиум уровня. Он сосредоточил в себе лучшие конструктивные характеристики, передовые технологии изготовления, эксклюзивность комплектующих, ценность материалов и представляет собой высокую категорию игровых качеств. <br />
                            Коллекция придется по вкусу поклонникам изящества и элегантной роскоши. Бильярд с ручной резьбой, изобилием резных элементов декора изготавливается из отборного ясеня и дуба мастерами Фабрики.&nbsp; &nbsp;
                            <p>
                                <br />
                            </p></div>
                    </li>
                    )
                }
                
            })}
           
            <li id="tab-video" class="" style={{ display: "none" }}>
                <div class="tab width772 tab-video-content">
                    <iframe title="YouTube video player" width="550" height="330" src="https://www.youtube.com/embed/7QGUHuG7cMw" allow="autoplay; encrypted-media" frameborder="0" allowfullscreen=""></iframe>        </div>
            </li>


            <li id="tab-reviews" style={{ display: "none" }}>
                <div class="tab width772 tab-reviews-content">
                    <div style={{ padding: "20px", minHeight: "600px" }}>

                        <div class="reviews_wrapper">




                            <div class="review_send_result">
                                Благодарим за оставленный отзыв.
                            </div>

                            <div class="review_wrapper">

                                <form id="review-form" action="index.html" method="post">
                                    <h2>Оставьте ваш отзыв</h2>
                                    <div id="rating">

                                    </div>


                                    <div class="form-group">
                                        <label class="control-label" for="review">Ваш отзыв/:</label>
                                        <textarea class="form-control" rows="10" placeholder="Текст отзыва" name="review" id="review"></textarea>
                                        <span id="reviewInfo" class="help-block pull-right">
                                            <span id="remaining">999</span> доступно символов
                                        </span>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Ваше имя/:</label>
                                        <input class="form-control" type="text" placeholder="Введите ваше имя" name="name" id="name" value="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Электронная почта/:</label>
                                        <input class="form-control" type="text" placeholder="Введите адрес вашей электронной почты" name="email" id="email" value="" />
                                    </div>


                                </form>
                                <button id="review_btn">Отправить отзыв</button>


                            </div>
                        </div>

                        <br />

                    </div>
                </div>
            </li>

            <li id="tab-delivery" style={{ display: "none" }}>
                <div class="tab width772 tab-reviews-content">
                    <div style={{ padding: "20px", minHeight: "250px" }}>
                        <p><br />Стоимость доставки товара рассчитывает индивидуально, и зависит от:
                            <br />
                        </p><ul>
                            <li>стоимости заказа </li>
                            <li>региона покупателя</li>
                            <li>типа доставки и Транспортной Компании</li>
                            <li>дополнительных требований к перевозке данного типа товара и наличию обрешетки.</li>
                            <br /><br />

                            <i><b>Стоимость доставки не входит в состав заказа при его оформлении на нашем сайте и оплачивается покупателем отдельно.</b></i>
                            <p></p>
                        </ul></div>
                </div>
            </li>
        </div>
    )
}

export default Opisaniye
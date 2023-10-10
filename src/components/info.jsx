import React, { useState } from 'react'

const Info = () => {
    const [active, setActive] = useState(false)

    return (



        <div class="wrap-content-center">
            <div class="main">
                <div class="js__text-spoiler corr__text-spoiler" data-open="false">
                    <div class="js__text-spoiler-intro">
                        <h1>Столы бильярдные </h1>
                        <h2> Подтвержденные стандарты качества бильярдных столов от производителя</h2>
                        <p>
                            Фабрика «Старт» предлагает широкий каталог бильярдных столов и оборудования под специфику и индивидуальные требования каждого проекта. Налаженная производственная база и современная система контроля качества выпускаемой продукции позволяют нам гарантировать доступные условия сотрудничества с соблюдением заявленных требований и оперативной поставкой заказа в любые регионы России и страны ближнего зарубежья.
                        </p>
                        <p>
                            Для желающих купить бильярдный стол можем предложить возможности знакомства и выбора продукции во всех мегаполисах страны в наших фирменных салонах.
                        </p>
                        <p>
                            Также возможность бильярдный стол купить доступна и для наших клиентов из ближнего зарубежья благодаря налаженному сотрудничеству с надежными дилерами – включая стабильные поставки сертифицированной продукции на рынки Белоруссии, Узбекистана, Казахстана и Киргизии.
                        </p>
                    </div>
                    {active ? <div class="js__text-spoiler-text" style={{ display: "block" }}>
                        <p>
                        </p>
                        <h2>Широкий ассортимент для каждого проекта – бильярдный стол, оборудование и необходимые комплектующие</h2>
                        <p>
                            Надежность бильярдных столов и комплектующих Фабрика «Старт» подтверждена 20 годами стабильного производства и бесперебойных поставок. В своем каталоге мы объединяем более 200 моделей бильярдных столов под специфику и требования каждого покупателя.
                        </p>
                        <p>
                            Для желающих бильярдный стол купить может быть индивидуально подобран подходящий баланс характеристик и цен как для эксклюзивных проектов, профессиональных решений, так и бюджетных вариантов. В своей работе ориентируемся на возможности и требования каждого покупателя, поэтому ассортимент оборудования представлен от бюджетных позиций класса эконом до эксклюзивных авторских разработок.
                        </p>
                        <p>
                            Подтвержденный баланс заявленного качества, гармоничного дизайна и оправданных цен позволили нашим столам и аксессуарам завоевать широкое признание на рынке среди любителей и профессионалов. Свой выбор в пользу бильярдных столов Фабрики «Старт» делают ведущие спортсмены бильярдного спорта, многократные чемпионы мира, бизнесмены, политики и звезды шоу-бизнеса.<br />
                            Безусловно, любой человек стремится приобретать качественные изделия по разумной, оправданной стоимости. Поэтому всегда следим за своей ценовой политикой, основываясь на трендах рынка и приоритетах покупателей.
                        </p>
                        <p>
                            Для желающих купить бильярдный стол и оборудование доступны необходимые подтверждения заявленного качества – престижные дипломы, сертификаты и безупречная репутация Фабрики «Старт» среди покупателей.
                        </p>
                        <h2>Надежный бильярдный стол и оборудование с соблюдением заявленных параметров – собственное производство</h2>
                        <p>
                            В основе надежных решений от Фабрики «Старт» – регулярное внедрение инновационных подходов и технологий в деятельности предприятия, с постоянной модернизацией оборудования. Обеспечиваем для своих заказчиков возможность купить бильярдные столы, мебель и аксессуары с обязательным соблюдением заявленных параметров и характеристик.
                        </p>
                        <p>
                            Нашим специалистам известны все тонкости успешной, комплексной работы с деревом. В том числе собственный арсенал по сушке, обработке древесины, ставка делается в пользу долговечных сортов, лучших пород, отбора древесины. Совершенствование игровых параметров выпускаемого оборудования входит в компетенцию отдельного подразделения. Работа строится на внедрении ведущих стандартов и новых тенденций игровой индустрии и своих авторских разработок.
                        </p>
                        <p>
                            Обязательным условием постоянного прогресса нашего производства становятся опытные, внимательные технические консультанты – заслуженные тренеры, спортсмены, чемпионы мира и Европы, понимающие все тонкости идеальной игры. Возможности предприятия дополнены и своей экспериментальной лабораторией, которая уже зарекомендовала себя эксклюзивными решениями и новинками в мире профессионального спорта.
                        </p>
                        <h2>Купить бильярдные столы от Фабрики «Старт», проверенные турнирами мирового масштаба</h2>
                        <p>
                            Для желающих купить бильярдный стол наши специалисты предлагают только качественное, проверенное на практике оборудование. Надежность и высокие параметры бильярда от Фабрики «Старт» подтверждены многократными международными турнирами высочайшего уровня::
                        </p>
                        <ul style={{ listStyle: "disc", paddingLeft: "16px" }}>
                            <li><a href="https://www.fabrika-start.ru/news/sport/id/12981/">Всемирные V Азиатские игры - 2017</a>; </li>
                            <li>Чемпионаты мира <a href="https://www.fabrika-start.ru/news/sport/id/2899/">2009</a>, <a href="https://www.fabrika-start.ru/news/sport/id/2671/">2012</a>, <a href="https://www.fabrika-start.ru/news/sport/id/3691/">2013</a>, <a href="https://www.fabrika-start.ru/news/sport/id/4664/">2014</a>, <a href="https://www.fabrika-start.ru/news/sport/id/8837/">2015</a> , <a href="https://www.fabrika-start.ru/news/sport/id/9162/">2016</a>&nbsp;,<a target="_blank" href="https://www.fabrika-start.ru/news/sport/id/16503/">2018</a> годов;</li>
                            <li>Суперфиналы чемпионатов мира - <a href="https://www.fabrika-start.ru/news/sport/id/6690/">2015</a> и <a href="https://www.fabrika-start.ru/news/sport/id/9070/">2016</a> годов;</li>
                            <li><a href="https://www.fabrika-start.ru/news/sport/id/6827/">Открытый Чемпионат Азии - 2015</a>;</li>
                            <li><a href="https://www.fabrika-start.ru/news/sport/id/6799/">Командный чемпионат&nbsp;мира - 2015;</a></li>
                            <li><a href="https://www.fabrika-start.ru/news/sport/id/6799/"></a><a href="https://www.fabrika-start.ru/news/sport/id/2745/">Чемпионат&nbsp;Европы - 2012</a>;</li>
                            <li>Чемпионат России 2008 - 2012 и <a href="https://www.fabrika-start.ru/news/sport/id/6919/">2015</a> годов;</li>
                            <li>Кубки мира <a href="https://www.fabrika-start.ru/news/sport/id/2772/">2011</a> и <a href="https://www.fabrika-start.ru/news/sport/id/2765/">2012</a> годов;</li>
                            <li><a href="https://www.fabrika-start.ru/news/sport/id/6771/">Турнир&nbsp;за звание абсолютного чемпиона России - 2014</a>.</li>
                        </ul>
                        <p>
                            Оборудование для мировых и европейских первенств, сотрудничество с Международным комитетом по «Пирамиде», Федерацией бильярдного спорта России, различными региональными Федерациями и национальными структурами подтверждают надежный потенциал профессионального оборудования Фабрики «Старт».
                        </p>
                        <p>
                            Для удобства своих покупателей мы предлагаем широкий виртуальный каталог бильярдных столов, комплектующих и аксессуаров, подробные консультации менеджеров и готовность ответить на возникшие вопросы по указанным на сайте контактам..
                        </p>
                    </div> : null}
                    <button onClick={() => setActive(prev => prev = !prev)}>{active ? "Свернуть" : "Подробнее"}</button>
                </div>
            </div>
        </div>
    )
}

export default Info
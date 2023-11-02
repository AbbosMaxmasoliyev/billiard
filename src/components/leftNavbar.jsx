import React from 'react'
import { Link } from 'react-router-dom'

const LeftNavbar = () => {
    return (
        <div className="left">

            <div>
                <span className="h3">Бильярд</span>
                <Link to="/bilyardCollection/collection_high_style"><p>High-Style</p></Link>
                <Link to="/bilyardCollection/collection_hightech"><p>High-tech</p></Link>
                <Link to="/bilyardCollection/kollektsiya_ampir"><p>Ампир</p></Link>
                <Link to="/bilyardCollection/kollektsiya_baron_lyuks"><p>Барон-Люкс</p></Link>
                <Link to="/bilyardCollection/collection_veneciya"><p>Венеция</p></Link>
                <Link to="/bilyardCollection/kolekciya_grossmeyster"><p>Гроссмейстер</p></Link>
                <Link to="/bilyardCollection/kollektsiya_dragon"><p>Дракон</p></Link>
                <Link to="/bilyardCollection/kollektsiya_drakon_granzh"><p>Дракон Гранж</p></Link>
                <Link to="/bilyardCollection/collection_imperator"><p>Император</p></Link>
                <Link to="/bilyardCollection/collection_imperator_gold"><p>Император Голд</p></Link>
                <Link to="/bilyardCollection/kollektsiya_imperator_lyuks"><p>Император-Люкс</p></Link>
                <Link to="/bilyardCollection/leo"><p>Лео</p></Link>
                <Link to="/bilyardCollection/kollektsiya_leo_ii"><p>Лео II</p></Link>
                <Link to="/bilyardCollection/collection_liverpool"><p>Ливерпуль-Люкс</p></Link>
                <Link to="/bilyardCollection/morskaya"><p>Морская</p></Link>
                <Link to="/bilyardCollection/motsart_collection"><p>Моцарт</p></Link>
                <Link to="/bilyardCollection/kollektsiya_neapol"><p>Неаполь</p></Link>
                <Link to="/bilyardCollection/okhota_"><p>Охота</p></Link>
                <Link to="/bilyardCollection/collection_president"><p>Президент</p></Link>
                <Link to="/bilyardCollection/prezident_iii"><p>Президент III</p></Link>
                <Link to="/bilyardCollection/collection_president_silver"><p>Президент Сильвер</p></Link>
                <Link to="/bilyardCollection/kollektsiya_premer"><p>Премьер</p></Link>
                <Link to="/bilyardCollection/collection_renessans"><p>Ренессанс</p></Link>
                <Link to="/bilyardCollection/collection_renessans_gold"><p>Ренессанс Голд</p></Link>
                <Link to="/bilyardCollection/renessans_granzh"><p>Ренессанс Гранж</p></Link>
            </div>
            <div>
                <span className="h3 menu-section-root-item">Бильярдные столы</span>
                <Link className="menu-section-level-3" to="982"><p>Хиты продаж</p></Link>
                <Link className="menu-section-level-3" to="1017"><p>Современная серия</p></Link>
                <Link className="menu-section-level-3" to="177"><p>Эксклюзивная серия</p></Link>
                <Link className="menu-section-level-3" to="174"><p>Суперпрофессиональная серия</p></Link>
                <Link className="menu-section-level-3" to="professionalnye-/bilyardCollectionnyestoly/"><p>Профессиональная серия</p></Link>
                <Link className="menu-section-level-3" to="178"><p>Любительская серия</p></Link>
                <Link className="menu-section-level-3" to="180"><p>Игровая серия</p></Link>
                <Link className="menu-section-level-3" to="1057"><p>Сток предложения</p></Link>
            </div>

            <div>
                <span className="h3 menu-section-root-item">Светильники</span>
                <Link className="menu-section-level-3" to="941"><p>NEO</p></Link>
                <Link className="menu-section-level-3" to="745"><p>Evolution</p></Link>
                <Link className="menu-section-level-3" to="1041"><p>Лофт</p></Link>
                <Link className="menu-section-level-3" to="449"><p>Startbilliards</p></Link>
                <Link className="menu-section-level-3" to="442"><p>Аристократ-Люкс</p></Link>
                <Link className="menu-section-level-3" to="443"><p>Аристократ</p></Link>
                <Link className="menu-section-level-3" to="444"><p>Классика</p></Link>
                <Link className="menu-section-level-3" to="766"><p>Эксклюзивные светильники</p></Link>
                <Link className="menu-section-level-3" to="753"><p>Декоративное освещение</p></Link>
                <Link className="menu-section-level-4" to="1067"><p>Бра</p></Link>
                <Link className="menu-section-level-4" to="1069"><p>Настольные светильники</p></Link>
                <Link className="menu-section-level-4" to="1068"><p>Торшеры</p></Link>
                <Link className="menu-section-level-3" to="1044"><p>Для столов 6 футов</p></Link>
                <Link className="menu-section-level-3" to="1045"><p> Для столов 7 футов</p></Link>
                <Link className="menu-section-level-3" to="1046"><p>Для столов 8 футов</p></Link>
                <Link className="menu-section-level-3" to="1047"><p>Для столов 9 футов</p></Link>
                <Link className="menu-section-level-3" to="1048"><p>Для столов 10 футов</p></Link>
                <Link className="menu-section-level-3" to="1049"><p>Для столов 11 футов</p></Link>
                <Link className="menu-section-level-3" to="1050"><p>Для столов 12 футов</p></Link>
            </div>

            <div>
                <span className="h3 menu-section-root-item">Кии</span>
                <Link className="menu-section-level-3" to="1031"><p>Пирамида</p></Link>
                <Link className="menu-section-level-3" to="1032"><p>Пул</p></Link>
                <Link className="menu-section-level-3" to="1034"><p>Снукер</p></Link>
                <Link className="menu-section-level-3" to="1030"><p>Двусоставные</p></Link>
                <Link className="menu-section-level-3" to="1029"><p>Односоставные</p></Link>
                <Link className="menu-section-level-3" to="1033"><p>C удлинителем</p></Link>
                <Link className="menu-section-level-3" to="184"><p>Кии Мастера Рябова</p></Link>
                <Link className="menu-section-level-3" to="991"><p>Кии Мастера Якубович</p></Link>
                <Link className="menu-section-level-3" to="212"><p>Кии РУССКИЙ</p></Link>
                <Link className="menu-section-level-3" to="1061"><p>Кии Vortex</p></Link>
                <Link className="menu-section-level-3" to="185"><p>Кии Dinamika Billiards</p></Link>
                <Link className="menu-section-level-3" to="763"><p>Древко</p></Link>
            </div>

            <div>
                <span className="h3 menu-section-root-item">Киевницы</span>
                <Link className="menu-section-level-3" to="965"><p>Стандартные</p></Link>
                <Link className="menu-section-level-3" to="966"><p>Эксклюзивные</p></Link>
                <Link className="menu-section-level-3" to="1013"><p>Настенные</p></Link>
                <Link className="menu-section-level-3" to="1012"><p>Напольные</p></Link>
                <Link className="menu-section-level-3" to="1066"><p>Полки для шаров</p></Link>
            </div>

            <div>
                <span className="h3 menu-section-root-item">Шары</span>
                <Link className="menu-section-level-3" to="1008"><p>Start Billiards</p></Link>
                <Link className="menu-section-level-3" to="1054"><p>TAO-MI</p></Link>
                <Link className="menu-section-level-3" to="1006"><p>Dyna | spheres</p></Link>
                <Link className="menu-section-level-3" to="1009"><p>Пирамида</p></Link>
                <Link className="menu-section-level-3" to="1010"><p>Пул</p></Link>
                <Link className="menu-section-level-3" to="1011"><p>Снукер</p></Link>
            </div>

            <div>
                <span className="h3 menu-section-root-item">Аксессуары для стола</span>
                <Link className="menu-section-level-3" to="193"><p>Чехлы для столов</p></Link>
                <Link className="menu-section-level-3" to="1056"><p>Столешницы для столов</p></Link>
                <Link className="menu-section-level-3" to="195"><p>Треугольники</p></Link>
                <Link className="menu-section-level-3" to="1058"><p>Стулья бильярдные</p></Link>
                <Link className="menu-section-level-3" to="985"><p>Средства ухода</p></Link>
                <Link className="menu-section-level-3" to="235"><p>Турнирное оборудование</p></Link>
                <Link className="menu-section-level-3" to="229"><p>Системы учета времени</p></Link>
            </div>

            <div>
                <span className="h3 menu-section-root-item">Аксессуары для игрока</span>
                <Link className="menu-section-level-3" to="233"><p>Перчатки бильярдные</p></Link>
                <Link className="menu-section-level-3" to="220"><p>Часы</p></Link>
                <Link className="menu-section-level-3" to="228"><p>Тренажеры</p></Link>
                <Link className="menu-section-level-3" to="1060"><p>Прочие аксессуары</p></Link>
            </div>





            <div>
                <span className="h3 menu-section-root-item">Чехлы, тубусы для киев</span>
                <Link className="menu-section-level-3" to="1038"><p>Тубусы EVOLUTION</p></Link>
                <Link className="menu-section-level-3" to="861"><p>Тубусы Mercury</p></Link>
                <Link className="menu-section-level-3" to="452"><p>Тубусы Mercury-CLUB</p></Link>
                <Link className="menu-section-level-3" to="219"><p>Тубусы Mercury-PRO</p></Link>
                <Link className="menu-section-level-3" to="457"><p>Тубусы Mercury-DUO</p></Link>
                <Link className="menu-section-level-3" to="216"><p>Чехлы Start Billiards</p></Link>
                <Link className="menu-section-level-3" to="217"><p>Футляры DELUX</p></Link>
            </div>

            <div>
                <span className="h3 menu-section-root-item">Сукно</span>
                <Link className="menu-section-level-3" to="989"><p>Manchester</p></Link>
                <Link className="menu-section-level-3" to="1040"><p>Euro Pro</p></Link>
                <Link className="menu-section-level-3" to="990"><p>Iwan Simonis</p></Link>
            </div>

            <div>
                <span className="h3 menu-section-root-item">Комплектующие</span>
                <Link className="menu-section-level-3" to="202"><p>Плиты</p></Link>
                <Link className="menu-section-level-3" to="234"><p>Лузы</p></Link>
                <Link className="menu-section-level-3" to="232"><p>Бортовая резина</p></Link>
                <Link className="menu-section-level-3" to="1014"><p>Оборудование</p></Link>
            </div>

           
        </div>
    )
}

export default LeftNavbar
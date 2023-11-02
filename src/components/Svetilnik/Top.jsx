import React from "react";
import { useNavigate } from "react-router-dom";

const Top = () => {
  const navigate = useNavigate();
  function click(event) {
    event.preventDefault();
    let link = event.target.href.split("good")[1].replaceAll("/", "");
    console.log(link);
    navigate(`/svetilnik/${link}`);
  }
  return (
    <div class="with-breadcrumbs">
      <div class="bx-breadcrumb">
        <div
          class="bx-breadcrumb-item"
          id="bx_breadcrumb_0"
          itemscope=""
          itemtype="http://data-vocabulary.org/Breadcrumb"
          itemref="bx_breadcrumb_1"
        >
          <a
            href="https://www.fabrika-start.ru/"
            title="Главная"
            itemprop="url"
          >
            <span itemprop="title">Главная</span>
          </a>
        </div>
        <div
          class="bx-breadcrumb-item"
          id="bx_breadcrumb_1"
          itemscope=""
          itemtype="http://data-vocabulary.org/Breadcrumb"
          itemprop="child"
          itemref="bx_breadcrumb_2"
        >
          <i class="fa fa-angle-right"></i>
          <a
            href="https://www.fabrika-start.ru/catalog/"
            title="Каталог товаров"
            itemprop="url"
          >
            <span itemprop="title">Каталог товаров</span>
          </a>
        </div>
        <div
          class="bx-breadcrumb-item"
          id="bx_breadcrumb_2"
          itemscope=""
          itemtype="http://data-vocabulary.org/Breadcrumb"
          itemprop="child"
        >
          <i class="fa fa-angle-right"></i>
          <a
            href="https://www.fabrika-start.ru/catalog/sect/854/"
            title="
            onClick={click}Бильярд"
            itemprop="url"
          >
            <span itemprop="title">Бильярд</span>
          </a>
        </div>
        <div class="bx-breadcrumb-item">
          <i class="fa fa-angle-right"></i>
          <span>Светильники</span>
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
      &nbsp; &nbsp;
      <h1 class="float-right width772"> Светильники для бильярда </h1>
      <br />
      <a
        style={{
          float: "right",
          width: "150px",
          textAlign: "center",
          padding: "5px",
        }}
        class="button72"
        target="_blank"
        href="https://www.fabrika-start.ru/catgen/print.php?id=440"
      >
        Распечатать каталог
      </a>
      <ul class="pricefordownload float-right width772">
        <li style={{ lineHeight: "14px!important", width: "300px" }}>
          <a
            style={{ lineHeight: "14px!important;" }}
            href="https://www.fabrika-start.ru/upload/iblock/4bc/%D0%9F%D1%80%D0%B0%D0%B9%D1%81%20%D0%A0%D0%BE%D0%B7%D0%BD_%D0%B0%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B_05_10_2023.xls"
            target="_blank"
            class="excel"
          >
            Скачать прайс-лист на бильярдные аксессуары
          </a>
        </li>
      </ul>
      <div class="main float-right width772 pos-relative center-right section_941">
        <span class="h2">NEO</span>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/941/good/6_7_8_9_futov_temnye/"
          onClick={click}
          title="6,7,8,9 футов / темные"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "NEO_6_9_фт_секции3_тик_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/941/good/6_7_8_9_futov_temnye/"
            onClick={click}
            title="6,7,8,9 футов / темные"
            style={{ marginRight: "15px;" }}
          >
            6,7,8,9 футов / темные
          </a>
          цена
          <b> {15530 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/941/good/6_7_8_9_futov_temnye/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/941/good/6_7_8_9_futov_svetlye/"
          onClick={click}
          title="6,7,8,9 футов / светлые"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "NEO_6_9_фт_секции3_серый_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/941/good/6_7_8_9_futov_svetlye/"
            onClick={click}
            title="6,7,8,9 футов / светлые"
            style={{ marginRight: "15px;" }}
          >
            6,7,8,9 футов / светлые
          </a>
          цена
          <b> {15530 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/941/good/6_7_8_9_futov_svetlye/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/941/good/10_11_12_futov_svetlye/"
          onClick={click}
          title="10,11,12 футов / светлые"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "NEO_10_12_фт_секции4_серый_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/941/good/10_11_12_futov_svetlye/"
            onClick={click}
            title="10,11,12 футов / светлые"
            style={{ marginRight: "15px;" }}
          >
            10,11,12 футов / светлые
          </a>
          цена
          <b> {19120 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/941/good/10_11_12_futov_svetlye/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/941/good10_11_12_futov_temnye"
          onClick={click}
          title="10,11,12 футов / темные"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "NEO_10_12_фт_секции4_тик_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/941/good10_11_12_futov_temnye"
            onClick={click}
            title="10,11,12 футов / темные"
            style={{ marginRight: "15px;" }}
          >
            10,11,12 футов / темные
          </a>
          цена
          <b> {19120 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/941/good10_11_12_futov_temnye"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Новинка</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/941/good/high_style_neo/"
          onClick={click}
          title="«High-Style»"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "светильник_High-Style_превью.png"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/941/good/high_style_neo/"
            onClick={click}
            title="«High-Style»"
            style={{ marginRight: "15px;" }}
          >
            «High-Style»
          </a>
          цена
          <b> {64300 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/941/good/high_style_neo/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Новинка</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/941/good/NEO_high_style_lux/"
          onClick={click}
          title="«High-Style Lux»"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "светильник_High-Style-Lux_01 (1).jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/941/good/NEO_high_style_lux/"
            onClick={click}
            title="«High-Style Lux»"
            style={{ marginRight: "15px;" }}
          >
            «High-Style Lux»
          </a>
          цена
          <b> {68664 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/941/good/NEO_high_style_lux/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <br />
        <br />
      </div>
      <div class="main float-right width772 pos-relative center-right section_745">
        <span class="h2">Evolution</span>
        <span class="label label-in-cues">Акция</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/745/good/evolution_pvkh_6_8_futov/"
          onClick={click}
          title="EVOLUTION 6,7,8,9 футов /пвх"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "6_8_Evolution_pvh.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/745/good/evolution_pvkh_6_8_futov/"
            onClick={click}
            title="EVOLUTION 6,7,8,9 футов /пвх"
            style={{ marginRight: "15px;" }}
          >
            EVOLUTION 6,7,8,9 футов /пвх
          </a>
          цена
          <b> {15252 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/745/good/evolution_pvkh_6_8_futov/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/745/good/evolution_derevo_6_8_futov/"
          onClick={click}
          title="EVOLUTION 6,7,8,9 футов /дерево"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "6_8_Evolution_wood.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/745/good/evolution_derevo_6_8_futov/"
            onClick={click}
            title="EVOLUTION 6,7,8,9 футов /дерево"
            style={{ marginRight: "15px;" }}
          >
            EVOLUTION 6,7,8,9 футов /дерево
          </a>
          цена
          <b> {29310 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/745/good/evolution_derevo_6_8_futov/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Новинка</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/745/good/high_tech_evolution/"
          onClick={click}
          title="«High-tech»"
        >
          <img
            src={
              process.env.PUBLIC_URL + "/images/" + "10_12_Evolution_pvh.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/745/good/high_tech_evolution/"
            onClick={click}
            title="«High-tech»"
            style={{ marginRight: "15px;" }}
          >
            «High-tech»
          </a>
          цена
          <b> {41740 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/745/good/high_tech_evolution/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/745/good/evolution_pvkh_11_12_futov/"
          onClick={click}
          title="EVOLUTION 10,11,12 футов /пвх"
        >
          <img
            src={
              process.env.PUBLIC_URL + "/images/" + "10_12_Evolution_pvh.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/745/good/evolution_pvkh_11_12_futov/"
            onClick={click}
            title="EVOLUTION 10,11,12 футов /пвх"
            style={{ marginRight: "15px;" }}
          >
            EVOLUTION 10,11,12 футов /пвх
          </a>
          цена
          <b> {41740 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/745/good/evolution_pvkh_11_12_futov/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/745/good/ekzotik/"
          onClick={click}
          title="«Экзотик»"
        >
          <img
            src={
              process.env.PUBLIC_URL + "/images/" + "Evolution_Экзотик_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/745/good/ekzotik/"
            onClick={click}
            title="«Экзотик»"
            style={{ marginRight: "15px;" }}
          >
            «Экзотик»
          </a>
          цена
          <b> {51800 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/745/good/ekzotik/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/745/good/evolution_derevo_11_12_futov/"
          onClick={click}
          title="EVOLUTION 10,11,12 футов /дерево"
        >
          <img
            src={
              process.env.PUBLIC_URL + "/images/" + "10_12_Evolution_wood.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/745/good/evolution_derevo_11_12_futov/"
            onClick={click}
            title="EVOLUTION 10,11,12 футов /дерево"
            style={{ marginRight: "15px;" }}
          >
            EVOLUTION 10,11,12 футов /дерево
          </a>
          цена
          <b> {38310 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/745/good/evolution_derevo_11_12_futov/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Новинка</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/745/good/okhota_evolution/"
          onClick={click}
          title="«Охота»"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "Evolution_Ohota_00.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/745/good/okhota_evolution/"
            onClick={click}
            title="«Охота»"
            style={{ marginRight: "15px;" }}
          >
            «Охота»
          </a>
          цена
          <b> {61630 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/745/good/okhota_evolution/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Новинка</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/745/good/svetilnik_grossmeyster/"
          onClick={click}
          title="«Гроссмейстер»"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "Evolution_Grandmaster_01.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/745/good/svetilnik_grossmeyster/"
            onClick={click}
            title="«Гроссмейстер»"
            style={{ marginRight: "15px;" }}
          >
            «Гроссмейстер»
          </a>
          цена
          <b> {73960 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/745/good/svetilnik_grossmeyster/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <div class="show-more">
          и еще <b>3</b> наименования...
          <span class="h3">
            <a
              rel="nofollow"
              href="https://www.fabrika-start.ru/catalog/sect/745/"
            >
              Посмотреть все
            </a>{" "}
            »
          </span>
        </div>
        <br />
        <br />
      </div>
      <div class="main float-right width772 pos-relative center-right section_1041">
        <span class="h2">Лофт</span>
        <span class="label label-in-cues">Новинка</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1041/good/loft_6_7_8_9_futov_/"
          onClick={click}
          title="«Лофт» / 6,7,8,9 футов "
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "ЛОФТ_6-9_фт_00.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1041/good/loft_6_7_8_9_futov_/"
            onClick={click}
            title="«Лофт» / 6,7,8,9 футов "
            style={{ marginRight: "15px;" }}
          >
            «Лофт» / 6,7,8,9 футов{" "}
          </a>
          цена
          <b> {29230 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1041/good/loft_6_7_8_9_futov_/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <br />
        <br />
      </div>
      <div class="main float-right width772 pos-relative center-right section_449">
        <span class="h2">Startbilliards</span>

        <a
          href="https://www.fabrika-start.ru/catalog/sect/449/good/startbilliards_1_plafon/"
          onClick={click}
          title="1 плафон"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "01_1.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/449/good/startbilliards_1_plafon/"
            onClick={click}
            title="1 плафон"
            style={{ marginRight: "15px;" }}
          >
            1 плафон
          </a>
          цена
          <b> {2820 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/449/good/startbilliards_1_plafon/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/449/good/startbilliards_1_plafon_khrom/"
          onClick={click}
          title="1 плафон, хром"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "03_1.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/449/good/startbilliards_1_plafon_khrom/"
            onClick={click}
            title="1 плафон, хром"
            style={{ marginRight: "15px;" }}
          >
            1 плафон, хром
          </a>
          цена
          <b> {3240 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/449/good/startbilliards_1_plafon_khrom/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/449/good/startbilliards_1_plafon_zoloto/"
          onClick={click}
          title="1 плафон, золото"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "02_1.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/449/good/startbilliards_1_plafon_zoloto/"
            onClick={click}
            title="1 плафон, золото"
            style={{ marginRight: "15px;" }}
          >
            1 плафон, золото
          </a>
          цена
          <b> {3240 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/449/good/startbilliards_1_plafon_zoloto/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/449/good/startbilliards_2_plafona/"
          onClick={click}
          title="2 плафона"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "01_01_2.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/449/good/startbilliards_2_plafona/"
            onClick={click}
            title="2 плафона"
            style={{ marginRight: "15px;" }}
          >
            2 плафона
          </a>
          цена
          <b> {6670 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/449/good/startbilliards_2_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/449/good/startbilliards_2_plafona_zelenyy_zoloto/"
          onClick={click}
          title="2 плафона, зеленый/золото"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "02_01_2.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/449/good/startbilliards_2_plafona_zelenyy_zoloto/"
            onClick={click}
            title="2 плафона, зеленый/золото"
            style={{ marginRight: "15px;" }}
          >
            2 плафона, зеленый/золото
          </a>
          цена
          <b> {7170 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/449/good/startbilliards_2_plafona_zelenyy_zoloto/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/449/good/2_plafona_zoloto_khrom/"
          onClick={click}
          title="2 плафона, золото/хром"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "03_02_2.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/449/good/2_plafona_zoloto_khrom/"
            onClick={click}
            title="2 плафона, золото/хром"
            style={{ marginRight: "15px;" }}
          >
            2 плафона, золото/хром
          </a>
          цена
          <b> {8000 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/449/good/2_plafona_zoloto_khrom/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/449/good/2_plafona_khrom_khrom/"
          onClick={click}
          title="2 плафона,хром/хром"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "03_03_2.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/449/good/2_plafona_khrom_khrom/"
            onClick={click}
            title="2 плафона,хром/хром"
            style={{ marginRight: "15px;" }}
          >
            2 плафона,хром/хром
          </a>
          цена
          <b> {8000 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/449/good/2_plafona_khrom_khrom/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/449/good/startbilliards_3_plafona/"
          onClick={click}
          title="3 плафона"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "01_01_3.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/449/good/startbilliards_3_plafona/"
            onClick={click}
            title="3 плафона"
            style={{ marginRight: "15px;" }}
          >
            3 плафона
          </a>
          цена
          <b> {8930 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/449/good/startbilliards_3_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <div class="show-more">
          и еще <b>15</b> наименований...
          <span class="h3">
            <a
              rel="nofollow"
              href="https://www.fabrika-start.ru/catalog/sect/449/"
            >
              Посмотреть все
            </a>{" "}
            »
          </span>
        </div>

        <br />
        <br />
      </div>
      <div class="main float-right width772 pos-relative center-right section_442">
        <span class="h2">Аристократ-Люкс</span>

        <a
          href="https://www.fabrika-start.ru/catalog/sect/442/good/aristokrat_lyuks_3_plafona/"
          onClick={click}
          title="3 плафона"
        >
          <img
            src={
              process.env.PUBLIC_URL + "/images/" + "3_ARISTOKRAT_ЛЮКС_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/442/good/aristokrat_lyuks_3_plafona/"
            onClick={click}
            title="3 плафона"
            style={{ marginRight: "15px;" }}
          >
            3 плафона
          </a>
          цена
          <b> {23080 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/442/good/aristokrat_lyuks_3_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/442/good/aristokrat_lyuks_4_plafona/"
          onClick={click}
          title="4 плафона"
        >
          <img
            src={
              process.env.PUBLIC_URL + "/images/" + "4_ARISTOKRAT_ЛЮКС_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/442/good/aristokrat_lyuks_4_plafona/"
            onClick={click}
            title="4 плафона"
            style={{ marginRight: "15px;" }}
          >
            4 плафона
          </a>
          цена
          <b> {30930 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/442/good/aristokrat_lyuks_4_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/442/good/aristokrat_lyuks_5_plafonov/"
          onClick={click}
          title="5 плафонов"
        >
          <img
            src={
              process.env.PUBLIC_URL + "/images/" + "5_ARISTOKRAT_ЛЮКС_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/442/good/aristokrat_lyuks_5_plafonov/"
            onClick={click}
            title="5 плафонов"
            style={{ marginRight: "15px;" }}
          >
            5 плафонов
          </a>
          цена
          <b> {37950 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/442/good/aristokrat_lyuks_5_plafonov/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>

        <br />
        <br />
      </div>
      <div class="main float-right width772 pos-relative center-right section_443">
        <span class="h2">Аристократ</span>
        <span class="label label-in-cues">Акция</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/443/good/aristokrat_3_plafona/"
          onClick={click}
          title="3 плафона"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "3_ARISTOKRAT_00.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/443/good/aristokrat_3_plafona/"
            onClick={click}
            title="3 плафона"
            style={{ marginRight: "15px;" }}
          >
            3 плафона
          </a>
          цена
          <b> {9574 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/443/good/aristokrat_3_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Акция</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/443/good/aristokrat_4_plafona/"
          onClick={click}
          title="4 плафона"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "4_ARISTOKRAT_00.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/443/good/aristokrat_4_plafona/"
            onClick={click}
            title="4 плафона"
            style={{ marginRight: "15px;" }}
          >
            4 плафона
          </a>
          цена
          <b> {17657 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/443/good/aristokrat_4_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Акция</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/443/good/aristokrat_5_plafonov/"
          onClick={click}
          title="5 плафонов"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "5_ARISTOKRAT_00.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/443/good/aristokrat_5_plafonov/"
            onClick={click}
            title="5 плафонов"
            style={{ marginRight: "15px;" }}
          >
            5 плафонов
          </a>
          цена
          <b> {23994 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/443/good/aristokrat_5_plafonov/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <br />
        <br />
      </div>
      <div class="main float-right width772 pos-relative center-right section_444">
        <span class="h2">Классика</span>

        <a
          href="https://www.fabrika-start.ru/catalog/sect/444/good/klassika_3_plafona/"
          onClick={click}
          title="3 плафона/металл"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "3_KLASSIKA_00.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/444/good/klassika_3_plafona/"
            onClick={click}
            title="3 плафона/металл"
            style={{ marginRight: "15px;" }}
          >
            3 плафона/металл
          </a>
          цена
          <b> {11440 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/444/good/klassika_3_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/444/good/klassika_4_plafona/"
          onClick={click}
          title="4 плафона/металл"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "4_KLASSIKA_00.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/444/good/klassika_4_plafona/"
            onClick={click}
            title="4 плафона/металл"
            style={{ marginRight: "15px;" }}
          >
            4 плафона/металл
          </a>
          цена
          <b> {15020 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/444/good/klassika_4_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/444/good/klassika_i_3_plafona/"
          onClick={click}
          title="3 плафона/дерево"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "3_KLASSIKA_00.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/444/good/klassika_i_3_plafona/"
            onClick={click}
            title="3 плафона/дерево"
            style={{ marginRight: "15px;" }}
          >
            3 плафона/дерево
          </a>
          цена
          <b> {12870 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/444/good/klassika_i_3_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/444/good/klassika_6_plafonov/"
          onClick={click}
          title="6 плафонов/металл"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "6_KLASSIKA_00.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/444/good/klassika_6_plafonov/"
            onClick={click}
            title="6 плафонов/металл"
            style={{ marginRight: "15px;" }}
          >
            6 плафонов/металл
          </a>
          цена
          <b> {21460 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/444/good/klassika_6_plafonov/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/444/good/klassika_i_4_plafona/"
          onClick={click}
          title="4 плафона/дерево"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "4_KLASSIKA_00.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/444/good/klassika_i_4_plafona/"
            onClick={click}
            title="4 плафона/дерево"
            style={{ marginRight: "15px;" }}
          >
            4 плафона/дерево
          </a>
          цена
          <b> {16910 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/444/good/klassika_i_4_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/444/good/klassika_i_6_plafonov/"
          onClick={click}
          title="6 плафонов/дерево"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "6_KLASSIKA_00.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/444/good/klassika_i_6_plafonov/"
            onClick={click}
            title="6 плафонов/дерево"
            style={{ marginRight: "15px;" }}
          >
            6 плафонов/дерево
          </a>
          цена
          <b> {24380 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/444/good/klassika_i_6_plafonov/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>

        <br />
        <br />
      </div>
      <div class="main float-right width772 pos-relative center-right section_766">
        <span class="h2">Эксклюзивные светильники</span>
        <span class="label label-in-cues">Акция</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/766/good/liverpul_lyuks/"
          onClick={click}
          title="«Ливерпуль-Люкс»"
        >
          <img
            src={
              process.env.PUBLIC_URL + "/images/" + "01_Lamp-Liverpool-lux.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/766/good/liverpul_lyuks/"
            onClick={click}
            title="«Ливерпуль-Люкс»"
            style={{ marginRight: "15px;" }}
          >
            «Ливерпуль-Люкс»
          </a>
          цена
          <b> {25166 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/766/good/liverpul_lyuks/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_liverpul/"
          onClick={click}
          title="«Ливерпуль»"
        >
          <img
            src={
              process.env.PUBLIC_URL + "/images/" + "02_Lamp-Liverpool-lux.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_liverpul/"
            onClick={click}
            title="«Ливерпуль»"
            style={{ marginRight: "15px;" }}
          >
            «Ливерпуль»
          </a>
          цена
          <b> {34317 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_liverpul/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_baron_lyuks/"
          onClick={click}
          title="«Барон-Люкс»"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "2000_Aristokrat_Lux_chameleon.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_baron_lyuks/"
            onClick={click}
            title="«Барон-Люкс»"
            style={{ marginRight: "15px;" }}
          >
            «Барон-Люкс»
          </a>
          цена
          <b> {37920 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/766/good/svetilnik_baron_lyuks/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Новинка</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/766/good/high_tech_evolution/"
          onClick={click}
          title="«High-tech»"
        >
          <img
            src={
              process.env.PUBLIC_URL + "/images/" + "10_12_Evolution_pvh.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/766/good/high_tech_evolution/"
            onClick={click}
            title="«High-tech»"
            style={{ marginRight: "15px;" }}
          >
            «High-tech»
          </a>
          цена
          <b> {41740 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/766/good/high_tech_evolution/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/766/good/ekzotik/"
          onClick={click}
          title="«Экзотик»"
        >
          <img
            src={
              process.env.PUBLIC_URL + "/images/" + "Evolution_Экзотик_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/766/good/ekzotik/"
            onClick={click}
            title="«Экзотик»"
            style={{ marginRight: "15px;" }}
          >
            «Экзотик»
          </a>
          цена
          <b> {51800 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/766/good/ekzotik/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Новинка</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/766/good/okhota_evolution/"
          onClick={click}
          title="«Охота»"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "Evolution_Ohota_00.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/766/good/okhota_evolution/"
            onClick={click}
            title="«Охота»"
            style={{ marginRight: "15px;" }}
          >
            «Охота»
          </a>
          цена
          <b> {61630 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/766/good/okhota_evolution/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Новинка</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/766/good/high_style_neo/"
          onClick={click}
          title="«High-Style»"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "светильник_High-Style_превью.png"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/766/good/high_style_neo/"
            onClick={click}
            title="«High-Style»"
            style={{ marginRight: "15px;" }}
          >
            «High-Style»
          </a>
          цена
          <b> {64300 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/766/good/high_style_neo/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/766/good/lamp_prezident/"
          onClick={click}
          title="«Президент»"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "01_Lamp-President.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/766/good/lamp_prezident/"
            onClick={click}
            title="«Президент»"
            style={{ marginRight: "15px;" }}
          >
            «Президент»
          </a>
          цена
          <b> {67320 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/766/good/lamp_prezident/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <div class="show-more">
          и еще <b>23</b> наименования...
          <span class="h3">
            <a
              rel="nofollow"
              href="https://www.fabrika-start.ru/catalog/sect/766/"
            >
              Посмотреть все
            </a>{" "}
            »
          </span>
        </div>
        <br />
        <br />
      </div>
      <div class="main float-right width772 pos-relative center-right section_753">
        <span class="h2">Декоративное освещение</span>

        <br />
        <br />
      </div>
      <div class="main float-right width772 pos-relative center-right section_1067">
        <span class="h2">Бра</span>

        <a
          href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra/"
          onClick={click}
          title="Бра"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "Император_new.png"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra/"
            onClick={click}
            title="Бра"
            style={{ marginRight: "15px;" }}
          >
            Бра
          </a>
          цена
          <b> {14460 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_renessans_granzh/"
          onClick={click}
          title="Бра «Ренессанс Гранж»"
        >
          <img
            src={
              process.env.PUBLIC_URL + "/images/" + "Ренессанс_гранж_new.png"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_renessans_granzh/"
            onClick={click}
            title="Бра «Ренессанс Гранж»"
            style={{ marginRight: "15px;" }}
          >
            Бра «Ренессанс Гранж»
          </a>
          цена
          <b> {18300 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_renessans_granzh/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_prezident_iii/"
          onClick={click}
          title="Бра «Президент III»"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "Император_new.png"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_prezident_iii/"
            onClick={click}
            title="Бра «Президент III»"
            style={{ marginRight: "15px;" }}
          >
            Бра «Президент III»
          </a>
          цена
          <b> {18300 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_prezident_iii/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_imperator_lyuks/"
          onClick={click}
          title="Бра «Император-Люкс»"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "Император_люкс_new.png"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_imperator_lyuks/"
            onClick={click}
            title="Бра «Император-Люкс»"
            style={{ marginRight: "15px;" }}
          >
            Бра «Император-Люкс»
          </a>
          цена
          <b> {18300 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_imperator_lyuks/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_renessans_gold/"
          onClick={click}
          title="Бра «Ренессанс Голд»"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "Ренессанс_голд_new.png"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_renessans_gold/"
            onClick={click}
            title="Бра «Ренессанс Голд»"
            style={{ marginRight: "15px;" }}
          >
            Бра «Ренессанс Голд»
          </a>
          цена
          <b> {18300 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_renessans_gold/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_leo/"
          onClick={click}
          title="Бра «Лео»"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "Лео_new.png"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_leo/"
            onClick={click}
            title="Бра «Лео»"
            style={{ marginRight: "15px;" }}
          >
            Бра «Лео»
          </a>
          цена
          <b> {18300 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_leo/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_leo_ii/"
          onClick={click}
          title="Бра «Лео II»"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "Лео_II_new.png"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_leo_ii/"
            onClick={click}
            title="Бра «Лео II»"
            style={{ marginRight: "15px;" }}
          >
            Бра «Лео II»
          </a>
          цена
          <b> {18300 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_leo_ii/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_prezident/"
          onClick={click}
          title="Бра «Президент»"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "Император_new.png"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_prezident/"
            onClick={click}
            title="Бра «Президент»"
            style={{ marginRight: "15px;" }}
          >
            Бра «Президент»
          </a>
          цена
          <b> {18300 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1067/good/bra_prezident/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <div class="show-more">
          и еще <b>8</b> наименований...
          <span class="h3">
            <a
              rel="nofollow"
              href="https://www.fabrika-start.ru/catalog/sect/1067/"
            >
              Посмотреть все
            </a>{" "}
            »
          </span>
        </div>

        <br />
        <br />
      </div>
      <div class="main float-right width772 pos-relative center-right section_1069">
        <span class="h2">Настольные светильники</span>

        <a
          href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik/"
          onClick={click}
          title="Настольный светильник"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "green_4st.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik/"
            onClick={click}
            title="Настольный светильник"
            style={{ marginRight: "15px;" }}
          >
            Настольный светильник
          </a>
          цена
          <b> {11090 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_leo/"
          onClick={click}
          title="Настольный светильник «Лео»"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "Лео.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_leo/"
            onClick={click}
            title="Настольный светильник «Лео»"
            style={{ marginRight: "15px;" }}
          >
            Настольный светильник «Лео»
          </a>
          цена
          <b> {14120 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_leo/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_renessans_gold/"
          onClick={click}
          title="Настольный светильник «Ренессанс Голд»"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "Ренессанс_голд.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_renessans_gold/"
            onClick={click}
            title="Настольный светильник «Ренессанс Голд»"
            style={{ marginRight: "15px;" }}
          >
            Настольный светильник «Ренессанс Голд»
          </a>
          цена
          <b> {14120 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_renessans_gold/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_imperator_lyuks/"
          onClick={click}
          title="Настольный светильник «Император-Люкс»"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "Император_люкс.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_imperator_lyuks/"
            onClick={click}
            title="Настольный светильник «Император-Люкс»"
            style={{ marginRight: "15px;" }}
          >
            Настольный светильник «Император-Люкс»
          </a>
          цена
          <b> {14120 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_imperator_lyuks/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_leo_ii/"
          onClick={click}
          title="Настольный светильник «Лео II»"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "Лео_II.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_leo_ii/"
            onClick={click}
            title="Настольный светильник «Лео II»"
            style={{ marginRight: "15px;" }}
          >
            Настольный светильник «Лео II»
          </a>
          цена
          <b> {14750 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1069/good/nastolnyy_svetilnik_leo_ii/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>

        <br />
        <br />
      </div>
      <div class="main float-right width772 pos-relative center-right section_1068">
        <span class="h2">Торшеры</span>

        <a
          href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher/"
          onClick={click}
          title="Торшер"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "green_4st.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher/"
            onClick={click}
            title="Торшер"
            style={{ marginRight: "15px;" }}
          >
            Торшер
          </a>
          цена
          <b> {36320 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_imperator/"
          onClick={click}
          title="Торшер «Император»"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "Император.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_imperator/"
            onClick={click}
            title="Торшер «Император»"
            style={{ marginRight: "15px;" }}
          >
            Торшер «Император»
          </a>
          цена
          <b> {36620 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_imperator/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_prezident_silver/"
          onClick={click}
          title="Торшер «Президент Сильвер»"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "Torchere-President-Silver.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_prezident_silver/"
            onClick={click}
            title="Торшер «Президент Сильвер»"
            style={{ marginRight: "15px;" }}
          >
            Торшер «Президент Сильвер»
          </a>
          цена
          <b> {36620 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_prezident_silver/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_leo_ii/"
          onClick={click}
          title="Торшер «Лео II»"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "Лео_II.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_leo_ii/"
            onClick={click}
            title="Торшер «Лео II»"
            style={{ marginRight: "15px;" }}
          >
            Торшер «Лео II»
          </a>
          цена
          <b> {36620 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_leo_ii/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_leo/"
          onClick={click}
          title="Торшер «Лео»"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "Лео.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_leo/"
            onClick={click}
            title="Торшер «Лео»"
            style={{ marginRight: "15px;" }}
          >
            Торшер «Лео»
          </a>
          цена
          <b> {36620 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_leo/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_prezident_iii/"
          onClick={click}
          title="Торшер «Президент III»"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "Император.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_prezident_iii/"
            onClick={click}
            title="Торшер «Президент III»"
            style={{ marginRight: "15px;" }}
          >
            Торшер «Президент III»
          </a>
          цена
          <b> {36620 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_prezident_iii/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_prezident/"
          onClick={click}
          title="Торшер «Президент»"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "Император.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_prezident/"
            onClick={click}
            title="Торшер «Президент»"
            style={{ marginRight: "15px;" }}
          >
            Торшер «Президент»
          </a>
          цена
          <b> {36620 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_prezident/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_liverpul_lyuks/"
          onClick={click}
          title="Торшер «Ливерпуль-Люкс»"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "Ливерпуль-Люкс.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_liverpul_lyuks/"
            onClick={click}
            title="Торшер «Ливерпуль-Люкс»"
            style={{ marginRight: "15px;" }}
          >
            Торшер «Ливерпуль-Люкс»
          </a>
          цена
          <b> {36620 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1068/good/torsher_liverpul_lyuks/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <div class="show-more">
          и еще <b>3</b> наименования...
          <span class="h3">
            <a
              rel="nofollow"
              href="https://www.fabrika-start.ru/catalog/sect/1068/"
            >
              Посмотреть все
            </a>{" "}
            »
          </span>
        </div>

        <br />
        <br />
      </div>
      <div class="main float-right width772 pos-relative center-right section_1044">
        <span class="h2">Для столов 6 футов</span>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1044/good/startbilliards_2_plafona/"
          onClick={click}
          title="2 плафона"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "01_01_2.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1044/good/startbilliards_2_plafona/"
            onClick={click}
            title="2 плафона"
            style={{ marginRight: "15px;" }}
          >
            2 плафона
          </a>
          цена
          <b> {6670 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1044/good/startbilliards_2_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1044/good/startbilliards_2_plafona_zelenyy_zoloto/"
          onClick={click}
          title="2 плафона, зеленый/золото"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "02_01_2.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1044/good/startbilliards_2_plafona_zelenyy_zoloto/"
            onClick={click}
            title="2 плафона, зеленый/золото"
            style={{ marginRight: "15px;" }}
          >
            2 плафона, зеленый/золото
          </a>
          цена
          <b> {7170 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1044/good/startbilliards_2_plafona_zelenyy_zoloto/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1044/good/2_plafona_khrom_khrom/"
          onClick={click}
          title="2 плафона,хром/хром"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "03_03_2.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1044/good/2_plafona_khrom_khrom/"
            onClick={click}
            title="2 плафона,хром/хром"
            style={{ marginRight: "15px;" }}
          >
            2 плафона,хром/хром
          </a>
          цена
          <b> {8000 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1044/good/2_plafona_khrom_khrom/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1044/good/2_plafona_zoloto_khrom/"
          onClick={click}
          title="2 плафона, золото/хром"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "03_02_2.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1044/good/2_plafona_zoloto_khrom/"
            onClick={click}
            title="2 плафона, золото/хром"
            style={{ marginRight: "15px;" }}
          >
            2 плафона, золото/хром
          </a>
          цена
          <b> {8000 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1044/good/2_plafona_zoloto_khrom/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Акция</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1044/good/evolution_pvkh_6_8_futov/"
          onClick={click}
          title="EVOLUTION 6,7,8,9 футов /пвх"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "6_8_Evolution_pvh.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1044/good/evolution_pvkh_6_8_futov/"
            onClick={click}
            title="EVOLUTION 6,7,8,9 футов /пвх"
            style={{ marginRight: "15px;" }}
          >
            EVOLUTION 6,7,8,9 футов /пвх
          </a>
          цена
          <b> {15252 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1044/good/evolution_pvkh_6_8_futov/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1044/good/6_7_8_9_futov_temnye/"
          onClick={click}
          title="6,7,8,9 футов / темные"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "NEO_6_9_фт_секции3_тик_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1044/good/6_7_8_9_futov_temnye/"
            onClick={click}
            title="6,7,8,9 футов / темные"
            style={{ marginRight: "15px;" }}
          >
            6,7,8,9 футов / темные
          </a>
          цена
          <b> {15530 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1044/good/6_7_8_9_futov_temnye/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1044/good/6_7_8_9_futov_svetlye/"
          onClick={click}
          title="6,7,8,9 футов / светлые"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "NEO_6_9_фт_секции3_серый_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1044/good/6_7_8_9_futov_svetlye/"
            onClick={click}
            title="6,7,8,9 футов / светлые"
            style={{ marginRight: "15px;" }}
          >
            6,7,8,9 футов / светлые
          </a>
          цена
          <b> {15530 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1044/good/6_7_8_9_futov_svetlye/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Новинка</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1044/good/loft_6_7_8_9_futov_/"
          onClick={click}
          title="«Лофт» / 6,7,8,9 футов "
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "ЛОФТ_6-9_фт_00.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1044/good/loft_6_7_8_9_futov_/"
            onClick={click}
            title="«Лофт» / 6,7,8,9 футов "
            style={{ marginRight: "15px;" }}
          >
            «Лофт» / 6,7,8,9 футов{" "}
          </a>
          цена
          <b> {29230 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1044/good/loft_6_7_8_9_futov_/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <div class="show-more">
          и еще <b>2</b> наименования...
          <span class="h3">
            <a
              rel="nofollow"
              href="https://www.fabrika-start.ru/catalog/sect/1044/"
            >
              Посмотреть все
            </a>{" "}
            »
          </span>
        </div>
        <br />
        <br />
      </div>
      <div class="main float-right width772 pos-relative center-right section_1045">
        <span class="h2"> Для столов 7 футов</span>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1045/good/startbilliards_3_plafona/"
          onClick={click}
          title="3 плафона"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "01_01_3.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1045/good/startbilliards_3_plafona/"
            onClick={click}
            title="3 плафона"
            style={{ marginRight: "15px;" }}
          >
            3 плафона
          </a>
          цена
          <b> {8930 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1045/good/startbilliards_3_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1045/good/startbilliards_3_plafona_zelenyy_zoloto/"
          onClick={click}
          title="3 плафона, зеленый/золото"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "02_01_3.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1045/good/startbilliards_3_plafona_zelenyy_zoloto/"
            onClick={click}
            title="3 плафона, зеленый/золото"
            style={{ marginRight: "15px;" }}
          >
            3 плафона, зеленый/золото
          </a>
          цена
          <b> {9310 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1045/good/startbilliards_3_plafona_zelenyy_zoloto/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Акция</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1045/good/aristokrat_3_plafona/"
          onClick={click}
          title="3 плафона"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "3_ARISTOKRAT_00.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1045/good/aristokrat_3_plafona/"
            onClick={click}
            title="3 плафона"
            style={{ marginRight: "15px;" }}
          >
            3 плафона
          </a>
          цена
          <b> {9574 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1045/good/aristokrat_3_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1045/good/startbilliards_3_plafona_khrom_khrom/"
          onClick={click}
          title="3 плафона, хром/хром"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "03_03_3.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1045/good/startbilliards_3_plafona_khrom_khrom/"
            onClick={click}
            title="3 плафона, хром/хром"
            style={{ marginRight: "15px;" }}
          >
            3 плафона, хром/хром
          </a>
          цена
          <b> {10560 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1045/good/startbilliards_3_plafona_khrom_khrom/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1045/good/startbilliards_3_plafona_zoloto_khrom/"
          onClick={click}
          title="3 плафона, золото/хром"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "03_02_3.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1045/good/startbilliards_3_plafona_zoloto_khrom/"
            onClick={click}
            title="3 плафона, золото/хром"
            style={{ marginRight: "15px;" }}
          >
            3 плафона, золото/хром
          </a>
          цена
          <b> {10560 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1045/good/startbilliards_3_plafona_zoloto_khrom/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Акция</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1045/good/evolution_pvkh_6_8_futov/"
          onClick={click}
          title="EVOLUTION 6,7,8,9 футов /пвх"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "6_8_Evolution_pvh.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1045/good/evolution_pvkh_6_8_futov/"
            onClick={click}
            title="EVOLUTION 6,7,8,9 футов /пвх"
            style={{ marginRight: "15px;" }}
          >
            EVOLUTION 6,7,8,9 футов /пвх
          </a>
          цена
          <b> {15252 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1045/good/evolution_pvkh_6_8_futov/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1045/good/6_7_8_9_futov_svetlye/"
          onClick={click}
          title="6,7,8,9 футов / светлые"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "NEO_6_9_фт_секции3_серый_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1045/good/6_7_8_9_futov_svetlye/"
            onClick={click}
            title="6,7,8,9 футов / светлые"
            style={{ marginRight: "15px;" }}
          >
            6,7,8,9 футов / светлые
          </a>
          цена
          <b> {15530 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1045/good/6_7_8_9_futov_svetlye/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1045/good/6_7_8_9_futov_temnye/"
          onClick={click}
          title="6,7,8,9 футов / темные"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "NEO_6_9_фт_секции3_тик_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1045/good/6_7_8_9_futov_temnye/"
            onClick={click}
            title="6,7,8,9 футов / темные"
            style={{ marginRight: "15px;" }}
          >
            6,7,8,9 футов / темные
          </a>
          цена
          <b> {15530 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1045/good/6_7_8_9_futov_temnye/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <div class="show-more">
          и еще <b>4</b> наименования...
          <span class="h3">
            <a
              rel="nofollow"
              href="https://www.fabrika-start.ru/catalog/sect/1045/"
            >
              Посмотреть все
            </a>{" "}
            »
          </span>
        </div>
        <br />
        <br />
      </div>
      <div class="main float-right width772 pos-relative center-right section_1046">
        <span class="h2">Для столов 8 футов</span>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_3_plafona/"
          onClick={click}
          title="3 плафона"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "01_01_3.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_3_plafona/"
            onClick={click}
            title="3 плафона"
            style={{ marginRight: "15px;" }}
          >
            3 плафона
          </a>
          цена
          <b> {8930 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_3_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_3_plafona_zelenyy_zoloto/"
          onClick={click}
          title="3 плафона, зеленый/золото"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "02_01_3.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_3_plafona_zelenyy_zoloto/"
            onClick={click}
            title="3 плафона, зеленый/золото"
            style={{ marginRight: "15px;" }}
          >
            3 плафона, зеленый/золото
          </a>
          цена
          <b> {9310 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_3_plafona_zelenyy_zoloto/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Акция</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1046/good/aristokrat_3_plafona/"
          onClick={click}
          title="3 плафона"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "3_ARISTOKRAT_00.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1046/good/aristokrat_3_plafona/"
            onClick={click}
            title="3 плафона"
            style={{ marginRight: "15px;" }}
          >
            3 плафона
          </a>
          цена
          <b> {9574 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1046/good/aristokrat_3_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_3_plafona_khrom_khrom/"
          onClick={click}
          title="3 плафона, хром/хром"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "03_03_3.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_3_plafona_khrom_khrom/"
            onClick={click}
            title="3 плафона, хром/хром"
            style={{ marginRight: "15px;" }}
          >
            3 плафона, хром/хром
          </a>
          цена
          <b> {10560 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_3_plafona_khrom_khrom/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_3_plafona_zoloto_khrom/"
          onClick={click}
          title="3 плафона, золото/хром"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "03_02_3.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_3_plafona_zoloto_khrom/"
            onClick={click}
            title="3 плафона, золото/хром"
            style={{ marginRight: "15px;" }}
          >
            3 плафона, золото/хром
          </a>
          цена
          <b> {10560 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_3_plafona_zoloto_khrom/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_4_plafona/"
          onClick={click}
          title="4 плафона"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "01_01_4.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_4_plafona/"
            onClick={click}
            title="4 плафона"
            style={{ marginRight: "15px;" }}
          >
            4 плафона
          </a>
          цена
          <b> {10810 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_4_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_4_plafona_zelenyy_zoloto/"
          onClick={click}
          title="4 плафона, зеленый/золото"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "02_01_4.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_4_plafona_zelenyy_zoloto/"
            onClick={click}
            title="4 плафона, зеленый/золото"
            style={{ marginRight: "15px;" }}
          >
            4 плафона, зеленый/золото
          </a>
          цена
          <b> {11520 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_4_plafona_zelenyy_zoloto/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_4_plafona_zoloto_khrom/"
          onClick={click}
          title="4 плафона, золото/хром"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "03_02_4.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_4_plafona_zoloto_khrom/"
            onClick={click}
            title="4 плафона, золото/хром"
            style={{ marginRight: "15px;" }}
          >
            4 плафона, золото/хром
          </a>
          цена
          <b> {13190 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1046/good/startbilliards_4_plafona_zoloto_khrom/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <div class="show-more">
          и еще <b>8</b> наименований...
          <span class="h3">
            <a
              rel="nofollow"
              href="https://www.fabrika-start.ru/catalog/sect/1046/"
            >
              Посмотреть все
            </a>{" "}
            »
          </span>
        </div>
        <br />
        <br />
      </div>
      <div class="main float-right width772 pos-relative center-right section_1047">
        <span class="h2">Для столов 9 футов</span>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1047/good/startbilliards_4_plafona/"
          onClick={click}
          title="4 плафона"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "01_01_4.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1047/good/startbilliards_4_plafona/"
            onClick={click}
            title="4 плафона"
            style={{ marginRight: "15px;" }}
          >
            4 плафона
          </a>
          цена
          <b> {10810 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1047/good/startbilliards_4_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1047/good/startbilliards_4_plafona_zelenyy_zoloto/"
          onClick={click}
          title="4 плафона, зеленый/золото"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "02_01_4.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1047/good/startbilliards_4_plafona_zelenyy_zoloto/"
            onClick={click}
            title="4 плафона, зеленый/золото"
            style={{ marginRight: "15px;" }}
          >
            4 плафона, зеленый/золото
          </a>
          цена
          <b> {11520 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1047/good/startbilliards_4_plafona_zelenyy_zoloto/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1047/good/startbilliards_4_plafona_khrom_khrom/"
          onClick={click}
          title="4 плафона, хром/хром"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "03_03_4.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1047/good/startbilliards_4_plafona_khrom_khrom/"
            onClick={click}
            title="4 плафона, хром/хром"
            style={{ marginRight: "15px;" }}
          >
            4 плафона, хром/хром
          </a>
          цена
          <b> {13190 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1047/good/startbilliards_4_plafona_khrom_khrom/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1047/good/startbilliards_4_plafona_zoloto_khrom/"
          onClick={click}
          title="4 плафона, золото/хром"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "03_02_4.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1047/good/startbilliards_4_plafona_zoloto_khrom/"
            onClick={click}
            title="4 плафона, золото/хром"
            style={{ marginRight: "15px;" }}
          >
            4 плафона, золото/хром
          </a>
          цена
          <b> {13190 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1047/good/startbilliards_4_plafona_zoloto_khrom/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Акция</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1047/good/evolution_pvkh_6_8_futov/"
          onClick={click}
          title="EVOLUTION 6,7,8,9 футов /пвх"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "6_8_Evolution_pvh.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1047/good/evolution_pvkh_6_8_futov/"
            onClick={click}
            title="EVOLUTION 6,7,8,9 футов /пвх"
            style={{ marginRight: "15px;" }}
          >
            EVOLUTION 6,7,8,9 футов /пвх
          </a>
          цена
          <b> {15252 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1047/good/evolution_pvkh_6_8_futov/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1047/good/6_7_8_9_futov_svetlye/"
          onClick={click}
          title="6,7,8,9 футов / светлые"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "NEO_6_9_фт_секции3_серый_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1047/good/6_7_8_9_futov_svetlye/"
            onClick={click}
            title="6,7,8,9 футов / светлые"
            style={{ marginRight: "15px;" }}
          >
            6,7,8,9 футов / светлые
          </a>
          цена
          <b> {15530 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1047/good/6_7_8_9_futov_svetlye/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1047/good/6_7_8_9_futov_temnye/"
          onClick={click}
          title="6,7,8,9 футов / темные"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "NEO_6_9_фт_секции3_тик_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1047/good/6_7_8_9_futov_temnye/"
            onClick={click}
            title="6,7,8,9 футов / темные"
            style={{ marginRight: "15px;" }}
          >
            6,7,8,9 футов / темные
          </a>
          цена
          <b> {15530 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1047/good/6_7_8_9_futov_temnye/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Акция</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1047/good/aristokrat_4_plafona/"
          onClick={click}
          title="4 плафона"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "4_ARISTOKRAT_00.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1047/good/aristokrat_4_plafona/"
            onClick={click}
            title="4 плафона"
            style={{ marginRight: "15px;" }}
          >
            4 плафона
          </a>
          цена
          <b> {17657 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1047/good/aristokrat_4_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <div class="show-more">
          и еще <b>5</b> наименований...
          <span class="h3">
            <a
              rel="nofollow"
              href="https://www.fabrika-start.ru/catalog/sect/1047/"
            >
              Посмотреть все
            </a>{" "}
            »
          </span>
        </div>
        <br />
        <br />
      </div>
      <div class="main float-right width772 pos-relative center-right section_1048">
        <span class="h2">Для столов 10 футов</span>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1048/good/startbilliards_5_plafonov/"
          onClick={click}
          title="5 плафонов"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "01_01_5.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1048/good/startbilliards_5_plafonov/"
            onClick={click}
            title="5 плафонов"
            style={{ marginRight: "15px;" }}
          >
            5 плафонов
          </a>
          цена
          <b> {13170 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1048/good/startbilliards_5_plafonov/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1048/good/startbilliards_5_plafonov_zelenyy_zoloto/"
          onClick={click}
          title="5 плафонов, зеленый/золото"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "02_01_5.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1048/good/startbilliards_5_plafonov_zelenyy_zoloto/"
            onClick={click}
            title="5 плафонов, зеленый/золото"
            style={{ marginRight: "15px;" }}
          >
            5 плафонов, зеленый/золото
          </a>
          цена
          <b> {13970 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1048/good/startbilliards_5_plafonov_zelenyy_zoloto/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1048/good/startbilliards_5_plafonov_khrom_khrom/"
          onClick={click}
          title="5 плафонов, хром/хром"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "03_03_5.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1048/good/startbilliards_5_plafonov_khrom_khrom/"
            onClick={click}
            title="5 плафонов, хром/хром"
            style={{ marginRight: "15px;" }}
          >
            5 плафонов, хром/хром
          </a>
          цена
          <b> {16050 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1048/good/startbilliards_5_plafonov_khrom_khrom/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1048/good/startbilliards_5_plafonov_zoloto_khrom/"
          onClick={click}
          title="5 плафонов, золото/хром"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "03_02_5.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1048/good/startbilliards_5_plafonov_zoloto_khrom/"
            onClick={click}
            title="5 плафонов, золото/хром"
            style={{ marginRight: "15px;" }}
          >
            5 плафонов, золото/хром
          </a>
          цена
          <b> {16050 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1048/good/startbilliards_5_plafonov_zoloto_khrom/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Акция</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1048/good/aristokrat_4_plafona/"
          onClick={click}
          title="4 плафона"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "4_ARISTOKRAT_00.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1048/good/aristokrat_4_plafona/"
            onClick={click}
            title="4 плафона"
            style={{ marginRight: "15px;" }}
          >
            4 плафона
          </a>
          цена
          <b> {17657 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1048/good/aristokrat_4_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1048/good10_11_12_futov_temnye"
          onClick={click}
          title="10,11,12 футов / темные"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "NEO_10_12_фт_секции4_тик_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1048/good10_11_12_futov_temnye"
            onClick={click}
            title="10,11,12 футов / темные"
            style={{ marginRight: "15px;" }}
          >
            10,11,12 футов / темные
          </a>
          цена
          <b> {19120 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1048/good10_11_12_futov_temnye"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1048/good/10_11_12_futov_svetlye/"
          onClick={click}
          title="10,11,12 футов / светлые"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "NEO_10_12_фт_секции4_серый_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1048/good/10_11_12_futov_svetlye/"
            onClick={click}
            title="10,11,12 футов / светлые"
            style={{ marginRight: "15px;" }}
          >
            10,11,12 футов / светлые
          </a>
          цена
          <b> {19120 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1048/good/10_11_12_futov_svetlye/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1048/good/aristokrat_lyuks_4_plafona/"
          onClick={click}
          title="4 плафона"
        >
          <img
            src={
              process.env.PUBLIC_URL + "/images/" + "4_ARISTOKRAT_ЛЮКС_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1048/good/aristokrat_lyuks_4_plafona/"
            onClick={click}
            title="4 плафона"
            style={{ marginRight: "15px;" }}
          >
            4 плафона
          </a>
          цена
          <b> {30930 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1048/good/aristokrat_lyuks_4_plafona/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <div class="show-more">
          и еще <b>12</b> наименований...
          <span class="h3">
            <a
              rel="nofollow"
              href="https://www.fabrika-start.ru/catalog/sect/1048/"
            >
              Посмотреть все
            </a>{" "}
            »
          </span>
        </div>
        <br />
        <br />
      </div>
      <div class="main float-right width772 pos-relative center-right section_1049">
        <span class="h2">Для столов 11 футов</span>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1049/good/startbilliards_6_plafonov/"
          onClick={click}
          title="6 плафонов"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "01_01_6.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1049/good/startbilliards_6_plafonov/"
            onClick={click}
            title="6 плафонов"
            style={{ marginRight: "15px;" }}
          >
            6 плафонов
          </a>
          цена
          <b> {15160 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1049/good/startbilliards_6_plafonov/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1049/good/startbilliards_6_plafonov_zelenyy_zoloto/"
          onClick={click}
          title="6 плафонов, зеленый/золото"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "02_01_6.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1049/good/startbilliards_6_plafonov_zelenyy_zoloto/"
            onClick={click}
            title="6 плафонов, зеленый/золото"
            style={{ marginRight: "15px;" }}
          >
            6 плафонов, зеленый/золото
          </a>
          цена
          <b> {16220 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1049/good/startbilliards_6_plafonov_zelenyy_zoloto/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1049/good/startbilliards_6_plafonov_khrom_khrom/"
          onClick={click}
          title="6 плафонов, хром/хром"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "03_03_6.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1049/good/startbilliards_6_plafonov_khrom_khrom/"
            onClick={click}
            title="6 плафонов, хром/хром"
            style={{ marginRight: "15px;" }}
          >
            6 плафонов, хром/хром
          </a>
          цена
          <b> {18710 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1049/good/startbilliards_6_plafonov_khrom_khrom/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1049/good/startbilliards_6_plafonov_zoloto_khrom/"
          onClick={click}
          title="6 плафонов, золото/хром"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "03_02_6.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1049/good/startbilliards_6_plafonov_zoloto_khrom/"
            onClick={click}
            title="6 плафонов, золото/хром"
            style={{ marginRight: "15px;" }}
          >
            6 плафонов, золото/хром
          </a>
          цена
          <b> {18710 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1049/good/startbilliards_6_plafonov_zoloto_khrom/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1049/good10_11_12_futov_temnye"
          onClick={click}
          title="10,11,12 футов / темные"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "NEO_10_12_фт_секции4_тик_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1049/good10_11_12_futov_temnye"
            onClick={click}
            title="10,11,12 футов / темные"
            style={{ marginRight: "15px;" }}
          >
            10,11,12 футов / темные
          </a>
          цена
          <b> {19120 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1049/good10_11_12_futov_temnye"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1049/good/10_11_12_futov_svetlye/"
          onClick={click}
          title="10,11,12 футов / светлые"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "NEO_10_12_фт_секции4_серый_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1049/good/10_11_12_futov_svetlye/"
            onClick={click}
            title="10,11,12 футов / светлые"
            style={{ marginRight: "15px;" }}
          >
            10,11,12 футов / светлые
          </a>
          цена
          <b> {19120 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1049/good/10_11_12_futov_svetlye/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Акция</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1049/good/aristokrat_5_plafonov/"
          onClick={click}
          title="5 плафонов"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "5_ARISTOKRAT_00.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1049/good/aristokrat_5_plafonov/"
            onClick={click}
            title="5 плафонов"
            style={{ marginRight: "15px;" }}
          >
            5 плафонов
          </a>
          цена
          <b> {23994 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1049/good/aristokrat_5_plafonov/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Акция</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1049/good/liverpul_lyuks/"
          onClick={click}
          title="«Ливерпуль-Люкс»"
        >
          <img
            src={
              process.env.PUBLIC_URL + "/images/" + "01_Lamp-Liverpool-lux.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1049/good/liverpul_lyuks/"
            onClick={click}
            title="«Ливерпуль-Люкс»"
            style={{ marginRight: "15px;" }}
          >
            «Ливерпуль-Люкс»
          </a>
          цена
          <b> {25166 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1049/good/liverpul_lyuks/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <div class="show-more">
          и еще <b>33</b> наименования...
          <span class="h3">
            <a
              rel="nofollow"
              href="https://www.fabrika-start.ru/catalog/sect/1049/"
            >
              Посмотреть все
            </a>{" "}
            »
          </span>
        </div>
        <br />
        <br />
      </div>
      <div class="main float-right width772 pos-relative center-right section_1050">
        <span class="h2">Для столов 12 футов</span>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1050/good/startbilliards_6_plafonov/"
          onClick={click}
          title="6 плафонов"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "01_01_6.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1050/good/startbilliards_6_plafonov/"
            onClick={click}
            title="6 плафонов"
            style={{ marginRight: "15px;" }}
          >
            6 плафонов
          </a>
          цена
          <b> {15160 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1050/good/startbilliards_6_plafonov/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1050/good/startbilliards_6_plafonov_zelenyy_zoloto/"
          onClick={click}
          title="6 плафонов, зеленый/золото"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "02_01_6.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1050/good/startbilliards_6_plafonov_zelenyy_zoloto/"
            onClick={click}
            title="6 плафонов, зеленый/золото"
            style={{ marginRight: "15px;" }}
          >
            6 плафонов, зеленый/золото
          </a>
          цена
          <b> {16220 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1050/good/startbilliards_6_plafonov_zelenyy_zoloto/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1050/good/startbilliards_6_plafonov_khrom_khrom/"
          onClick={click}
          title="6 плафонов, хром/хром"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "03_03_6.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1050/good/startbilliards_6_plafonov_khrom_khrom/"
            onClick={click}
            title="6 плафонов, хром/хром"
            style={{ marginRight: "15px;" }}
          >
            6 плафонов, хром/хром
          </a>
          цена
          <b> {18710 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1050/good/startbilliards_6_plafonov_khrom_khrom/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1050/good/startbilliards_6_plafonov_zoloto_khrom/"
          onClick={click}
          title="6 плафонов, золото/хром"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "03_02_6.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1050/good/startbilliards_6_plafonov_zoloto_khrom/"
            onClick={click}
            title="6 плафонов, золото/хром"
            style={{ marginRight: "15px;" }}
          >
            6 плафонов, золото/хром
          </a>
          цена
          <b> {18710 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1050/good/startbilliards_6_plafonov_zoloto_khrom/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1050/good10_11_12_futov_temnye"
          onClick={click}
          title="10,11,12 футов / темные"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "NEO_10_12_фт_секции4_тик_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1050/good10_11_12_futov_temnye"
            onClick={click}
            title="10,11,12 футов / темные"
            style={{ marginRight: "15px;" }}
          >
            10,11,12 футов / темные
          </a>
          цена
          <b> {19120 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1050/good10_11_12_futov_temnye"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1050/good/10_11_12_futov_svetlye/"
          onClick={click}
          title="10,11,12 футов / светлые"
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              "NEO_10_12_фт_секции4_серый_00.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1050/good/10_11_12_futov_svetlye/"
            onClick={click}
            title="10,11,12 футов / светлые"
            style={{ marginRight: "15px;" }}
          >
            10,11,12 футов / светлые
          </a>
          цена
          <b> {19120 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1050/good/10_11_12_futov_svetlye/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Акция</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1050/good/aristokrat_5_plafonov/"
          onClick={click}
          title="5 плафонов"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/" + "5_ARISTOKRAT_00.jpg"}
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1050/good/aristokrat_5_plafonov/"
            onClick={click}
            title="5 плафонов"
            style={{ marginRight: "15px;" }}
          >
            5 плафонов
          </a>
          цена
          <b> {23994 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1050/good/aristokrat_5_plafonov/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <span class="label label-in-cues">Акция</span>{" "}
        <a
          href="https://www.fabrika-start.ru/catalog/sect/1050/good/liverpul_lyuks/"
          onClick={click}
          title="«Ливерпуль-Люкс»"
        >
          <img
            src={
              process.env.PUBLIC_URL + "/images/" + "01_Lamp-Liverpool-lux.jpg"
            }
            class="w756"
          />
        </a>
        <p>
          <a
            class="cues"
            href="https://www.fabrika-start.ru/catalog/sect/1050/good/liverpul_lyuks/"
            onClick={click}
            title="«Ливерпуль-Люкс»"
            style={{ marginRight: "15px;" }}
          >
            «Ливерпуль-Люкс»
          </a>
          цена
          <b> {25166 * 130}</b> UZS{" "}
          <a
            href="https://www.fabrika-start.ru/catalog/sect/1050/good/liverpul_lyuks/"
            onClick={click}
            class="button72 btn_buy_in_detail"
            style={{
              padding: "5px 20px",
              color: "#f7f0dd",
              textDecoration: "none",
              marginTop: "10px;",
            }}
          >
            Купить
          </a>
        </p>
        <div class="show-more">
          и еще <b>33</b> наименования...
          <span class="h3">
            <a
              rel="nofollow"
              href="https://www.fabrika-start.ru/catalog/sect/1050/"
            >
              Посмотреть все
            </a>{" "}
            »
          </span>
        </div>
        <br />
        <br />
      </div>
      <div class="main float-right width764 padding0088 section-description">
        <p></p>
        <table
          width="100%"
          class="nobordertable"
          cellspacing="1"
          cellpadding="1"
        >
          <tbody>
            <tr>
              <td style={{ textAlign: "center" }}>
                <img
                  width="232"
                  alt="lamp_01.jpg"
                  src="images/lamp_01.jpg"
                  height="145"
                  title="светильники для бильярда"
                />
                &nbsp;
                <br />
              </td>
              <td style={{ textAlign: "center" }}>
                <img
                  width="232"
                  alt="lamp_02.jpg"
                  src="images/lamp_02.jpg"
                  height="145"
                  title="светильники для бильярда"
                />
                &nbsp;
                <br />
              </td>
              <td style={{ textAlign: "center" }}>
                <br />
                <img
                  width="232"
                  alt="lamp_03.jpg"
                  src="/images/lamp_03.jpg"
                  height="145"
                  title="светильники для бильярда"
                />
                &nbsp;
                <br />
                <br />
              </td>
            </tr>
          </tbody>
        </table>
        <p></p>
        <h2>Элегантные бильярдные светильники от Фабрики света «Горизонт»</h2>
        Продукция&nbsp;ФС«Горизонт»&nbsp;обладает всеми необходимыми
        характеристиками, чтобы игра в бильярд приносила только
        удовольствие.&nbsp;Ни для кого не секрет, что качественное освещение
        способствует не только хорошей игре, но и не оставляет усталости глаз
        после продолжительной игры в бильярд. Представляем широкий ассортимент
        светильников для бильярда, множество цветовых вариантов и моделей,
        элегантный дизайн которых органично впишется как в индивидуальный
        интерьер бильярдной комнаты, так и в помещение бильярдного зала, придав
        интерьеру особый уют и стиль.&nbsp; <br />
        <span style={{ textAlign: "justify" }}>
          {" "}
          Все представленные светильники можно купить&nbsp;в любом&nbsp;
          <a href="https://www.fabrika-start.ru/contacts/" target="_blank">
            фирменном салоне
          </a>
          &nbsp;Фабрики, в розничных магазинах обширной&nbsp;
          <a href="https://www.fabrika-start.ru/dealers/" target="_blank">
            дилерской сети
          </a>
          &nbsp;«Старт»,&nbsp;а также с помощью оформления заказа и
          онлайн-платежей непосредственно с сайта Фабрики «Старт».
        </span>
        <br />
        <br />{" "}
      </div>
    </div>
  );
};

export default Top;

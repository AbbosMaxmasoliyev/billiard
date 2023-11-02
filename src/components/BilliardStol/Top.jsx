import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Top = () => {
  const navigate = useNavigate();
  const params = useParams();
  function click(event) {
    event.preventDefault();
    let name = params;
    // console.log(params);
    let link = event.target.href.split("/sect/")[1];
    navigate(link);
  }
  return (
    <div class="wrap-content-left">
      <div class="with-breadcrumbs">
        <link
          href="/bitrix/css/main/font-awesome.css?150700812028777"
          type="text/css"
          rel="stylesheet"
        />
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
              title="Бильярд"
              itemprop="url"
            >
              <span itemprop="title">Бильярд</span>
            </a>
          </div>
          <div class="bx-breadcrumb-item">
            <i class="fa fa-angle-right"></i>
            <span>Бильярдные столы</span>
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
        &nbsp; &nbsp;
        <h1 class="float-right width772">
          Бильярдные столы: цена от производителя
        </h1>
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
          href="https://www.fabrika-start.ru/catgen/print.php?id=172"
        >
          Распечатать каталог
        </a>
        <div class="table_sizes_wrapper">
          <div class="table_sizes">
            <div>
              <a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-5-futov/">
                <img src="https://www.fabrika-start.ru/upload/sizes/5fn.png" />
                <br /> 5 футов
              </a>
            </div>

            <div>
              <a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-6-futov/">
                <img src="https://www.fabrika-start.ru/upload/sizes/6fn.png" />
                <br /> 6 футов
              </a>
            </div>

            <div>
              <a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-7-futov/">
                <img src="https://www.fabrika-start.ru/upload/sizes/7fn.png" />
                <br /> 7 футов
              </a>
            </div>

            <div>
              <a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-8-futov/">
                <img src="https://www.fabrika-start.ru/upload/sizes/8fn.png" />
                <br /> 8 футов
              </a>
            </div>

            <div>
              <a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-9-futov/">
                <img src="https://www.fabrika-start.ru/upload/sizes/9fn.png" />
                <br /> 9 футов
              </a>
            </div>

            <div>
              <a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-10-futov/">
                <img src="https://www.fabrika-start.ru/upload/sizes/10fn.png" />
                <br /> 10 футов
              </a>
            </div>

            <div>
              <a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-11-futov/">
                <img src="https://www.fabrika-start.ru/upload/sizes/11fn.png" />
                <br /> 11 футов
              </a>
            </div>

            <div>
              <a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-12-futov/">
                <img src="https://www.fabrika-start.ru/upload/sizes/12fn.png" />
                <br /> 12 футов
              </a>
            </div>
          </div>
        </div>
        <ul class="pricefordownload float-right width772">
          <li style={{ lineHeight: "14px!important", width: "300px" }}>
            <a
              style={{ lineHeight: "14px!important" }}
              href="https://www.fabrika-start.ru/images/%D0%91%D0%B8%D0%BB%D1%8C%D1%8F%D1%80%D0%B4%D0%BD%D1%8B%D0%B5%20%D1%81%D1%82%D0%BE%D0%BB%D1%8B%20%D0%A0%D0%9E%D0%97%D0%9D.%2018.08.2023.xlsx"
              target="_blank"
              class="excel"
            >
              Скачать прайс-лист на бильярд
            </a>
          </li>

          <li style={{ float: "right" }}>
            <div
              style={{
                width: "500px",
                marginTop: "-15px",
                marginRight: "-50px",
              }}
            >
              <div
                style={{ transform: "scale(0.7)" }}
                class="marquiz__container"
              >
                <a
                  class="marquiz__button marquiz__button_blicked marquiz__button_rounded"
                  href="https://www.fabrika-start.ru/kupit_stol_dlja_russkogo_biljarda/#popup:marquiz_6144394c8d3d22003f7e60ce"
                  data-version="2"
                >
                  Подобрать идеальный стол по вашим параметрам
                </a>
              </div>
            </div>
          </li>
          <li style={{ width: "100%", marginTop: "20px" }}>
            <center>
              <img src="/upload/fbs_rk2.png" />
              <center></center>
            </center>
          </li>
        </ul>
        <div class="main float-right width772 pos-relative center-right">
          {/* <!--noindex--> */}
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <button
              class="btn_sizes_info"
              style={{
                backgroundColor: "#006B54",
                color: "#fff",
                padding: "5px 10px",
                width: "100%",
                display: "block",
              }}
            >
              Узнать подробнее про размеры бильярдных столов и помещений
            </button>
          </div>
          <br />

          <div
            class="sizes_info_block"
            style={{ display: "none", padding: "5px" }}
          ></div>
          {/* <!--/noindex--> */}

          <div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div class="billiard_cat_elem">
                <a href="https://www.fabrika-start.ru/catalog/sect/177/">
                  <img src="/images/cat_exclusive.jpg" />
                  <br />
                  <span>Эксклюзивные</span>
                  <br />
                </a>
              </div>
              <div class="billiard_cat_elem">
                <a href="https://www.fabrika-start.ru/catalog/sect/174/">
                  <img src="/images/cat_superprof.jpg" />
                  <br />
                  <span>Суперпрофессиональные</span>
                  <br />
                </a>
              </div>
              <div class="billiard_cat_elem">
                <a href="https://www.fabrika-start.ru/catalog/professionalnye-bilyardnye-stoly/">
                  <img src="/images/cat_prof.jpg" />
                  <br />
                  <span>Профессиональные</span>
                  <br />
                </a>
              </div>
              <div class="billiard_cat_elem">
                <a href="https://www.fabrika-start.ru/catalog/sect/1017/">
                  <img src="/images/cat_hitech.jpg" />
                  <br />
                  <span>Современные</span>
                  <br />
                </a>
              </div>
              <div class="billiard_cat_elem">
                <a href="https://www.fabrika-start.ru/catalog/sect/178/">
                  <img src="/images/cat_amateur.jpg" />
                  <br />
                  <span>Любительские</span>
                  <br />
                </a>
              </div>
              <div class="billiard_cat_elem">
                <a href="https://www.fabrika-start.ru/catalog/sect/180/">
                  <img src="/images/cat_gaming.jpg" />
                  <br />
                  <span>Игровые</span>
                  <br />
                </a>
              </div>
              <div class="billiard_cat_elem">
                <a href="https://www.fabrika-start.ru/catalog/sect/982/">
                  <img src="/images/cat_hit.jpg" />
                  <br />
                  <span>Хит продаж</span>
                  <br />
                </a>
              </div>
              <div class="billiard_cat_elem">
                <a href="https://www.fabrika-start.ru/catalog/sect/1057/">
                  <img src="/images/cat_stock.jpg" />
                  <br />
                  <span>Сток предложения</span>
                  <br />
                </a>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  float: "left",
                  width: "123px",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                <img src="/images/700х700_04_1000 столов в наличии.png" />
                <br />
                <span
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "500",
                    fontFamily: "Georgia",
                    color: "#7d432e",
                  }}
                >
                  1000 столов в наличии
                </span>
              </div>
              <div
                style={{
                  float: "left",
                  width: "123px",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                <img src="/images/700х700_02_Ведущий российский производитель.png" />
                <br />
                <span
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "500",
                    fontFamily: "Georgia",
                    color: "#7d432e",
                  }}
                >
                  Ведущий Российский производитель
                </span>
              </div>
              <div
                style={{
                  float: "left",
                  width: "123px",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                <img src="/images/700х700_03_Официальные столы 11 чемпионатов мира.png" />
                <br />
                <span
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "500",
                    fontFamily: "Georgia",
                    color: "#7d432e",
                  }}
                >
                  Официальные столы 11 чемпионатов мира
                </span>
              </div>
              <div
                style={{
                  float: "left",
                  width: "123px",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                <img src="/images/700х700_01_Производство с 1996 года.png" />
                <br />
                <span
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "500",
                    fontFamily: "Georgia",
                    color: "#7d432e",
                  }}
                >
                  Производство с 1996 года
                </span>
              </div>
              <div
                style={{
                  float: "left",
                  width: "123px",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                <img src="/images/700х700_05_Цены из первых рук.png" />
                <br />
                <span
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "500",
                    fontFamily: "Georgia",
                    color: "#7d432e",
                  }}
                >
                  Цены из первых рук
                </span>
              </div>{" "}
            </div>
          </div>

          <h2 class="h2">Каталог бильярдных столов</h2>
          <br />
          <br />
          <ul
            class="related-products tables"
            style={{
              display: "grid",
              gridAutoFlow: "row",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
            }}
          >
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/trainer-2/"
                  title="Тренажер Митасова ТРН-02"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/188/178_250_1/Tb_Mitasova_01.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="3312"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="3312"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/trainer-2/"
                title="Тренажер Митасова ТРН-02"
              >
                Бильярдный стол Тренажер Митасова ТРН-02
              </a>

              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  28 000
                </div>{" "}
                ₽
              </span>
              <br />

              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/trainer-2/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/nastolnyy/"
                  title="Настольный пул"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/d3b/178_250_1/Настольный_SLP-3620-2_01.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="21109"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="21109"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/nastolnyy/"
                title="Настольный пул"
              >
                Бильярдный стол Настольный пул
              </a>

              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  6 690
                </div>{" "}
                ₽
              </span>
              <br />

              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/nastolnyy/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/nastolniy/"
                  title="Настольный"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/b03/178_250_1/Tb_настольный.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="1981"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="1981"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/nastolniy/"
                title="Настольный"
              >
                Бильярдный стол Настольный
              </a>

              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  8 610
                </div>{" "}
                ₽
              </span>
              <br />

              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/nastolniy/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/kadet/"
                  title="Кадет"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/7f0/178_250_1/Tb_Kadet_01.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="1980"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="1980"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span class="label">Лидер продаж</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/kadet/"
                title="Кадет"
              >
                Бильярдный стол Кадет
              </a>
              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  30 220
                </div>{" "}
                ₽
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/kadet/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/kadet_kombi/"
                  title="Кадет Комби"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/845/178_250_1/2022_Tb_Kadet_Combo_00.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="46869"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="46869"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span class="label">Новинка</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/kadet_kombi/"
                title="Кадет Комби"
              >
                Бильярдный стол Кадет Комби
              </a>
              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  30 220
                </div>{" "}
                ₽
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/kadet_kombi/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/kompakt_layt/"
                  title="Компакт Лайт"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/909/178_250_1/01_2018_Tb_Compact_Light.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="14272"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="14272"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/kompakt_layt/"
                title="Компакт Лайт"
              >
                Бильярдный стол Компакт Лайт
              </a>

              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  31 100
                </div>{" "}
                ₽
              </span>
              <br />

              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/kompakt_layt/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/yunker/"
                  title="Юнкер"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/3af/178_250_1/01_Tb_Junker.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="12320"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="12320"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/yunker/"
                title="Юнкер"
              >
                Бильярдный стол Юнкер
              </a>

              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  38 360
                </div>{" "}
                ₽
              </span>
              <br />

              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/yunker/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/modernlux/"
                  title="Модерн Люкс"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/8bb/178_250_1/01_Tb_Modern_Luks.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="1976"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="1976"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span class="label">Акция</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/modernlux/"
                title="Модерн Люкс"
              >
                Бильярдный стол Модерн Люкс
              </a>
              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от <del>49 910 ₽</del>
                <br />
                Со скидкой от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  42 420
                </div>{" "}
                ₽
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/modernlux/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/domashniy/"
                  title="Домашний"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/353/178_250_1/01_2017_Tb_Home.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="12051"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="12051"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span class="label">Акция</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/domashniy/"
                title="Домашний"
              >
                Бильярдный стол Домашний
              </a>
              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от <del>54 700 ₽</del>
                <br />
                Со скидкой от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  46 500
                </div>{" "}
                ₽
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/domashniy/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/modern_/"
                  title="Модерн "
                >
                  <img
                    src="/upload/resize_cache//medialibrary/793/178_250_1/Tb_Modern_тик-01.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="25318"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="25318"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/modern_/"
                title="Модерн "
              >
                Бильярдный стол Модерн{" "}
              </a>

              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  54 450
                </div>{" "}
                ₽
              </span>
              <br />

              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/modern_/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/virtuoz/"
                  title="Виртуоз"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/2b8/178_250_1/2020_Tb_Virtuoso_01_ochre.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="43137"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="43137"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span class="label">Акция</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/virtuoz/"
                title="Виртуоз"
              >
                Бильярдный стол Виртуоз
              </a>
              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  64 280
                </div>{" "}
                ₽
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/virtuoz/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/loft/"
                  title="Лофт"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/4a9/178_250_1/2021_Tb_loft_ноче-экко_00.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="44565"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="44565"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span class="label">Новинка</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/loft/"
                title="Лофт"
              >
                Бильярдный стол Лофт
              </a>
              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  66 740
                </div>{" "}
                ₽
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/loft/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/loft_shpon/"
                  title="Лофт шпон"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/36b/178_250_1/2021_Tb_loft_стандарт_00.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="44845"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="44845"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span class="label">Акция</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/loft_shpon/"
                title="Лофт шпон"
              >
                Бильярдный стол Лофт шпон
              </a>
              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  67 100
                </div>{" "}
                ₽
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/loft_shpon/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/kompakt_layt_shpon/"
                  title="Компакт Люкс"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/7cc/178_250_1/2022_Tb_Compact_Light_veneer_01.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="46049"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="46049"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span class="label">Новинка</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/kompakt_layt_shpon/"
                title="Компакт Люкс"
              >
                Бильярдный стол Компакт Люкс
              </a>
              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  73 790
                </div>{" "}
                ₽
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/kompakt_layt_shpon/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/praga/"
                  title="Прага"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/36d/178_250_1/2019_Tb_Prague_01.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="25181"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="25181"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span class="label">Новинка</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/praga/"
                title="Прага"
              >
                Бильярдный стол Прага
              </a>
              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  74 310
                </div>{" "}
                ₽
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/praga/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/domashniy_lyuks_iii/"
                  title="Домашний Люкс III"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/bfa/178_250_1/2018_Tb_Domashniy_lux_III_01.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="18017"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="18017"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/domashniy_lyuks_iii/"
                title="Домашний Люкс III"
              >
                Бильярдный стол Домашний Люкс III
              </a>

              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  81 670
                </div>{" "}
                ₽
              </span>
              <br />

              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/domashniy_lyuks_iii/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/domashniy_lyuks/"
                  title="Домашний Люкс"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/7aa/178_250_1/01+_Tb_Domashniy_lux_II.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="11280"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="11280"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/domashniy_lyuks/"
                title="Домашний Люкс"
              >
                Бильярдный стол Домашний Люкс
              </a>

              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  81 670
                </div>{" "}
                ₽
              </span>
              <br />

              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/domashniy_lyuks/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/sibir/"
                  title="Сибирь"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/83e/178_250_1/2018_Tb_Siberian_ochre_01.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="19141"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="19141"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span class="label">Лидер продаж</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/sibir/"
                title="Сибирь"
              >
                Бильярдный стол Сибирь
              </a>
              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  85 860
                </div>{" "}
                ₽
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/sibir/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/klassik/"
                  title="Классик"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/13d/178_250_1/2021_Tb_Классик_t_01.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
                <span
                  style={{
                    backgroundColor: "#027A64",
                    padding: "12px 5px",
                    borderRadius: "25px",
                    color: "#fff",
                    position: "relative",
                    top: "-40px",
                    left: "-50px",
                  }}
                >
                  -10%
                </span>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="44868"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="44868"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span class="label">Акция</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/klassik/"
                title="Классик"
              >
                Бильярдный стол Классик
              </a>
              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от <del>90 510 ₽</del>
                <br />
                Со скидкой от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  81 459
                </div>{" "}
                ₽
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/klassik/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/modern_pro/"
                  title="Модерн Про"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/e75/178_250_1/Tb_Modern_PRO_тик-01.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="29999"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="29999"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span class="label">Акция</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/modern_pro/"
                title="Модерн Про"
              >
                Бильярдный стол Модерн Про
              </a>
              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  91 970
                </div>{" "}
                ₽
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/modern_pro/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/omega/"
                  title="Омега"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/106/178_250_1/2022_Tb_Omega_01_сетка.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="46855"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="46855"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span class="label">Новинка</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/omega/"
                title="Омега"
              >
                Бильярдный стол Омега
              </a>
              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  96 890
                </div>{" "}
                ₽
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/omega/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/olimp/"
                  title="Олимп"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/124/178_250_1/01_Tb_Olimp+.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="9179"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="9179"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/olimp/"
                title="Олимп"
              >
                Бильярдный стол Олимп
              </a>

              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  101 990
                </div>{" "}
                ₽
              </span>
              <br />

              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/olimp/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/olimp_lyuks/"
                  title="Олимп-Люкс"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/b88/178_250_1/01_Tb_Olimp+.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="9182"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="9182"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/olimp_lyuks/"
                title="Олимп-Люкс"
              >
                Бильярдный стол Олимп-Люкс
              </a>

              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  106 090
                </div>{" "}
                ₽
              </span>
              <br />

              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/olimp_lyuks/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/gollivud/"
                  title="Голливуд"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/7db/178_250_1/02Голливуд.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="4123"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="4123"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span class="label">Акция</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/gollivud/"
                title="Голливуд"
              >
                Бильярдный стол Голливуд
              </a>
              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  117 370
                </div>{" "}
                ₽
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/gollivud/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/dilerskiy_iii/"
                  title="Дилерский III"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/96a/178_250_1/01_Tb_Dialer_III.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="1977"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="1977"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/dilerskiy_iii/"
                title="Дилерский III"
              >
                Бильярдный стол Дилерский III
              </a>

              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  119 110
                </div>{" "}
                ₽
              </span>
              <br />

              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/dilerskiy_iii/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/arsenal/"
                  title="Арсенал"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/399/178_250_1/01_Tb_Arsenal_Lux.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="3901"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="3901"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/arsenal/"
                title="Арсенал"
              >
                Бильярдный стол Арсенал
              </a>

              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  139 140
                </div>{" "}
                ₽
              </span>
              <br />

              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/arsenal/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/shervud/"
                  title="Шервуд"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/b19/178_250_1/01_венге_старое_дерево.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="4167"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="4167"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/shervud/"
                title="Шервуд"
              >
                Бильярдный стол Шервуд
              </a>

              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  144 490
                </div>{" "}
                ₽
              </span>
              <br />

              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/shervud/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/arsenal_ii/"
                  title="Арсенал II"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/5ca/178_250_1/01_Tb_Arsenal_Lux_II.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="3903"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="3903"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/arsenal_ii/"
                title="Арсенал II"
              >
                Бильярдный стол Арсенал II
              </a>

              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  147 860
                </div>{" "}
                ₽
              </span>
              <br />

              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/arsenal_ii/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/baron_ii/"
                  title="Барон II"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/1be/178_250_1/01_Tb_Baron_2.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="4271"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="4271"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/baron_ii/"
                title="Барон II"
              >
                Бильярдный стол Барон II
              </a>

              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  155 300
                </div>{" "}
                ₽
              </span>
              <br />

              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/baron_ii/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li
              class="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/baron/"
                  title="Барон"
                >
                  <img
                    src="/upload/resize_cache//medialibrary/bc0/178_250_1/01_Tb_Baron.jpg"
                    class="w178"
                    style={{
                      minWidth: "200px!important",
                      maxWidth: "220px!important",
                      minHeight: "150px!important",
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  class="compare_btn"
                  data-item="1910"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="1910"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/baron/"
                title="Барон"
              >
                Бильярдный стол Барон
              </a>

              <br />
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  160 100
                </div>{" "}
                ₽
              </span>
              <br />

              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/baron/"
                class="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
          </ul>
          <div style={{ textAlign: "center" }}>
            <button
              id="show_all_tables_btn"
              class="button72"
              style={{
                width: "250px",
                height: "35px",
                margin: "0 auto",
                padding: "5px",
                color: "#f7f0dd",
                textDecoration: "none",
                marginTop: "10px",
              }}
            >
              Показать все столы
            </button>
          </div>
          <div id="result" style={{ margin: "-8px" }}></div>

          <div class="tabs">
            <button class="tab_btn tab_btn_1 active_tab">Акции</button>
            <button class="tab_btn tab_btn_2">Новинки</button>
            <button class="tab_btn tab_btn_3">Лидер продаж</button>
          </div>
          <div class="tab_sale_content">
            <div class="bx-wrapper" style={{ maxWidth: "1290px" }}>
              <div
                class="bx-viewport"
                aria-live="polite"
                style={{
                  width: "100%",
                  overflow: "hidden",
                  position: "relative",
                  height: "190px;",
                }}
              >
                <div
                  class="slider_top"
                  style={{
                    width: "9215%",
                    position: "relative",
                    transitionDuration: "0s",
                    transform: "translate3d(-1286.64px, 0px, 0px)",
                  }}
                >
                  <div
                    style={{
                      width: "237.333px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/gollivud/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/7db/02Голливуд.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/gollivud/">
                        Бильярдный стол Голливуд
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "237.333px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/modern_pro/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/e75/Tb_Modern_PRO_тик-01.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/modern_pro/">
                        Бильярдный стол Модерн Про
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "237.333px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/loft_shpon/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/36b/2021_Tb_loft_стандарт_00.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/loft_shpon/">
                        Бильярдный стол Лофт шпон
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "237.333px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/180/good/domashniy/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/353/01_2017_Tb_Home.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/180/good/domashniy/">
                        Бильярдный стол Домашний
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "237.333px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/180/good/virtuoz/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/2b8/2020_Tb_Virtuoso_01_ochre.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/180/good/virtuoz/">
                        Бильярдный стол Виртуоз
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "237.333px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="false"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/174/good/liverpul_praym_snuker/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/6b8/2022_Tb_Liverpool_Prime_snooker_01-0.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/174/good/liverpul_praym_snuker/">
                        Бильярдный стол Ливерпуль Прайм Снукер
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "237.333px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="false"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/176/good/liverpul/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/56b/01_2022_Tb_Liverpool.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/176/good/liverpul/">
                        Бильярдный стол Ливерпуль
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "237.333px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="false"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/176/good/klassik/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/13d/2021_Tb_Классик_t_01.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/176/good/klassik/">
                        Бильярдный стол Классик
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "237.333px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/modernlux/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/8bb/01_Tb_Modern_Luks.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/modernlux/">
                        Бильярдный стол Модерн Люкс
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "237.333px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/gollivud/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/7db/02Голливуд.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/gollivud/">
                        Бильярдный стол Голливуд
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "237.333px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/modern_pro/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/e75/Tb_Modern_PRO_тик-01.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/modern_pro/">
                        Бильярдный стол Модерн Про
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "237.333px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/loft_shpon/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/36b/2021_Tb_loft_стандарт_00.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/loft_shpon/">
                        Бильярдный стол Лофт шпон
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "237.333px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/180/good/domashniy/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/353/01_2017_Tb_Home.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/180/good/domashniy/">
                        Бильярдный стол Домашний
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "237.333px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/180/good/virtuoz/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/2b8/2020_Tb_Virtuoso_01_ochre.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/180/good/virtuoz/">
                        Бильярдный стол Виртуоз
                      </a>
                    </span>
                  </div>{" "}
                  <div
                    style={{
                      width: "237.333px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/174/good/liverpul_praym_snuker/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/6b8/2022_Tb_Liverpool_Prime_snooker_01-0.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/174/good/liverpul_praym_snuker/">
                        Бильярдный стол Ливерпуль Прайм Снукер
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "237.333px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/176/good/liverpul/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/56b/01_2022_Tb_Liverpool.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/176/good/liverpul/">
                        Бильярдный стол Ливерпуль
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "237.333px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/176/good/klassik/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/13d/2021_Tb_Классик_t_01.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/176/good/klassik/">
                        Бильярдный стол Классик
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "237.333px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/modernlux/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/8bb/01_Tb_Modern_Luks.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/modernlux/">
                        Бильярдный стол Модерн Люкс
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "237.333px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/gollivud/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/7db/02Голливуд.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/gollivud/">
                        Бильярдный стол Голливуд
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="bx-controls bx-has-controls-direction bx-has-pager">
                <div class="bx-controls-direction">
                  <a
                    class="bx-prev"
                    href="https://www.fabrika-start.ru/kupit_stol_dlja_russkogo_biljarda/"
                  >
                    Prev
                  </a>
                  <a
                    class="bx-next"
                    href="https://www.fabrika-start.ru/kupit_stol_dlja_russkogo_biljarda/"
                  >
                    Next
                  </a>
                </div>
                <div class="bx-pager bx-default-pager">
                  <div class="bx-pager-item">
                    <a
                      href=""
                      data-slide-index="0"
                      class="bx-pager-link active"
                    >
                      1
                    </a>
                  </div>
                  <div class="bx-pager-item">
                    <a href="" data-slide-index="1" class="bx-pager-link">
                      2
                    </a>
                  </div>
                  <div class="bx-pager-item">
                    <a href="" data-slide-index="2" class="bx-pager-link">
                      3
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tab_new_content" style={{ display: "none" }}>
            <div class="bx-wrapper" style={{ maxWidth: "1290px" }}>
              <div
                class="bx-viewport"
                aria-live="polite"
                style={{
                  width: "100%",
                  overflow: "hidden",
                  position: "relative",
                  height: "190px;",
                }}
              >
                <div
                  class="slider_top_2"
                  style={{
                    width: "10215%",
                    position: "relative",
                    transitionDuration: "0s",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/okhota_/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/a53/2021_Охота.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/okhota_/">
                        Бильярдный стол Охота
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/motsart_collection/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/32a/2021_Mozart.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/motsart_collection/">
                        Бильярдный стол Моцарт
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/kolekciya_grossmeyster/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/6e6/2023_Grandmaster.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/kolekciya_grossmeyster/">
                        Бильярдный стол Гроссмейстер
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_high_style/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/ace/High-Style_коллекция.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_high_style/">
                        Бильярдный стол High-Style
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/kollecia_high_style_lux/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/765/High-Style-Lux_коллекция.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/kollecia_high_style_lux/">
                        Бильярдный стол High-Style Lux
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="false"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/174/good/prezident_iii_praym/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/4ef/2021_Tb_President_Prime_06_этап_лузы.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/174/good/prezident_iii_praym/">
                        Бильярдный стол Президент III Прайм
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="false"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/174/good/prezident_praym/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/719/2021_Tb_President_Prime_06_этап_лузы.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/174/good/prezident_praym/">
                        Бильярдный стол Президент Прайм
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="false"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/174/good/liverpul_klab_praym/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/dfe/2021_Tb_Liverpool-club_Prime_06-этап_лузы.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/174/good/liverpul_klab_praym/">
                        Бильярдный стол Ливерпуль Клаб Прайм
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_hightech/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/0d7/High-Tech_коллекция (2).jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_hightech/">
                        Бильярдный стол High-tech
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_neapol/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/1f0/2020_Неаполь.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_neapol/">
                        Бильярдный стол Неаполь
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/okhota_/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/a53/2021_Охота.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/okhota_/">
                        Бильярдный стол Охота
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/motsart_collection/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/32a/2021_Mozart.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/motsart_collection/">
                        Бильярдный стол Моцарт
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/kolekciya_grossmeyster/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/6e6/2023_Grandmaster.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/kolekciya_grossmeyster/">
                        Бильярдный стол Гроссмейстер
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_high_style/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/ace/High-Style_коллекция.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_high_style/">
                        Бильярдный стол High-Style
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/kollecia_high_style_lux/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/765/High-Style-Lux_коллекция.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/kollecia_high_style_lux/">
                        Бильярдный стол High-Style Lux
                      </a>
                    </span>
                  </div>{" "}
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/174/good/prezident_iii_praym/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/4ef/2021_Tb_President_Prime_06_этап_лузы.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/174/good/prezident_iii_praym/">
                        Бильярдный стол Президент III Прайм
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/174/good/prezident_praym/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/719/2021_Tb_President_Prime_06_этап_лузы.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/174/good/prezident_praym/">
                        Бильярдный стол Президент Прайм
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/174/good/liverpul_klab_praym/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/dfe/2021_Tb_Liverpool-club_Prime_06-этап_лузы.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/174/good/liverpul_klab_praym/">
                        Бильярдный стол Ливерпуль Клаб Прайм
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_hightech/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/0d7/High-Tech_коллекция (2).jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_hightech/">
                        Бильярдный стол High-tech
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_neapol/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/1f0/2020_Неаполь.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/175/good/kollektsiya_neapol/">
                        Бильярдный стол Неаполь
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="bx-controls bx-has-controls-direction bx-has-pager">
                <div class="bx-controls-direction">
                  <a
                    class="bx-prev"
                    href="https://www.fabrika-start.ru/kupit_stol_dlja_russkogo_biljarda/"
                  >
                    Prev
                  </a>
                  <a
                    class="bx-next"
                    href="https://www.fabrika-start.ru/kupit_stol_dlja_russkogo_biljarda/"
                  >
                    Next
                  </a>
                </div>
                <div class="bx-pager bx-default-pager">
                  <div class="bx-pager-item">
                    <a
                      href=""
                      data-slide-index="0"
                      class="bx-pager-link active"
                    >
                      1
                    </a>
                  </div>
                  <div class="bx-pager-item">
                    <a href="" data-slide-index="1" class="bx-pager-link">
                      2
                    </a>
                  </div>
                  <div class="bx-pager-item">
                    <a href="" data-slide-index="2" class="bx-pager-link">
                      3
                    </a>
                  </div>
                  <div class="bx-pager-item">
                    <a href="" data-slide-index="3" class="bx-pager-link">
                      4
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tab_best_content" style={{ display: "none" }}>
            <div class="bx-wrapper" style={{ maxWidth: "1290px" }}>
              <div
                class="bx-viewport"
                aria-live="polite"
                style={{
                  width: "100%",
                  overflow: "hidden",
                  position: "relative",
                  height: "190px;",
                }}
              >
                <div
                  class="slider_top_3"
                  style={{
                    width: "8215%",
                    position: "relative",
                    transitionDuration: "0s",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/renessans_gold/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/625/1.png"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/renessans_gold/">
                        Бильярдный стол Ренессанс Голд
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/bilyardnyy_stol_leo/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/196/Бильярдный стол Лео.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/bilyardnyy_stol_leo/">
                        Бильярдный стол Лео
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/liverpul_ekzotik/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/c25/01_Tb_Liverpool_exotic.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/liverpul_ekzotik/">
                        Бильярдный стол Ливерпуль-Экзотик
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/sibir/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/83e/2018_Tb_Siberian_ochre_01.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/sibir/">
                        Бильярдный стол Сибирь
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/180/good/kadet/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/7f0/Tb_Kadet_01.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/180/good/kadet/">
                        Бильярдный стол Кадет
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="false"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/176/good/versal/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/024/2018_Tb_Versailles_01_1.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/176/good/versal/">
                        Бильярдный стол Версаль
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="false"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/176/good/high_style/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/7a8/Tb_High-Style_01.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/176/good/high_style/">
                        Бильярдный стол High-Style
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="false"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/imperator/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/438/01_2019_Tb_Imperator.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/imperator/">
                        Бильярдный стол Император
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/renessans_gold/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/625/1.png"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/renessans_gold/">
                        Бильярдный стол Ренессанс Голд
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/bilyardnyy_stol_leo/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/196/Бильярдный стол Лео.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/bilyardnyy_stol_leo/">
                        Бильярдный стол Лео
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/liverpul_ekzotik/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/c25/01_Tb_Liverpool_exotic.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/liverpul_ekzotik/">
                        Бильярдный стол Ливерпуль-Экзотик
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/sibir/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/83e/2018_Tb_Siberian_ochre_01.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/178/good/sibir/">
                        Бильярдный стол Сибирь
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/180/good/kadet/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/7f0/Tb_Kadet_01.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/180/good/kadet/">
                        Бильярдный стол Кадет
                      </a>
                    </span>
                  </div>{" "}
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/176/good/versal/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/024/2018_Tb_Versailles_01_1.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/176/good/versal/">
                        Бильярдный стол Версаль
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/176/good/high_style/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/7a8/Tb_High-Style_01.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/176/good/high_style/">
                        Бильярдный стол High-Style
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/imperator/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/438/01_2019_Tb_Imperator.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/imperator/">
                        Бильярдный стол Император
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/renessans_gold/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/625/1.png"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/renessans_gold/">
                        Бильярдный стол Ренессанс Голд
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "16.6667px",
                      height: "180px",
                      textAlign: "center",
                      border: "5px solid rgb(244, 231, 200)",
                      float: "left",
                      listStyle: "none",
                      position: "relative",
                      marginRight: "10px",
                    }}
                    class="bx-clone"
                    aria-hidden="true"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "120px",
                        textAling: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                        alignItems: "center",
                      }}
                    >
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/bilyardnyy_stol_leo/">
                        <img
                          style={{ maxWidth: "220px", maxHeight: "120px;" }}
                          src="/upload/medialibrary/196/Бильярдный стол Лео.jpg"
                        />
                      </a>
                    </div>
                    <span>
                      <a href="https://www.fabrika-start.ru/catalog/sect/177/good/bilyardnyy_stol_leo/">
                        Бильярдный стол Лео
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="bx-controls bx-has-controls-direction bx-has-pager">
                <div class="bx-controls-direction">
                  <a
                    class="bx-prev"
                    href="https://www.fabrika-start.ru/kupit_stol_dlja_russkogo_biljarda/"
                  >
                    Prev
                  </a>
                  <a
                    class="bx-next"
                    href="https://www.fabrika-start.ru/kupit_stol_dlja_russkogo_biljarda/"
                  >
                    Next
                  </a>
                </div>
                <div class="bx-pager bx-default-pager">
                  <div class="bx-pager-item">
                    <a
                      href=""
                      data-slide-index="0"
                      class="bx-pager-link active"
                    >
                      1
                    </a>
                  </div>
                  <div class="bx-pager-item">
                    <a href="" data-slide-index="1" class="bx-pager-link">
                      2
                    </a>
                  </div>
                  <div class="bx-pager-item">
                    <a href="" data-slide-index="2" class="bx-pager-link">
                      3
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="video_block"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
          >
            <div>
              <iframe
                width="100%"
                height="215"
                src="https://www.youtube.com/embed/7QGUHuG7cMw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
              ></iframe>
            </div>
            <div>
              <iframe
                width="100%"
                height="215"
                src="https://www.youtube.com/embed/yIbxraoiOwI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
              ></iframe>
            </div>
            <div>
              <iframe
                width="100%"
                height="215"
                src="https://www.youtube.com/embed/9eTvwYdBbrM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
              ></iframe>
            </div>
            <div>
              <iframe
                width="100%"
                height="215"
                src="https://www.youtube.com/embed/PpBszyNy8xs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css"
          />
        </div>
        <div class="main float-right width764 padding0088 section-description">
          <p>
            Бильярд - это спорт, который никогда не выйдет из моды. Он
            привлекает как профессионалов, так и любителей, желающих провести
            время за увлекательной игрой. Однако, необходимо подойти с особым
            вниманием к выбору оборудования.
          </p>
          <p>
            Производитель Фабрика “Старт” предлагает широкий ассортимент
            аксессуаров для бильярда как для спортивных состязаний, так и для
            обустройства игровых комнат.
          </p>
          <h2>Как подобрать стол?</h2>
          <ul style={{ listStyle: "square inside" }}>
            <li>
              Вид игры. В первую очередь для подбора требуется определить
              разновидность игры, так как параметры стола для разных типов игры
              будут отличаться по многим параметрам. Стол для американского пула
              имеет размер до 9 футов, в то время как для русского бильярда - от
              5 до 12 футов.
            </li>
            <li>
              Цель покупки. Бильярдные столы будут различаться в зависимости от
              места размещения и предназначения. Например, игровое поле стола
              для загородного дома или частной игровой будет иное по
              характеристикам, чем для проведения турниров.
            </li>
            <li>
              Материалы. Цена и износостойкость тесно связаны с материалами.
              Любительское оборудование может быть изготовлено из ДСП, ЛДСП,
              березы или сосны, для изготовления профессиональных линеек
              используют ценные породы дерева - массива ясеня, дуба и даже
              красное дерево акажу.
            </li>
            <li>
              Основа игрового поля. Для спортивных мероприятий используются
              плиты из натурального сланца Orero и искусственного камня Super
              Stone или PBS. Основание для эконом-варианта зачастую выполнено из
              лдсп.
            </li>
            <li>
              Сукно. Плотность, толщина, длина ворса, соотношение шерсти и
              синтетики влияет на поведение шара. Manchester и Euro Pro - сукно
              проверенных брендов достойного качества по минимальной цене.{" "}
            </li>
            <li>
              Цена. Стоимость связана с целью покупки. Любительские бильярдные
              столы является более доступным по цене, а для профессионального
              стоят выше из-за использования дорогостоящих материалов, которые
              прослужат в течение долгих лет при активной эксплуатации.
            </li>
          </ul>{" "}
        </div>
      </div>
      <div class="with-breadcrumbs"></div>
    </div>
  );
};

export default Top;

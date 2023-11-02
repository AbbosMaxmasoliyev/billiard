import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import keyLinksJson from "../../json/Links/trenajorLinks.json";
import kiiJson from "../../json/trenajor.json";
const TrenajorCategoryComponent = () => {
  const params = useParams();
  const [links, setLinks] = useState();
  const [obj, setObj] = useState();
  console.log(keyLinksJson[params.category].name);
  useEffect(() => {
    let category = params.category;
    setLinks(
      (prev) => (prev = keyLinksJson[category]?.links.map((item) => item.link))
    );

    let objJson = {};

    kiiJson.forEach((item) => {
      let key = Object.keys(item)[0];
      objJson[key] = item[key];
    });

    setObj((prev) => (prev = objJson));
  }, []);

  useEffect(() => {
    let category = params.category;
    setLinks(
      (prev) => (prev = keyLinksJson[category]?.links.map((item) => item.link))
    );

    let objJson = {};

    kiiJson.forEach((item) => {
      let key = Object.keys(item)[0];
      objJson[key] = item[key];
    });

    setObj((prev) => (prev = objJson));
  }, [params]);
  console.log(links, obj);
  return (
    <div className="wrap-content-left">
      <div class="with-breadcrumbs">
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
                href="https://www.fabrika-start.ru/catalog/sect/835/"
                title="Игротека"
                itemprop="url"
              >
                <span itemprop="title">Игротека</span>
              </a>
            </div>
            <div class="bx-breadcrumb-item">
              <i class="fa fa-angle-right"></i>
              <span>Тренажеры</span>
            </div>
            <div style={{ clear: "both" }}></div>
          </div>
          &nbsp; &nbsp;
          <h1 class="float-right width772">{keyLinksJson[params.category].name}</h1>
          <br />
          <a
            style={{
              float: "right",
              width: "150px",
              textAlign: "center",
              padding: "5px;",
            }}
            class="button72"
            target="_blank"
            href="https://www.fabrika-start.ru/catgen/print.php?id=945"
          >
            Распечатать каталог
          </a>
          <ul class="pricefordownload float-right width772">
            <li style={{ lineHeight: "14px!important", width: "300px" }}>
              <a
                style={{ lineHeight: "14px!important" }}
                href="https://www.fabrika-start.ru/upload/iblock/2f4/START%20LINE%20%D0%BF%D1%80%D0%B0%D0%B9%D1%81-%D0%BB%D0%B8%D1%81%D1%82%20%D0%9C%D0%A1%D0%9A-%D0%9D%D0%A1%D0%9A%20%D0%A0%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0%2005.10.2023.xls"
                target="_blank"
                class="excel"
              >
                Скачать прайс-лист на ИГРОТЕКУ: теннисные столы, аксессуары и
                спортивно-игровое оборудование
              </a>
            </li>
          </ul>
         
        </div>
        
        <div class="main float-right width772 pos-relative center-right section_193">
          <ul class="related-products tables">
            <input
              style={{ display: "none" }}
              name=""
              alt=""
              data-name=""
              data-price="0"
              data-url=""
              data-img=""
              type="submit"
              class="order button72 js__detail-buy-btn btn_buy_in_detail"
              value="Купить"
            />

            {links?.map((item, index) => {
              let objItem = obj[item]
             
              return (
              
                <li>
                  <div>
                    <Link
                      to={`/aksessuar/${params.category}/${item}`}
                      title={objItem?.name}
                    >
                      <img src={objItem?.image[0] ? objItem?.image[0] : objItem?.images[0]} class="w178" />
                    </Link>
                  </div>
                  <div
                    style={{
                      float: "left",
                      position: "absolute",
                      top: "-10px",
                      right: "-80px;",
                    }}
                  >
                    <a
                      class="compare_btn"
                      data-item="19183"
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
                      data-item="19183"
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
                  <Link
                    to={`/aksessuar/${params.category}/${item}`}
                    title={objItem?.name}
                  >
                    {objItem?.name}
                  </Link>
                  <br />
                  Цена <b>{objItem?.price * 130}</b> UZS
                  <br />
                  <br />
                  <input
                    name="19183"
                    alt="19183"
                    data-name="Чехол «Элегант-Люкс» 12фт"
                    data-price="14900"
                    data-url="/catalog/sect/193/good/chekhol_elegant_lyuks_12ft/"
                    data-img="/upload/resize_cache//medialibrary/f57/178_250_1/2018_Элегант_люкс_gold.jpg"
                    type="submit"
                    class="order button72 js__detail-buy-btn btn_buy_in_detail"
                    value="Купить"
                  />
                </li>
              );
            })}
           
          </ul>

          <br />
          <br />
        </div>
        <div class="main float-right width764 padding0088 section-description">
          <p>
            <a href="https://www.fabrika-start.ru/">Бильярдный стол</a> сложно
            назвать покупкой, которую совершают регулярно, обычно такое
            оборудование приобретается надолго. Чтобы ваш бильярдный стол был
            защищен, длительное время сохранял свой внешний вид и игровые
            характеристики, нужно обеспечить все условия – для этого и
            необходимы чехлы бильярдных столов. Приобретая бильярдный стол в
            сети фирменных салонов «Старт», рекомендуем купить чехол бильярдного
            стола — недорогой, но очень важный аксессуар.
          </p>
          <p>
            Все представленные чехлы для бильярдных столов можно купить&nbsp;в
            любом&nbsp;
            <a href="https://www.fabrika-start.ru/contacts/" target="_blank">
              фирменном салоне
            </a>
            &nbsp;Фабрики, в розничных магазинах обширной&nbsp;
            <a href="https://www.fabrika-start.ru/dealers/" target="_blank">
              дилерской сети
            </a>
            &nbsp;«Старт»,&nbsp;а также с помощью оформления заказа и
            онлайн-платежей непосредственно с сайта Фабрики «Старт».
            <br />
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default TrenajorCategoryComponent;

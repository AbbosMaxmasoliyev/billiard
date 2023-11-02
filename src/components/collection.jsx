import React from "react";
import * as IconName from "react-icons/bi";
import { Link } from "react-router-dom";

const Collection = ({ data }) => {
  return (
    <div class="main float-right width772 pos-relative center-right section_175">
      <span class="h2">{data.name}</span>

      <ul class="related-products collection_tables" id="images">
        {data.items
          ? data.items.map((item, index) => {
              console.log(item);
              return (
                <li key={index}>
                  <div className="item">
                    <Link to={item.link ? item.link : null} title={item.name}>
                      <img src={"/images/images/" + item.image} class="w366" />
                    </Link>
                  </div>
                  <div
                    style={{
                      float: "left",
                      position: "absolute",
                      top: "-10px",
                      right: "-80px",
                    }}
                  >
                    <Link
                      class="compare_btn"
                      data-item="4419"
                      style={{ textDecoration: "none" }}
                      to={item.link ? item.link : null}
                    >
                      <IconName.BiSolidBarChartAlt2 />
                    </Link>

                    <a
                      class="favor"
                      data-item="4419"
                      style={{ textDecoration: "none" }}
                      href=""
                    >
                      <IconName.BiHeart />
                    </a>
                  </div>
                  <Link to={item.link ? item.link : null} title={item.name}>
                    {item.name}
                  </Link>
                </li>
              );
            })
          : data.images.map((item, index) => (
              <li key={index}>
                <div className="item">
                  <Link to={item.link ? item.link : null} title={item.name}>
                    {/* <img src={item.image} class="w366" /> */}
                  </Link>
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
                    data-item="4419"
                    style={{ textDecoration: "none" }}
                    href=""
                  >
                    <IconName.BiSolidBarChartAlt2 />
                  </a>

                  <a
                    class="favor"
                    data-item="4419"
                    style={{ textDecoration: "none" }}
                    href=""
                  >
                    <IconName.BiHeart />
                  </a>
                </div>
                <Link to={item.link ? item.link : null} title={item.name}>
                  {item.name}
                </Link>
              </li>
            ))}

        <li>
          и еще <b>17</b> наименований...
          <span class="h3" style={{ marginLeft: "0px", marginRight: "0px" }}>
            <a
              rel="nofollow"
              href="https://www.fabrika-start.ru/catalog/sect/175/"
            >
              Посмотреть все
            </a>{" "}
            »
          </span>
        </li>
      </ul>

      <br />
      <br />
    </div>
  );
};

const CollectionPopular = ({ data }) => {
  return (
    <div class="main float-right width772 pos-relative center-right section_982">
      <span class="h2">{data.name} </span>

      {data.items && (
        <ul class="related-products tables" id="images">
          {data.items.map((item, index) => {
            // console.log(item);
            return (
              <li>
                <div>
                  <Link to={item.link ? item.link : null} title={item.name}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/" + item.image}
                      class="w178"
                      alt={item.name}
                    />
                  </Link>
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
                    data-item="4419"
                    style={{ textDecoration: "none" }}
                    href=""
                  >
                    <IconName.BiSolidBarChartAlt2 />
                  </a>

                  <a
                    class="favor"
                    data-item="4419"
                    style={{ textDecoration: "none" }}
                    href=""
                  >
                    <IconName.BiHeart />
                  </a>
                </div>
                <Link to={item.link ? item.link : null}
                  title={item.name}
                >
                  {item.name}
                </Link>
                <br />
                Цена <b>{item.price}</b> ₽
                <br />
                <br />
                <a
                  href="https://www.fabrika-start.ru/catalog/sect/982/good/kadet_kombi/"
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
            );
          })}

          <li>
            и еще <b>11</b> наименований...
          </li>
        </ul>
      )}

      <br />
      <br />
    </div>
  );
};

const CollectionWithHide = ({ data }) => {
  console.log(data);
  return (
    <div class="main float-right width772 center-right">
      <h2>{data.name}</h2>
      {data.items.map((itemInner, index) => (
        <>
          <ul class="list col3">
            {itemInner.map((item, index) => {
              return (
                <li>
                  <img
                    width={248}
                    height={145}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    alt={item.image}
                    src={process.env.PUBLIC_URL + "/images/images/" + item.image}
                    title={item.title}
                  />
                  <h3>
                    <a href="https://www.fabrika-start.ru/catalog/sect/440/">
                      {item.title}
                    </a>
                  </h3>
                  <p>{item.info}</p>
                  <div
                    class="showhideincatalogindex"
                    style={{ display: "none" }}
                  >
                    <p>
                      {item.links.map((link, index) => (
                        <Link to={link.link} key={index}>
                          {link.name}
                        </Link>
                      ))}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <p class="text-right">
            <a
              href="https://www.fabrika-start.ru/catalog/#"
              class="show-list black-arrow-down"
            >
              показать список
            </a>
          </p>
        </>
      ))}
    </div>
  );
};

export { Collection, CollectionPopular, CollectionWithHide };

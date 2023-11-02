import React, { useEffect, useState } from "react";

const Table = ({ data, sizesData, parametres, image, name }) => {
  console.log(data);
  const [size, setSize] = useState(null);
  const [useFullSize, setUseFullSize] = useState([]);
  const [minWidth, setMinWidth] = useState();
  const [minHeight, setMinHeight] = useState();
  const [minRoomWidth, setMinRoomWidth] = useState();
  const [minRoomHeight, setMinRoomHeight] = useState();
  useEffect(() => {
    if (size) {
      setSize((prev) => (prev = sizesData[sizesData.length - 1]));
      setUseFullSize(
        (prev) => (prev = data.filter((item) => item.size == size))
      );
    }
  }, []);
  useEffect(() => {
    if (size) {
      setUseFullSize(
        (prev) => (prev = data.filter((item) => item.size == size))
      );
    }
    if (!size) {
      setUseFullSize((prev) => (prev = data));
    }
    console.log(useFullSize);

    if (size == 5) {
      setMinWidth((prev) => (prev = 1.64));
      setMinHeight((prev) => (prev = 0.82));

      setMinRoomWidth((prev) => (prev = 4.5));
      setMinRoomHeight((prev) => (prev = 3.7));
    }
    if (size == 6) {
      setMinWidth((prev) => (prev = 1.8));
      setMinHeight((prev) => (prev = 0.9));

      setMinRoomWidth((prev) => (prev = 4.9));
      setMinRoomHeight((prev) => (prev = 4.0));
    }

    if (size == 7) {
      setMinWidth((prev) => (prev = 1.9));
      setMinHeight((prev) => (prev = 0.95));

      setMinRoomWidth((prev) => (prev = 5.0));
      setMinRoomHeight((prev) => (prev = 4.05));
    }

    if (size === 8) {
      setMinWidth((prev) => (prev = 2.24));
      setMinHeight((prev) => (prev = 1.12));

      setMinRoomWidth((prev) => (prev = 5.74));
      setMinRoomHeight((prev) => (prev = 4.62));
    }
    if (size == 9) {
      setMinWidth((prev) => (prev = 2.54));
      setMinHeight((prev) => (prev = 1.27));

      setMinRoomWidth((prev) => (prev = 6.04));
      setMinRoomHeight((prev) => (prev = 4.77));
    }
    if (size == 10) {
      setMinWidth((prev) => (prev = 2.84));
      setMinHeight((prev) => (prev = 1.42));

      setMinRoomWidth((prev) => (prev = 6.34));
      setMinRoomHeight((prev) => (prev = 4.92));
    }

    if (size == 11) {
      setMinWidth((prev) => (prev = 3.2));
      setMinHeight((prev) => (prev = 1.6));

      setMinRoomWidth((prev) => (prev = 6.7));
      setMinRoomHeight((prev) => (prev = 5.1));
    }
    if (size == 12) {
      setMinWidth((prev) => (prev = 3.5));
      setMinHeight((prev) => (prev = 1.75));

      setMinRoomWidth((prev) => (prev = 7.0));
      setMinRoomHeight((prev) => (prev = 5.25));
    }
  }, [size]);

  return (
    <div
      className="main float-right width772"
      id="bx_117848907_36064"
      style={{ paddingTop: "36px" }}
    >
      <span className="h2">{name} </span>

      <div className="switch-size" data-size-container="">
        <ul>
          {sizesData &&
            sizesData.map((sizeNumber, index) => (
              <li key={index}>
                <p
                  onClick={() => setSize((prev) => (prev = sizeNumber))}
                  className={size == sizeNumber ? "active" : null}
                  data-size="8"
                  data-id="spec-table-8"
                >
                  {sizeNumber}ф
                </p>
              </li>
            ))}
        </ul>
      </div>
      <div style={{ clear: "both" }}></div>
      <table data="">
        <thead>
          <tr>
            <td>Тип игры</td>
            <td>Размер поля</td>
            <td>Материал стола</td>
            <td>Тип плиты</td>
            <td>Кол-во ног</td>
            <td>Вес</td>
            <td>Цена</td>

            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr
            className="spec-table-12 background-yellow"
            style={{ display: "table-row" }}
          >
            <td colSpan="9">
              Размер игрового поля {size}-ти футового стола:&nbsp;{minWidth} х{" "}
              {minHeight} м. Бильярдная комната должна быть не меньше&nbsp;{" "}
              {minRoomWidth} х {minRoomHeight}м.{" "}
            </td>
          </tr>
          {useFullSize.map((sizeItem, index) => {
            if (sizeItem.type) {
              return (
                <tr className="spec-table-12" style={{ display: "table-row" }}>
                  <td>{sizeItem.type}</td>
                  <td>{sizeItem.size} фт</td>
                  <td>{sizeItem.material_stol}</td>
                  <td>{sizeItem.plita_type}</td>
                  <td>{sizeItem.leg}</td>
                  <td>{sizeItem.ves}</td>
                  <td nowrap="nowrap" className="td_price" align="center">
                    <input
                      type="hidden"
                      className="standart_price active"
                      value="676 630"
                    />
                    <input type="hidden" className="special_price" value="0" />
                    <b>{sizeItem.price}</b> UZS
                  </td>

                  <td>
                    <input
                      alt="36064-1"
                      data-name="Бильярдный стол High-style"
                      data-price="676630"
                      data-url="/catalog/sect/175/good/collection_high_style/"
                      data-img="/upload/resize_cache//medialibrary/7a8/500_72_1/Tb_High-Style_01.jpg"
                      type="submit"
                      className="order button72 js__detail-buy-btn btn_buy_in_detail"
                      value="Купить"
                    />
                  </td>
                </tr>
              );
            } else {
              return null;
            }
          })}
        </tbody>
      </table>
      <p>
        <br />
      </p>
      <div className="float-right img-right">
        {image && <img width={172} height={74} style={{
            objectFit:"contain",
            objectPosition:"center"
        }} alt={image} src={"/images/" + image} />}
      </div>

      {parametres && (
        <dl className="parameters">
          {parametres.map((item, index) => {
            if (item === "br") {
              console.log(item);
              return <br />;
            } else {
              return (
                <>
                  <dd>{item[0]}</dd>
                  <dt>{item[1]}</dt>
                </>
              );
            }
          })}
        </dl>
      )}
    </div>
  );
};

export default Table;

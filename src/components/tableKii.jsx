import React, { useEffect } from "react";

const TableKii = ({ data, parametres, name, image }) => {
  useEffect(() => {}, [data, parametres]);
  return (
    <div class="main float-right width772">
      <span class="h2">{name} </span>

      <div class="float-right img-right">
        <noindex>
          <img
            width={144}
            height={72}
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
            alt={image}
            src={"/images/" + image}
          />
        </noindex>
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
                  <dd>{item?item[0]:null}</dd>
                  <dt>{item?item[1]:null}</dt>
                </>
              );
            }
          })}
        </dl>
      )}

      {data ? (
        <table width="96%">
          <thead style={{ backgroundColor: "#F4E7C8", color: "#000" }}>
            <tr>
              <td>Тип игры</td>
              <td>Длина</td>
              <td>Вес</td>
              <td>Цена</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {data?.map((sizeItem, index) => (
              <tr className="spec-table-12" style={{ display: "table-row" }}>
                <td>{sizeItem.shape}</td>
                <td>{sizeItem.dlina} </td>
                <td>{sizeItem.weight}</td>
                <td>
                  <b>{sizeItem.price.replace("₽", "") * 130}</b> UZS
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
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default TableKii;

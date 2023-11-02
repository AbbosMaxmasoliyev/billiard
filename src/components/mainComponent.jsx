import React, { useEffect, useState } from "react";
import * as Feather from "react-icons/fi";
const MainComponent = ({ data }) => {
  console.log(data);
  const [images, setImages] = useState(data);
  const [bigImage, setBigImage] = useState();
  useEffect(() => {
    setBigImage((prev) => (prev = data?data[0]:null));
  }, [data]);

  return (
    <div class="main float-right width772">
      <div id="preview756" data-alt="Коллекция High-Style">
        <img
          alt="Коллекция High-Style"
          src="/fortemplate/images/loader1.gif"
          border="0"
          class="loader"
          style={{ display: " none" }}
        />
        <span class="zoom">
          <a href={"/images/" + bigImage} class="lightbox">
            <img
            style={{
              maxWidth:"759px",
              maxHeight:"359px",
              objectFit:"contain",
              objectPosition:"center"
            }}
              src={process.env.PUBLIC_URL + "/images/" + bigImage}
              alt={bigImage}
            />
          </a>
        </span>
        <p class="slider-caption">{bigImage}</p>
      </div>
      <a
        href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_high_style/#"
        class="favor"
        data-item="49682"
      >
        <Feather.FiHeart color="#00c199" width={55} height={55} />
      </a>
      <a
        href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_high_style/#"
        data-item="49682"
        class="compare_btn"
      >
        <Feather.FiBarChart color="#00c199" />
      </a>
      <div class="label">Новинка</div> <div class="golden-line"></div>
      {data?data[1]?(
        <div id="thumbnails">
          <ul>
            {data.map((image, index) => (
              <li
                onClick={() => setBigImage((prev) => (prev = image))}
                key={index}
                className={bigImage === image ? "thumbnail-selected1" : null}
              >
                <img
                  width={121}
                  height={74}
                  src={process.env.PUBLIC_URL + "/images/" + image}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  alt=""
                />
                {/* <p>{image}</p> */}
              </li>
            ))}
          </ul>
        </div>
      ):null:null}
      <div class="under-thumb">
        <div style={{ display: " none" }}></div>

        <div
          style={{
            display: "flex",
            marginTop: "15px",
            justifyContent: "space-evenly",
          }}
        >
          <span
            style={{
              width: "250px",
              fontSize: "0.7em",
              fontWeight: "700",
              marginLeft: "10px",
            }}
          >
            Оплата заказа наличными, банковскими картами, электронными деньгами.
          </span>

          <div style={{ width: "150px" }}></div>
          <div
            class="item_rating"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              width: "100px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;

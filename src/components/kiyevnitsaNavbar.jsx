import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import kiiLinksJson from "../json/Links/keyKiyevnitsa.json";
import keyJson from "../json/kiyevnitsa.json";

const KiyevnitsaNavbar = () => {
  const params = useParams();
  const [mainLinks, setMainLinks] = useState([]);
  const [mainLinkWord, setMainLinkWord] = useState({});
  useEffect(() => {
    let kiiObjectJson = {};
    keyJson.forEach((item, index) => {
      let itemName = Object.keys(item)[0];
      // console.log(itemName);
      kiiObjectJson[itemName] = keyJson[index][itemName];
    });
    // setMainLinkWord(kiiObjectJson);
    // console.log(kiiObjectJson["kiy_yakubovicha_yantar"]);

    if (params.category == undefined) {
      setMainLinks(
        (prev) =>
          (prev = Object.keys(kiiLinksJson).map((item) => {
            return {
              name: kiiLinksJson[item].name,
              link: item,
            };
          }))
      );
    } else {
    //   console.log(params.category);
      // console.log(undefined, "chiqdi");
    //   console.log(kiiLinksJson[params.category]?.items);
      setMainLinks(
        (prev) =>
          (prev = Array.from(Object.keys(kiiLinksJson)).map((item) => {
            // console.log(item);
            if (params.category == item) {
              return {
                name: kiiLinksJson[item].name,
                link: item,
                items: kiiLinksJson[item].items,
                set: true,
              };
            } else {
              return {
                name: kiiLinksJson[item].name,
                link: item,
              };
            }
          }))
      );
    }
    // console.log(mainLinks);
  }, [params]);

//   console.log(mainLinks);
  return (
    <div class="left">
      <span class="h3 menu-section-root-item">Кии</span>
      {mainLinks.map((link, index) => {
        // console.log(link?.items);
        return link.items !== undefined ? (
          <p class="selected-category">
            {link.name}
            <br />

            <span>
              {link.items.map((item, index) => {
                return (
                  <Link to={`/kiyevnitsa/${link.link}/${item.link}`}>
                    {item.name}
                    <br />
                  </Link>
                );
              })}
            </span>
          </p>
        ) : (
          <Link class="menu-section-level-3" to={`/kiyevnitsa/${link.link}`}>
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default KiyevnitsaNavbar;

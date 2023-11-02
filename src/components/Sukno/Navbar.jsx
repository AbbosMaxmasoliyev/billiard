import React from "react";
import linksSvetilnik from "../../json/Links/suknoLinks.json";
import { Link, useParams } from "react-router-dom";

const SuknoNavbar = () => {
  const params = useParams();

  return (
    <div className="left">
      <span class="h3 menu-section-root-item">Сукно</span>
      {Array.from(Object.keys(linksSvetilnik)).map((name, index) => {
   

        if (name == params.category) {
          return (
            <div>
              <span className="h3">{linksSvetilnik[name].name}</span>
              {linksSvetilnik[name].links.map((item) => (
                <Link
                  className="menu-section-level-3"
                  to={`/sukno/${name}/${item.link.replace("/", "")}`}
                >
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>
          );
        } else {
          return (
            <span className="h3">
              <Link to={`/sukno/${name}`}>{linksSvetilnik[name].name}</Link>
            </span>
          );
        }
      })}
    </div>
  );
};

export default SuknoNavbar;

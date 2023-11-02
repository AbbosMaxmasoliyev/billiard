import React from "react";
import linksSvetilnik from "../../json/Links/bilyardniyStolLinks.json";
import { Link, useParams } from "react-router-dom";

const BilliardStolNavbar = () => {
  const params = useParams();

  return (
    <div className="left">
      <span class="h3 menu-section-root-item">Аксессуары для стола</span>
      {Array.from(Object.keys(linksSvetilnik)).map((name, index) => {
        if (name == params.category) {
          return (
            <div>
              <span className="h3">{linksSvetilnik[name].name}</span>
              {linksSvetilnik[name].links.map((item) => (
                <Link
                  className="menu-section-level-3"
                  to={`/billiardStol/${name}/${item.link.replace("/", "")}`}
                >
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>
          );
        } else {
          return (
            <span className="h3">
              <Link to={`/aksessuar/${name}`}>{linksSvetilnik[name].name}</Link>
            </span>
          );
        }
      })}
    </div>
  );
};

export default BilliardStolNavbar;

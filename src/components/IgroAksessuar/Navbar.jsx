import React from "react";
import linksSvetilnik from "../../json/Links/keyAkkLinks.json";
import { Link, useParams } from "react-router-dom";

const AksessuarNavbar = () => {
  const params = useParams();

  return (
    <div className="left">
      {Array.from(Object.keys(linksSvetilnik)).map((name, index) => {
   

        if (name == params.category) {
          return (
            <div>
              <span className="h3">{linksSvetilnik[name].name}</span>
              {linksSvetilnik[name].links.map((item) => (
                <Link
                  className="menu-section-level-3"
                  to={`/igroaksessuar/${name}/${item.link.replace("/", "")}`}
                >
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>
          );
        } else {
          return (
            <span className="h3">
              <Link to={`/igroaksessuar/${name}`}>{linksSvetilnik[name].name}</Link>
            </span>
          );
        }
      })}
    </div>
  );
};

export default AksessuarNavbar;

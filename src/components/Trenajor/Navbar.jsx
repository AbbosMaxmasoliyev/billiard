import React from "react";
import linksSvetilnik from "../../json/Links/trenajorLinks.json";
import { Link, useParams } from "react-router-dom";

const TrenajorNavbar = () => {
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
                  to={`/trenajor/${name}/${item.link.replace("/", "")}`}
                >
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>
          );
        } else {
          return (
            <span className="h3">
              <Link to={`/trenajor/${name}`}>{linksSvetilnik[name].name}</Link>
            </span>
          );
        }
      })}
    </div>
  );
};

export default TrenajorNavbar;

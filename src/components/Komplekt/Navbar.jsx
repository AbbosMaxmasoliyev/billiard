import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <span class="h3 menu-section-root-item">Комплектующие</span>
      <Link class="menu-section-level-3" to={"/komplekt/plita"}>
        <p>Плиты</p>
      </Link>
      <Link class="menu-section-level-3" to={`/komplekt/luz`}>
        <p>Лузы</p>
      </Link>
      <Link class="menu-section-level-3" to={`/komplekt/bortovayarezina`}>
        <p>Бортовая резина</p>
      </Link>
    </div>
  );
};

export default Navbar;

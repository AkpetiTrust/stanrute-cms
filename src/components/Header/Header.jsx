import React from "react";
import style from "./index.module.css";
import logo from "../../assets/Stanrute.png";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.image_container}>
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
}

export default Header;

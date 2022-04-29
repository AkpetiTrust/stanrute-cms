import React from "react";
import style from "./index.module.css";
import logo from "../../assets/Stanrute.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.image_container}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </header>
  );
}

export default Header;

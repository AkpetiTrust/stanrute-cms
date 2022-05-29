import React from "react";
import style from "./index.module.css";
import logo from "../../assets/Stanrute.png";
import { Link, useLocation } from "react-router-dom";
import Username from "../Username/Username";

function Header() {
  const location = useLocation();

  return (
    <header className={style.header}>
      <div className={style.image_container}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      {location.pathname.startsWith("/dashboard") && <Username />}
    </header>
  );
}

export default Header;

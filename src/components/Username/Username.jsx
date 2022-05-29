import React, { useState } from "react";
import Logout from "../Logout/Logout";
import style from "./index.module.css";

function Username() {
  const [menuActive, setMenuActive] = useState(false);

  const name = JSON.parse(localStorage.getItem("user"))?.name;

  return (
    <div
      className={style.username_container}
      tabIndex={4}
      onFocus={() => {
        setMenuActive(true);
      }}
      onBlur={() => {
        setMenuActive(false);
      }}
    >
      <p className={style.username}>{name}</p>
      {menuActive && <Logout />}
    </div>
  );
}

export default Username;

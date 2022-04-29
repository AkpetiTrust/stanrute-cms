import React, { useState } from "react";
import style from "./index.module.css";

function Nav() {
  const [navItems, setNavItems] = useState([
    {
      icon: null,
      name: "Home",
    },
  ]);
  return <nav className={style.nav}></nav>;
}

export default Nav;

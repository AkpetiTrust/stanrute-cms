import React, { useState } from "react";
import style from "./index.module.css";
import Icon from "../Icon/Icon";

function Nav({ section }) {
  const [navItems, setNavItems] = useState([
    {
      name: "Home",
    },
    {
      name: "Analytics",
    },
    {
      name: "Certification",
    },
    {
      name: "Notification",
    },
    {
      name: "Theme",
      upcoming: true,
    },
    {
      name: "Newsletter",
      upcoming: true,
    },
  ]);
  return (
    <nav className={style.nav}>
      <ul>
        {navItems.map(({ name, upcoming }) => (
          <li key={name}>
            <Icon
              name={name}
              upcoming={upcoming}
              active={name.toLowerCase() === section}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

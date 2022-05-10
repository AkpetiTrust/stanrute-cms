import React from "react";
import style from "./index.module.css";

function TabButton({ setActiveTab, name, activeTab, icon }) {
  return (
    <button
      onClick={() => {
        setActiveTab(name);
      }}
      className={`${style.btn} ${activeTab === name ? style.active : ""}`}
    >
      {icon}
      {name}
    </button>
  );
}

export default TabButton;

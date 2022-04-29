import React from "react";
import style from "./index.module.css";

function Button({ name, activeTab, setActiveTab }) {
  const handleClick = () => {
    let newTab = name === "signup" ? "signup" : "signin";
    setActiveTab(newTab);
  };
  return (
    <button
      onClick={handleClick}
      className={`${style.btn} ${name === activeTab && style.active}`}
    >
      {" "}
      {name === "signup" ? "Sign up" : "Sign in"}
    </button>
  );
}

export default Button;

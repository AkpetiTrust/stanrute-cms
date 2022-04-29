import React from "react";
import style from "./index.module.css";

function Input({ type, name }) {
  return <input className={style.input} type={type} name={name} />;
}

export default Input;

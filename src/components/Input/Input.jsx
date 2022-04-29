import React from "react";
import style from "./index.module.css";

function Input({ type, name, id, placeholder }) {
  return (
    <input
      className={style.input}
      placeholder={placeholder}
      id={id}
      type={type}
      name={name}
    />
  );
}

export default Input;

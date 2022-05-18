import React from "react";
import style from "./index.module.css";

function Input({ type, name, id, placeholder, required, onChange, error }) {
  return (
    <input
      className={`${style.input} ${error ? style.error : ""}`}
      placeholder={placeholder}
      id={id}
      type={type}
      name={name}
      required={required}
      onChange={onChange}
    />
  );
}

export default Input;

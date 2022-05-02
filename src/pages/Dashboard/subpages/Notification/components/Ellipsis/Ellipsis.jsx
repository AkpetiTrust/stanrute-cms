import React from "react";
import style from "./index.module.css";

function Ellipsis() {
  return (
    <div className={style.ellipsis}>
      <span aria-hidden></span>
      <span aria-hidden></span>
      <span aria-hidden></span>
    </div>
  );
}

export default Ellipsis;

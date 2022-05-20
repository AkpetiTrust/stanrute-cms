import React from "react";
import style from "./index.module.css";

function Number({ number, caption, color }) {
  return (
    <div className={style.container}>
      <div style={{ borderColor: color, color }} className={style.number}>
        {number}
      </div>
      <p>{caption}</p>
    </div>
  );
}

export default Number;

import React from "react";
import style from "./index.module.css";

function Options() {
  return (
    <div className={style.options}>
      <p>Edit course</p>
      <p className={style.delete}>Delete</p>
    </div>
  );
}

export default Options;

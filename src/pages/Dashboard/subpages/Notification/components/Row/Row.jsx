import React from "react";
import style from "./index.module.css";
import CheckBox from "../CheckBox/CheckBox";

function Row({ notification, onClick }) {
  return (
    <div className={style.row}>
      <div className={style.inner}>
        <CheckBox onClick={onClick} seen={notification.seen} />
        <p>{notification.message}</p>
      </div>
    </div>
  );
}

export default Row;

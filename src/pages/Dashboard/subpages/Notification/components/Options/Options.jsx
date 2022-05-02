import React from "react";
import style from "./index.module.css";

function Options({ functions }) {
  return (
    <div className={style.options}>
      <p onClick={functions.markAllAsRead}>Mark all as read</p>
      <p onClick={functions.deleteMarked} className={style.delete}>
        Delete marked
      </p>
    </div>
  );
}

export default Options;

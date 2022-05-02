import React from "react";
import style from "./index.module.css";
import More from "../More/More";

function Head({ functions }) {
  return (
    <div className={style.head}>
      <p>Notification</p>
      <More functions={functions} />
    </div>
  );
}

export default Head;

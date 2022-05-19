import React from "react";
import style from "./index.module.css";

const Loading = ({ color = "#009153", height }) => {
  return (
    <div style={{ color, height }} className={style.loading}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Loading;

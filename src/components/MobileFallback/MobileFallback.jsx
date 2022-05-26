import React from "react";
import style from "./index.module.css";
import logo from "../../assets/Stanrute.png";

function MobileFallback() {
  return (
    <div className={style.mobile}>
      <div className={style.inner}>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <p>Please login on desktop to continue</p>
      </div>
    </div>
  );
}

export default MobileFallback;

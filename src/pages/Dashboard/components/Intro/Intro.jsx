import React from "react";
import style from "./index.module.css";

function Intro() {
  return (
    <>
      <p className={style.title}>Dashboard</p>
      <p className={style.subtitle}>
        Manage the contents, activities and process of the Academy in one
        platform
      </p>
    </>
  );
}

export default Intro;

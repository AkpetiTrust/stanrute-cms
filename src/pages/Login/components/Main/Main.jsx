import React from "react";
import style from "./index.module.css";
import SignUpContainer from "../SignUpContainer/SignUpContainer";

function Main() {
  return (
    <main className={style.main}>
      <p>Get started with the CMS</p>
      <SignUpContainer />
    </main>
  );
}

export default Main;

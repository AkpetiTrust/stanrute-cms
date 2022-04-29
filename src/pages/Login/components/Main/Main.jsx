import React, { useState } from "react";
import style from "./index.module.css";
import SignUpContainer from "../SignUpContainer/SignUpContainer";

function Main() {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <main className={style.main}>
      <p>
        {activeTab === "signup"
          ? "Get started with the CMS"
          : "Sign in to the CMS"}
      </p>
      <SignUpContainer activeTab={activeTab} setActiveTab={setActiveTab} />
    </main>
  );
}

export default Main;

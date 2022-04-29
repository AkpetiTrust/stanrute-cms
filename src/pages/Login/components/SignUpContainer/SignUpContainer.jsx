import React, { useState } from "react";
import style from "./index.module.css";
import Button from "../Button/Button";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";

function SignUpContainer() {
  const [activeTab, setActiveTab] = useState("signup");
  return (
    <div
      className={`${style.container} ${activeTab === "signin" && style.active}`}
    >
      <div className={style.btn_container}>
        <Button
          name={"signup"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Button
          name={"signin"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className={style.inner}>
        <SignUp />
        <SignIn />
      </div>
    </div>
  );
}

export default SignUpContainer;

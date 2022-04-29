import React from "react";
import "../../styles/login.css";
import { Header } from "../../components";
import { Intro, Main } from "./components";

function Login() {
  return (
    <div className="login">
      <Header />
      <Intro />
      <Main />
    </div>
  );
}

export default Login;

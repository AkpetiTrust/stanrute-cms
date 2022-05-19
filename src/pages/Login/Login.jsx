import React, { useEffect } from "react";
import "../../styles/login.css";
import { Header } from "../../components";
import { Intro, Main } from "./components";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/dashboard");
    }
  });

  return (
    <div className="login">
      <Header />
      <Intro />
      <Main />
    </div>
  );
}

export default Login;

import React from "react";
import { Header } from "../../components";
import { Intro } from "./components";
import { useParams } from "react-router-dom";
import "../../styles/dashboard.css";

function DashBoard() {
  const { section = "home" } = useParams();
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-inner">
        <Intro />
      </div>
    </div>
  );
}

export default DashBoard;

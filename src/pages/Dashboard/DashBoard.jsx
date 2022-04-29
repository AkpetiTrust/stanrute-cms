import React, { useState } from "react";
import { Header } from "../../components";
import { Intro, Nav } from "./components";
import { useParams } from "react-router-dom";
import { Certification } from "./subpages";
import "../../styles/dashboard.css";

function DashBoard() {
  const { section = "home" } = useParams();

  const [components, setComponents] = useState({
    certification: <Certification />,
  });

  const Component = () => components[section] || <div></div>;

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-inner">
        <Intro />
        <Nav section={section} />
        <Component />
      </div>
    </div>
  );
}

export default DashBoard;

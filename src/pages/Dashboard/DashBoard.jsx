import React, { useState, useEffect } from "react";
import { Header } from "../../components";
import { Intro, Nav } from "./components";
import { useParams } from "react-router-dom";
import { Certification, Notification, Home } from "./subpages";
import { useNavigate } from "react-router-dom";
import "../../styles/dashboard.css";

function DashBoard() {
  const { section = "home" } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/");
    }
  });

  const [components, setComponents] = useState({
    certification: <Certification />,
    notification: <Notification />,
    home: <Home />,
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

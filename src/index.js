import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Login, DashBoard } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/dashboard" exact element={<DashBoard />} />
        <Route path="/dashboard/:section" exact element={<DashBoard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

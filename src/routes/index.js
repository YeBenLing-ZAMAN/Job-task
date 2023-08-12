import React from "react";
import { Route } from "react-router-dom";
import FrontViewPages from "./frontViewPages";
import { Routes } from "react-router-dom/dist";
import Dashboard from "./dashboard";

const Routers = () => {
  return (
    <Routes>
      <Route path="/*" index element={<FrontViewPages />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
  );
};

export default Routers;

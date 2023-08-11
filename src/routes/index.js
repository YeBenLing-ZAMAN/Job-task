import React from "react";
import { Route } from "react-router-dom";
import FrontViewPages from "./frontViewPages";
import { Routes } from "react-router-dom/dist";

const Routers = () => {
  return (
    <Routes>
      <Route path="/*" index element={<FrontViewPages />} />
    </Routes>
  );
};

export default Routers;

import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/FrontViewPages/pages/Home";
import { Routes } from "react-router-dom/dist";

const FrontViewPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </>
  );
};

export default FrontViewPages;

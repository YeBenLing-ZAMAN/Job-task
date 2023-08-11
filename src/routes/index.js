import React from "react";
import { Route } from "react-router-dom";
import FrontViewPages from "./frontViewPages";
import { Routes } from "react-router-dom/dist";
import ProductDetails from "../pages/FrontViewPages/pages/ProductDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/*" index element={<FrontViewPages />} />
      <Route path="/product/:id" index element={<ProductDetails />} />
    </Routes>
  );
};

export default Routers;

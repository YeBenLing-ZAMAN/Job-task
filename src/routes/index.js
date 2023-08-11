import React from "react";
import { Route } from "react-router-dom";
import FrontViewPages from "./frontViewPages";
import { Routes } from "react-router-dom/dist";
import ProductDetails from "../pages/FrontViewPages/pages/ProductDetails";
import Products from "../pages/FrontViewPages/pages/Products";

const Routers = () => {
  return (
    <Routes>
      <Route path="/*" index element={<FrontViewPages />} />
      <Route path="/product/:id" index element={<ProductDetails />} />
      <Route path="/products" index element={<Products />} />
    </Routes>
  );
};

export default Routers;

import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/FrontViewPages/pages/Home";
import { Routes } from "react-router-dom/dist";
import Footer from "../components/Footer";
import Navbar from "../components/Header/navbar";
import ProductDetails from "../pages/FrontViewPages/pages/ProductDetails";
import Products from "../pages/FrontViewPages/pages/Products";
import Cart from "../pages/FrontViewPages/pages/Cart";

const FrontViewPages = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/product/:id" index element={<ProductDetails />} />
        <Route path="/products" index element={<Products />} />
        <Route path="/cart" index element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default FrontViewPages;

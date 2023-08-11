import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/FrontViewPages/pages/Home";
import { Routes } from "react-router-dom/dist";
import Footer from "../components/Footer";
import Navbar from "../components/Header/navbar";

const FrontViewPages = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default FrontViewPages;

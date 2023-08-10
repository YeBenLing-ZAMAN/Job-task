import React from "react";
import Navbar from "../../../components/Header/navbar";
import HeroSection from "../components/HeroSection";
import ShowProducts from "../components/ShowProducts";
import { products } from "../../../assets/ProductData/products";

const Home = () => {
  return (
    <div className="max-w-[80vw] mx-auto">
      <Navbar />
      <HeroSection />
      <ShowProducts randomProducts={products} />
    </div>
  );
};

export default Home;

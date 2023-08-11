import React from "react";
import HeroSection from "../components/HeroSection";
import ShowProducts from "../components/ShowProducts";
import { products } from "../../../assets/ProductData/products";

const Home = () => {
  return (
    <div className="max-w-[80vw] mx-auto">
      <HeroSection />
      <ShowProducts randomProducts={products} />
    </div>
  );
};

export default Home;

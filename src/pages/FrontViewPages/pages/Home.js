import React from "react";
import HeroSection from "../components/HeroSection";
import ShowProducts from "../components/ShowProducts";
import { products } from "../../../assets/ProductData/products";
import ProductCategory from "../components/ProductCategory";

const Home = () => {
  return (
    <div className="max-w-[80vw] mx-auto">
      <HeroSection />
      <ShowProducts randomProducts={products} />
      <ProductCategory />
    </div>
  );
};

export default Home;

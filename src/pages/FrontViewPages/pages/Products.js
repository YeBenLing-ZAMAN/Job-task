import React, { useState } from "react";
import { products } from "../../../assets/ProductData/products";
import Button from "../../../components/Button";
import { useSearchParams } from "react-router-dom";
import InputSearch from "../../../components/Input/InputSearch";
import { CiBoxList } from "react-icons/ci";
import ProductCard from "../../../components/Card";
import { filtersData } from "../../../assets/ProductData/filterData";
import Filters from "../../../components/Filter";

const Products = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="max-w-[80vw] mx-auto">
      <div className="mt-10 mb-5 text-center">
        <InputSearch
          className="w-full md:w-1/2 p-2 text-xl border border-gray-500 rounded"
          placeholder="Search Your Product"
        ></InputSearch>
      </div>
      <div className="w-full flex items-center gap-3 justify-start ">
        <Button
          name="Filters"
          className="p-2 text-xl flex items-center gap-1 cursor-pointer"
          onClick={() => setShowFilters((prev) => !prev)}
        >
          <CiBoxList />
          Filters
        </Button>
        <div onClick={() => setSearchParams({})} className="clAllTxt">
          Clear filters
        </div>
      </div>
      <div className="mt-4 gap-y-2 md:flex items-start justify-center md:gap-x-4">
        <div
          className={`${
            showFilters ? "hidden transform -translate-x-250" : "basis-1/5"
          } border-[2px] border-[#52ab98] transition delay-100 duration-1000 ease-in-out`}
        >
          {filtersData?.map((item, id) => (
            <div key={item.id}>
              <hr />
              <Filters data={item} dropdownState={[0, 1].includes(id)} />
            </div>
          ))}
        </div>
        <div
          className={`${
            showFilters ? "" : "basis-4/5 "
          }  flex flex-wrap gap-3 justify-center transition delay-100 duration-1000 ease-in-out`}
        >
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

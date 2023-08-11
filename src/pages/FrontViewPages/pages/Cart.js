import React from "react";
import Button from "../../../components/Button";
import HorizontalProductCard from "../../../components/Card/horizontalProductCard";
import { products } from "../../../assets/ProductData/products";

const Cart = () => {
  return (
    <div className="max-w-[80vw] mx-auto">
      <div className="mt-4 gap-y-2 flex flex-col-reverse md:flex-row items-start justify-center md:gap-x-4">
        <div
          className={`basis-4/5 flex flex-wrap gap-3 justify-center transition delay-100 duration-1000 ease-in-out`}
        >
          {products &&
            products.map((product) => (
              <HorizontalProductCard
                key={product._id}
                product={product}
              ></HorizontalProductCard>
            ))}
        </div>
        <div
          className={`w-full basis-1/5 md:bg-slate-100 md:p-4 border rounded mt-6 md:min-h-[40vh]`}
        >
          <p className="text-2xl">Total :</p>
          <h1 className="text-5xl">$600</h1>
          <Button className="mt-4 md:mt-16 w-full border-2 rounded px-6 py-2 font-semibold text-lg border-red-500 text-red-500 hover:bg-red-500 hover:text-[#fff] cursor-pointer">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

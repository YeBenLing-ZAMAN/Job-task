import React from "react";
import CheckoutDetails from "../components/CheckoutDetails";
import CustomLink from "../../../components/Link";
import Button from "../../../components/Button";
import { useAppSelector } from "../../../redux/hook";

const Checkout = () => {
  const { products, total } = useAppSelector((state) => state.cart);

  return (
    <>
      <div className="p-6 md:p-0 md:max-w-[70vw] mx-auto min-h-[80vh]">
        <div className="mt-4 gap-y-2 flex flex-col-reverse md:flex-row items-start justify-center md:gap-x-4">
          <div
            className={`basis-3/5 w-full flex flex-wrap gap-3 justify-center`}
          >
            <CheckoutDetails />
          </div>
          <div
            className={`basis-2/5 w-full md:bg-slate-100 md:p-4 border rounded mt-6 md:min-h-[40vh]`}
          >
            <div className="min-h-[280px] max-h-[300px] overflow-y-scroll scroll-smooth">
              {/* checkout product will show there  (image,name, quantity, price)*/}

              {products.map((product) => (
                <div
                  className="border-3 border-red-500 w-ful px-2 my-3"
                  style={{ border: "1px solid black" }}
                >
                  <div className="flex gap-x-6 justify-between items-center py-2">
                    <div className="flex gap-2 items-center">
                      <CustomLink
                        href={`/product/${product?._id}`}
                        className="text-8xl"
                      >
                        <div className="hidden md:block w-16 h-16 overflow-hidden">
                          <img
                            src={product?.image}
                            className="w-24 h-20 object-cover object-center block"
                            alt="logo"
                          ></img>
                        </div>
                      </CustomLink>
                      <div className="w-full">
                        <CustomLink
                          href={`/product/${product?._id}`}
                          className="text-lg md:text-xl hover:underline"
                        >
                          {product?.productName}
                        </CustomLink>
                        <div className="pt-1">
                          <div className="flex flex-col items-start md:flex-row gap-x-3 justify-between md:items-center md:justify-normal">
                            <p className="">Price: ${product?.price}</p>
                            <p className="">Quantity: {product?.quantity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="w-full flex justify-between">
                <p>Subtotal:</p>
                <p>${total?.toFixed(2)}</p>
              </div>
              <div className="w-full flex justify-between">
                <p>Delivery:</p>
                <p>$10</p>
              </div>
              <div className="w-full flex justify-between">
                <p className="text-md font-bold">Total:</p>
                <p className="text-md font-bold">${(total + 10).toFixed(2)}</p>
              </div>
              <CustomLink href="/checkout">
                <Button className="mt-4 md:mt-4 w-full border-2 rounded px-6 py-2 font-semibold text-lg border-red-500 text-red-500 hover:bg-red-500 hover:text-[#fff] cursor-pointer">
                  Checkout
                </Button>{" "}
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

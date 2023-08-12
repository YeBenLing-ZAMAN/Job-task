import React from "react";
import CheckoutDetails from "../components/CheckoutDetails";
import CustomLink from "../../../components/Link";
import Button from "../../../components/Button";

const Checkout = () => {
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
            <div className="min-h-[280px] max-h-[300px] overflow-y-scroll scroll-smooth"></div>
            <div>
              <div className="w-full flex justify-between">
                <p>Subtotal:</p>
                <p>$77.09</p>
              </div>
              <div className="w-full flex justify-between">
                <p>Delivery:</p>
                <p>$10</p>
              </div>
              <div className="w-full flex justify-between">
                <p className="text-md font-bold">Total:</p>
                <p className="text-md font-bold">$100</p>
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

import React from "react";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { products } from "../../../assets/ProductData/products";
import Button from "../../../components/Button";
import Comment from "../../../components/Comment";
import BannerCarousel from "../../../components/BannerCarousel";

const ProductDetails = ({ product }) => {
  const { id } = useParams();
  const result = products.find((product) => product._id === id);

  const {
    averageRating,
    brand,
    category,
    description,
    // image,
    model,
    price,
    productName,
    reviews,
    status,
    comment,
    carouselImage,
  } = result;

  const handleProduct = (product) => {
    alert("Successfully added product");
    console.log(product);
  };
  return (
    <div className="md:max-w-[80vw] mx-auto min-h-[80vh]">
      <div className="min-h-[50vh] m-4 md:m-16 gap-y-2 md:flex items-center justify-center md:gap-x-4">
        <div className="w-full md:w-1/2 border-[2px] border-[#52ab98]">
          <BannerCarousel content={carouselImage}></BannerCarousel>
        </div>
        <div className="flex flex-col justify-between gap-1 w-full md:w-1/2">
          <div>
            <h1 className="text-xl font-bold mt-4 md:mt-0">{productName}</h1>
            <p className="text-sm mt-1">{description}</p>
          </div>
          <div className="md:flex grid gap-y-2 md:gap-3 mt-4 text-lg">
            <p className="py-2 border md:w-1/4 bg-[#52ab98] text-[#fff] text-center font-semibold">
              Price: ${price}
            </p>
            <p
              className={`py-2 border md:w-1/4 text-center bg-gray-100 font-semibold ${
                status === "In Stock" ? "text-[#52ab98]" : "text-red-500"
              }`}
            >
              {status}
            </p>
          </div>
          <div className="mt-4 grid text-md">
            <p>Category: {category}</p>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Total Reviews: {reviews}</p>
            <div className="flex gap-3">
              <span>Individual rating:</span>
              <StarRatings
                starDimension="20px"
                rating={averageRating}
                starRatedColor="#f9b115"
                starSpacing="1px"
                numberOfStars={5}
                name="rating"
              />
              <span className="text-gray-900">({averageRating})</span>
            </div>
          </div>
          <div>
            <div className="w-full mt-5">
              <Button
                className="w-full border-2 px-6 font-semibold text-lg border-[#52ab98] text-[#52ab98] hover:bg-[#52ab98] hover:text-[#fff] cursor-pointer"
                onClick={() => handleProduct(product)}
              >
                Add To cart
              </Button>
            </div>
            <div className="w-full mt-2">
              <Button
                className="w-full border-2 px-6 font-semibold text-lg border-[#F86F03] text-[#F86F03] hover:bg-[#F86F03] hover:text-[#fff] cursor-pointer"
                onClick={() => handleProduct(product)}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 m-4 mb-16">
        {comment?.map((d, index) => (
          <Comment key={index} comment={d}></Comment>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;

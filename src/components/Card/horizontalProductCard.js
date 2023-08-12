import StarRatings from "react-star-ratings";
import CustomLink from "../Link";
import Button from "../Button";
import { HiMinus, HiOutlinePlus, HiOutlineTrash } from "react-icons/hi";

export default function HorizontalProductCard({ product }) {
  const { _id, image, productName, price, status, averageRating } = product;
  return (
    <div
      className="border-3 border-red-500 w-full min-h-[150px] px-2 my-3"
      style={{ border: "1px solid black" }}
    >
      <div className="flex gap-x-6 justify-between items-center min-h-[150px]">
        <div className="flex gap-2 items-center">
          <CustomLink href={`/product/${_id}`} className="text-8xl">
            <div className="hidden md:block w-24 h-20 overflow-hidden">
              <img
                src={image}
                className="w-24 h-20 object-cover object-center block"
                alt="logo"
              ></img>
            </div>
          </CustomLink>
          <div className="w-full">
            <CustomLink
              href={`/product/${_id}`}
              className="text-lg md:text-xl hover:underline"
            >
              {productName}
            </CustomLink>
            <div className="pt-1">
              <div className="flex flex-col items-start md:flex-row gap-x-3 justify-between md:items-center md:justify-normal">
                <p
                  className={`font-semibold ${
                    status === "In Stock" ? "text-[#358022]" : "text-red-600"
                  }`}
                >
                  {status}
                </p>
                <p className="">Rating: {averageRating}</p>
                <span className="hidden md:block pt-1">
                  <StarRatings
                    starDimension="20px"
                    rating={averageRating}
                    starRatedColor="#f9b115"
                    starSpacing="1px"
                    numberOfStars={5}
                    name="rating"
                  />
                </span>
                <p className="">Price: ${price}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between gap-3">
          <p className="md:border md:py-1 px-2 md:bg-gray-100 rounded-sm font-semibold">
            Total: ${price}
          </p>
          <div className="flex items-center justify-center">
            <Button className="px-2 text-xl pt-1 border-2 border-[#52ab98] text-[#52ab98] rounded cursor-pointer">
              <HiOutlinePlus size="20" />
            </Button>
            <p className="px-6">3</p>
            <Button className="px-2 text-xl pt-1 border-2 border-[#52ab98] text-[#52ab98] rounded cursor-pointer">
              <HiMinus size="20" />
            </Button>
          </div>
          <Button
            variant="destructive"
            className="px-2 text-xl pt-1 border-2 border-red-500 text-red-500 rounded cursor-pointer"
          >
            <HiOutlineTrash size="20" />
          </Button>
        </div>
      </div>
    </div>
  );
}

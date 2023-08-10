import { Button } from "antd";
import { Link } from "react-router-dom";
import CustomLink from "../Link";

export default function Navbar() {
  return (
    <div className="border bg-white p-4 flex justify-around">
      <div className="flex justify-center">
        <Link href={"/"} className="text-3xl text-black hover:text-[#2b6777]">
          REPLIQ
        </Link>
      </div>
      <nav className="text-gray-900 flex justify-center gap-x-6 text-md">
        <CustomLink href="/" className="hover:text-[#2b6777]">
          Home
        </CustomLink>
        <p>|</p>
        <CustomLink href="/product" className="hover:text-[#2b6777]">
          Product
        </CustomLink>
        <p>|</p>
        <CustomLink href="/cart" className="hover:text-[#2b6777]">
          cart
        </CustomLink>
        <p>|</p>
        <Button className="bg-red-500 text-[#fff] hover:bg-[#2b6777]">
          login/signup
        </Button>
        <p>|</p>
        <Button className="bg-red-500 text-[#fff] hover:bg-[#2b6777]">
          Dashboard
        </Button>
      </nav>
    </div>
  );
}

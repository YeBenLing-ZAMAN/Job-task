import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import CustomLink from "../Link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-[#2b6777] text-white p-10 sm:p-20">
      <div className="max-w-[80vw] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between md:items-center">
          <div className="mb-5 sm:mb-0 sm:mr-10">
            <CustomLink href={"/"}>REPLIQ</CustomLink>
            <div className="flex mt-5 gap-2 text-2xl">
              <BsFacebook />
              <BsInstagram />
              <BsPinterest />
              <BsTwitter />
              <BsYoutube />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-1 md:gap-5">
            <ul className="space-y-2 list-none">
              <li className="hover:underline cursor-pointer">Support</li>
              <li className="hover:underline cursor-pointer">Careers</li>
            </ul>
            <ul className="space-y-2 list-none">
              <li className="hover:underline cursor-pointer">
                List your Product
              </li>
              <li className="hover:underline cursor-pointer">Contact team</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-10 sm:mt-10 gap-1 md:gap-10">
          <p>&#169; REPLIQ {year}</p>
          <p className="mt-5 sm:mt-0">Privacy Policy</p>
          <p className="mt-5 sm:mt-0">Terms & Condition</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

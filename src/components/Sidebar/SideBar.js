import React from "react";
import MenuAccordion from "./MenuAccordion";
import { menus } from "../../utils/tools/menu";
const Sidebar = ({ sideBarShow, theme }) => {
  const handleLogout = () => {
    console.log("access token remove");
  };
  // get user
  return (
    <div className="">
      <div className="text-center sticky top-0 bg-white z-9 overflow-hidden transition-all ease-in-out mb-15 border-b-[value] py-2">
        <img src="" width="100%" alt="logo" />
      </div>
      <div className="py-1 px-5 mb-5 text-center laptop:py-0 laptop:px-9">
        <div className="font-[font-family] text-[text-black] transition-all ease-in-out">
          <h2 className="text-2xl font-semibold text-[text-menu-active-color] overflow-hidden truncate whitespace-nowrap">
            user name
          </h2>
          <p className="text-sm overflow-hidden truncate">example@email.com</p>
        </div>
      </div>
      <div className="list-none pr-2 pt-2">
        <ul className="tronliveClub_sidebar_menu_lists">
          <MenuAccordion
            d={menus}
            sideBarShow={sideBarShow}
            logout={handleLogout}
            userRole="admin"
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

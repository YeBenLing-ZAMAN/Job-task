import React from "react";
import MenuAccordion from "./MenuAccordion";
import { menus } from "../../utils/tools/menu";
const Sidebar = ({ sideBarShow, theme }) => {
  const handleLogout = () => {
    console.log("access token remove");
  };
  // get user
  return (
    <div className="tronliveClub_sidebar">
      <div className="tronliveClub_logo_container">
        <img src="" width="100%" alt="logo" />
      </div>
      <div className="tronliveClub_user_profile">
        <div className="tronliveClub_user_info">
          <h2>user name</h2>
          <p>example@email.com</p>
        </div>
      </div>
      <div className="tronliveClub_sidebar_menu">
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

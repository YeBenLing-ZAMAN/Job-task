import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menus } from "../../utils/tools/menus";

function SideBar() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);
  const filterMenus = Menus.filter((rt) => rt?.permission?.includes("admin"));
  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        theme="dark"
        mode="inline"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={filterMenus}
      ></Menu>
    </div>
  );
}
export default SideBar;

import { AiOutlineDashboard } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
export const menus = [
  // ************************************* common dashboard menu ************************//
  {
    id: "337fwedkf",
    menu: "dashboard",
    icon: <AiOutlineDashboard />,
    route: "/dashboard",
    permission: ["admin"],
  },
  // ************************************* admin dashboard menu ************************//
  {
    id: "7dfsegrr8srf",
    menu: "Customer",
    icon: <FiUser />,
    permission: ["admin"],
    dropdown: [
      {
        id: "83agr89r4ifd",
        menu: "Customers List",
        route: "/dashboard/customer-list",
        permission: ["admin"],
      },
      {
        id: "838dga9r4ifd",
        menu: "Customers Details",
        route: "/dashboard/customer-details",
        permission: ["admin"],
      },
    ],
  },
];

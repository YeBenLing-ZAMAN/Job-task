import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const Menus = [
  {
    label: "Dashbaord",
    icon: <AppstoreOutlined />,
    key: "/dashboard",
    permission: ["admin"],
  },
  {
    label: "customers",
    key: "/dashboard/customers-list",
    icon: <ShopOutlined />,
    permission: ["admin"],
    children: [
      {
        label: "Customers",
        key: "/dashboard/customers-list",
        icon: <UserOutlined />,
      },
      {
        label: "Customers",
        key: "/dashboard/customers-details",
        icon: <ShoppingCartOutlined />,
      },
    ],
  },
  {
    label: "Orders List",
    key: "/dashboard/order-list",
    icon: <ShopOutlined />,
    permission: ["admin"],
    children: [
      {
        label: "Customers",
        key: "/dashboard/orders-list",
        icon: <UserOutlined />,
      },
      {
        label: "Customers",
        key: "/dashboard/orders-details",
        icon: <ShoppingCartOutlined />,
      },
    ],
  },
  {
    label: "Products List",
    key: "/dashboard/products-list",
    icon: <ShopOutlined />,
    permission: ["admin"],
    children: [
      {
        label: "Customers",
        key: "/dashboard/products-list",
        icon: <UserOutlined />,
      },
      {
        label: "Customers",
        key: "/dashboard/products-details",
        icon: <ShoppingCartOutlined />,
      },
    ],
  },
];

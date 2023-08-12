import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  UnorderedListOutlined,
  CodeSandboxOutlined,
  UpSquareOutlined,
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
    icon: <UsergroupAddOutlined />,
    permission: ["admin"],
    children: [
      {
        label: "Customers List",
        key: "/dashboard/customers-list",
        icon: <UserOutlined />,
      },
    ],
  },
  {
    label: "Orders List",
    key: "/dashboard/order-list",
    icon: <UnorderedListOutlined />,
    permission: ["admin"],
    children: [
      {
        label: "Orders List",
        key: "/dashboard/orders-list",
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
        label: "Products List",
        key: "/dashboard/products-list",
        icon: <CodeSandboxOutlined />,
      },
      {
        label: "Add Product",
        key: "/dashboard/add-product",
        icon: <UpSquareOutlined />,
      },
    ],
  },
];

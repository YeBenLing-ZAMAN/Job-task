import React from "react";
import { Route, Routes } from "react-router-dom";
import { userRole } from "../config/userRole";
import DashboardContent from "../pages/DashboardContent";
import { ForAdminPrivateRoute } from "./ProtectedRoute";
import CustomersList from "../pages/AdminPages/Customers/CustomersLists";
import OrderLists from "../pages/AdminPages/Orders/OrdersLists";
import ProductsList from "../pages/AdminPages/Products/ProductsList";
import AddProduct from "../pages/AdminPages/Products/AddProduct";

const AppContent = () => {
  return (
    <Routes>
      <Route path="/" index element={<DashboardContent />} exact />
      {/************************************* for admin *****************************************/}
      <Route element={<ForAdminPrivateRoute roles={[userRole.ADMIN]} />}>
        <Route path="/customers-list" element={<CustomersList />} />
        <Route path="/orders-list" element={<OrderLists />} />
        <Route path="/Products-list" element={<ProductsList />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Route>
    </Routes>
  );
};

export default AppContent;

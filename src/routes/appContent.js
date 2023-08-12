import React from "react";
import { Route, Routes } from "react-router-dom";
import { userRole } from "../config/userRole";
import DashboardContent from "../pages/DashboardContent";
import { ForAdminPrivateRoute } from "./ProtectedRoute";
import CustomersList from "../pages/AdminPages/CustomersList";

const AppContent = () => {
  return (
    <Routes>
      <Route path="/" index element={<DashboardContent />} exact />
      {/************************************* for admin *****************************************/}
      <Route element={<ForAdminPrivateRoute roles={[userRole.ADMIN]} />}>
        <Route path="/customers-list" element={<CustomersList />} />
      </Route>
    </Routes>
  );
};

export default AppContent;

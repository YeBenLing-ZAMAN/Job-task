import React from "react";
import { userRole } from "../../config/userRole";
import AdminHome from "../AdminPages/AdminDashboard";

const DashboardContent = () => {
  return <>{"admin" === userRole.ADMIN && <AdminHome />}</>;
};

export default DashboardContent;

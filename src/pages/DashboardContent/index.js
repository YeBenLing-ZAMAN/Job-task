import React from "react";
import { userRole } from "../../config/userRole";
import AdminHome from "../AdminPages/AdminHome";

const DashboardContent = () => {
  return <>{"admin" === userRole.ADMIN && <AdminHome />}</>;
};

export default DashboardContent;

import { Navigate, Outlet } from "react-router-dom";

export const ForAdminPrivateRoute = ({ roles }) => {
  let protect = roles.includes("admin");
  return protect ? <Outlet /> : <Navigate to="/dashboard" />;
};

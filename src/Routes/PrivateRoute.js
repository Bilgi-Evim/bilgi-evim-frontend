import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ roleRequired }) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!isAuthenticated) {
    const loginRoutes = {
      student: "/student/login",
      teacher: "/teacher/login",
      admin: "/admin/login",
    };
    return <Navigate to={loginRoutes[roleRequired] || "/login"} state={{ from: location }} replace />;
  }

  if (user && user.role !== roleRequired) {
    const dashboardRoutes = {
      student: "/student/dashboard",
      teacher: "/teacher/dashboard",
      admin: "/admin/dashboard",
    };
    return <Navigate to={dashboardRoutes[user.role]} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;

// src/Routes/PrivateRoute.js
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ roleRequired }) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!isAuthenticated) {
    switch (roleRequired) {
      case "student":
        return <Navigate to="/student/login" state={{ from: location }} replace />;
      case "teacher":
        return <Navigate to="/teacher/login" state={{ from: location }} replace />;
      case "admin":
        return <Navigate to="/admin/login" state={{ from: location }} replace />;
      default:
        return <Navigate to="/login" replace />;
    }
  }

  if (user.role !== roleRequired) {
    switch (user.role) {
      case "student":
        return <Navigate to="/student/dashboard" replace />;
      case "teacher":
        return <Navigate to="/teacher/dashboard" replace />;
      case "admin":
        return <Navigate to="/admin/dashboard" replace />;
      default:
        return <Navigate to="/login" replace />;
    }
  }

  return <Outlet />;
};

export default PrivateRoute;

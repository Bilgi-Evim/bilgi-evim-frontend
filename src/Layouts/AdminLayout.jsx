import React from "react";
import Sidebar from "../Components/Admin/Sidebar";
import "../Assets/Css/Admin/adminLayout.css";
import AdminNavbar from "../Components/Admin/AdminNavbar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="admin-layout d-flex">
        <Sidebar />
        <div className="main-content">
          <AdminNavbar />
          <main className="content-area">{children}</main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;

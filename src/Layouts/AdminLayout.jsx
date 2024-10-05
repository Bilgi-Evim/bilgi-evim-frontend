import React from "react";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import Sidebar from "../Components/Admin/Sidebar";
import "../Assets/Css/Admin/adminLayout.css"

const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="admin-layout d-flex">
        <Sidebar />
        <main className="content-area">{children}</main>
      </div>
    </>
  );
};

export default AdminLayout;

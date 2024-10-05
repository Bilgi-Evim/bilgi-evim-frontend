import React from "react";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import Sidebar from "../Components/Admin/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="admin-layout d-flex">
        <Sidebar />
        <main className="content-area">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;

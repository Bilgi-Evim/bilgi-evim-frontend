import React from "react";
import AdminLayout from "../../Layouts/AdminLayout"

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="dashboard-container">
        <h1 className="text-primary">Hoş Geldiniz, Admin!</h1>
        <p>Panelden tüm işlemlerinizi gerçekleştirebilirsiniz.</p>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;

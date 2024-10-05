import React from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import "../../Assets/Css/Admin/adminDashboard.css"

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="dashboard-container">
        <h1 className="text-primary">Hoş Geldiniz, Admin!</h1>
        <div className="welcome-card">
          <h2>Panelden Tüm İşlemlerinizi Gerçekleştirebilirsiniz.</h2>
          <p>Admin panelinizden kullanıcıları yönetebilir, kurs ekleyebilir ve ayarları güncelleyebilirsiniz.</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;

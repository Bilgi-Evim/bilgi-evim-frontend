import React from "react";
import { Link } from "react-router-dom";
import "../../Assets/Css/Admin/sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <img src="/logo.png" alt="Admin" className="sidebar-profile-pic mb-3" />
        <h7 style={{ color: "lime" }}>Admin </h7>
        <h5>Efe Eroğlu</h5>
      </div>
      <ul>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/students-list">Öğrenciler</Link>
        </li>
        <li>
          <Link to="/admin/teachers-list">Öğretmenler</Link>
        </li>
        <li>
          <Link to="/admin/messages">Mesajlar</Link>
        </li>
        <li>
          <Link to="/admin/reports">Raporlar</Link>
        </li>
        <li>
          <Link to="/admin/settings">Ayarlar</Link>
        </li>
        <li>
          <Link to="/admin/feedback">Geri Bildirim</Link>
        </li>
<<<<<<< refs/remotes/origin/dev/Admin
=======
        <li>
          <Link onClick={handleLogout}>Çıkış Yap</Link>
        </li>
>>>>>>> local
      </ul>
    </nav>
  );
};

export default Sidebar;

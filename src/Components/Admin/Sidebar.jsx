import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/users">Kullanıcılar</Link></li>
        <li><Link to="/admin/courses">Kurslar</Link></li>
        <li><Link to="/admin/settings">Ayarlar</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
import "../../Assets/Css/Teacher/teacherSidebar.css";

const TeacherSidebar = () => {
  return (
    <nav className="teacher-sidebar">
      <div className="sidebar-header">
        <img
          src="/logo.png"
          alt="Öğretmen"
          className="sidebar-profile-pic mb-3"
        />
        <h7 style={{ color: "lime" }}>Öğretmen</h7>
        <h5>Efe Eroğlu</h5>
      </div>
      <ul>
        <li>
          <Link to="/teacher/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/teacher/students-list">Öğrenciler</Link>
        </li>
        <li>
          <Link to="/teacher/courses">Dersler</Link>
        </li>
        <li>
          <Link to="/teacher/messages">Mesajlar</Link>
        </li>
        <li>
          <Link to="/teacher/reports">Raporlar</Link>
        </li>
        <li>
          <Link to="/teacher/settings">Ayarlar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TeacherSidebar;

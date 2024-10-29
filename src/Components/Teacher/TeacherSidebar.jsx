import React from "react";
import { Link } from "react-router-dom";
import "../../Assets/Css/Teacher/teacherSidebar.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/authSlice";

const TeacherSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      navigate("/home", { replace: true });
    });
  };
  
  return (
    <nav className="teacher-sidebar">
      <div className="sidebar-header">
        <img
          src="/logo.png"
          alt="Öğretmen"
          className="sidebar-profile-pic mb-3"
        />
        <h6 style={{ color: "lime" }}>Öğretmen</h6>
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
        <li>
          <button onClick={handleLogout}>Çıkış Yap</button>
        </li>
      </ul>
    </nav>
  );
};

export default TeacherSidebar;

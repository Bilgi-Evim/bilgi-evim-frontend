import React, { useState, useEffect } from "react";
import "../../Assets/Css/Teacher/teacherLogin.css";

const TeacherLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Kullanıcı Adı:", username);
    console.log("Şifre:", password);
  };

  return (
    <div className={`teacher-login-page ${isExpanded ? "expanded" : ""}`}>
      <div className="teacher-login-logo">
        <img className="teacher-login-img" src="/logo-tr.png" alt="Bilgi Evim" />
      </div>
      <div className="teacher-login-container">
        <h2 className="teacher-login-title">Öğretmen Girişi</h2>
        <form onSubmit={handleSubmit} className="teacher-login-form">
          <div className="teacher-form-group">
            <label htmlFor="username" className="teacher-form-label">
              Kullanıcı Adı:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="teacher-form-input"
            />
          </div>
          <div className="teacher-form-group">
            <label htmlFor="password" className="teacher-form-label">
              Şifre:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="teacher-form-input"
            />
          </div>
          <button type="submit" className="teacher-login-button">
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherLogin;

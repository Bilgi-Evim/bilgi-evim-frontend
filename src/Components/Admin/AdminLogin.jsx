import React, { useState, useEffect } from "react";
import "../../Assets/Css/Admin/AdminLogin.css";

const AdminLogin = () => {
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
    <div className={`admin-login-page ${isExpanded ? "expanded" : ""}`}>
      <div className="admin-login-logo">
        <img className="admin-login-img" src="/logo-tr.png" alt="Bilgi Evim" />
      </div>
      <div className="admin-login-container">
        <h2 className="admin-login-title">Admin Giriş</h2>
        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="admin-form-group">
            <label htmlFor="username" className="admin-form-label">
              Kullanıcı Adı:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="admin-form-input"
            />
          </div>
          <div className="admin-form-group">
            <label htmlFor="password" className="admin-form-label">
              Şifre:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="admin-form-input"
            />
          </div>
          <button type="submit" className="admin-login-button">
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

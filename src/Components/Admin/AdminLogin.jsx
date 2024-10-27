import React, { useState, useEffect } from "react";
import "../../Assets/Css/Admin/AdminLogin.css";
const AUTH_API_URL = process.env.REACT_APP_AUTH_API_URL;

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${AUTH_API_URL}/login/admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: username, password: password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("access_token", data.access_token);
        alert("Giriş başarılı!");
        window.location.href = "/admin/dashboard"
        
      } else {
        setError(data.error || "Giriş başarısız. Tekrar deneyin.");
      }
    } catch (err) {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
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
          <button type="submit" className="admin-login-button" disabled={loading}>
            {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
          </button>
        </form>
        {error && <p className="admin-login-error">{error}</p>}
      </div>
    </div>
  );
};

export default AdminLogin;

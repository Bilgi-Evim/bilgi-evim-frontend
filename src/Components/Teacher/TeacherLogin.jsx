import React, { useState, useEffect } from "react";
import "../../Assets/Css/Teacher/teacherLogin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AUTH_API_URL = process.env.REACT_APP_AUTH_API_URL;

const TeacherLogin = () => {
  const [tc, setTc] = useState("");
  const [password, setPassword] = useState("");
  const [t_number, sett_number] = useState("");
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
      const response = await fetch(`${AUTH_API_URL}/login/teacher`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tc: tc,
          t_number: t_number,
          password: password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("access_token", data.access_token);
        toast.success("Giriş başarılı! Ana sayfa'ya yönlendiriliyorsunuz.", {
          position: "top-center",
          autoClose: 3000,
          className: "toast-message",
          pauseOnHover: false,
        });

        setTimeout(() => {
          window.location.href = "/teacher/dashboard";
        }, 2000);
      } else {
        toast.error("Giriş başarısız, lütfen bilgilerinizi kontrol edin.", {
          position: "top-center",
          autoClose: 3000,
          pauseOnHover: false,
          className: "toast-message",
        });
      }
    } catch (err) {
      toast.error("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.", {
        position: "top-center",
        autoClose: 3000,
        pauseOnHover: false,
        className: "toast-message",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`teacher-login-page ${isExpanded ? "expanded" : ""}`}>
      <div className="teacher-login-logo">
        <img
          className="teacher-login-img"
          src="/logo-tr.png"
          alt="Bilgi Evim"
        />
      </div>
      <div className="teacher-login-container">
        <h2 className="teacher-login-title">Öğretmen Girişi</h2>
        <form onSubmit={handleSubmit} className="teacher-login-form">
          <div className="teacher-form-group">
            <label htmlFor="tc" className="teacher-form-label">
              Kimlik Numarası:
            </label>
            <input
              type="text"
              id="tc"
              value={tc}
              maxLength="11"
              onChange={(e) => setTc(e.target.value)}
              required
              className="teacher-form-input"
            />
          </div>
          <div className="teacher-form-group">
            <label htmlFor="t_number" className="teacher-form-label">
              Öğretmen Numarası:
            </label>
            <input
              type="text"
              id="t_number"
              value={t_number}
              onChange={(e) => sett_number(e.target.value)}
              required
              maxLength="3"
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
              maxLength="30"
              className="teacher-form-input"
            />
          </div>
          <button type="submit" className="teacher-login-button">
            {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
          </button>
        </form>
        {error && <p className="admin-login-error">{error}</p>}
      </div>
      <ToastContainer />
    </div>
  );
};

export default TeacherLogin;

import React, { useState, useEffect } from "react";
import "../../Assets/Css/Admin/AdminLogin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/authSlice";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated && user?.role === "admin") {
      toast.success("Giriş başarılı! Ana sayfa'ya yönlendiriliyorsunuz.", {
        position: "top-center",
        autoClose: 1000,
        pauseOnHover: false,
        className: "toast-message",
      });
      setTimeout(() => {
        navigate("/admin/dashboard", { replace: true });
      }, 1500);
    }
  }, [isAuthenticated, user, navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const credentials = { name: username, password };
    dispatch(login({ credentials, role: "admin" }))
      .unwrap()
      .then(() => {})
      .catch((error) => {
        toast.error("Giriş başarısız, lütfen bilgilerinizi kontrol edin.", {
          position: "top-center",
          autoClose: 3000,
          pauseOnHover: false,
          className: "toast-message",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={`admin-login-page ${isExpanded ? "expanded" : ""}`}>
      <div className="admin-login-logo">
        <img className="admin-login-img" src="/logo-tr.png" alt="Bilgi Evim" />
      </div>
      <div className="admin-login-container">
        <h2 className="admin-login-title">Admin Giriş</h2>
        <form onSubmit={handleLogin} className="admin-login-form">
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
          <button
            type="submit"
            className="admin-login-button"
            disabled={loading}
          >
            {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;

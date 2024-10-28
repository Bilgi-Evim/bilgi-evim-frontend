import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/authSlice";
import "react-toastify/dist/ReactToastify.css";
import "../../Assets/Css/Student/studentLogin.css";

const StudentLogin = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [tc, setTc] = useState("");
  const [schoolNumber, setSchoolNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isAuthenticated && user.role === "student") {
      toast.success("Giriş başarılı! Ana sayfa'ya yönlendiriliyorsunuz.", {
        position: "top-center",
        autoClose: 1000,
        className: "toast-message",
        pauseOnHover: false,
      });
      setTimeout(() => {
        navigate("/student/dashboard", { replace: true });
      }, 2000);
    }
  }, [isAuthenticated, user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const credentials = { tc, password, school_number: schoolNumber };
    dispatch(login({ credentials, role: "student" }))
      .unwrap()
      .catch(() => {
        toast.error("Giriş başarısız, lütfen bilgilerinizi kontrol edin.", {
          position: "top-center",
          autoClose: 3000,
          pauseOnHover: false,
          className: "toast-message",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className={`student-login-page ${isExpanded ? "expanded" : ""}`}>
      <div className="student-login-left">
        <div className="student-login-logo">
          <img className="student-login-img" src="/logo-tr.png" alt="Bilgi Evim" />
        </div>
      </div>
      <div className="student-login-right">
        <div className="student-login-container">
          <h2 className="student-login-title">Öğrenci Giriş</h2>
          <form className="student-login-form" onSubmit={handleLogin}>
            <div className="student-form-group">
              <label htmlFor="tc" className="student-form-label">T.C. Kimlik No:</label>
              <input
                type="text"
                id="tc"
                value={tc}
                onChange={(e) => setTc(e.target.value)}
                required
                className="student-form-input"
              />
            </div>

            <div className="student-form-group">
              <label htmlFor="schoolNumber" className="student-form-label">Okul Numarası:</label>
              <input
                type="text"
                id="schoolNumber"
                value={schoolNumber}
                onChange={(e) => setSchoolNumber(e.target.value)}
                required
                className="student-form-input"
              />
            </div>

            <div className="student-form-group">
              <label htmlFor="password" className="student-form-label">Şifre:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="student-form-input"
              />
            </div>

            <button type="submit" className="student-login-button" disabled={loading}>
              {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default StudentLogin;

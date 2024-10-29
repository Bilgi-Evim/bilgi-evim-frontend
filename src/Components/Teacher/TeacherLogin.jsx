import React, { useState, useEffect } from "react";
import "../../Assets/Css/Teacher/teacherLogin.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../Redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notificationService from "../../Services/notificationService";

const TeacherLogin = () => {
  const [tc, setTc] = useState("");
  const [password, setPassword] = useState("");
  const [teacherNumber, setTeacherNumber] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated && user?.role === "teacher") {
        notificationService.success(
          "Giriş Başarılı! Ana sayfa'ya yönlendiriliyorsunuz."
        )
      setTimeout(() => {
        navigate("/teacher/dashboard", { replace: true });
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

    const credentials = { tc, password, teacher_number: teacherNumber };
    dispatch(login({ credentials, role: "teacher" }))
      .unwrap()
      .then((result) => {})
      .catch((error) => {
        notificationService.error(
          "Giriş başarısız, lütfen bilgilerini kontrol edin."
        )
      })
      .finally(() => setLoading(false));
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
        <form onSubmit={handleLogin} className="teacher-login-form">
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
            <label htmlFor="teacherNumber" className="teacher-form-label">
              Öğretmen Numarası:
            </label>
            <input
              type="text"
              id="teacherNumber"
              value={teacherNumber}
              onChange={(e) => setTeacherNumber(e.target.value)}
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
          <button
            type="submit"
            className="teacher-login-button"
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

export default TeacherLogin;

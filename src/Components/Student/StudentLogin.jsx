import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import "../../Assets/Css/Student/studentLogin.css";

const StudentLogin = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [tc, setTc] = useState("");
  const [schoolNumber, setSchoolNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const credentials = { tc, password, school_number: schoolNumber };
      const response = await login(credentials, "student");
      if (response.access_token) {
        toast.success("Giriş başarılı! Ana sayfa'ya yönlendiriliyorsunuz.", {
          position: "top-center",
          autoClose: 1000,
          className: "toast-message",
          pauseOnHover: false,
        });

        setTimeout(() => {
          navigate("/student/dashboard");
        }, 2000);
      }
    } catch (err) {
      toast.error("Giriş başarısız, lütfen bilgilerinizi kontrol edin.", {
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
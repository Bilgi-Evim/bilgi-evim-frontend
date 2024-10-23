import React, { useState, useEffect } from "react";
import "../../Assets/Css/Student/studentLogin.css";

const StudentLogin = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Sayfa yüklendiğinde animasyon

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`student-login-page ${isExpanded ? "expanded" : ""}`}>
      <div className="student-login-left">
        <div className="student-login-logo">
          <img className="student-login-img" src="/logo-tr.png" alt="Bilgi Evim" />
        </div>
      </div>

      <div className="student-login-right">
        <div className="student-login-container">
          
            <>
              <h2 className="student-login-title">Öğrenci Giriş</h2>
              <form className="student-login-form">
                <div className="student-form-group">
                  <label htmlFor="username" className="student-form-label">Kullanıcı Adı:</label>
                  <input type="text" id="username" required className="student-form-input" />
                </div>
                <div className="student-form-group">
                  <label htmlFor="password" className="student-form-label">Şifre:</label>
                  <input type="password" id="password" required className="student-form-input" />
                </div>
                <button type="submit" className="student-login-button">Giriş Yap</button>
              </form>
            </>
          
     
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;

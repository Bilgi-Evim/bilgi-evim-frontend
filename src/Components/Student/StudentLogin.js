import React, { useState } from "react";
import "../../Assets/Css/Student/studentLogin.css";

const StudentLogin = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogoClick = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className={`student-login-page ${isRegistering ? "registering" : ""}`}>
      <div className="student-login-left">
        <div className="student-login-logo" onClick={handleLogoClick}>
          <img className="student-login-img" src="/logo-tr.png" alt="Bilgi Evim" />
        </div>
      </div>

      <div className="student-login-right">
        <div className="student-login-container">
          {!isRegistering ? (
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
          ) : (
            <>
              <h2 className="student-login-title">Kayıt Ol</h2>
              <form className="student-login-form">
                <div className="student-form-group">
                  <label htmlFor="username" className="student-form-label">Kullanıcı Adı:</label>
                  <input type="text" id="username" required className="student-form-input" />
                </div>
                <div className="student-form-group">
                  <label htmlFor="email" className="student-form-label">E-posta:</label>
                  <input type="email" id="email" required className="student-form-input" />
                </div>
                <div className="student-form-group">
                  <label htmlFor="password" className="student-form-label">Şifre:</label>
                  <input type="password" id="password" required className="student-form-input" />
                </div>
                <button type="submit" className="student-register-button">Kayıt Ol</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;

import React, { useState, useEffect } from "react";
import "../../Assets/Css/Student/studentLogin.css";

const StudentLogin = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [tc, setTc] = useState(''); // T.C. kimlik numarası
  const [schoolNumber, setSchoolNumber] = useState(''); // Okul numarası
  const [password, setPassword] = useState(''); // Şifre
  const [loading, setLoading] = useState(false); // Yükleme durumu
  const [error, setError] = useState(''); // Hata mesajı

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Formun otomatik yenilenmesini engeller
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/login/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tc, school_number: schoolNumber, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('access_token', data.access_token);
        window.location.href = 'student/dashboard';
        alert('Giriş başarılı!');
      } else {
        setError(data.error || 'Giriş başarısız');
      }
    } catch (err) {
      setError('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
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
          <form className="student-login-form" onSubmit={handleSubmit}>
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
              {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
            </button>
          </form>
          {error && <p className="student-login-error">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;

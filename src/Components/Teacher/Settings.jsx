import React, { useState } from "react";
import TeacherLayout from "../../Layouts/TeacherLayout";
import "../../Assets/Css/Teacher/teacherSettings.css";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "Mehmet Kaya",
    email: "mehmet.kaya@example.com",
  });
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleNotificationChange = (e) => {
    setNotifications({ ...notifications, [e.target.name]: e.target.checked });
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    alert("Profil başarıyla güncellendi!");
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (password.newPassword !== password.confirmPassword) {
      alert("Yeni şifre ve şifre onayı eşleşmiyor!");
    } else {
      alert("Şifre başarıyla değiştirildi!");
    }
  };

  return (
    <TeacherLayout>
      <div className="settings-container">
        {/* Grid Düzeni */}
        <div className="settings-grid">
          
          {/* Profil Ayarları */}
          <div className="settings-card">
            <h3>Profil Bilgileri</h3>
            <form onSubmit={handleSaveProfile}>
              <div className="form-group">
                <label>İsim:</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">Kaydet</button>
            </form>
          </div>

          {/* Şifre Değiştirme */}
          <div className="settings-card">
            <h3>Şifre Değiştir</h3>
            <form onSubmit={handleChangePassword}>
              <div className="form-group">
                <label>Mevcut Şifre:</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={password.currentPassword}
                  onChange={handlePasswordChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Yeni Şifre:</label>
                <input
                  type="password"
                  name="newPassword"
                  value={password.newPassword}
                  onChange={handlePasswordChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Yeni Şifre (Onay):</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={password.confirmPassword}
                  onChange={handlePasswordChange}
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">Şifreyi Değiştir</button>
            </form>
          </div>

          {/* Bildirim Ayarları */}
          <div className="settings-card">
            <h3>Bildirim Ayarları</h3>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="emailNotifications"
                  checked={notifications.emailNotifications}
                  onChange={handleNotificationChange}
                />
                Email Bildirimleri
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="smsNotifications"
                  checked={notifications.smsNotifications}
                  onChange={handleNotificationChange}
                />
                SMS Bildirimleri
              </label>
            </div>
          </div>

          {/* Diğer Ayarlar */}
          <div className="settings-card">
            <h3>Diğer Ayarlar</h3>
            <p>Buraya başka ayarlar ekleyebilirsiniz.</p>
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
};

export default Settings;

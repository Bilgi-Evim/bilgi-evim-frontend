import React from "react";
import "../../Assets/Css/Teacher/teacherDashboard.css";
import TeacherLayout from "../../Layouts/TeacherLayout";

const TeacherDashboard = () => {
  return (
    <TeacherLayout>
      <div className="teacher-dashboard-container">
        <h1 className="text-primary">Hoş Geldiniz, Öğretmen!</h1>
        <div className="welcome-card">
          <h2>Panelden Tüm İşlemlerinizi Gerçekleştirebilirsiniz.</h2>
          <p>
            Öğrencilerinizi yönetebilir, ders içerikleri ekleyebilir ve raporlar
            oluşturabilirsiniz.
          </p>
        </div>
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Öğrenci Sayısı</h3>
            <p>30</p>
          </div>
          <div className="stat-card">
            <h3>Ders Sayısı</h3>
            <p>5</p>
          </div>
          <div className="stat-card">
            <h3>Son Giriş</h3>
            <p>10 dakika önce</p>
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
};

export default TeacherDashboard;

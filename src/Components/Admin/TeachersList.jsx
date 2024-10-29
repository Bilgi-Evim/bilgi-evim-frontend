import React, { useEffect, useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import { adminApi } from "../../Utils/api";
import "../../Assets/Css/Admin/teachersList.css";
import notificationService from "../../Services/notificationService";

const TeachersList = () => {
  const [teachersBySubject, setTeachersBySubject] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        setLoading(true);
        const response = await adminApi.get("/teacher-list");
        const teachers = response.data;

        // Öğretmenleri branşlara göre grupla
        const groupedBySubject = teachers.reduce((acc, teacher) => {
          const subject = teacher.subject;
          if (!acc[subject]) {
            acc[subject] = [];
          }
          acc[subject].push(teacher);
          return acc;
        }, {});

        setTeachersBySubject(groupedBySubject);
      } catch (error) {
        setError("Öğretmen verileri alınamadı.");
        notificationService.error("Öğretmen verileri alınırken bir hata oluştu.");
        console.error("API Hata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <AdminLayout>
      <div className="container mt-5 admin-teachers-list-container">
        <h2 className="text-center mb-4">Öğretmen Listesi</h2>

        {loading && <p>Yükleniyor...</p>}
        {error && <p className="text-danger">{error}</p>}

        {Object.keys(teachersBySubject).map((subject) => (
          <div key={subject} className="admin-subject-section">
            <h3 className="admin-subject-title">{subject} Öğretmenleri</h3>
            <div className="row">
              {teachersBySubject[subject].map((teacher) => (
                <div key={teacher.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card admin-teacher-card shadow-sm">
                    <img
                      src={teacher.photo || "https://example.com/default-photo.jpg"}
                      className="card-img-top admin-teacher-photo"
                      alt={`${teacher.name} fotoğrafı`}
                    />
                    <div className="card-body">
                      <h5 className="admin-teacher-card-title">
                        {teacher.name.charAt(0).toUpperCase() + teacher.name.slice(1)} {teacher.lastname.toUpperCase()}
                      </h5>
                      <p className="admin-teacher-card-text">Tc: {teacher.tc}</p>
                      <p className="admin-teacher-card-text">Öğretmen Numarası: {teacher.teacher_number}</p>
                      <p className="admin-teacher-card-text">Branş: {teacher.subject}</p>
                      <button className="btn admin-teacher-btn-primary">Detaylar</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default TeachersList;

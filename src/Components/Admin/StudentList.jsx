import React, { useEffect, useState } from "react";
import { adminApi } from "../../Utils/api";
import "../../Assets/Css/Admin/studentList.css";
import AdminLayout from "../../Layouts/AdminLayout";
import notificationService from "../../Services/notificationService";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await adminApi.get("/student-list");
        setStudents(response.data);
      } catch (error) {
        setError("Öğrenci verileri alınamadı.");
        notificationService.error(
          "Öğrenci verileri alınırken bir hata oluştu."
        );
        console.error("API Hata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <AdminLayout>
      <div className="container mt-5 admin-student-list-container">
        <h2 className="text-center mb-4">Admin Öğrenci Listesi</h2>
        {loading && <p>Yükleniyor...</p>}
        {error && <p className="text-danger">{error}</p>}
        <div className="row">
          {students.map((student) => (
            <div key={student.school_number} className="col-md-6 col-lg-4 mb-4">
              <div className="card admin-student-card shadow-sm">
                <img
                  src={
                    student.photo ||
                    "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?w=360"
                  }
                  className="card-img-top admin-student-photo"
                  alt={`${student.name} fotoğrafı`}
                />
                <div className="card-body">
                  <h5 className="admin-card-title">
                    {student.name.charAt(0).toUpperCase() + student.name.slice(1)} {student.lastname.toUpperCase()}
                  </h5>
                  <p className="admin-card-text">T.C.: {student.tc}</p>
                  <p className="admin-card-text">
                    Okul Numarası: {student.school_number}
                  </p>
                  <p className="admin-card-text">Sınıf: {student.class_id}</p>
                  <button className="btn admin-btn-primary">Detaylar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default StudentList;

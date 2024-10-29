import React, { useEffect, useState } from "react";
import { adminApi } from "../../Utils/api";
import "../../Assets/Css/Admin/studentList.css";
import AdminLayout from "../../Layouts/AdminLayout";
import Modal from "../../Components/Common/Modal";
import notificationService from "../../Services/notificationService";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await adminApi.get("/student-list");
        setStudents(response.data);
      } catch (error) {
        setError("Öğrenci verileri alınamadı.");
        notificationService.error("Öğrenci verileri alınırken bir hata oluştu.");
        console.error("API Hata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleUpdateStudent = async () => {
    try {
      await adminApi.put(`/student/${selectedStudent.id}`, selectedStudent);
      notificationService.success("Öğrenci başarıyla güncellendi.");
      
      const response = await adminApi.get("/student-list");
      setStudents(response.data);

      setSelectedStudent(null);
    } catch (error) {
      notificationService.error("Öğrenci güncellenemedi.");
      console.error("Güncelleme Hata:", error);
    }
  };

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
                  src={student.photo || "/logo.png"}
                  className="card-img-top admin-student-photo"
                  alt={`${student.name} fotoğrafı`}
                />
                <div className="card-body">
                  <h5 className="admin-card-title">
                    {student.name.charAt(0).toUpperCase() + student.name.slice(1)} {student.lastname.toUpperCase()}
                  </h5>
                  <p className="admin-card-text">T.C.: {student.tc}</p>
                  <p className="admin-card-text">Okul Numarası: {student.school_number}</p>
                  <p className="admin-card-text">Sınıf: {student.class_id}</p>
                  <button className="btn admin-btn-primary" onClick={() => setSelectedStudent(student)}>
                    Detaylar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Modal isOpen={!!selectedStudent} onClose={() => setSelectedStudent(null)}>
          <h3>Öğrenci Güncelle</h3>
          <label>İsim</label>
          <input
            type="text"
            value={selectedStudent?.name || ""}
            onChange={(e) =>
              setSelectedStudent({ ...selectedStudent, name: e.target.value })
            }
          />
          <label>Soyisim</label>
          <input
            type="text"
            value={selectedStudent?.lastname || ""}
            onChange={(e) =>
              setSelectedStudent({ ...selectedStudent, lastname: e.target.value })
            }
          />
          <label>T.C. Kimlik No</label>
          <input
            type="text"
            value={selectedStudent?.tc || ""}
            onChange={(e) =>
              setSelectedStudent({ ...selectedStudent, tc: e.target.value })
            }
          />
          <label>Okul Numarası</label>
          <input
            type="text"
            value={selectedStudent?.school_number || ""}
            onChange={(e) =>
              setSelectedStudent({ ...selectedStudent, school_number: e.target.value })
            }
          />
          <label>Sınıf</label>
          <input
            type="text"
            value={selectedStudent?.class_id || ""}
            onChange={(e) =>
              setSelectedStudent({ ...selectedStudent, class_id: e.target.value })
            }
          />
          <div className="modal-actions">
            <button className="btn btn-secondary" onClick={() => setSelectedStudent(null)}>
              Kapat
            </button>
            <button className="btn btn-primary" onClick={handleUpdateStudent}>
              Kaydet
            </button>
          </div>
        </Modal>
      </div>
    </AdminLayout>
  );
};

export default StudentList;

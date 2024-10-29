import React, { useEffect, useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import { adminApi } from "../../Utils/api";
import "../../Assets/Css/Admin/teachersList.css";
import notificationService from "../../Services/notificationService";
import Modal from "../Common/Modal";

const TeachersList = () => {
  const [teachersBySubject, setTeachersBySubject] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teacherData, setTeacherData] = useState({
    name: "",
    lastname: "",
    tc: "",
    teacher_number: "",
    subject: "",
  });

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        setLoading(true);
        const response = await adminApi.get("/teacher-list");
        const teachers = response.data;

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
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  const handleOpenModal = (teacher) => {
    setSelectedTeacher(teacher);
    setTeacherData({
      name: teacher.name,
      lastname: teacher.lastname,
      tc: teacher.tc,
      teacher_number: teacher.teacher_number,
      subject: teacher.subject,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTeacher(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacherData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateTeacher = async () => {
    try {
      await adminApi.put(`/teacher-list/${selectedTeacher.id}`, teacherData);
      notificationService.success("Öğretmen başarıyla güncellendi");
      setIsModalOpen(false);
    } catch (error) {
      notificationService.error("Güncelleme işlemi sırasında hata oluştu");
    }
  };

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
                      src={teacher.photo || "/logo.png"}
                      className="card-img-top admin-teacher-photo"
                      alt={`${teacher.name} fotoğrafı`}
                    />
                    <div className="card-body">
                      <h5 className="admin-teacher-card-title">
                        {teacher.name.charAt(0).toUpperCase() + teacher.name.slice(1)}{" "}
                        {teacher.lastname.toUpperCase()}
                      </h5>
                      <p className="admin-teacher-card-text">Tc: {teacher.tc}</p>
                      <p className="admin-teacher-card-text">Öğretmen Numarası: {teacher.teacher_number}</p>
                      <button className="btn admin-teacher-btn-primary" onClick={() => handleOpenModal(teacher)}>
                        Detaylar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          {selectedTeacher && (
            <>
              <h4>Öğretmen Detayları</h4>
              <label>Ad:</label>
              <input
                type="text"
                name="name"
                value={teacherData.name}
                onChange={handleInputChange}
                className="form-control mb-2"
              />
              <label>Soyad:</label>
              <input
                type="text"
                name="lastname"
                value={teacherData.lastname}
                onChange={handleInputChange}
                className="form-control mb-2"
              />
              <label>T.C. No:</label>
              <input
                type="text"
                name="tc"
                value={teacherData.tc}
                onChange={handleInputChange}
                className="form-control mb-2"
              />
              <label>Öğretmen Numarası:</label>
              <input
                type="text"
                name="teacher_number"
                value={teacherData.teacher_number}
                onChange={handleInputChange}
                className="form-control mb-2"
              />
              <label>Branş:</label>
              <input
                type="text"
                name="subject"
                value={teacherData.subject}
                onChange={handleInputChange}
                className="form-control mb-3"
              />
              <button className="btn btn-success" onClick={handleUpdateTeacher}>Kaydet</button>
              <button className="btn btn-secondary ms-2" onClick={handleCloseModal}>İptal</button>
            </>
          )}
        </Modal>
      </div>
    </AdminLayout>
  );
};

export default TeachersList;

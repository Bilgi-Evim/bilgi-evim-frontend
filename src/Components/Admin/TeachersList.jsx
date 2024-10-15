import React from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import "../../Assets/Css/Admin/teachersList.css";

const teachers = {
  fizik: [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      email: "ahmet@example.com",
      photo: "https://www.webtekno.com/images/editor/default/0003/83/f1dee8d4cf45b8f90916002d42eb0ec627c50d07.jpeg",
    },
    {
      id: 2,
      name: "Fatma Demir",
      email: "fatma@example.com",
      photo: "https://www.webtekno.com/images/editor/default/0003/83/f1dee8d4cf45b8f90916002d42eb0ec627c50d07.jpeg",
    },
  ],
  matematik: [
    {
      id: 3,
      name: "Mehmet Ak",
      email: "mehmet@example.com",
      photo: "https://www.webtekno.com/images/editor/default/0003/83/f1dee8d4cf45b8f90916002d42eb0ec627c50d07.jpeg",
    },
  ],
  kimya: [
    {
      id: 4,
      name: "Ayşe Öztürk",
      email: "ayse@example.com",
      photo: "https://www.webtekno.com/images/editor/default/0003/83/f1dee8d4cf45b8f90916002d42eb0ec627c50d07.jpeg",
    },
  ],
};

const TeachersList = () => {
  return (
    <AdminLayout>
      <div className="container mt-5 admin-teachers-list-container">
        <h2 className="text-center mb-4">Öğretmen Listesi</h2>

        {Object.keys(teachers).map((subject) => (
          <div key={subject} className="admin-subject-section">
            <h3 className="admin-subject-title">{subject.charAt(0).toUpperCase() + subject.slice(1)} Öğretmenleri</h3>
            <div className="row">
              {teachers[subject].map((teacher) => (
                <div key={teacher.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card admin-teacher-card shadow-sm">
                    <img
                      src={teacher.photo}
                      className="card-img-top admin-teacher-photo"
                      alt={`${teacher.name}'ın fotoğrafı`}
                    />
                    <div className="card-body">
                      <h5 className="admin-teacher-card-title">{teacher.name}</h5>
                      <p className="admin-teacher-card-text">Email: {teacher.email}</p>
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

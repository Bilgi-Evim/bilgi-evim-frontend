import "../../Assets/Css/Admin/studentList.css";
import React from "react";
import AdminLayout from "../../Layouts/AdminLayout";

const students = [
  {
    id: 1,
    name: "Ali Yılmaz",
    email: "ali@example.com",
    class: "10",
    section: "A",
    age: 16,
    photo: "https://www.webtekno.com/images/editor/default/0003/83/f1dee8d4cf45b8f90916002d42eb0ec627c50d07.jpeg",
  },
  {
    id: 2,
    name: "Ayşe Demir",
    email: "ayse@example.com",
    class: "11",
    section: "B",
    age: 17,
    photo: "https://www.webtekno.com/images/editor/default/0003/83/f1dee8d4cf45b8f90916002d42eb0ec627c50d07.jpeg",
  },
  {
    id: 3,
    name: "Mehmet Ak",
    email: "mehmet@example.com",
    class: "9",
    section: "C",
    age: 15,
    photo: "https://www.webtekno.com/images/editor/default/0003/83/f1dee8d4cf45b8f90916002d42eb0ec627c50d07.jpeg",
  },
  {
    id: 4,
    name: "Fatma Öztürk",
    email: "fatma@example.com",
    class: "12",
    section: "D",
    age: 18,
    photo: "https://www.webtekno.com/images/editor/default/0003/83/f1dee8d4cf45b8f90916002d42eb0ec627c50d07.jpeg",
  },
];

const StudentList = () => {
  return (
    <AdminLayout>
      <div className="container mt-5 admin-student-list-container">
        <h2 className="text-center mb-4">Admin Öğrenci Listesi</h2>
        <div className="row">
          {students.map((student) => (
            <div key={student.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card admin-student-card shadow-sm">
                <img
                  src={student.photo}
                  className="card-img-top admin-student-photo"
                  alt={`${student.name}'ın fotoğrafı`}
                />
                <div className="card-body">
                  <h5 className="admin-card-title">{student.name}</h5>
                  <p className="admin-card-text">Email: {student.email}</p>
                  <p className="admin-card-text">
                    Sınıf: {student.class} / {student.section}
                  </p>
                  <p className="admin-card-text">Yaş: {student.age}</p>
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

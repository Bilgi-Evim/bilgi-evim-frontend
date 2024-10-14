import "../../Assets/Css/Teacher/studentList.css";
import React from "react";
import TeacherLayout from "../../Layouts/TeacherLayout";

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
    <TeacherLayout>
      <div className="container mt-5 student-list-container">
        <h2 className="text-center mb-4">Öğrenci Listesi</h2>
        <div className="row">
          {students.map((student) => (
            <div key={student.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card student-card shadow-sm">
                <img
                  src={student.photo}
                  className="card-img-top student-photo"
                  alt={`${student.name}'ın fotoğrafı`}
                />
                <div className="card-body">
                  <h5 className="card-title">{student.name}</h5>
                  <p className="card-text">Email: {student.email}</p>
                  <p className="card-text">
                    Sınıf: {student.class} / {student.section}
                  </p>
                  <p className="card-text">Yaş: {student.age}</p>
                  <button className="btn btn-primary">Detaylar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TeacherLayout>
  );
};

export default StudentList;

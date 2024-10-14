import React from "react";
import TeacherLayout from "../../Layouts/TeacherLayout";
import "../../Assets/Css/Teacher/teacherCourses.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';

const courses = [
  {
    id: 1,
    title: "Matematik Özel Ders",
    description: "10. sınıf öğrencileri için ileri düzey matematik eğitimi.",
    date: "15 Ekim 2024",
    time: "14:00 - 16:00",
    studentStatus: "onaylanmış",
    teacherStatus: "onaylanmış",
    image: "https://careerteachers.co.uk/wp-content/uploads/2024/09/107444.jpg",
  },
  {
    id: 2,
    title: "Fizik Özel Ders",
    description: "Kuvvet ve hareket konularını kapsayan fizik dersi.",
    date: "16 Ekim 2024",
    time: "10:00 - 12:00",
    studentStatus: "reddedilmiş",
    teacherStatus: "onaylanmış",
    image: "https://careerteachers.co.uk/wp-content/uploads/2024/09/107444.jpg",
  },
  {
    id: 3,
    title: "Kimya Özel Ders",
    description: "Organik kimya konularına giriş.",
    date: "17 Ekim 2024",
    time: "09:00 - 11:00",
    studentStatus: "beklemede",
    teacherStatus: "beklemede",
    image: "https://careerteachers.co.uk/wp-content/uploads/2024/09/107444.jpg",
  },
];

const TeacherCourses = () => {
  const renderStatusIcon = (status) => {
    if (status === "onaylanmış") {
      return <FaCheckCircle className="text-success status-icon" />;
    } else if (status === "reddedilmiş") {
      return <FaTimesCircle className="text-danger status-icon" />;
    } else {
      return <FontAwesomeIcon icon={faHourglassHalf} style={{color: "#5EB4E6FF",}}/>;
    }
  };

  return (
    <TeacherLayout>
      <div className="container mt-5 teacher-courses-container">
        <h2 className="text-center mb-4">Özel Derslerim</h2>
        <div className="row">
          {courses.map((course) => (
            <div key={course.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card course-card shadow-sm">
                <img
                  src={course.image}
                  className="card-img-top course-image"
                  alt={`${course.title} görseli`}
                />
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                  <p className="card-text">Tarih: {course.date}</p>
                  <p className="card-text">Saat: {course.time}</p>
                  <p className="card-text">
                    Öğrenci Katılımı: {renderStatusIcon(course.studentStatus)}
                  </p>
                  <p className="card-text">
                    Öğretmen Katılımı: {renderStatusIcon(course.teacherStatus)}
                  </p>
                  <button className="btn btn-primary">Derse Katıl</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TeacherLayout>
  );
};

export default TeacherCourses;

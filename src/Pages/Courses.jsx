import React from "react";
import "../Assets/Css/Common/courses.css"; // CSS dosyasını ekleyin
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";

const coursesData = [
  {
    id: 1,
    title: "Matematik",
    image: "/Images/Courses/mathematics.jpg", // Resim dosyası
  },
  {
    id: 2,
    title: "Türkçe",
    image: "/Images/Courses/turkish.jpg",
  },
  {
    id: 3,
    title: "Sosyal Bilgiler",
    image: "/Images/Courses/social_studies.jpg",
  },
  {
    id: 4,
    title: "Fen Bilgisi",
    image: "/Images/Courses/science.jpg",
  },
  {
    id: 5,
    title: "İngilizce",
    image: "/Images/Courses/english.jpg",
  },
  {
    id: 6,
    title: "Sanat",
    image: "/Images/Courses/art.jpg",
  },
  // Diğer dersleri ekleyin
];

const Courses = () => {
  return (
    <>
      <Header />
      <div className="courses-container container-fluid p-5">
        <h1 className="courses-title text-center text-primary mb-4">Kurslarımız</h1>
        <div className="row">
          {coursesData.map((course) => (
            <div className="col-lg-4 col-md-6 mb-4" key={course.id}>
              <div className="course-card border rounded">
                <img src={course.image} alt={course.title} className="course-image" />
                <div className="course-content p-3 text-center">
                  <h3 className="course-title text-primary">{course.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;

import React from "react";
import "../../Assets/Css/Common/instructors.css";

const instructorsData = [
  {
    name: "Teacher 1",
    designation: "Job 1",
    imgSrc: "/Images/Common/team-1.jpg",
    facebook: "https://www.facebook.com/?locale=tr_TR",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
  },
  {
    name: "Teacher 2",
    designation: "Job 2",
    imgSrc: "/Images/Common/team-2.jpg",
    facebook: "https://www.facebook.com/?locale=tr_TR",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
  },
  {
    name: "Teacher 3",
    designation: "Job 3",
    imgSrc: "/Images/Common/team-3.jpg",
    facebook: "https://www.facebook.com/?locale=tr_TR",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
  },
  {
    name: "Teacher 4",
    designation: "Job 4",
    imgSrc: "/Images/Common/team-4.jpg",
    facebook: "https://www.facebook.com/?locale=tr_TR",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
  },
];

const Instructors = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Kadromuz
          </h6>
          <h1 className="mb-5">Uzman Kadromuz</h1>
        </div>
        <div className="row g-4">
          {instructorsData.map((instructor, index) => (
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.1 + index * 0.2}s`}
              key={index}
            >
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src={instructor.imgSrc}
                    alt={instructor.name}
                  />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a
                      className="btn btn-sm-square btn-primary mx-1 fb-btn"
                      href={instructor.facebook}
                      target="blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-sm-square btn-primary mx-1 tw-btn"
                      href={instructor.twitter}
                      target="blank"
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-sm-square btn-primary mx-1 ig-btn"
                      href={instructor.instagram}
                      target="blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">{instructor.name}</h5>
                  <small>{instructor.designation}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;

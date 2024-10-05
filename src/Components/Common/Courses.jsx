import React from "react";
import "../../Assets/Css/Common/courses.css";

const Courses = () => {
  return (
    <div className="container-xxl py-5" id="courses">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Kurslar
          </h6>
          <h1 className="mb-5">Popüler Kurslarımız</h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="course-item bg-light">
              <div className="position-relative overflow-hidden">
                <img
                  className="img-fluid"
                  src="/Images/Common/course-1.jpg"
                  alt=""
                />
                <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                  <a
                    href="#courses"
                    className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end read-more-btn"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Detaylar
                  </a>
                  <a
                    href="#courses"
                    className="flex-shrink-0 btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    İletişim
                  </a>
                </div>
              </div>
              <div className="text-center p-4 pb-0">
                <h3 className="mb-0">99.000₺</h3>
                <h6>Başlayan Fiyatlarla</h6>
                <div className="mb-3">
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small>(123)</small>
                </div>
                <h5 className="mb-4">
                  Temelden İleri Seviyeye C2 seviye İngilizce yaz kursu
                </h5>
              </div>
              <div className="d-flex border-top course-footer">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-user-tie text-primary me-2"></i>John Doe
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-clock text-primary me-2"></i>1.49 Hrs
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2"></i>30 Students
                </small>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="course-item bg-light">
              <div className="position-relative overflow-hidden">
                <img
                  className="img-fluid"
                  src="/Images/Common/course-2.jpg"
                  alt=""
                />
                <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                  <a
                    href="#courses"
                    className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end read-more-btn"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Detaylar
                  </a>
                  <a
                    href="#courses"
                    className="flex-shrink-0 btn btn-sm btn-primary px-3 "
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    İletişim
                  </a>
                </div>
              </div>
              <div className="text-center p-4 pb-0">
                <h3 className="mb-0">25.000₺</h3>
                <h6>Başlayan Fiyatlarla</h6>
                <div className="mb-3">
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small>(123)</small>
                </div>
                <h5 className="mb-4">
                  Web Design & Development Course for Beginners
                </h5>
              </div>
              <div className="d-flex border-top course-footer">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-user-tie text-primary me-2"></i>John Doe
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-clock text-primary me-2"></i>1.49 Hrs
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2"></i>30 Students
                </small>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="course-item bg-light">
              <div className="position-relative overflow-hidden">
                <img
                  className="img-fluid"
                  src="/Images/Common/course-3.jpg"
                  alt=""
                />
                <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                  <a
                    href="#courses"
                    className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end read-more-btn "
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Detaylar
                  </a>
                  <a
                    href="#courses"
                    className="flex-shrink-0 btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    İletişim
                  </a>
                </div>
              </div>
              <div className="text-center p-4 pb-0">
                <h3 className="mb-0">149.000₺</h3>
                <h6>Başlayan Fiyatlarla</h6>
                <div className="mb-3">
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small>(123)</small>
                </div>
                <h5 className="mb-4">
                  Web Design & Development Course for Beginners
                </h5>
              </div>
              <div className="d-flex border-top course-footer">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-user-tie text-primary me-2"></i>John Doe
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-clock text-primary me-2"></i>1.49 Hrs
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2"></i>30 Students
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

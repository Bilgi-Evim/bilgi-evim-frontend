import React from "react";
import "../../Assets/Css/Common/header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <div className="navbar-left">
        <a
          href="/home"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">
            <i className="fa fa-book me-3 mr-2"></i>Bilgi Evim
          </h2>
        </a>
      </div>

      <div className="navbar-right ms-auto">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav p-4 p-lg-0">
            <a href="/home" className="nav-item nav-link active">
              Ana Sayfa
            </a>
            <a href="/about-us" className="nav-item nav-link">
              Hakkımızda
            </a>
            <a href="/home#courses" className="nav-item nav-link">
              Kurslar
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Giriş
              </a>
              <div className="dropdown-menu fade-down m-0">
                <a href="/teacher/login" className="dropdown-item">
                  Öğretmen
                </a>
                <a href="/student/login" className="dropdown-item">
                  Öğrenci
                </a>
              </div>
            </div>
            <a href="/contact" className="nav-item nav-link">
              İletişim
            </a>
          </div>
          <a href="#" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
            Aramıza Katıl<i className="fa fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;

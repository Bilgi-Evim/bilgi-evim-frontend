import React from "react";
import "../../Assets/Css/Common/header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <div className="navbar-left">
        <a
          href="#"
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
            <a href="#" className="nav-item nav-link active">
              Ana Sayfa
            </a>
            <a href="#" className="nav-item nav-link">
              Hakkımızda
            </a>
            <a href="#" className="nav-item nav-link">
              Kurslar
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Sayfalar
              </a>
              <div className="dropdown-menu fade-down m-0">
                <a href="#" className="dropdown-item">
                  Ekibimiz
                </a>
                <a href="#" className="dropdown-item">
                  İletişim
                </a>
              </div>
            </div>
            <a href="#" className="nav-item nav-link">
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

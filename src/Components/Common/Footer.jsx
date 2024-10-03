import React from "react";
import "../../Assets/Css/Common/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Hızlı Erişim</h4>
              <a className="btn btn-link" href="">
                Hakkımızda
              </a>
              <a className="btn btn-link" href="">
                İletişim
              </a>
              <a className="btn btn-link" href="">
                Gizlilik Sözleşmesi
              </a>
              <a className="btn btn-link" href="">
                Sıkça Sorulan Sorular
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">İletişim</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3 mr-2"></i>61000 Trabzon
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3 mr-2"></i>+012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3 mr-2"></i>info@bilgievim.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Galeri</h4>
              <div className="row g-2 pt-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div className="col-4" key={index}>
                    <img
                      className="img-fluid bg-light p-1"
                      src={`/Images/Common/course-${(index % 3) + 1}.jpg`}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Bize Ulaşın</h4>
              <p>Merak ettiğiniz sorular hakkında bize ulaşabilirsiniz.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="E-Posta Adresiniz"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  Gönder
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="" href="#">
                  Bilgi Evim Eğitim Kurumları Tüm Hakları Saklıdır
                </a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Ana Sayfa</a>
                  <a href="">Çerezler</a>
                  <a href="">Yardım</a>
                  <a href="">SSS</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

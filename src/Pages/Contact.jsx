import React from "react";
import "../Assets/Css/Common/contact.css";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";

const Contact = () => {
  return (
    <>
      <Header />

      <div className="contact-container container-fluid p-5">
        <div className="row mb-5">
          <div className="contact-info col-lg-6 d-flex flex-column justify-content-center">
            <h2 className="contact-title text-primary text-uppercase mb-3">
              İletişim
            </h2>
            <h1 className="contact-heading display-5 mb-4">Bize Ulaşın</h1>
            <p className="contact-description fs-5 text-muted mb-4">
              Sorularınız, görüşleriniz veya işbirliği fırsatları için bizimle
              iletişime geçmekten çekinmeyin. Size yardımcı olmaktan memnuniyet
              duyarız.
            </p>
            <div className="contact-details mb-3">
              <h5 className="contact-label text-primary">Adres:</h5>
              <p className="contact-text fs-5 text-muted">
                1234 Eğitim Caddesi, Bilgi Mahallesi, İstanbul
              </p>
            </div>
            <div className="contact-details mb-3">
              <h5 className="contact-label text-primary">Telefon:</h5>
              <p className="contact-text fs-5 text-muted">+90 555 123 45 67</p>
            </div>
            <div className="contact-details mb-3">
              <h5 className="contact-label text-primary">E-posta:</h5>
              <p className="contact-text fs-5 text-muted">info@bilgievim.com</p>
            </div>
          </div>
          <div className="contact-form col-lg-6">
            <h2 className="contact-form-title text-primary text-uppercase mb-4">
              Bize Mesaj Gönderin
            </h2>
            <form>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Adınız"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-posta Adresiniz"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Konu"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Mesajınız"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary py-md-3 px-md-5">
                Gönder
              </button>
            </form>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3010.967370667666!2d39.72174828025836!3d41.004087369559485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1728071692646!5m2!1str!2str"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

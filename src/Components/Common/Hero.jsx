import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../Assets/Css/Common/hero.css";

const Hero = () => {
  const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 1,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
  };

  return (
    <div className="container-fluid p-0">
      <OwlCarousel className="header-carousel" {...options}>
        <div className="item position-relative">
          <img
            className="img-fluid"
            src="/Images/Common/carousel-1.jpg"
            alt=""
          />
          <div
            className="hero-section position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: "rgba(24, 29, 56, .7)" }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                    BİLGİ EVİM EĞİTİM KURUMLARI
                  </h5>
                  <h1 className="display-3 text-white animated slideInDown">
                    En İyi Online Öğrenme Platformu
                  </h1>
                  <p className="fs-5 text-white mb-4 pb-2">
                    Başarınızı bir adım öteye taşımak için buradayız! Uzman
                    kadromuz ve kişiye özel eğitim programlarımızla,
                    hedeflerinize ulaşmanın en etkili yolunu birlikte keşfedin
                  </p>
                  <a
                    href="/home"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft mr-3"
                  >
                    Keşfet
                  </a>
                  <a
                    href="/home"
                    className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Bize Katıl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item position-relative">
          <img
            className="img-fluid"
            src="/Images/Common/carousel-2.jpg"
            alt=""
          />
          <div
            className="hero-section position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: "rgba(24, 29, 56, .7)" }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                    BİLGİ EVİM EĞİTİM KURUMLARI
                  </h5>
                  <h1 className="display-3 text-white animated slideInDown">
                    Başarıya Giden Yolda Yanınızdayız!
                  </h1>
                  <p className="fs-5 text-white mb-4 pb-2">
                    Eğitimde başarıya giden yol burada başlıyor! Yenilikçi
                    yöntemlerimiz ve deneyimli eğitmenlerimizle, her öğrencinin
                    potansiyelini en üst düzeye çıkarmayı hedefliyoruz
                  </p>
                  <a
                    href="/home"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft mr-3"
                  >
                    Keşfet
                  </a>
                  <a
                    href="/home"
                    className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Bize Katıl
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Hero;

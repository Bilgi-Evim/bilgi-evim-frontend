import React from "react";
import "../../src/Assets/Css/Common/aboutUs.css";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-container container-fluid bg-light py-5">
        <div className="about-header container py-5">
          <div className="row gx-5">
            <div className="about-image col-lg-6 mb-4">
              <img className="img-fluid" src="/logo-tr.png" alt="Bilgi Evim" />
            </div>
            <div className="about-intro col-lg-6 mb-4">
              <h1 className="about-title display-5 mb-4">Hakkımızda</h1>
              <p className="about-text">
                Bilgi Evim Eğitim Kurumları, eğitimde yenilikçi yöntemler ve
                çağdaş yaklaşımlar sunarak öğrencilerimizin akademik ve kişisel
                başarılarını en üst seviyeye çıkarmayı hedefleyen bir eğitim
                kurumudur. Kurulduğumuz günden bu yana, öğrenci merkezli eğitim
                anlayışımız ve alanında uzman eğitmen kadromuzla sayısız
                başarıya imza attık. Amacımız, her öğrencimizin potansiyelini
                keşfetmesine ve bu potansiyeli en etkili şekilde kullanmasına
                olanak sağlamaktır. Bilgi Evim, eğitimi yalnızca bilgi aktarmak
                olarak değil, aynı zamanda öğrencilerimizin bireysel
                gelişimlerine ve özgüvenlerine katkı sağlamak olarak görür. Her
                bireyin farklı öğrenme tarzlarına sahip olduğunun farkındayız ve
                bu yüzden kişiselleştirilmiş eğitim programları ile her
                öğrencimize ihtiyaçlarına uygun çözümler sunuyoruz. Teknolojiyi
                eğitimin her aşamasında kullanarak öğrencilerimizi geleceğe
                hazırlıyoruz. Uzaktan eğitim platformlarımız, dijital araçlarla
                zenginleştirilmiş ders içerikleri ve etkileşimli öğrenme
                süreçlerimizle, öğrencilerimizin hem okul hayatında hem de
                mesleki yaşamlarında başarıya ulaşmalarını sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
        <div className="about-mission-vision container py-5">
          <div className="row gx-5">
            <div className="about-mission col-lg-6 mb-4">
              <h2 className="about-section-title">Misyonumuz</h2>
              <p className="about-text">
                Eğitimde en iyi standartları uygulayarak öğrencilerimize
                rehberlik etmek ve akademik başarıyı sağlamak. Eğitim
                programlarımızla, bireylerin öğrenme süreçlerini
                zenginleştirerek toplumumuza değer katmak.
              </p>
            </div>
            <div className="about-vision col-lg-6 mb-4">
              <h2 className="about-section-title">Vizyonumuz</h2>
              <p className="about-text">
                Geleceğin liderlerini yetiştiren, modern eğitim yaklaşımlarını
                benimseyen bir kurum olmak. Dünya çapında tanınan bir eğitim
                kurumu haline gelmek.
              </p>
            </div>
          </div>
        </div>
        <div className="about-values container py-5">
          <h2 className="about-section-title text-center">Değerlerimiz</h2>
          <div className="row gx-5">
            <div className="about-value-item col-lg-3 mb-4 text-center">
              <h3 className="about-value-title">Yenilikçilik</h3>
              <p className="about-text">
                Sürekli gelişen eğitim teknolojilerini takip ediyor ve
                öğrencilerimize en yeni yöntemlerle eğitim sunuyoruz.
              </p>
            </div>
            <div className="about-value-item col-lg-3 mb-4 text-center">
              <h3 className="about-value-title">Sorumluluk</h3>
              <p className="about-text">
                Öğrencilerimizin başarıya ulaşmasında sorumluluk alıyor ve her
                adımda onları destekliyoruz.
              </p>
            </div>
            <div className="about-value-item col-lg-3 mb-4 text-center">
              <h3 className="about-value-title">Mükemmeliyet</h3>
              <p className="about-text">
                Eğitimde mükemmeliyeti hedefliyor, her öğrenciye en iyi deneyimi
                sunmak için çabalıyoruz.
              </p>
            </div>
            <div className="about-value-item col-lg-3 mb-4 text-center">
              <h3 className="about-value-title">İşbirliği</h3>
              <p className="about-text">
                Eğitmenlerimiz, velilerimiz ve öğrencilerimizle işbirliği içinde
                çalışarak birlikte büyüyoruz.
              </p>
            </div>
          </div>
        </div>
        <div className="about-achievements container py-5">
          <h2 className="about-section-title text-center">Başarılarımız</h2>
          <div className="row gx-5">
            <div className="about-achievement-item col-lg-4 mb-4 text-center">
              <h3 className="about-achievement-title">500+ Öğrenci</h3>
              <p className="about-text">
                Eğitim programlarımızdan başarıyla mezun olan ve çeşitli
                alanlarda kariyer yapan yüzlerce öğrenci.
              </p>
            </div>
            <div className="about-achievement-item col-lg-4 mb-4 text-center">
              <h3 className="about-achievement-title">10+ Yıllık Deneyim</h3>
              <p className="about-text">
                Eğitim alanında birikmiş 10 yıllık tecrübemizle, yenilikçi ve
                dinamik programlar sunuyoruz.
              </p>
            </div>
            <div className="about-achievement-item col-lg-4 mb-4 text-center">
              <h3 className="about-achievement-title">%95 Başarı Oranı</h3>
              <p className="about-text">
                Öğrencilerimizin akademik başarısına katkıda bulunarak, onları
                en yüksek başarı oranlarına ulaştırıyoruz.
              </p>
            </div>
          </div>
        </div>
        <div className="about-team container py-5">
          <h2 className="about-section-title text-center">Eğitmen Kadromuz</h2>
          <p className="about-text text-center">
            Uzman eğitmen kadromuz, alanında lider isimlerden oluşmaktadır. Her
            biri kendi alanında deneyimli ve öğrencilerimizin gelişimine katkı
            sağlamayı amaçlamaktadır.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

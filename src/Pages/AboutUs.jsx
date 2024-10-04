import React from "react";
import "../../src/Assets/Css/Common/aboutUs.css";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="container-fluid p-5">
        <div className="row mb-5">
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src="/logo-tr.png"
              alt="Hakkımızda"
            />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2 className="text-primary text-uppercase mb-3">Hakkımızda</h2>
            <h1 className="display-5 mb-4">Bilgi Evim Eğitim Kurumları</h1>
            <p className="fs-5 text-muted mb-4">
              Bilgi Evim Eğitim Kurumları, 2024 yılında eğitim sektörüne adım
              atarak, öğrencilerin akademik ve kişisel gelişimlerini
              desteklemeyi hedefleyen bir kurum olarak kurulmuştur. Modern
              eğitim yaklaşımlarını ve bireysel öğrenme yöntemlerini
              benimseyerek, öğrencilerimize geleceğe hazırlayan güçlü bir temel
              sunuyoruz.
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-12">
            <h2 className="text-primary text-uppercase mb-3">Misyonumuz</h2>
            <p className="fs-5 text-muted mb-4">
              Misyonumuz, öğrencilere ihtiyaç duydukları bilgi ve becerileri
              kazandırarak, onların akademik ve kişisel başarılarını en üst
              düzeye taşımaktır. Kaliteli eğitim, uzman kadro ve bireysel
              yaklaşımlarımızla her öğrencimizin potansiyelini ortaya çıkarmayı
              amaçlıyoruz.
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-12">
            <h2 className="text-primary text-uppercase mb-3">Vizyonumuz</h2>
            <p className="fs-5 text-muted mb-4">
              Bilgi Evim Eğitim Kurumları olarak vizyonumuz, Türkiye'nin en
              yenilikçi ve başarılı eğitim kurumlarından biri olmak ve dünya
              çapında tanınan bir eğitim markası haline gelmektir. Geleceğin
              liderlerini yetiştirmek ve topluma katkı sağlayan bireyler
              kazandırmak en büyük hedefimizdir.
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-12">
            <h2 className="text-primary text-uppercase mb-3">Değerlerimiz</h2>
            <ul className="fs-5 text-muted mb-4">
              <li className="mb-3">
                <strong>Öğrenci Odaklılık:</strong> Her öğrencinin bireysel
                gelişimini önemseyen bir yaklaşımla hareket ederiz.
              </li>
              <li className="mb-3">
                <strong>Yenilikçilik:</strong> Sürekli gelişen eğitim
                yöntemlerini takip ederek, öğrencilerimize en modern araçları
                sunarız.
              </li>
              <li className="mb-3">
                <strong>Kalite:</strong> Eğitim kalitesini en üst seviyede
                tutarak, öğrencilerimize nitelikli bir öğrenim ortamı sunarız.
              </li>
              <li className="mb-3">
                <strong>İşbirliği:</strong> Öğrencilerimiz, velilerimiz ve
                öğretmenlerimizle güçlü bir işbirliği içerisinde hareket ederiz.
              </li>
            </ul>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-12">
            <h2 className="text-primary text-uppercase mb-3">Ekibimiz</h2>
            <p className="fs-5 text-muted mb-4">
              Alanında uzman eğitmen kadromuz, öğrencilere bireysel yaklaşımlar
              sunarak onların öğrenme sürecini en verimli şekilde yönetmektedir.
              Her biri kendi alanında deneyimli olan öğretmenlerimiz, yenilikçi
              ve interaktif eğitim yöntemlerini benimseyerek, öğrencilerimize en
              iyi öğrenme deneyimini sunmaktadır.
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-12">
            <h2 className="text-primary text-uppercase mb-3">Tarihçemiz</h2>
            <p className="fs-5 text-muted mb-4">
              Bilgi Evim Eğitim Kurumları, 2010 yılında birkaç öğrenciyle eğitim
              vermeye başlamış ve kısa sürede yüzlerce öğrenciye ulaşmıştır.
              Kuruluşumuzdan bu yana büyüyen yapımızla, hem akademik başarıya
              hem de öğrencilerin kişisel gelişimine odaklanan bir eğitim
              anlayışıyla faaliyetlerimizi sürdürüyoruz.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-primary text-uppercase mb-3">Bize Ulaşın</h2>
            <p className="fs-5 text-muted mb-4">
              Sorularınız veya geri bildirimleriniz için bizimle iletişime
              geçebilirsiniz. Eğitim yolculuğunuzda size yardımcı olmak için
              buradayız!
            </p>
            <a href="/contact" className="btn btn-primary py-md-3 px-md-5">
              Bize Ulaşın
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;

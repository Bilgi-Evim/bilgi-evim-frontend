import React from "react";

const CookiePolicy = () => {
  return (
    <div style={styles.cookiePolicyContainer}>
      <h2 style={styles.cookiePolicyHeader}>Çerez Politikası</h2>
      <p style={styles.cookiePolicyIntro}>
        Web sitemizi kullanırken, kullanıcı deneyimini iyileştirmek, içeriklerimizi ve reklamlarımızı
        kişiselleştirmek, sosyal medya özelliklerini sağlamak ve site trafiğimizi analiz etmek için çerezler
        kullanıyoruz. Bu sayfa, çerezler hakkında bilgi vermekte ve kullanıcıların çerez tercihlerini yönetmelerine
        olanak tanımaktadır.
      </p>
      
      <section style={styles.cookiePolicySection}>
        <h3 style={styles.cookiePolicySubHeader}>Çerez Türleri ve Amaçları</h3>
        <p style={styles.cookiePolicyParagraph}>
          Çerezler, web sitemizi ziyaret ettiğinizde cihazınıza kaydedilen küçük veri dosyalarıdır. Farklı türlerde çerezler kullanmaktayız:
        </p>
        <ul style={styles.cookiePolicyList}>
          <li style={styles.cookiePolicyListItem}>
            <strong>Gerekli Çerezler:</strong> Bu çerezler, sitenin temel işlevlerini sağlaması için zorunludur ve kapatılamaz.
          </li>
          <li style={styles.cookiePolicyListItem}>
            <strong>Performans Çerezleri:</strong> Bu çerezler, sitedeki etkileşimlerinizi analiz ederek performans iyileştirmelerine yardımcı olur.
          </li>
          <li style={styles.cookiePolicyListItem}>
            <strong>Hedefleme ve Reklam Çerezleri:</strong> İlgi alanlarınıza yönelik reklam sunmak için kullanılır.
          </li>
          <li style={styles.cookiePolicyListItem}>
            <strong>İşlevsellik Çerezleri:</strong> Bu çerezler, siteyi kullanırken kişiselleştirilmiş bir deneyim sunmamıza yardımcı olur.
          </li>
        </ul>
      </section>

      <section style={styles.cookiePolicySection}>
        <h3 style={styles.cookiePolicySubHeader}>Çerez Tercihlerinizi Nasıl Yönetebilirsiniz?</h3>
        <p style={styles.cookiePolicyParagraph}>
          Çoğu tarayıcı, çerezleri kabul etmeme veya belirli çerez türlerini engelleme ayarlarına sahiptir. Çerez
          tercihlerinizi tarayıcı ayarlarınızdan değiştirebilir ve mevcut çerezleri silebilirsiniz. Ancak, çerezleri
          devre dışı bırakmanız durumunda, web sitemizin bazı özellikleri düzgün çalışmayabilir.
        </p>
      </section>

      <section style={styles.cookiePolicySection}>
        <h3 style={styles.cookiePolicySubHeader}>Daha Fazla Bilgi</h3>
        <p style={styles.cookiePolicyParagraph}>
          Çerezler ve çerez politikamız hakkında daha fazla bilgi almak için bizimle iletişime geçebilirsiniz.
        </p>
      </section>
    </div>
  );
};

const styles = {
  cookiePolicyContainer: {
    padding: "40px",
    margin: "0 auto",
    fontFamily: "'Roboto', sans-serif",
    color: "#333",
    lineHeight: "1.6",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  cookiePolicyHeader: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#005B61",
    marginBottom: "20px",
    textAlign: "center",
  },
  cookiePolicyIntro: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "30px",
    textAlign: "center",
  },
  cookiePolicySection: {
    marginBottom: "30px",
  },
  cookiePolicySubHeader: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#007b8a",
    marginBottom: "15px",
  },
  cookiePolicyParagraph: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px",
  },
  cookiePolicyList: {
    paddingLeft: "20px",
  },
  cookiePolicyListItem: {
    fontSize: "16px",
    color: "#444",
    marginBottom: "10px",
  },
};

export default CookiePolicy;

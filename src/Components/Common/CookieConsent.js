import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={styles.cookieConsentContainer}>
      <div style={styles.cookieConsentContent}>
        <h4 style={styles.cookieConsentTitle}>Bu web sitesi Çerezler kullanır</h4>
        <p style={styles.cookieConsentMessage}>
          "Tüm Çerezleri Kabul Et"e tıklayarak, site gezinmesini geliştirmek,
          site kullanımını analiz etmek ve belirli sayfalarda Kişiselleştirilmiş
          Reklamcılık da dahil olmak üzere pazarlama çabalarımıza yardımcı olmak
          için cihazınızda çerezlerin depolanmasını kabul edersiniz.
          <a href="/cookie-policy" target="blank" style={styles.cookieConsentLink}>
            Çerez Bildirimi
          </a>
        </p>
      </div>
      <div style={styles.cookieConsentButtonContainer}>
        <button onClick={handleReject} style={styles.cookieConsentButton}>
          Tümünü Reddet
        </button>
        <button onClick={handleAccept} style={styles.cookieConsentButton}>
          Tüm Çerezleri Kabul Et
        </button>
        <button onClick={() => setIsVisible(false)} style={styles.cookieConsentCloseButton}>
          ✕
        </button>
      </div>
    </div>
  );
};

const styles = {
  cookieConsentContainer: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    color: "#333",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  },
  cookieConsentContent: {
    maxWidth: "55%",
  },
  cookieConsentTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  cookieConsentMessage: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "0",
    lineHeight: "1.5",
  },
  cookieConsentLink: {
    color: "#005B61",
    marginLeft: "5px",
    fontWeight: "bold",
    textDecoration: "underline",
  },
  cookieConsentButtonContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  cookieConsentButton: {
    backgroundColor: "#06BBCC",
    color: " #EBE6E6FF",
    border: "none",
    padding: "12px 20px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    width: "200px",
    textAlign: "center",
  },
  cookieConsentCloseButton: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: "18px",
    color: "#333",
    cursor: "pointer",
    marginLeft: "10px",
  },
};

export default CookieConsent;

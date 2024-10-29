import React from "react";
import { useSelector } from "react-redux";
import "../../Assets/Css/Common/loader.css";

const Loader = () => {
    const { isLoading } = useSelector((state) => state.loading);
    const { loadingMessage } = useSelector((state) => state.auth);

  if (!isLoading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="spinner"></div>
        <p>{loadingMessage || "Yükleniyor..." }</p>
      </div>
    </div>
  );
};

export default Loader;

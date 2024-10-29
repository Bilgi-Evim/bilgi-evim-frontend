import React from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/authSlice";
const StudentDashboard = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      navigate("/home", { replace: true });
    });
  };
  return (
    <div>StudentDashboard
      <div>
        <button onClick={handleLogout}>Çıkış Yap</button>
      </div>
    </div>
  )
}

export default StudentDashboard
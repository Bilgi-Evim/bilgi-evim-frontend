import React from 'react';
import "../Assets/Css/Teacher/teacherLayout.css";
import TeacherSidebar from '../Components/Teacher/TeacherSidebar';
import TeacherNavbar from '../Components/Teacher/TeacherNavbar';

const TeacherLayout = ({ children }) => {
  return (
    <>
      <div className="teacher-layout d-flex">
        <TeacherSidebar />
        <div className="main-content">
          <TeacherNavbar />
          <main className="content-area">{children}</main>
        </div>
      </div>
    </>
  );
};

export default TeacherLayout;

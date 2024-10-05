import React from 'react';
import "../Assets/Css/Teacher/teacherLayout.css";
import TeacherSidebar from '../Components/Teacher/TeacherSidebar';

const TeacherLayout = ({ children }) => {
  return (
    <>
      <div className="teacher-layout d-flex">
        <TeacherSidebar />
        <main className="content-area">{children}</main>
      </div>
    </>
  );
};

export default TeacherLayout;

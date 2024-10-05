import React from "react";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import Hero from "../Components/Common/Hero";
import Services from "../Components/Common/Services";
import Courses from "../Components/Common/Courses";
import Instructors from "../Components/Common/Instructors";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Courses />
      <Instructors />
      <Footer />
    </div>
  );
};

export default Home;

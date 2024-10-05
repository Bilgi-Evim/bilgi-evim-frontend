import React from "react";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import Hero from "../Components/Common/Hero";
import Services from "../Components/Common/Services";
import Courses from "../Components/Common/Courses";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Courses />
      <Footer />
    </div>
  );
};

export default Home;

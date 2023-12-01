import React from "react";
import Hero from "../components/Hero";
import Works from "../components/Works";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import HireUs from "../components/HireUs";

const Home = () => {
  return (
    <div className="bg-[#010207] text-white">
      <Hero />
      <Works />
      <AboutUs />
      <HireUs />
      <Footer />
    </div>
  );
};

export default Home;

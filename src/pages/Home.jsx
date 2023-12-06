import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import HireUs from "../components/HireUs";

const Home = () => {
  return (
    <div className="bg-[#010207] text-white">
      <Hero />
      <Services />
      <AboutUs />
      <HireUs />
      <Footer />
    </div>
  );
};

export default Home;

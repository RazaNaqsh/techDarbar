import React from "react";
import Hero2 from "../components/Hero2";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import HireUs from "../components/HireUs";

const Home = () => {
  return (
    <div className="bg-[#100F0F] overflow-x-hidden text-white">
      <Hero2 />
      <Services />
      <AboutUs />
      <HireUs />
      <Footer />
    </div>
  );
};

export default Home;

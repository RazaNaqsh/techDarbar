import React from "react";
import Hero from "../components/Hero";
import Works from "../components/Works";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <div className="bg-[#010207] text-white">
      <Hero />
      <Works />
      <AboutUs />
    </div>
  );
};

export default Home;

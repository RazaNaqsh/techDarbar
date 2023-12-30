import React from "react";
import GalleryHero from "../components/GalleryHero";
import Footer from "../components/Footer";
import HireUs from "../components/HireUs";

const Gallery = () => {
  return (
    <div className="bg-[#100F0F] overflow-x-hidden">
      <GalleryHero />
      <HireUs />
      <Footer />
    </div>
  );
};

export default Gallery;

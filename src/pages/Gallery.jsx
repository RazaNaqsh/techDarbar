import React from "react";
import GalleryHero from "../components/GalleryHero";
import Footer from "../components/Footer";
import HireUs from "../components/HireUs";
import GalleryCards from "../components/GalleryCards";

const Gallery = () => {
  return (
    <div className="bg-[#100F0F] overflow-x-hidden">
      <GalleryHero />
      <GalleryCards />
      <HireUs />
      <Footer />
    </div>
  );
};

export default Gallery;

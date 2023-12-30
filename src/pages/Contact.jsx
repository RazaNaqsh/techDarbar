import React, { useEffect } from "react";
import ContactHero from "../components/ContactHero";
import ContactSteps from "../components/ContactSteps";
import Footer from "../components/Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#100F0F] overflow-x-hidden">
      <ContactHero />
      <ContactSteps />
      <Footer />
    </div>
  );
};

export default Contact;

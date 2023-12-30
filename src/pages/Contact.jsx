import React from "react";
import ContactHero from "../components/ContactHero";
import ContactSteps from "../components/ContactSteps";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="bg-[#100F0F] overflow-x-hidden">
      <ContactHero />
      <ContactSteps />
      <Footer />
    </div>
  );
};

export default Contact;

import { useEffect, useState } from "react";
import newlogo from "../assets/newlogo.png";
import burgerIcon from "../assets/burger.svg"; // Add a burger icon

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/dist";

const Navbar = () => {
  const pathname = useLocation();
  // const tabs = ["Home", "Student", "Startup", "Mentor", "Contact"];
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Track mobile menu state

  useEffect(() => {
    const pathname = location.pathname;
    const tabName = pathname.split("/")[1] || "home";
    setActiveTab(tabName);
  }, [location.pathname]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="z-[100] absolute  w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.3 }}
        className="z-10 w-[95%] mx-auto flex px-4 py-6 justify-between items-center"
      >
        <div>
          <h1 className="font-cinzel text-white text-[24px] sm:text-[30px]  big:text-[50px]">
            TECH DARBAR
          </h1>
          {/* <img className="w-[65px] md:w-[100px]" src={newlogo} alt="logo" /> */}
        </div>
        {/* Mobile menu burger icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={handleMobileMenuToggle}
        >
          <img src={burgerIcon} className="w-[20px]" alt="menu" />
        </div>
        <div className="hidden md:flex">
          {" "}
          {/* Displayed on desktop */}
          <ul className="font-cinzel flex text-[19px] md:gap-6 big:gap-24">
            <Link to="/" className="" onClick={() => handleTabClick("home")}>
              <li
                className={`cursor-pointer ${
                  activeTab === "home"
                    ? "text-white font-medium"
                    : "text-gray-200"
                }`}
              >
                Home
              </li>
            </Link>
            <Link
              to="/gallery"
              className=""
              onClick={() => handleTabClick("gallery")}
            >
              <li
                className={`cursor-pointer ${
                  activeTab === "gallery"
                    ? "text-white font-medium"
                    : "text-gray-200"
                }`}
              >
                Gallery
              </li>
            </Link>
            <Link
              to="/contact"
              className=""
              onClick={() => handleTabClick("contact")}
            >
              <li
                className={`cursor-pointer ${
                  activeTab === "contact"
                    ? "text-white font-medium"
                    : "text-gray-200"
                }`}
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        {/* Mobile menu options (hidden by default) */}
        {mobileMenuOpen && (
          <ul className="z-[200] bg-white flex flex-col rounded-[10px] px-10 mr-8 md:hidden text-[16px] font-cinzel gap-4 p-4 absolute right-0 top-16">
            <Link to="/">
              <li
                className={`cursor-pointer ${
                  activeTab === "home"
                    ? "text-[#4F0968] font-medium"
                    : "text-gray-800"
                }`}
                onClick={() => {
                  handleTabClick("home");
                  handleMobileMenuToggle();
                }}
              >
                Home
              </li>
            </Link>
            <Link to="/gallery">
              <li
                className={`cursor-pointer ${
                  activeTab === "gallery"
                    ? "text-[#4F0968] font-medium"
                    : "text-gray-800"
                }`}
                onClick={() => {
                  handleTabClick("gallery");
                  handleMobileMenuToggle();
                }}
              >
                Gallery
              </li>
            </Link>
            <Link to="/contact">
              <li
                className={`cursor-pointer ${
                  activeTab === "contact"
                    ? "text-[#4F0968] font-medium"
                    : "text-gray-800"
                }`}
                onClick={() => {
                  handleTabClick("contact");
                  handleMobileMenuToggle();
                }}
              >
                Contact
              </li>
            </Link>
          </ul>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;

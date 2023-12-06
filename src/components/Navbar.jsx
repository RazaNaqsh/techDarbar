import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
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
    <nav className="z-[100] bg-[#010207]  w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.3 }}
        className="z-10  w-[90%] mx-auto flex px-4 py-6 justify-between items-center"
      >
        <div>
          <img className="w-[65px] md:w-[100px]" src={logo} alt="logo" />
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
          <ul className="flex text-[19px] font-sans md:gap-6 big:gap-20">
            <Link to="/" className="" onClick={() => handleTabClick("home")}>
              <li
                className={`cursor-pointer ${
                  activeTab === "home"
                    ? "text-white font-medium"
                    : "text-gray-300"
                }`}
              >
                Home
              </li>
            </Link>
            <Link
              to="/about"
              className=""
              onClick={() => handleTabClick("about")}
            >
              <li
                className={`cursor-pointer ${
                  activeTab === "about"
                    ? "text-white font-medium"
                    : "text-gray-300"
                }`}
              >
                About
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
                    : "text-gray-300"
                }`}
              >
                Gallery
              </li>
            </Link>

            <Link
              to="/career"
              className=""
              onClick={() => handleTabClick("career")}
            >
              <li
                className={`cursor-pointer ${
                  activeTab === "career"
                    ? "text-white font-medium"
                    : "text-gray-300"
                }`}
              >
                Career
              </li>
            </Link>
          </ul>
        </div>
        {/* Mobile menu options (hidden by default) */}
        {mobileMenuOpen && (
          <ul className="bg-white flex flex-col rounded-[10px] px-10 mr-8 md:hidden text-[19px] font-sans gap-4 p-4 absolute right-0 top-16">
            <Link to="/">
              <li
                className={`cursor-pointer ${
                  activeTab === "home"
                    ? "text-[#4F0968] font-medium"
                    : "text-gray-300"
                }`}
                onClick={() => {
                  handleTabClick("home");
                  handleMobileMenuToggle();
                }}
              >
                Home
              </li>
            </Link>
            <Link to="/about">
              <li
                className={`cursor-pointer ${
                  activeTab === "about"
                    ? "text-[#4F0968] font-medium"
                    : "text-gray-300"
                }`}
                onClick={() => {
                  handleTabClick("about");
                  handleMobileMenuToggle();
                }}
              >
                About
              </li>
            </Link>
            <Link to="/gallery">
              <li
                className={`cursor-pointer ${
                  activeTab === "gallery"
                    ? "text-[#4F0968] font-medium"
                    : "text-gray-300"
                }`}
                onClick={() => {
                  handleTabClick("gallery");
                  handleMobileMenuToggle();
                }}
              >
                Gallery
              </li>
            </Link>
            <Link to="/career">
              <li
                className={`cursor-pointer ${
                  activeTab === "career"
                    ? "text-[#4F0968] font-medium"
                    : "text-gray-300"
                }`}
                onClick={() => {
                  handleTabClick("career");
                  handleMobileMenuToggle();
                }}
              >
                Career
              </li>
            </Link>
          </ul>
        )}
        <div className="hidden md:block">
          <button className="bg-[#4F0968] border-[1px] border-white text-white rounded-[5px] font-sans w-[146px] h-[41px] text-[18px] shadow-black shadow-sm">
            Contact Us
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

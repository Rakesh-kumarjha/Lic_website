import React, { useState, useEffect } from "react";
import Img from "../Images/liclogo.jpg";
import { Link } from "react-router-dom";
import {FaFacebook,FaInstagram, FaTwitterSquare, FaLinkedin, FaPinterestSquare} from "react-icons/fa"
import "../App.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isCityAgentCareerOpen, setIsCityAgentCareerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

 

  // const toggleDropdown = () => {
  //   setIsAboutUsOpen(false);
  //   setIsCityAgentCareerOpen(false);
  // };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const handleLinkClick = () => {
   
    window.scrollTo(0, 0);
    setNavbar(false);
    setIsAboutUsOpen(false);
    setIsCityAgentCareerOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
     
    };
  }, []);


  // const handleTopBtnClick = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const handleAboutUsDropdownClick = () => {
    setIsAboutUsOpen(!isAboutUsOpen);
    setIsCityAgentCareerOpen(false);
   
  };

  const handleCityAgentCareerDropdownClick = () => {
    setIsCityAgentCareerOpen(!isCityAgentCareerOpen);
    setIsAboutUsOpen(false);
   
  
  };

  return (
    <div className={`nav-bar ${isSticky ? "sticky" : ""}`}>
      <nav className="w-full bg--500 shadow pt-3 pb-3">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-left md:flex md:px-8 bg-white">
        <div>
          <div className="flex items-center justify-between py-1 md:py-5 md:block" >
            <Link to="/">
            <h2 className="text-2xl font-bold text-black">
            <img src={Img} alt="Logo" className="w-10 h-10" />
          </h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
        <div
            className={`   pb- mt-0 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-left space-y-2 md:flex md:space-x-6 md:space-y-0 itemss">
              <Link
                to="/"
                className="text-black hover:text-indigo-200 no-underline"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                to="/Benefits"
                className="text-black hover:text-indigo-200 no-underline"
                onClick={handleLinkClick}
              >
                Benefits
              </Link>
                <div className="relative z-index: 1">
                <button
                  onClick={handleAboutUsDropdownClick}
                  className="bg-blue-500 text-black py-2  bg-white rounded focus:outline-none"
                >
                  About Us
                </button>
                {isAboutUsOpen && (
                  <div className="absolute top-10 center-0 bg-white border border-gray-300 rounded py-1 shadow-lg z-index: 1"  z-index='1'>
                    <p className="px-3 py-1 w-60 "> 
                      <Link
                        to="/Aboutus"
                        className="text-black hover:text-indigo-200 no-underline "
                        onClick={handleLinkClick}
                      >
                        About Us
                      </Link>
                    </p>
                    <p className="px-3 py-1 w-auto">
                      <Link
                        to="/Policy"
                        className="text-black hover:text-indigo-200 no-underline"
                        onClick={handleLinkClick}
                      >
                        Privacy and Policy
                      </Link>
                    </p>
                    <p className="px-3 py-1 w-auto">
                      <Link
                        to="/Term"
                        className="text-black hover:text-indigo-200 no-underline"
                        onClick={handleLinkClick}
                      >
                        Terms and Conditions
                      </Link>
                    </p>
                  </div>
                )}
              </div>
              <Link
                to="/Apply_Online"
                className="text-black hover:text-indigo-200 no-underline"
                onClick={handleLinkClick}
              >
                Apply Online
              </Link>
              <Link to="/Procedure" className="text-black hover:text-indigo-200 no-underline" onClick={handleLinkClick}>
                Procedure
              </Link>
              <Link to="/Achievers" className="text-black hover:text-indigo-200 no-underline" onClick={handleLinkClick}>
                Achievers
              </Link>
              

            

              <Link
                to="/Contactus"
                className="text-black hover:text-indigo-200 no-underline"
                onClick={handleLinkClick}
              >
                Contact US
              </Link>

           <div className="relative z-index: 1">
  <button
    onClick={handleCityAgentCareerDropdownClick}
    className="bg-blue-500 text-black py-2  bg-white rounded focus:outline-none"
  >
    City Agent Career
  </button>
  {isCityAgentCareerOpen && (
    <div className="absolute top-10 center-0 bg-white border border-gray-300 border-2 rounded py-2 shadow-lg">
      <p className="px-3 py-1 w-auto">
        <Link
          to="/Cityagent"
          className="text-black hover:text-indigo-200 no-underline"
          onClick={handleLinkClick}
        >
          City Agent Career
        </Link>
      </p>
      <p className="px-3 py-1 w-60">
        <Link
          to="/Licagent"
          className="text-black hover:text-indigo-200 no-underline"
          onClick={handleLinkClick}
        >
          LIC agent in Bangalore
        </Link>
      </p>
      <p className="px-3 py-1 w-auto">
        <Link
          to="/Who"
          className="text-black hover:text-indigo-200 no-underline"
          onClick={handleLinkClick}
        >
          Who can become Lic agent in Bangalore
        </Link>
      </p>
                    
                    <p className="px-3 py-1 w-auto">
                      <Link
                        to="/FreePension"
                        className="text-black hover:text-indigo-200 no-underline"
                        onClick={handleLinkClick}
                      >
                        Lic agency as Free Pension
                      </Link>
                    </p>
                    <p className="px-3 py-1 w-auto">
                      <Link
                        to="/Milestone"
                        className="text-black hover:text-indigo-200 no-underline"
                        onClick={handleLinkClick}
                      >
                        Lic Milestone agents
                      </Link>
                    </p>
                    <p className="px-3 py-1 w-auto">
                      <Link
                        to="/Working"
                        className="text-black hover:text-indigo-200 no-underline"
                        onClick={handleLinkClick}
                      >
                        Lic agent work mechanism
                      </Link>
                    </p>
                    <p className="px-3 py-1 w-auto">
                      <Link
                        to="/How"
                        className="text-black hover:text-indigo-200 no-underline"
                        onClick={handleLinkClick}
                      >
                       How to became LIC agent in Bangalore
                      </Link>
                    </p>
                  </div>
                )}
              </div>
              
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
        <Link to="https://www.instagram.com/darshan_prime_agency/" className="text-red-600 hover:text-blue-800 hidden md:inline-block" target="_blank">
          <FaInstagram className="text-2xl" />
        </Link>
        <Link to="https://www.facebook.com/profile.php?id=100095363170301" className="text-blue-500 hover:text-blue-600 hidden md:inline-block" target="_blank">
          <FaFacebook className="text-2xl" />
        </Link>
        <Link to="https://twitter.com/Darshan_Prime" className="text-blue-400 hover:text-blue-500 hidden md:inline-block" target="_blank">
          <FaTwitterSquare className="text-2xl" />
        </Link>
        <Link to="https://www.linkedin.com/company/98424029/admin/feed/posts/" className="text-blue hover:text-blue-500 hidden md:inline-block" target="_blank">
          <FaLinkedin className="text-2xl" />
        </Link>
        <Link to="https://in.pinterest.com/Darshan_Prime_Agency/" className="text-red-600 hover:text-blue-500 hidden md:inline-block" target="_blank">
          <FaPinterestSquare className="text-2xl" />
        </Link>
        
      </div>
      </div>
        
      </nav>
      </div>
 
  
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-scroll";
import betsaleelLogo from "../assets/images/betsaleellogo.png"; // Adjust the path if necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="p-4 fixed top-0 w-full z-10 transition-all duration-300 ease-in-out shadow-lg bg-gradient-to-r from-[#0A1128] to-[#1E3A8A]"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <img
            src={betsaleelLogo}
            alt="BetSaleel Logo"
            className="h-8 md:h-12 transition-all duration-300 ease-in-out hover:scale-105"
          />
        </Link>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navbar Links (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-[white] hover:text-[#FCD34D] transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-[white] hover:text-[#FCD34D] transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110 cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="text-white hover:text-[#FCD34D] transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110 cursor-pointer"
          >
            Our Services
          </Link>
          <Link
            to="tours"
            smooth={true}
            duration={500}
            className="text-[white] hover:text-[#FCD34D] transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110 cursor-pointer"
          >
            Tours
          </Link>
          <Link
            to="book"
            smooth={true}
            duration={500}
            className="text-white hover:text-[#FCD34D] transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110 cursor-pointer"
          >
            Book Now
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden p-4 bg-gradient-to-r from-[#0A1128] to-[#1E3A8A]">
          <ul className="space-y-2">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="block text-white hover:text-[#FCD34D] transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="block text-white hover:text-[#FCD34D] transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110 cursor-pointer"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="block text-white hover:text-[#FCD34D] transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110 cursor-pointer"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="tours"
                smooth={true}
                duration={500}
                className="block text-white hover:text-[#FCD34D] transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110 cursor-pointer"
              >
                Tours
              </Link>
            </li>
            <li>
              <Link
                to="book"
                smooth={true}
                duration={500}
                className="block text-white hover:text-[#FCD34D] transition-all duration-300 ease-in-out text-lg font-semibold transform hover:scale-110 cursor-pointer"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

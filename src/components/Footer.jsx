import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0A1128] to-[#1E3A8A] text-white py-12">
      <div className="container mx-auto px-4 flex flex-col space-y-8 md:flex-row md:justify-between md:items-start md:space-y-0 ">
        
        {/* Contact Info */}
        <div className="text-start md:text-left md:mb-0 ">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-3">BetSaleel Tours</h2>
          <p className="text-sm md:text-base mb-3">Location: Cape Town, South Africa</p>
          <p className="text-sm md:text-base mb-3">
            Email: <a href="mailto:betsaleeltour@gmail.com" className="text-teal-300 hover:text-teal-400 transition duration-300">betsaleeltour@gmail.com</a>
          </p>
          <p className="text-sm md:text-base">
            Phone: <span className="text-teal-300">+27 78 189 3637</span> 
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-start md:justify-start sm:justify-start space-x-6 text-gray-400 text-lg mt-6 md:mt-0">
          <a href="https://www.facebook.com/profile.php?id=61569025084683&is_tour_dismissed" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300">
            <FaFacebook size={28} />
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300">
            <FaTwitter size={28} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300">
            <FaInstagram size={28} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300">
            <FaLinkedin size={28} />
          </a> */}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-xs md:text-sm border-t border-gray-700 pt-4">
        &copy; 2024 BetSaleel Tours. All rights reserved.
      </div>

      {/* Created by Ninja Design Pro */}
      <div className="text-center text-xs mt-4 text-gray-400">
        <p>Created by <a href="https://ninjatechdesign.netlify.app" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">Ninja Design Pro</a></p>
      </div>

      {/* WhatsApp Chat Link */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/+27781893637" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-white p-3 rounded-full shadow-lg transform transition duration-300 hover:scale-110"
        >
          <FaWhatsapp size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

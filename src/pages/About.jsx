import React from 'react';
import capetown from '../assets/images/capetown.png'; // Update path if necessary

const About = () => {
  return (
    <div
      id="about"
      className="relative p-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100 rounded-3xl shadow-xl overflow-hidden"
    >
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-indigo-900 tracking-wide mb-4">
          About Us
        </h1>

        {/* Decorative Accent Underline */}
        <div className="flex justify-center">
          <span className="w-28 h-1 bg-yellow-500 rounded-full"></span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        {/* Image */}
        <div className="md:w-1/2 mb-8 md:mb-0 relative overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-105">
          <img
            src={capetown}
            alt="Explore Cape Town with BestSaleel Tours"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 rounded-2xl"></div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-semibold text-indigo-900 mb-4">
            Experience Cape Town Like Never Before
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At <span className="font-bold text-indigo-600">BestSaleel Tours</span>, we go beyond transportation to create unforgettable touring experiences. Our team knows Cape Town inside-out, helping you uncover both iconic landmarks and hidden gems.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            From the towering heights of Table Mountain to the bustling V&A Waterfront, our personalized tours cater to solo travelers, couples, and families alike.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Prioritizing your comfort and safety, we bring you closer to Cape Town’s vibrant culture with expertly crafted itineraries. Let us guide you on a journey you'll cherish forever!
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default About;

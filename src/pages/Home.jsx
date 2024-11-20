import React from 'react';
import capetown1 from '../assets/images/capetown1.png'; // Replace with your desired image

const Home = () => {
  return (
    <div id="home"className="min-h-screen bg-white flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8 max-w-7xl mx-auto">
        
        {/* Content on the Left */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-700 mb-6">
            Welcome to BetSaleel Tours!
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8">
            Embark on an unforgettable adventure through the heart of Cape Town. Explore breathtaking landscapes, vibrant city life, and hidden gems with our expert guides. Every moment is an adventure waiting to be discovered.
          </p>
          <div className="mt-4">
            <a
              href="#tours"
              className="bg-yellow-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300 ease-in-out"
            >
              Book a Tour
            </a>
          </div>
        </div>
        
        {/* Image on the Right */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={capetown1}
            alt="Cape Town"
            className="w-full h-auto rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

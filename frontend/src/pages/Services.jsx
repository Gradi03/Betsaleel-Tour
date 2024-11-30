import React from 'react';
import { FaBus, FaRoute, FaHotel, FaMapMarkedAlt, FaConciergeBell, FaClock } from 'react-icons/fa';

const Services = () => {
  return (
    <div id="services" className="p-12 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl shadow-xl">
      {/* Metadata for SEO */}
      <meta
        name="description"
        content="Discover premium services by BestSaleel Tours, including sightseeing tours, airport transfers, custom travel routes, accommodation assistance, concierge services, and hourly rentals. Explore Cape Town with ease and comfort."
      />
      <meta
        name="keywords"
        content="Cape Town tours, sightseeing tours, airport transfers, custom travel routes, accommodation services, concierge Cape Town, hourly rentals, BestSaleel Tours services, transportation Cape Town"
      />

      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-indigo-900 tracking-wide mb-4">
          Our Services
        </h1>
        <div className="flex justify-center mb-8">
          <span className="w-28 h-1 bg-yellow-500 rounded-full"></span>
        </div>
        <p className="text-lg text-gray-700">
          Discover the range of services we offer to make your Cape Town experience unforgettable.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sightseeing Tours */}
        <div className="p-6 bg-white rounded-2xl shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
          <FaMapMarkedAlt className="text-5xl text-indigo-600 mx-auto mb-4" aria-label="Sightseeing Tours Icon" />
          <h3 className="text-2xl font-semibold text-indigo-800 mb-3">Sightseeing Tours</h3>
          <p className="text-gray-700">
            Explore Cape Town's famous landmarks and scenic spots with our expert guides. Perfect for all types of travelers.
          </p>
        </div>

        {/* Airport Transfers */}
        <div className="p-6 bg-white rounded-2xl shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
          <FaBus className="text-5xl text-indigo-600 mx-auto mb-4" aria-label="Airport Transfers Icon" />
          <h3 className="text-2xl font-semibold text-indigo-800 mb-3">Airport Transfers</h3>
          <p className="text-gray-700">
            Seamless and comfortable airport pickups and drop-offs, ensuring a stress-free start and end to your journey.
          </p>
        </div>

        {/* Custom Routes */}
        <div className="p-6 bg-white rounded-2xl shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
          <FaRoute className="text-5xl text-indigo-600 mx-auto mb-4" aria-label="Custom Routes Icon" />
          <h3 className="text-2xl font-semibold text-indigo-800 mb-3">Custom Routes</h3>
          <p className="text-gray-700">
            Design your own itinerary and visit destinations at your own pace. We help you personalize every journey.
          </p>
        </div>

        {/* Accommodation Assistance */}
        <div className="p-6 bg-white rounded-2xl shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
          <FaHotel className="text-5xl text-indigo-600 mx-auto mb-4" aria-label="Accommodation Assistance Icon" />
          <h3 className="text-2xl font-semibold text-indigo-800 mb-3">Accommodation Assistance</h3>
          <p className="text-gray-700">
            Partnered with top hotels, we assist in finding the best accommodations to suit your needs and budget.
          </p>
        </div>

        {/* Concierge Services */}
        <div className="p-6 bg-white rounded-2xl shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
          <FaConciergeBell className="text-5xl text-indigo-600 mx-auto mb-4" aria-label="Concierge Services Icon" />
          <h3 className="text-2xl font-semibold text-indigo-800 mb-3">Concierge Services</h3>
          <p className="text-gray-700">
            From dining reservations to exclusive experiences, let us handle the details so you can relax and enjoy.
          </p>
        </div>

        {/* Hourly Rentals */}
        <div className="p-6 bg-white rounded-2xl shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
          <FaClock className="text-5xl text-indigo-600 mx-auto mb-4" aria-label="Hourly Rentals Icon" />
          <h3 className="text-2xl font-semibold text-indigo-800 mb-3">Hourly Rentals</h3>
          <p className="text-gray-700">
            Flexible hourly vehicle rentals with a driver, ideal for business trips, meetings, and casual city tours.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Services;

import React from 'react';
import { Helmet } from 'react-helmet';
import capetown from '../assets/images/capetown.jpg'; // Update path if necessary

const About = () => {
  return (
    <div
      id="about"
      className="relative p-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100 rounded-3xl shadow-xl overflow-hidden"
    >
      {/* SEO Metadata */}
      <Helmet>
        <title>About Us | BestSaleel Tours - Explore Cape Town</title>
        <meta
          name="description"
          content="Discover the vibrant culture and iconic landmarks of Cape Town with BestSaleel Tours. Experience personalized journeys tailored to your comfort and preferences."
        />
        <meta
          name="keywords"
          content="BestSaleel Tours, Cape Town tours, transportation in Cape Town, Table Mountain, V&A Waterfront, personalized tours, Cape Town travel guide, Cape Town travel, South Africa tours, Cape Town attractions, private tours in Cape Town, group tours Cape Town, Cape Town sightseeing, Cape Town shuttle services, cultural tours Cape Town, Cape Town day trips, Cape Town travel packages, affordable Cape Town tours"

        />
        <meta name="author" content="BestSaleel Tours" />
        <meta property="og:title" content="About Us | BestSaleel Tours" />
        <meta
          property="og:description"
          content="Explore Cape Town's hidden gems and iconic landmarks with our tailored tours. Experience the culture and beauty of South Africa like never before."
        />
        <meta property="og:image" content={capetown} />
        <meta property="og:url" content="https://www.bestsaleel.vercel.app/" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Content */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-indigo-900 tracking-wide mb-4">
          About Us
        </h1>
        <div className="flex justify-center">
          <span className="w-28 h-1 bg-yellow-500 rounded-full"></span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
        {/* Image */}
        <div className="lg:w-2/5 mb-8 lg:mb-0 relative overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-105">
          <img
            src={capetown}
            alt="Explore Cape Town with BestSaleel Tours"
            className="w-full h-full object-cover rounded-2xl lg:max-h-[350px] xl:max-h-[400px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 rounded-2xl"></div>
        </div>

        {/* Text Content */}
        <div className="lg:w-3/5 text-left">
          <h2 className="text-3xl lg:text-4xl font-semibold text-indigo-900 mb-6">
            Experience Cape Town Like Never Before
          </h2>
          <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-6">
            At <span className="font-bold text-indigo-600">BestSaleel Tours</span>, we go beyond transportation to create unforgettable touring experiences. Our team knows Cape Town inside-out, helping you uncover both iconic landmarks and hidden gems.
          </p>
          <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-6">
            From the towering heights of Table Mountain to the bustling V&A Waterfront, our personalized tours cater to solo travelers, couples, and families alike.
          </p>
          <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
            Prioritizing your comfort and safety, we bring you closer to Cape Town’s vibrant culture with expertly crafted itineraries. Let us guide you on a journey you'll cherish forever!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

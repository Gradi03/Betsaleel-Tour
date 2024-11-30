import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; // Import react-helmet
import TourCard from '../components/TourCard';
import BookingForm from '../components/BookingForm';

// Import images
import capetown from '../assets/images/capetown.jpg'; 
import capepoint from '../assets/images/capepoint.jpg'; 
import airport from '../assets/images/airport.jpg'; 
import hotel from '../assets/images/hotel.jpg'; 
import aquiri from '../assets/images/aquiri.jpg'; 
import garden from '../assets/images/garden.jpg'; 
import waterfront from '../assets/images/waterfront.jpg'; 
import table from '../assets/images/table.png'; 
import mall from '../assets/images/mall.jpg'; 
import winelands from '../assets/images/winelands.png'; 

const tours = [
  {
    title: 'Cape Town Hotel Transportation Tour',
    description: 'Enjoy a seamless, comfortable journey to luxurious hotels with breathtaking Cape Town views.',
    image: hotel,
  },
  {
    title: 'Cape Point Transportation Tour',
    description: 'Travel comfortably to Cape Point and immerse yourself in its stunning landscapes and scenic views.',
    image: capepoint,
  },
  {
    title: 'Aquila Safari Transportation Tour',
    description: 'Enjoy a comfortable journey to Aquila Game Reserve for an unforgettable safari experience.',
    image: aquiri,
  },
  {
    title: 'Garden Route Day Transportation Tour',
    description: 'Relax on a scenic drive along the Garden Route, with stops to explore forests, lagoons, and charming coastal towns.',
    image: garden,
  },
  {
    title: 'Victoria & Alfred Waterfront Transport',
    description: 'Get a ride to the lively V&A Waterfront, with access to shops, dining, and views of Table Mountain.',
    image: waterfront,
  },
  {
    title: 'Table Mountain Transportation Tour',
    description: 'Travel comfortably to Table Mountain, where you can explore iconic views and natural beauty.',
    image: table,
  },
  {
    title: 'Airport Transfer',
    description: 'Reliable and comfortable transfer to and from the airport, ensuring a smooth start or end to your trip.',
    image: airport,
  },
  {
    title: 'Mall Transfer',
    description: 'Convenient transportation to nearby malls for shopping and leisure time.',
    image: mall,
  },
  {
    title: 'Cape Town City Transportation Tour',
    description: 'Experience Cape Town’s vibrant culture and history with convenient transportation throughout the city’s main highlights.',
    image: capetown,
  },
  {
    title: 'Winelands Transportation Tour',
    description: 'Experience the scenic Cape Winelands with stops at renowned wineries for tasting and tours.',
    image: winelands,
  },
];

const Tours = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const handleBookNow = (tour) => {
    setSelectedTour(tour);
    setShowBookingForm(true);
  };

  const handleBack = () => {
    setShowBookingForm(false);
    setSelectedTour(null);
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Explore a range of personalized Cape Town tours, from scenic drives to safari adventures. Book comfortable transportation to top destinations like Table Mountain, V&A Waterfront, and more."
        />
        <meta
          name="keywords"
          content="Cape Town tours, transportation services Cape Town, Table Mountain tour, Cape Point tour, Garden Route tour, Victoria Alfred Waterfront, safari tours, Aquila Safari, Cape Winelands tour, Cape Town city tour"
        />
        <meta name="robots" content="index, follow" />
        <title>Cape Town Tours - Explore with BestSaleel Tours</title>
      </Helmet>
      <div id="tours" className="p-4 bg-gray-100">
        {showBookingForm ? (
          <div>
            <button
              onClick={handleBack}
              className="mb-4 text-blue-600 underline hover:text-blue-800"
            >
              Back to Tours
            </button>
            <h1 className="text-2xl font-bold text-center mb-4">{selectedTour.title}</h1>
            <BookingForm />
          </div>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">Our Tours</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour, index) => (
                <TourCard key={index} tour={tour} onBookNow={() => handleBookNow(tour)} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Tours;

import React, { useState } from 'react';
import TourCard from '../components/TourCard';
import BookingForm from '../components/BookingForm';

// Import images
import capetown from '../assets/images/capetown.png'; 
import capePoint from '../assets/images/capePoint.png'; 
import airport from '../assets/images/airport.png'; 
import Hotel from '../assets/images/hotel.png'; 
import aquiri from '../assets/images/aquiri.png'; 
import garden from '../assets/images/garden.png'; 
import va from '../assets/images/va.png'; 
import table from '../assets/images/table.png'; 
import Mall from '../assets/images/Mall.png'; 
import winelands from '../assets/images/winelands.png'; 

const tours = [
  {
    title: 'Cape Town Hotel Transportation Tour',
    description: 'Enjoy a seamless, comfortable journey to luxurious hotels with breathtaking Cape Town views.',
    image: Hotel,
  },
  {
    title: 'Cape Point Transportation Tour',
    description: 'Travel comfortably to Cape Point and immerse yourself in its stunning landscapes and scenic views.',
    image: capePoint,
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
    image: va,
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
    image: Mall,
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
  );
};

export default Tours;

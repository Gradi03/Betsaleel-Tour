import React from 'react';

const TourCard = ({ tour, onBookNow }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{tour.title}</h2>
        <p className="text-gray-600 my-2">{tour.description}</p>
        <button
          onClick={onBookNow}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TourCard;

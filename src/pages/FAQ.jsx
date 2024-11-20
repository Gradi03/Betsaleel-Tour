import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which FAQ is open

  // Sample FAQs
  const faqs = [
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your booking up to 24 hours in advance for a full refund. After that, no refund will be provided."
    },
    {
      question: "How do I book a tour?",
      answer: "Simply fill out the booking form on our website, and you will receive a confirmation email once your booking is confirmed."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards and PayPal. You can pay securely through our online payment portal."
    },
    {
      question: "Can I modify my booking after it’s confirmed?",
      answer: "Yes, you can modify your booking by contacting us at least 48 hours before your tour date."
    },
    {
      question: "Are meals included during the tour?",
      answer: "Meals are included in some of our tours, but not all. Please check the details of your tour when booking."
    },
  ];

  // Toggle answer visibility
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-6">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left text-indigo-700 font-semibold text-lg py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-indigo-100 flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <span className="ml-2">
                {openIndex === index ? '-' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-2 p-4 bg-indigo-50 text-gray-800 rounded-lg">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

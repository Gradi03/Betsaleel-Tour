import React, { useState } from 'react';
import Swal from 'sweetalert2';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    passengers: '',
    requests: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

// updates the formData state when the user types something in the form fields

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation function
  //  checks the formData state for any validation errors and returns an object with error messages
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.phone) newErrors.phone = 'Phone number is required.';
    if (!formData.date) newErrors.date = 'Date is required.';
    if (!formData.passengers) newErrors.passengers = 'Number of passengers is required.';
    return newErrors;
  };

  // Handle form submission
  // sends a POST request to an API endpoint, and displays a success or error message using the Swal library
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('date', formData.date);
    form.append('passengers', formData.passengers);
    form.append('requests', formData.requests);
    form.append('access_key', '43bbe8ef-4a02-44ee-b195-cbfdfcf4cbd8');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form,
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: 'Success!',
          text: 'Your booking has been submitted successfully.',
          icon: 'success',
          confirmButtonText: 'Ok',
        });

        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          passengers: '',
          requests: '',
        });
        setErrors({});
      } else {
        Swal.fire({
          title: 'Error!',
          text: result.message,
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
      }
    } catch {
      Swal.fire({
        title: 'Error!',
        text: 'There was an issue with the submission. Please try again later.',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='book' className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">Book Your Tour</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.name ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-indigo-500'
            }`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-indigo-500'
            }`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.phone ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-indigo-500'
            }`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Date of Tour</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.date ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-indigo-500'
            }`}
          />
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="passengers" className="block text-gray-700 font-medium mb-2">Number of Passengers</label>
          <input
            type="number"
            id="passengers"
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.passengers ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-indigo-500'
            }`}
            placeholder="Enter number of passengers"
          />
          {errors.passengers && <p className="text-red-500 text-sm mt-1">{errors.passengers}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="requests" className="block text-gray-700 font-medium mb-2">Special Requests</label>
          <textarea
            id="requests"
            name="requests"
            value={formData.requests}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter any special requests"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-200"
        >
          {loading ? 'Submitting...' : 'Book Now'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

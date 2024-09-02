// src/components/TestimonialsSection.jsx

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Gym from '../assets/gym1.jpg'

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'Energym has completely transformed my fitness journey. The trainers are amazing!',
    image: `${Gym}`, // Replace with actual image URL
  },
  {
    name: 'Jane Smith',
    feedback: 'I love the personalized nutrition plans. They really work for me!',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    name: 'Mike Johnson',
    feedback: 'The facilities are top-notch. I enjoy every workout session here.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-gray-800 py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          What Our Customers Say
        </h2>
        <div className="relative">
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 absolute left-0 top-1/2 transform -translate-y-1/2">
              <button
                onClick={handlePrev}
                className="bg-gray-700 p-3 rounded-full text-white hover:bg-gray-600 transition-colors"
              >
                <FaChevronLeft />
              </button>
            </div>
            <div className="bg-gray-700 rounded-lg shadow-lg p-8 text-center mx-8">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold text-white mb-2">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-300">{testimonials[currentIndex].feedback}</p>
            </div>
            <div className="w-12 h-12 absolute right-0 top-1/2 transform -translate-y-1/2">
              <button
                onClick={handleNext}
                className="bg-gray-700 p-3 rounded-full text-white hover:bg-gray-600 transition-colors"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import Energym from '../assets/About.jpg';

const AboutEnergym = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <img
              src={Energym}
              alt="Energym Facility"
              className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
              Transform Your Body & Mind
            </h2>
            <p className="text-base lg:text-lg text-gray-600 mb-8">
              Discover the ultimate fitness destination with Energym. Our modern facilities, expert trainers, and personalized programs are designed to help you achieve your health and fitness goals.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="#"
                className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm lg:text-base font-medium py-3 px-5 rounded-lg transition-colors duration-300"
              >
                Join Us Now
                <FaDumbbell className="ml-2" />
              </a>
              <a
                href="#"
                className="inline-flex items-center bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white text-sm lg:text-base font-medium py-3 px-5 rounded-lg transition-colors duration-300"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEnergym;

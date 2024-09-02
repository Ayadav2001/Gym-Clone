import React from 'react';
import h1 from '../assets/image.png';
import backgroundImage from '../assets/image.png'; // Import your background image

const About = () => {
  return (
    <div 
      className="bg-gray-900 text-white py-16 px-8 md:px-16"
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="bg-black bg-opacity-70 py-16 px-8 rounded-lg shadow-lg max-w-7xl mx-auto flex flex-col items-center md:flex-row md:items-start">
        <div className="w-full md:w-1/2 relative mb-8 md:mb-0">
          <img 
            src={h1} 
            alt="Person exercising" 
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 rounded-lg"></div>
        </div>
        <div className="w-full md:w-1/2 md:pl-16">
          <h2 className="text-white font-bold text-center text-xl sm:text-5xl lg:text-6xl mb-8 hover:text-red-800 hover:translate-y-[-2px] transition-transform duration-300 ease-in-out">Empower Your Potential</h2>
          <p className="text-lg mb-6">
            At Energym, we are dedicated to helping you reach your full potential with a holistic approach to fitness and wellness. Our state-of-the-art facilities, experienced trainers, and personalized programs are designed to support your goals and transform your life.
          </p>
          <a 
            href="#" 
            className="inline-block px-6 py-3 bg-orange-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Discover More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
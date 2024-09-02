import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Gym1 from '../assets/gym1.jpg';
import Gym2 from '../assets/gym2.jpg';
import Gym3 from '../assets/gym3.jpg';
import AboutEnergym from './AboutEnergym';
import OurServices from './OurService';
import FeaturesSection from './FeaturesSection';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Achieve Your Dream Body',
      subtitle: 'Train Smart, Live Healthy',
      description: 'Join our fitness program to achieve the best version of yourself.',
      button1: 'Explore Programs',
      button2: 'Contact Us',
      image: `${Gym1}`
    },
    {
      id: 2,
      title: 'Push Beyond Limits',
      subtitle: 'Stronger Everyday',
      description: 'Embrace the challenge and transform your body and mind.',
      button1: 'Join Now',
      button2: 'Learn More',
      image: `${Gym2}`
    },
    {
      id: 3,
      title: 'Fitness for Everyone',
      subtitle: 'Start Your Journey',
      description: 'Our programs are tailored to fit all fitness levels and goals.',
      button1: 'Get Started',
      button2: 'Find Out More',
      image: `${Gym3}`
    }
  ];

  // Automatic slide transition effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div>
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-center text-white p-6 md:p-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
            <h3 className="text-2xl md:text-4xl mb-6">{slide.subtitle}</h3>
            <p className="max-w-lg mx-auto mb-8">{slide.description}</p>
            <div className="flex space-x-4">
              <button className="bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded-full">{slide.button1}</button>
              <button className="bg-white hover:bg-gray-100 text-teal-500 py-2 px-4 rounded-full">{slide.button2}</button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-gray-900 p-3 rounded-full">
        <FaArrowLeft className="text-white" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-gray-900 p-3 rounded-full">
        <FaArrowRight className="text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-teal-500' : 'bg-gray-500'}`}
          ></button>
        ))}
      </div>
    </div>
    <AboutEnergym/>
    <OurServices/>
    <FeaturesSection/>
    </div>
  );
};

export default Banner;

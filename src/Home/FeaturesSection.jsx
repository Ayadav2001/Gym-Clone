// src/components/FeaturesSection.jsx

import React from 'react';
import { FaDumbbell, FaLeaf, FaShower, FaPuzzlePiece } from 'react-icons/fa';

const features = [
  {
    icon: <FaDumbbell size={40} />,
    title: 'State-of-the-Art Equipment',
    description: 'Access the latest and most advanced fitness equipment designed to meet all your workout needs.',
  },
  {
    icon: <FaLeaf size={40} />,
    title: 'Personalized Nutrition Plans',
    description: 'Get custom nutrition plans tailored specifically to your health and fitness goals.',
  },
  {
    icon: <FaShower size={40} />,
    title: 'Convenient Shower Facilities',
    description: 'Enjoy clean and well-maintained shower facilities after your workout sessions.',
  },
  {
    icon: <FaPuzzlePiece size={40} />,
    title: 'Tailored to Your Goals',
    description: 'Experience personalized programs designed to help you achieve your unique fitness goals.',
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex items-center transition-transform transform hover:scale-105"
            >
              <div className="text-teal-500 mr-4">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

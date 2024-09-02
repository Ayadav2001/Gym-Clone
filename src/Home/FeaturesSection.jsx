// src/components/FeaturesSection.jsx

import React from 'react';
import { FaDumbbell, FaLeaf, FaShower, FaPuzzlePiece } from 'react-icons/fa';

const features = [
  {
    icon: <FaDumbbell size={30} />,
    title: 'Premium Fitness Gear',
    description: 'Elevate your workouts with cutting-edge fitness equipment for all levels.',
  },
  {
    icon: <FaLeaf size={30} />,
    title: 'Expert Nutrition Advice',
    description: 'Follow bespoke nutrition plans tailored to optimize your health and wellness.',
  },
  {
    icon: <FaShower size={30} />,
    title: 'Luxury Showers',
    description: 'Refresh post-workout in our clean and luxurious shower facilities.',
  },
  {
    icon: <FaPuzzlePiece size={30} />,
    title: 'Custom Fitness Programs',
    description: 'Achieve your goals with programs tailored specifically for you.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12">
          Our Core Features
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-700"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="bg-teal-500 p-4 rounded-full text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

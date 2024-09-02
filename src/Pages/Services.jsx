import React from 'react';
import A1 from "../assets/g1.jpeg";
import A2 from "../assets/g2.jpeg";
import A3 from "../assets/g3.jpeg";
import A4 from "../assets/g4.jpeg";
import A5 from "../assets/g7.jpeg";
import A6 from "../assets/g6.jpeg";

const services = [
  { name: 'Crossfit Training', img: A1 },
  { name: 'Fitness', img: A2 },
  { name: 'Dynamic Strength Training', img: A3 },
  { name: 'Health', img: A4 },
  { name: 'Workout', img: A5 },
  { name: 'Strategies', img: A6 },
];

function OurServices() {
  return (
    <section className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">Our Exclusive Services</h2>
          <p className="text-lg text-gray-300">Discover our wide range of services tailored to your needs.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-lg">{service.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mt-3">
                  Enhance your experience with our {service.name} to achieve optimal results and reach your goals.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;

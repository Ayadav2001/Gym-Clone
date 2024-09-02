import React from 'react';
import A1 from "../assets/g1.jpeg";
import A2 from "../assets/g2.jpeg";
import A3 from "../assets/g3.jpeg";
import A4 from "../assets/g4.jpeg";
import A5 from "../assets/g5.webp";
import A6 from "../assets/g6.jpeg";

const services = [
  { name: 'Crossfit Training', img: A1 },
  { name: 'Fitness', img: A2 },
  { name: 'Dynamic Strength Training', img: A3 },
  { name: 'Health', img: A4 },
  { name: 'Workout', img: A5 },
  { name: 'Strategies', img: A6 },
];

function Services() {
  return (
    <section className="max-w-6xl mx-auto p-8 bg-gradient-to-r from-teal-400 to-blue-500">
      <header className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white">Our Top-notch Services</h2>
        <p className="text-lg text-gray-200 mt-4">Unlock your potential with our expertly designed programs.</p>
      </header>
      <div className="flex flex-wrap justify-center gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full sm:w-72 bg-white rounded-3xl shadow-2xl transform hover:rotate-2 hover:scale-105 transition-transform duration-500"
          >
            <div className="overflow-hidden rounded-t-3xl">
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-48 object-cover transition-transform duration-500 transform hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-600">{service.name}</h3>
              <p className="text-gray-600 mt-3">Join our {service.name} to boost your fitness journey.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;




// import React from 'react';
// import A1 from "../assets/g1.jpeg";
// import A2 from "../assets/g2.jpeg";
// import A3 from "../assets/g3.jpeg";
// import A4 from "../assets/g4.jpeg";
// import A5 from "../assets/g5.webp";
// import A6 from "../assets/g6.jpeg";

// const services = [
//   { name: 'Crossfit Training', img: A1 },
//   { name: 'Fitness', img: A2 },
//   { name: 'Dynamic Strength Training', img: A3 },
//   { name: 'Health', img: A4 },
//   { name: 'Workout', img: A5 },
//   { name: 'Strategies', img: A6 },
// ];

// function Services() {
//   return (
//     <section className="max-w-5xl mx-auto p-10 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-xl shadow-lg">
//       <header className="text-left mb-12">
//         <h2 className="text-4xl font-bold text-yellow-300">Explore Our Unique Services</h2>
//         <p className="text-md text-yellow-100 mt-2">Innovative programs crafted to elevate your fitness journey.</p>
//       </header>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="relative bg-white border-4 border-yellow-300 rounded-lg p-4 shadow-xl transform hover:scale-105 transition-transform duration-500"
//           >
//             <div className="relative h-56 rounded-t-lg overflow-hidden">
//               <img
//                 src={service.img}
//                 alt={service.name}
//                 className="w-full h-full object-cover rounded-t-lg transition-transform duration-500 transform hover:rotate-2 hover:scale-110"
//               />
//             </div>
//             <div className="mt-4">
//               <h3 className="text-xl font-semibold text-purple-800">{service.name}</h3>
//               <p className="text-purple-600 mt-2">Experience the best in {service.name} to reach new heights.</p>
//             </div>
//             <div className="absolute top-0 right-0 m-2 bg-yellow-300 text-purple-800 px-2 py-1 text-xs font-bold rounded-full">
//               NEW
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Services;



import React from 'react';
import h1 from '../../images/image.png';
import backgroundImage from '../../images/image.png'; // Import your background image

const AboutEnergym = () => {
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

export default AboutEnergym;


// import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
// import h1 from '../../images/image.png';

// const EnergymWebsite = () => {
//   return (
//     <div className="bg-gray-100 text-gray-900">
//       <main>
//         <section className="relative py-20 px-6 bg-cover bg-center"
//           style={{ backgroundImage: `url(${h1})` }}>
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
//             <h2 className="text-5xl font-extrabold mb-6">Welcome to Energym</h2>
//             <p className="text-lg mb-8">
//               Energym offers a transformative fitness experience with state-of-the-art facilities and expert trainers. Join us to achieve your fitness goals with tailored programs and a supportive community.
//             </p>
//             <a
//               href="/about"
//               className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-colors duration-300"
//             >
//               Discover More
//             </a>
//           </div>
//         </section>

//         <section className="py-16 px-6 bg-gray-200">
//           <div className="max-w-6xl mx-auto text-center">
//             <h3 className="text-4xl font-bold mb-10">Our Services</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//               <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
//                 <h4 className="text-2xl font-semibold mb-4">Personal Training</h4>
//                 <p className="text-gray-700">
//                   Work one-on-one with our expert trainers to achieve personalized fitness goals.
//                 </p>
//               </div>
//               <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
//                 <h4 className="text-2xl font-semibold mb-4">Group Classes</h4>
//                 <p className="text-gray-700">
//                   Join group sessions for motivation and fun while working out with others.
//                 </p>
//               </div>
//               <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
//                 <h4 className="text-2xl font-semibold mb-4">Nutrition Guidance</h4>
//                 <p className="text-gray-700">
//                   Receive expert advice on nutrition to complement your fitness routine.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="bg-gray-900 py-12">
//           <div className="max-w-4xl mx-auto text-center text-white">
//             <h3 className="text-3xl font-bold mb-8">Connect with Us</h3>
//             <div className="flex justify-center space-x-6">
//               <a href="#" className="text-gray-400 text-3xl hover:text-white transition-colors duration-300">
//                 <FaFacebookF />
//               </a>
//               <a href="#" className="text-gray-400 text-3xl hover:text-white transition-colors duration-300">
//                 <FaTwitter />
//               </a>
//               <a href="#" className="text-gray-400 text-3xl hover:text-white transition-colors duration-300">
//                 <FaInstagram />
//               </a>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default EnergymWebsite;

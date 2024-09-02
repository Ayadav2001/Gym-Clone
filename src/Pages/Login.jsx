import React, { useState } from 'react';
import { FaDumbbell, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 sm:p-12">
      <div className="relative bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full transition-transform transform hover:scale-105 duration-500 ease-in-out">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-600 text-white flex items-center justify-center rounded-full shadow-lg">
          <FaDumbbell className="text-4xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mt-20 mb-6 text-center">{isSignUp ? 'Join the Gym' : 'Welcome Back!'}</h1>
        <form>
          {isSignUp && (
            <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg mb-4 transition-transform transform hover:scale-105 duration-300">
              <FaUser className="text-gray-500 pl-4" />
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-none outline-none py-2 px-4 text-gray-800"
              />
            </div>
          )}
          <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg mb-4 transition-transform transform hover:scale-105 duration-300">
            <FaEnvelope className="text-gray-500 pl-4" />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-none outline-none py-2 px-4 text-gray-800"
            />
          </div>
          <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg mb-4 transition-transform transform hover:scale-105 duration-300">
            <FaLock className="text-gray-500 pl-4" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent border-none outline-none py-2 px-4 text-gray-800"
            />
          </div>
          <p className="text-sm text-gray-600 mb-6 text-center">
            <a href="#" className="text-blue-500 hover:underline">
              {isSignUp ? 'Get Password Tips' : 'Forgot Password?'}
            </a>
          </p>
          <div className="flex justify-between items-center">
            <button
              type="button"
              className={`w-full py-3 px-5 rounded-lg text-white transition-colors duration-500 ${
                isSignUp ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300 cursor-not-allowed'
              }`}
              onClick={isSignUp ? null : handleToggle}
            >
              Sign Up
            </button>
            <button
              type="button"
              className={`w-full py-3 px-5 rounded-lg text-white transition-colors duration-500 ml-4 ${
                !isSignUp ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
              }`}
              onClick={!isSignUp ? null : handleToggle}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

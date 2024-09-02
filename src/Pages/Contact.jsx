import React from 'react';
import { motion } from 'framer-motion';
import { UserIcon, MailIcon, PhoneIcon, HomeIcon, ChatIcon } from '@heroicons/react/solid';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <motion.form
        className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">Get In Touch</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <UserIcon className="w-5 h-5 text-blue-500 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="First Name"
              className="border-2 border-blue-200 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
            />
          </div>
          <div className="relative">
            <UserIcon className="w-5 h-5 text-blue-500 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Last Name"
              className="border-2 border-blue-200 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
            />
          </div>
          <div className="relative">
            <MailIcon className="w-5 h-5 text-blue-500 absolute left-3 top-3" />
            <input
              type="email"
              placeholder="Email"
              className="border-2 border-blue-200 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
            />
          </div>
          <div className="relative">
            <PhoneIcon className="w-5 h-5 text-blue-500 absolute left-3 top-3" />
            <input
              type="tel"
              placeholder="Phone"
              className="border-2 border-blue-200 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
            />
          </div>
        </div>
        <div className="relative mt-4">
          <HomeIcon className="w-5 h-5 text-blue-500 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Address"
            className="border-2 border-blue-200 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
          />
        </div>
        <div className="relative mt-4">
          <ChatIcon className="w-5 h-5 text-blue-500 absolute left-3 top-3" />
          <textarea
            placeholder="Type your message here"
            className="border-2 border-blue-200 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full h-32"
          ></textarea>
        </div>
        <motion.button
          type="submit"
          className="bg-blue-600 text-white font-semibold p-3 mt-6 rounded-lg w-full hover:bg-blue-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;

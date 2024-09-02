import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes, FaHome, FaInfoCircle, FaConciergeBell, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gray-900 text-white">
      {/* Top Row */}
      <div className="flex justify-between items-center p-4">
        <div className="flex space-x-6 items-center">
          <a href="#" className="flex items-center space-x-2 hover:text-teal-400">
            <FaMapMarkerAlt />
            <span>Find Us</span>
          </a>
          <a href="tel:+011234567890" className="flex items-center space-x-2 hover:text-teal-400">
            <FaPhoneAlt />
            <span>+01 1234567890</span>
          </a>
          <a href="mailto:mail@domain.com" className="flex items-center space-x-2 hover:text-teal-400">
            <FaEnvelope />
            <span>Contact Us</span>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-teal-400">Login</a>
          <a href="#" className="hover:text-teal-400">Sign Up</a>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-700">
        <div className="text-xl font-bold hover:text-teal-400">
          <a href="#">EnergyGym</a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8">
          <a href="/" className="flex items-center space-x-1 hover:text-teal-400">
            <FaHome />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-teal-400">
            <FaInfoCircle />
            <span>About</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-teal-400">
            <FaConciergeBell />
            <span>Services</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-teal-400">
            <FaUserCircle />
            <span>Contact Us</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-teal-400">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-4 p-4 bg-gray-800">
          <a href="#" className="flex items-center space-x-1 hover:text-teal-400">
            <FaHome />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-teal-400">
            <FaInfoCircle />
            <span>About</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-teal-400">
            <FaConciergeBell />
            <span>Services</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-teal-400">
            <FaUserCircle />
            <span>Contact Us</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

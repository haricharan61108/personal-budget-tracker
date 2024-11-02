import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg'; 

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white text-gray-800 shadow-lg py-4 px-8 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="cursor-pointer flex items-center"
          onClick={() => navigate('/')}
        >
          <img src={Logo} alt="Logo" className="h-20 w-20 mr-2" /> {/* Increased logo size */}
        </div>
        <div className="flex space-x-8">
          <button
            onClick={() => navigate('/')}
            className="hover:text-gray-700 font-semibold px-4 py-2 rounded-md border border-gray-200 transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={() => navigate('/about')}
            className="hover:text-gray-700 font-semibold px-4 py-2 rounded-md border border-gray-200 transition-colors duration-300"
          >
            About Us
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="hover:text-gray-700 font-semibold px-4 py-2 rounded-md border border-gray-200 transition-colors duration-300"
          >
            Contact Us
          </button>
          <button
            onClick={() => navigate('/help')}
            className="hover:text-gray-700 font-semibold px-4 py-2 rounded-md border border-gray-200 transition-colors duration-300"
          >
            Help
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

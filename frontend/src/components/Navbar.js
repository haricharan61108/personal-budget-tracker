import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white text-gray-800 shadow-lg py-4 px-6 border-b-2 border-gray-200 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Personal Budget Tracker</div>
        <div className="flex space-x-6">
          <button onClick={() => navigate('/')} className="hover:text-gray-500">Home</button>
          <button onClick={() => navigate('/about')} className="hover:text-gray-500">About Us</button>
          <button onClick={() => navigate('/contact')} className="hover:text-gray-500">Contact Us</button>
          <button onClick={() => navigate('/help')} className="hover:text-gray-500">Help</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

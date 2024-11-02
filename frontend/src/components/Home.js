import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  const navigate = useNavigate();

  // Split text into words
  const text = "Welcome to Personal Budget Tracker";
  const words = text.split(" ");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col text-white font-sans overflow-hidden">
      <Navbar />

      <div className="flex-grow flex flex-col justify-center items-center text-center p-8 mt-24">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div>
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="text-5xl md:text-7xl font-bold mb-4 inline-block"
                variants={wordVariants}
              >
                {word}&nbsp;
              </motion.span>
            ))}
            <p className="text-xl md:text-3xl mt-8">
              Track your expenses, manage your budget, and gain financial insights.
            </p>
            <div className="flex space-x-4 justify-center mt-8">
              <button
                onClick={() => navigate('/login')}
                className="bg-white text-purple-500 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-300"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="bg-white text-purple-500 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-300"
              >
                Sign Up
              </button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDV8fGJ1ZGdldCUyMHRyYWNraW5nfGVufDB8fHx8MTYxMjU3NjQ3NQ&ixlib=rb-1.2.1&q=80&w=400"
              alt="Budget Tracker Animation"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

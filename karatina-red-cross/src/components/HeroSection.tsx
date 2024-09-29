import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-red-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pt-16 pb-20 sm:pb-24 lg:pt-32 lg:pb-28">
          {/* Animated Title */}
          <motion.h1
            className="text-center text-4xl font-bold sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Join Kenya KARU Red Cross Chapter
          </motion.h1>
          {/* Animated Subtitle */}
          <motion.p
            className="mt-4 max-w-3xl mx-auto text-center text-lg leading-6 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            Become part of a global movement dedicated to helping others in need.
          </motion.p>
          {/* Animated Button */}
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 100 }}
          >
            <Link to="/register">
              <button className="bg-white text-red-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 shadow-lg transition duration-300 ease-in-out">
                Join Now
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/src/assets/photos/donation.jpg')" }} // Add your image here
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
    </div>
  );
};

export default HeroSection;

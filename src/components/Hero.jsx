import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/img/logo/LOGO.PNG';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Empowering Your Automotive 
            <span className="text-[#32CD32]"> Journey</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
            Car parts, expert repair, and 
            Comfortable, fully furnished apartments for long-term stays in a prime location.
            </p>
            <Link to="/shop" className='bg-[#32CD32] text-white px-8 py-4 rounded-full text-lg font-semibold
                         hover:shadow-lg transition-shadow duration-300'>
              Explore Now
            </Link>
          </motion.div>
          
          <motion.div
  className="relative w-full h-[400px]"
>
  <motion.div
    className="absolute inset-0 flex items-center justify-center"
    animate={{ 
      rotate: [0, 10, 0],
      scale: [1, 1.1, 1]
    }}
    transition={{ 
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <img
      src={img}
      alt="Greenbag Logo"
      className="w-[60%] sm:w-[50%] md:w-[60%] lg:w-[40%] mx-auto"
    />
  </motion.div>
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent to-[#32CD32]/10"
    animate={{ 
      opacity: [0.3, 0.6, 0.3]
    }}
    transition={{ 
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
</motion.div>
        </div>
      </div>
    </div>
  );
};
export default Hero;



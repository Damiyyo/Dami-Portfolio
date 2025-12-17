import React from 'react';
import { motion } from 'framer-motion';

// 1. Add the Interface for TypeScript
interface HomeProps {
  isDarkMode: boolean;
}

export const Home: React.FC<HomeProps> = ({ isDarkMode }) => {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-12 py-10">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }} // Changed to whileInView for smoother deployment feel
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center lg:text-left"
      >
        <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
          <span className={`${
            isDarkMode 
              ? 'text-white lg:bg-gradient-to-r lg:from-blue-400 lg:to-indigo-400 lg:bg-clip-text lg:text-transparent' 
              : 'text-black'
          }`}>
            Crafting Digital Experiences That Matter
          </span>
        </h1>
        <p className={`text-lg lg:text-xl max-w-md mx-auto lg:mx-0 font-medium transition-colors duration-500 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Transforming ideas into elegant, scalable solutions across web, mobile, and emerging technologies.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative group"
      >
        {/* Glow effect - adjusted to respond to isDarkMode */}
        <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur transition duration-1000 ${
          isDarkMode ? 'opacity-20 group-hover:opacity-40' : 'opacity-0'
        }`} />
        
        <div className={`relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border transition-all duration-500 shadow-xl ${
          isDarkMode ? 'bg-slate-800 border-white/10' : 'bg-gray-100 border-black/10'
        }`}>
          <img 
            src="/Profile.JPG" 
            alt="Oluwadamilola Banjo" 
            className={`w-full h-full object-cover transition-all duration-700 ${
              isDarkMode ? 'grayscale hover:grayscale-0' : 'grayscale-0'
            }`} 
          />
        </div>
      </motion.div>
    </section>
  );
};
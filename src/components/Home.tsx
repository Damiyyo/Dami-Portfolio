import React from 'react';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-12 py-10">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center lg:text-left"
      >
        <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
          <span className="text-black lg:bg-gradient-to-r lg:from-blue-400 lg:to-indigo-400 lg:bg-clip-text lg:text-transparent">
            Crafting Digital Experiences That Matter
          </span>
        </h1>
        <p className="text-black lg:text-gray-400 text-lg lg:text-xl max-w-md mx-auto lg:mx-0 font-medium lg:font-normal">
          Transforming ideas into elegant, scalable solutions across web, mobile, and emerging technologies.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative group"
      >
        {/* Glow effect only visible on desktop dark mode */}
        <div className="hidden lg:block absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition" />
        
        <div className="relative w-64 h-64 lg:w-80 lg:h-80 bg-gray-100 lg:bg-slate-800 rounded-2xl overflow-hidden border border-black/10 lg:border-white/10 shadow-xl lg:shadow-none">
          <img 
            src="/Profile.JPG" 
            alt="Oluwadamilola Banjo" 
            className="w-full h-full object-cover grayscale lg:grayscale-0 hover:grayscale-0 transition-all duration-500" 
          />
        </div>
      </motion.div>
    </section>
  );
};
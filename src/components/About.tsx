import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Briefcase } from 'lucide-react';

export const About: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const cardStyle = isDarkMode 
    ? "bg-white/5 border-white/10 text-white" 
    : "bg-gray-50 border-black/10 text-black";

  return (
    <section id="about" className={`py-20 border-t ${isDarkMode ? 'border-white/10' : 'border-black/5'}`}>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h2 className="text-3xl font-black mb-10 flex items-center gap-4">
          <span className="w-12 h-1.5 bg-blue-600 rounded-full" /> About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`p-8 rounded-3xl border transition-all ${cardStyle}`}>
            <GraduationCap className="text-blue-500 mb-4" />
            <h3 className="font-black text-lg">EDUCATION</h3>
            <p className="font-bold">BSc. Computer Science</p>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Olabisi Onabanjo University</p>
          </div>

          <div className={`p-8 rounded-3xl border transition-all ${cardStyle}`}>
            <Briefcase className="text-blue-500 mb-4" />
            <h3 className="font-black text-lg">EXPERIENCE</h3>
            <p className="font-bold">Frontend Developer</p>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>ElabsAfrica (2022 - 2023)</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Twitter, Instagram } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center py-20 pt-32">
      <motion.div 
        className="container mx-auto px-6 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        
        {/* 1. Your Picture - Centered */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-70 blur-lg animate-pulse" />
            <img 
              src="/banjo-picture.jpg" 
              alt="Oluwadamilola Banjo"
              className="relative w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 shadow-2xl border-white dark:border-gray-900 mx-auto"
            />
          </div>
        </motion.div>

        {/* Name & Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className={`text-5xl md:text-7xl font-black mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Oluwadamilola Banjo
          </h1>
          <p className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            Frontend & Systems Engineer
          </p>
        </motion.div>

        {/* 2. Download CV Button - Centered */}
        <motion.div variants={itemVariants} className="mb-12">
          <a 
            href="/OLUWADAMILOLABANJOCV.pdf"
            download="Oluwadamilola_Banjo_CV.pdf"
            className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/30 active:scale-95 text-lg"
          >
            <Download className="mr-3" size={24} /> Download My CV
          </a>
        </motion.div>

        {/* 3. Social Links (Logo Form) - Centered */}
        <motion.div variants={itemVariants} className="w-full max-w-sm mx-auto">
          <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-black/5'
          }`}>
            <p className={`text-sm font-bold mb-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Connect with me
            </p>
            <div className="flex justify-center gap-8">
              {/* Email */}
              <a 
                href="mailto:banjooluwadamilola.ng@gmail.com" 
                className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
                aria-label="Send Email"
              >
                <Mail size={28} strokeWidth={2} />
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/damiyyo" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
                aria-label="GitHub Profile"
              >
                <Github size={28} strokeWidth={2} />
              </a>

              {/* X / Twitter */}
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
                aria-label="X Profile"
              >
                <Twitter size={28} strokeWidth={2} />
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-pink-400' : 'text-gray-600 hover:text-pink-600'}`}
                aria-label="Instagram Profile"
              >
                <Instagram size={28} strokeWidth={2} />
              </a>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};
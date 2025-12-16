import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Briefcase } from 'lucide-react';

export const About: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  // Shared card style that adapts to the theme
  const cardStyle = `p-8 rounded-3xl border transition-all duration-500 shadow-sm ${
    isDarkMode 
      ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' 
      : 'bg-gray-50 border-black/10 text-black hover:bg-white hover:shadow-md'
  }`;

  const subTextStyle = isDarkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <section id="about" className={`py-20 border-t transition-colors duration-500 ${isDarkMode ? 'border-white/10' : 'border-black/5'}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-black mb-10 flex items-center gap-4 uppercase tracking-tight">
          <span className="w-12 h-1.5 bg-blue-600 rounded-full" /> About Me
        </h2>
        
        <p className={`text-xl font-medium mb-12 max-w-3xl leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
          Passionate about creating innovative digital solutions with experience in full-stack development, design, and communications.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education & Certification Column */}
          <div className="space-y-6">
            <div className={cardStyle}>
              <GraduationCap className="text-blue-500 mb-4" size={28} />
              <h3 className="font-black text-lg uppercase tracking-tight mb-2">Education</h3>
              <p className="font-bold text-blue-600 italic">2023 - 2025</p>
              <p className="font-black mt-1">BSc. Computer Science</p>
              <p className={subTextStyle}>Olabisi Onabanjo University, Ogun State</p>
            </div>

            <div className={cardStyle}>
              <Code2 className="text-blue-500 mb-4" size={28} />
              <h3 className="font-black text-lg uppercase tracking-tight mb-2">Certification</h3>
              <p className="font-bold text-blue-600 italic">2022</p>
              <p className="font-black mt-1">Web Design and Development (Node.js)</p>
              <p className={subTextStyle}>Loctech Training Institute</p>
            </div>
          </div>

          {/* Work Experience Column */}
          <div className={cardStyle}>
            <Briefcase className="text-blue-500 mb-6" size={32} />
            <h3 className="text-2xl font-black mb-8 uppercase tracking-tight">Experience</h3>
            
            <div className="space-y-8">
              {/* ElabsAfrica */}
              <div className="relative pl-6 border-l-2 border-blue-600">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full" />
                <p className="font-black text-lg">Frontend Web Developer</p>
                <p className="font-bold">ElabsAfrica</p>
                <p className="text-blue-600 font-bold text-sm">2022 - 2023</p>
              </div>

              {/* LASHMA */}
              <div className="relative pl-6 border-l-2 border-gray-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-400 rounded-full" />
                <p className="font-black text-lg">Communications Intern</p>
                <p className="font-bold">LASHMA</p>
                <p className="text-blue-600 font-bold text-sm">2024</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
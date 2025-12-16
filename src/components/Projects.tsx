import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Hourglass } from 'lucide-react';

interface ProjectProps {
  isDarkMode: boolean;
}

export const Projects: React.FC<ProjectProps> = ({ isDarkMode }) => {
  const projects = [
    {
      title: "Nike Landing Page",
      description: "A high-performance, responsive landing page featuring modern UI/UX principles, built with React and Tailwind CSS.",
      image: "/Nike.jpg", // Ensure this file is in your /public folder
      stack: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com/Damiyyo/Nike-landing-Page.git", // Update with your link
      live: "https://nike-landing-page-brown-seven.vercel.app/" 
    }
  ];

  return (
    <section id="projects" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-black mb-12 uppercase tracking-tight"
      >
        Featured Projects
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Nike Project Card */}
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`group border rounded-[2.5rem] overflow-hidden transition-all duration-500 shadow-xl ${
              isDarkMode 
              ? 'bg-white/5 border-white/10 hover:bg-white/10' 
              : 'bg-gray-50 border-black/10 hover:bg-white hover:shadow-2xl'
            }`}
          >
            {/* Image Section */}
            <div className="aspect-video overflow-hidden relative">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white text-sm font-bold flex items-center gap-2">
                   <Code2 size={16} /> Stack: {p.stack.join(", ")}
                </span>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-600/10 text-blue-600 text-[10px] font-black rounded-full uppercase">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-black mb-3">{p.title}</h3>
              <p className={`mb-8 font-medium leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {p.description}
              </p>
              
              <div className="flex items-center gap-6">
                <a 
                  href={p.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-black hover:gap-3 transition-all"
                >
                  Live Preview <ExternalLink size={18} />
                </a>
                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-black transition-colors ${
                    isDarkMode ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'
                  }`}
                >
                  Code <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        {/* "Coming Soon" Card to balance the grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`border rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center border-dashed transition-all ${
            isDarkMode 
            ? 'bg-transparent border-white/20 text-white/40' 
            : 'bg-transparent border-black/10 text-black/30'
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-blue-600/5 flex items-center justify-center mb-4">
            <Hourglass size={32} className="animate-pulse text-blue-600" />
          </div>
          <h3 className="text-xl font-black">Next Project Loading...</h3>
          <p className="mt-2 text-sm font-medium italic">Building something amazing</p>
        </motion.div>
      </div>
    </section>
  );
};
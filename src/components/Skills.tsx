import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

// Added isDarkMode to the SkillBar props so it can change text color
const SkillBar = ({ skill, isDarkMode }: { skill: Skill; isDarkMode: boolean }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className={`font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-black'}`}>
        {skill.name}
      </span>
      <span className={`font-bold transition-colors ${isDarkMode ? 'text-blue-400' : 'text-black'}`}>
        {skill.level}%
      </span>
    </div>
    <div className={`h-3 w-full rounded-full overflow-hidden border ${
      isDarkMode ? 'bg-white/10 border-white/5' : 'bg-gray-200 border-black/5'
    }`}>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-full bg-blue-600 rounded-full"
      />
    </div>
  </div>
);

// Added interface for the main Skills component
interface SkillsProps {
  isDarkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const frontend: Skill[] = [
    { name: "React", level: 70 },
    { name: "Next.js", level: 60 },
    { name: "TypeScript", level: 70 },
    { name: "Tailwind CSS", level: 60 },
  ];

  const backend: Skill[] = [
    { name: "Node.js", level: 80 },
    { name: "Python", level: 50 },
    { name: "MongoDB", level: 70 },
  ];

  const cardClass = `p-8 border rounded-3xl shadow-sm hover:shadow-md transition-all duration-500 ${
    isDarkMode 
      ? 'bg-white/5 border-white/10 text-white' 
      : 'bg-gray-50 border-black/10 text-black'
  }`;

  return (
    <section id="skills" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`text-3xl font-black mb-10 uppercase tracking-tight ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}
      >
        Technical Expertise
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Frontend Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cardClass}
        >
          <h3 className="text-xl font-black mb-8 flex items-center gap-2">
            <Code2 className="text-blue-600" /> Frontend
          </h3>
          {frontend.map(s => <SkillBar key={s.name} skill={s} isDarkMode={isDarkMode} />)}
        </motion.div>

        {/* Backend Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cardClass}
        >
          <h3 className="text-xl font-black mb-8 flex items-center gap-2">
            <Database className="text-blue-600" /> Backend
          </h3>
          {backend.map(s => <SkillBar key={s.name} skill={s} isDarkMode={isDarkMode} />)}
        </motion.div>
      </div>
    </section>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, ShieldCheck } from 'lucide-react'; // Added ShieldCheck

interface Skill {
  name: string;
  level?: number; // Made optional
  status?: string; // Added for "Learning in Progress"
}

const SkillBar = ({ skill, isDarkMode }: { skill: Skill; isDarkMode: boolean }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className={`font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-black'}`}>
        {skill.name}
      </span>
      {/* If status exists, show it; otherwise show percentage */}
      <span className={`text-sm font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
        {skill.status || `${skill.level}%`}
      </span>
    </div>
    
    {/* Progress bar logic: if it's "Learning in Progress", show a static pulse or partial bar */}
    <div className={`h-3 w-full rounded-full overflow-hidden border ${
      isDarkMode ? 'bg-white/10 border-white/5' : 'bg-gray-200 border-black/5'
    }`}>
      {skill.status ? (
        <div className="h-full bg-blue-600/50 w-1/3 animate-pulse" />
      ) : (
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-blue-600 rounded-full"
        />
      )}
    </div>
  </div>
);

interface SkillsProps {
  isDarkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const frontend: Skill[] = [
    { name: "React", level: 80 },
    { name: "Next.js", level: 65 },
    { name: "TypeScript", level: 70 },
  ];

  const backend: Skill[] = [
    { name: "Node.js", level: 65 },
    { name: "MongoDB", level: 60 },
  ];

  const security: Skill[] = [
    { name: "Network Security", status: "Learning in Progress" },
    { name: "Penetration Testing | Ethical Hacking", status: "Learning in Progress" },
  ];

  const cardClass = `p-8 border rounded-3xl shadow-sm hover:shadow-md transition-all duration-500 ${
    isDarkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-50 border-black/10 text-black'
  }`;

  return (
    <section id="skills" className="py-20">
      <h2 className={`text-3xl font-black mb-10 uppercase tracking-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>
        Technical Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Frontend */}
        <motion.div className={cardClass}>
          <h3 className="text-xl font-black mb-8 flex items-center gap-2"><Code2 className="text-blue-600" /> Frontend</h3>
          {frontend.map(s => <SkillBar key={s.name} skill={s} isDarkMode={isDarkMode} />)}
        </motion.div>

        {/* Backend */}
        <motion.div className={cardClass}>
          <h3 className="text-xl font-black mb-8 flex items-center gap-2"><Database className="text-blue-600" /> Backend</h3>
          {backend.map(s => <SkillBar key={s.name} skill={s} isDarkMode={isDarkMode} />)}
        </motion.div>

        {/* Cybersecurity */}
        <motion.div className={cardClass}>
          <h3 className="text-xl font-black mb-8 flex items-center gap-2"><ShieldCheck className="text-blue-600" /> Security</h3>
          {security.map(s => <SkillBar key={s.name} skill={s} isDarkMode={isDarkMode} />)}
        </motion.div>
      </div>
    </section>
  );
};
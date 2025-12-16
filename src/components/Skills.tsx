import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

const SkillBar = ({ skill }: { skill: Skill }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      {/* Skill name and percentage changed to black */}
      <span className="font-bold text-black">{skill.name}</span>
      <span className="font-bold text-black">{skill.level}%</span>
    </div>
    <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden border border-black/5">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-full bg-blue-600 rounded-full"
      />
    </div>
  </div>
);

export const Skills: React.FC = () => {
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

  return (
    <section id="skills" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-black mb-10 text-black uppercase tracking-tight"
      >
        Technical Expertise
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Frontend Card - Light grey background with a subtle black border */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-gray-50 border border-black/10 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-xl font-black mb-8 flex items-center gap-2 text-black">
            <Code2 className="text-blue-600" /> Frontend
          </h3>
          {frontend.map(s => <SkillBar key={s.name} skill={s} />)}
        </motion.div>

        {/* Backend Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 bg-gray-50 border border-black/10 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-xl font-black mb-8 flex items-center gap-2 text-black">
            <Database className="text-blue-600" /> Backend
          </h3>
          {backend.map(s => <SkillBar key={s.name} skill={s} />)}
        </motion.div>
      </div>
    </section>
  );
};
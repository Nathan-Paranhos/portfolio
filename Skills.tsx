import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from './animation';
import { Code, Terminal, Database, Monitor, PenTool as Tool, Users } from 'lucide-react';

const skillCategories = [
  {
    title: "Desenvolvimento Frontend",
    icon: <Code className="text-primary" size={24} />,
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Desenvolvimento Backend",
    icon: <Terminal className="text-primary" size={24} />,
    skills: ["Node.js", "Python", "API REST"]
  },
  {
    title: "Banco de Dados",
    icon: <Database className="text-primary" size={24} />,
    skills: ["SQL", "MongoDB", "Firebase"]
  },
  {
    title: "Ferramentas",
    icon: <Tool className="text-primary" size={24} />,
    skills: ["Git", "VS Code", "GitHub", "AWS"]
  },
  {
    title: "Sistemas & Suporte",
    icon: <Monitor className="text-primary" size={24} />,
    skills: ["Windows", "Linux", "Office", "Redes"]
  },
  {
    title: "Soft Skills",
    icon: <Users className="text-primary" size={24} />,
    skills: ["Comunicação", "Trabalho em Equipe", "Proatividade", "Organização"]
  }
];

const SkillCard = ({ category, index }: { category: any; index: number }) => {
  return (
    <motion.div
      variants={fadeIn('up', index * 0.1)}
      className="bg-background-light p-6 rounded-lg border border-gray-700 hover:border-primary/50 transition-all duration-300"
      whileHover={{ y: -5, boxShadow: '0 10px 20px -10px rgba(138, 43, 226, 0.3)' }}
    >
      <div className="flex items-center mb-4">
        <div className="bg-background/50 p-3 rounded-lg mr-3">
          {category.icon}
        </div>
        <h3 className="text-xl font-medium">{category.title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {category.skills.map((skill: string, idx: number) => (
          <div
            key={idx}
            className="flex items-center space-x-2 bg-background/50 p-2 rounded-lg"
          >
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-sm text-text-secondary">{skill}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col items-center"
        >
          <motion.div variants={textVariant()} className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Minhas <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Habilidades</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {skillCategories.map((category, index) => (
              <SkillCard key={index} category={category} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
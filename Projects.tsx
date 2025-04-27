import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from './animation';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Mabelle Vitirne',
    description: 'Site de vitirne como forma de divulgação para venda de brownies',
    image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['Html', 'Css', 'Js'],
    sourceLink: 'https://github.com/Nathan-Paranhos/Mabelle',
    demoLink: 'https://nathan-paranhos.github.io/Mabelle/'
  },
  {
    title: 'Automação de Processos',
    description: 'IA dentro do whatsapp através de API key.',
    image: 'https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['Javascript', 'API',   'Automação de pesquisa'],
    sourceLink: 'https://github.com/Nathan-Paranhos/Loph-js.git',
    demoLink: 'https://github.com/Nathan-Paranhos/Loph-js#'
  },
  {
    title: 'Imobiliária Virtual',
    description: 'O projeto segue em desenvolvimento',
    image: 'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['React Native', 'Firebase'],
    sourceLink: 'https://nathan-paranhos.vercel.app/login',
    demoLink: 'https://imob-virtual.netlify.app/login'
  }
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      variants={fadeIn('up', index * 0.1)}
      className="bg-background-light rounded-lg overflow-hidden border border-gray-700 hover:border-primary/50 transition-all duration-300 group"
      whileHover={{ y: -10 }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, idx: number) => (
            <span 
              key={idx}
              className="px-2 py-1 bg-background rounded-md text-xs font-medium text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-medium mb-2">{project.title}</h3>
        <p className="text-text-secondary mb-4">{project.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <a 
              href={project.sourceLink}
              className="w-8 h-8 rounded-full flex items-center justify-center border border-text-secondary text-text-secondary hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="Source Code"
            >
              <Github size={16} />
            </a>
            <a 
              href={project.demoLink}
              className="w-8 h-8 rounded-full flex items-center justify-center border border-text-secondary text-text-secondary hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="Live Demo"
            >
              <ExternalLink size={16} />
            </a>
          </div>
          
          <a 
            href={project.demoLink}
            className="flex items-center text-sm font-medium text-primary group"
          >
            Ver projeto
            <ArrowRight 
              size={16} 
              className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col items-center"
        >
          <motion.div variants={textVariant()} className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Alguns <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Projetos</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
          
          <motion.div
            variants={fadeIn('up', 0.3)}
            className="mt-12"
          >
            <a 
              href="#"
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center"
            >
              Ver todos os projetos
              <ArrowRight className="ml-2" size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 

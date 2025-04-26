import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit as Circuit, Github, Linkedin, Mail } from 'lucide-react';
import { fadeIn, glowVariant } from './animation';

import profileImage from './Bal.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-center">
        <motion.div
          variants={fadeIn('right')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:w-1/2 flex flex-col items-center md:items-start mb-10 md:mb-0 z-10"
        >
          <div className="flex items-center mb-4">
            <motion.div
              className="w-12 h-12 mr-3"
              variants={glowVariant}
              initial="hidden"
              animate="show"
            >
              <Circuit className="w-full h-full text-primary" />
            </motion.div>
            <div>
              <p className="text-lg text-text-secondary">Olá, eu sou</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-1">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  NP
                </span>
                <span>DEV</span>
              </h1>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-medium text-text-secondary text-center md:text-left mb-6">
          Estudante de Eng. Software
          </h2>

          <p className="text-lg text-text-secondary max-w-lg text-center md:text-left mb-8">
            Apaixonado por tecnologia e desenvolvimento, sempre em busca de expandir 
            meus conhecimentos e habilidades para me tornar um grande desenvolvedor.
          </p>

          <div className="flex space-x-4">
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Entre em contato
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 border border-primary text-white font-medium rounded-lg hover:bg-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver projetos
            </motion.a>
          </div>

          <div className="flex space-x-4 mt-10">
            <motion.a 
              href="#" 
              className="w-10 h-10 rounded-full flex items-center justify-center border border-text-secondary text-text-secondary hover:border-primary hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="#" 
              className="w-10 h-10 rounded-full flex items-center justify-center border border-text-secondary text-text-secondary hover:border-primary hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/nathan-ps-/" 
              className="w-10 h-10 rounded-full flex items-center justify-center border border-text-secondary text-text-secondary hover:border-primary hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeIn('left')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center items-center relative z-10"
        >
          <motion.div 
            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary p-1 relative"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              className="absolute inset-0 rounded-full border-4 border-secondary opacity-30"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.1, 0.3] 
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop' 
              }}
            />
          </motion.div>
          
          <div className="absolute -z-10 w-full h-full">
            <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full bg-secondary/20 blur-3xl" />
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mb-2"
        >
          <a href="#about" className="text-text-secondary hover:text-white transition-colors">
          Desça a página
          </a>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-5 h-10 rounded-full border-2 border-text-secondary flex justify-center pt-1">
            <motion.div 
              className="w-1 h-1 rounded-full bg-text-secondary"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

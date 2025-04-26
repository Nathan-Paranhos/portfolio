import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Heart, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-background-light py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.button
            onClick={scrollToTop}
            className="mb-8 bg-gradient-to-r from-primary to-secondary p-3 rounded-full shadow-lg hover:shadow-primary/20 transition-all duration-300"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="text-white" size={24} />
          </motion.button>

          <div className="flex space-x-4 mb-6">
            <motion.a 
              href="https://github.com/Nathan-Paranhos" 
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-text-secondary hover:border-primary hover:text-primary transition-all duration-300"
              whileHover={{ y: -3 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/nathan-ps-/" 
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-text-secondary hover:border-primary hover:text-primary transition-all duration-300"
              whileHover={{ y: -3 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="mailto:paranhoscontato.n@gmail.com" 
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-text-secondary hover:border-primary hover:text-primary transition-all duration-300"
              whileHover={{ y: -3 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>

          <p className="text-text-secondary text-center mb-2">
            © {new Date().getFullYear()} NP Dev. Todos os direitos reservados.
          </p>
          <p className="text-text-secondary flex items-center text-sm">
            Feito por Nathan Silva
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
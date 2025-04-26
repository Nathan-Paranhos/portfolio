import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from './animation';
import { Code, Server, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
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
              Sobre <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div 
              variants={fadeIn('right')}
              className="flex flex-col space-y-6"
            > 
              <p className="text-lg text-text-secondary">
                Sou técnico de T.I. e tenho uma grande paixão por tecnologia. Atualmente, estou cursando 
                Engenharia de Software. Estou sempre em busca de expandir meus conhecimentos e habilidades 
                na área, com o objetivo de me tornar um grande desenvolvedor.
              </p>
              <p className="text-lg text-text-secondary">
                A tecnologia é o que me motiva, e sigo estudando e me atualizando constantemente para 
                aprimorar minhas capacidades e alcançar novos desafios no mundo do desenvolvimento.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span className="text-text-secondary">Engenharia de Software</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span className="text-text-secondary">Desenvolvimento Web</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span className="text-text-secondary">Suporte Técnico</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span className="text-text-secondary">Automação</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn('left')}
              className="grid grid-cols-1 gap-6"
            >
              <motion.div 
                className="bg-background-light p-6 rounded-lg border border-gray-700 hover:border-primary/50 transition-colors duration-300"
                whileHover={{ y: -5, boxShadow: '0 10px 20px -10px rgba(138, 43, 226, 0.3)' }}
              >
                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-lg mr-4">
                    <Server className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Suporte Técnico</h3>
                    <p className="text-text-secondary">
                      Atendimento ao cliente com boa comunicação, fornecendo soluções rápidas 
                      e eficazes para problemas técnicos.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-background-light p-6 rounded-lg border border-gray-700 hover:border-secondary/50 transition-colors duration-300"
                whileHover={{ y: -5, boxShadow: '0 10px 20px -10px rgba(0, 255, 255, 0.3)' }}
              >
                <div className="flex items-start">
                  <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                    <Code className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Desenvolvimento</h3>
                    <p className="text-text-secondary">
                      Estudando as tecnologias mais recentes, como HTML, CSS, JavaScript, 
                      e frameworks modernos como React e Angular.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-background-light p-6 rounded-lg border border-gray-700 hover:border-accent/50 transition-colors duration-300"
                whileHover={{ y: -5, boxShadow: '0 10px 20px -10px rgba(255, 64, 129, 0.3)' }}
              >
                <div className="flex items-start">
                  <div className="bg-accent/20 p-3 rounded-lg mr-4">
                    <Cpu className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Sistemas</h3>
                    <p className="text-text-secondary">
                      Pacote Office completo, com aprofundamento em Excel e automações de serviços 
                      utilizando frameworks.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
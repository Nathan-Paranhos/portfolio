import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from './animation';
import { GraduationCap, Calendar, Star } from 'lucide-react';

const educationItems = [
  {
    period: '2020 - 2022',
    title: 'Ensino médio completo',
    institution: 'Fundação Antônio - Antonieta Cintra Gordinho',
    description: 'Formação de ensino médio concluída com foco em disciplinas técnicas e preparação para o mercado de trabalho.'
  },
  {
    period: '2021 - 2022',
    title: 'Curso Técnico em T.I',
    institution: 'Fundação Antônio - Antonieta Cintra Gordinho',
    description: 'Formação técnica com ênfase em suporte de T.I, redes, hardware e software, preparando para o mercado de tecnologia.'
  },
  {
    period: 'Set. - Out. 2022',
    title: 'Projeto FAMUN (Facamp)',
    institution: 'Fundação Antônio - Antonieta Cintra Gordinho',
    description: 'Participação em projeto especial com foco em desenvolvimento de habilidades de liderança e trabalho em equipe.'
  },
  {
    period: 'Fev. 2025',
    title: 'Engenharia de Software',
    institution: 'Unidade Estácio',
    description: 'Atualmente cursando Engenharia de Software, com foco em desenvolvimento, programação e arquitetura de sistemas.'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
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
              Minha <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Educação</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </motion.div>

          <div className="relative w-full max-w-4xl">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary transform md:-translate-x-1/2"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {educationItems.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn(index % 2 === 0 ? 'right' : 'left')}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-background rounded-full border-4 border-primary transform -translate-x-1/2 flex items-center justify-center z-10">
                    <GraduationCap size={16} className="text-primary" />
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  }`}>
                    <div 
                      className="bg-background-light p-6 rounded-lg border border-gray-700 hover:border-primary/50 transition-all duration-300"
                      style={{
                        boxShadow: '0 4px 20px -5px rgba(0, 0, 0, 0.5)'
                      }}
                    >
                      <div className="flex items-center text-text-secondary mb-2">
                        <Calendar size={16} className="mr-2" />
                        <span>{item.period}</span>
                      </div>
                      <h3 className="text-xl font-medium mb-1">{item.title}</h3>
                      <p className="text-text-secondary mb-4 flex items-center">
                        <Star size={16} className="mr-2 text-secondary" />
                        {item.institution}
                      </p>
                      <p className="text-text-secondary">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
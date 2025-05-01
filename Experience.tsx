import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from './animation';
import { Briefcase, Calendar, Building } from 'lucide-react';

const experienceItems = [
  {
    period: 'Ago. 2023 - Dez. 2024',
    title: 'Assistente Administrativo',
    company: 'Abrylar Imóveis',
    responsibilities: [
      'Atendimento ao cliente',
      'Desenvolvimento de planilhas inteligentes',
      'Integração de sistemas',
      'Pacote Office',
      'Home office'
    ] 
  },
  {
    period: 'Mar. 2023 - Abr. 2023',
    title: 'House Whey',
    company: 'House Whey (Freelancer)',
    responsibilities: [
      'Integração de sistemas de contagem',
      'Análise de notas fiscais e dados',
      'Uso plataforma Bling para notas ficais'
    ]
  },
  {
    period: 'Atual',
    title: 'Analista de Logs',
    company: 'Autônomo',
    responsibilities: [
      'Dumps de logs em python',
      'Amazon EC2 (AWS)',
      'Automação de mensagem usando pywhatkit',
      'Desenvolvimento de bots para automações de processos'
    ]
  },
  {
    period: 'Abr. 2025',
    title: 'Client Soft. Support',
    company: 'Fagron tech',
    responsibilities: [
      'Implantação de sistemas',
      'Configuração de ambiente',
      'Monday',
      'Banco de dados'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background-light/30">
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
              Minha <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Experiência</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 w-full max-w-4xl">
            {experienceItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', index * 0.1)}
                className="relative"
              >
                <div className="bg-background-light rounded-lg overflow-hidden border border-gray-700 hover:border-primary/50 transition-all duration-300 group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-secondary"></div>
                  <div className="p-6 pl-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-medium">{item.title}</h3>
                      <div className="flex items-center text-text-secondary mt-2 md:mt-0">
                        <Calendar size={16} className="mr-2" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4 text-text-secondary">
                      <Building size={16} className="mr-2 text-secondary" />
                      <span>{item.company}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {item.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                          <span className="text-text-secondary">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

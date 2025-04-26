import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from './animation';
import { Phone, Mail, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();    console.log(formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-background-light/30 relative">
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
              Entre em <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Contato</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
            <motion.div 
              variants={fadeIn('right')}
              className="space-y-6"
            >
              <h3 className="text-2xl font-medium mb-4">Vamos conversar!</h3>
              <p className="text-text-secondary mb-8">
                Estou interessado em oportunidades de trabalho como desenvolvedor - 
                especialmente projetos ambiciosos ou grandes. No entanto, se você 
                tiver outras solicitações ou perguntas, não hesite em entrar em contato.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-lg mr-4">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Telefone</h4>
                    <p className="text-text-secondary">(11) 99696-1151</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                    <Mail className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <p className="text-text-secondary">paranhoscontato.n@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-accent/20 p-3 rounded-lg mr-4">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Localização</h4>
                    <p className="text-text-secondary">Jundiaí, Sp</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-medium mb-4">Me encontre nas redes</h4>
                <div className="flex space-x-4">
                  <motion.a 
                    href="https://github.com/Nathan-Paranhos" 
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-background border border-gray-700 text-text-secondary hover:border-primary hover:text-primary transition-all duration-300"
                    whileHover={{ y: -5, boxShadow: '0 5px 15px -5px rgba(138, 43, 226, 0.4)' }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a 
                    href="www.linkedin.com/in/nathan-ps-" 
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-background border border-gray-700 text-text-secondary hover:border-primary hover:text-primary transition-all duration-300"
                    whileHover={{ y: -5, boxShadow: '0 5px 15px -5px rgba(138, 43, 226, 0.4)' }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn('left')}
              className="bg-background p-8 rounded-lg border border-gray-700"
            >
              <h3 className="text-2xl font-medium mb-6">Envie uma mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background-light border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background-light border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background-light border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background-light border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar mensagem
                  <Send size={18} className="ml-2" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
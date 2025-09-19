import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Mensagem enviada com sucesso! Entrarei em contato em breve.'
      });
      setFormData({ name: '', email: '', message: '' });
      
      // Limpar mensagem após 5 segundos
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contato" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="section-title">Contato</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Imagem e Informações */}
          <div className="space-y-8">
            <img 
              src="sala.jpg" 
              alt="Contato" 
              className="w-full rounded-lg shadow-md"
            />
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Email</h3>
                  <a href="mailto:contato@ryanpablo.com" className="text-gray-600 hover:text-primary">
                    35517.14@educacao.org.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaPhone className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Telefone</h3>
                  <a href="tel:+5511999999999" className="text-gray-600 hover:text-primary">
                    +55 (19) 994479321
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-6">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          
          {/* Formulário */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-secondary mb-6">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full btn btn-highlight flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                ) : null}
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
              
              {submitMessage && (
                <div className={`mt-4 p-3 rounded-md ${submitMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {submitMessage.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
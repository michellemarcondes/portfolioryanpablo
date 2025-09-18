import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce App',
      image: '/projetos/projeto1.jpg',
      description: 'Aplicação completa de e-commerce com React, Node.js e MongoDB. Inclui sistema de pagamentos, carrinho e painel administrativo.',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      image: '/projetos/projeto2.jpg',
      description: 'Dashboard interativo para visualização de dados analíticos com gráficos e filtros avançados.',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 3,
      title: 'App de Finanças',
      image: '/projetos/projeto1.jpg',
      description: 'Aplicativo para controle financeiro pessoal com categorização de gastos e relatórios.',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 4,
      title: 'Rede Social',
      image: '/projetos/projeto2.jpg',
      description: 'Plataforma de rede social com recursos de postagens, comentários e perfis de usuário.',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 5,
      title: 'App de Tarefas',
      image: '/projetos/projeto1.jpg',
      description: 'Aplicativo de gerenciamento de tarefas com recursos de priorização e categorias.',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 6,
      title: 'Blog Pessoal',
      image: '/projetos/projeto2.jpg',
      description: 'Blog com sistema de gerenciamento de conteúdo personalizado.',
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projetos" className="py-16">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="section-title mb-0">Projetos</h2>
          <span className="text-gray-500">1/{projects.length}</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  <p className="text-white/80 text-sm mt-1">Clique para ver detalhes</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-200 z-10"
              onClick={closeModal}
            >
              <FaTimes size={24} />
            </button>
            
            <div className="h-[50vh] bg-gray-900">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-secondary mb-2">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              
              <div className="flex space-x-4">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  <FaGithub className="mr-2" />
                  Código
                </a>
                <a 
                  href={selectedProject.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
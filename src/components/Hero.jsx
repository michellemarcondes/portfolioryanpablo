import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-28 pb-16 md:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Texto */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">
            Ryan Pablo
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-6">
            Desenvolvedor Web & Designer UI/UX
          </p>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Criando experiências digitais impactantes e soluções web inovadoras para transformar ideias em realidade.
          </p>
          <a href="#projetos" className="btn btn-primary">
            Ver Projetos
          </a>
        </div>

        {/* Imagem */}
        <div className="relative flex justify-center md:justify-end">
          {/* Elementos decorativos */}
          <div className="absolute w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-primary animate-pulse"></div>
            <div className="absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-highlight animate-pulse"></div>
            <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-primary/30 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-3 h-3 rounded-full bg-highlight/30 animate-pulse"></div>
            
            {/* Linhas conectivas */}
            <div className="absolute top-1/3 left-1/3 w-16 h-0.5 bg-primary/20 rotate-45"></div>
            <div className="absolute bottom-1/3 right-1/3 w-16 h-0.5 bg-highlight/20 -rotate-45"></div>
          </div>
          
          {/* Foto de perfil */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-highlight opacity-20 blur-md"></div>
            <img 
              src="/foto-perfil.jpg" 
              alt="Ryan Pablo" 
              className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
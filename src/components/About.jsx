import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="section-title">
          Sobre Mim
          <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="flex justify-center">
            <img 
              src="perfilteste.jpg" 
              alt="Ryan Pablo" 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
          
          {/* Texto */}
          <div className="space-y-4 text-gray-700">
            <p>
              Olá! Sou <strong>Ryan Pablo</strong>, um desenvolvedor web apaixonado por criar experiências digitais impactantes e funcionais. Minha jornada na tecnologia começou há mais de 5 anos, quando descobri o poder de transformar ideias em soluções reais através do código.
            </p>
            
            <p>
              Especializo-me em <strong>desenvolvimento front-end</strong> com foco em React, mas também tenho experiência sólida com tecnologias back-end. Acredito que a melhor experiência do usuário vem da combinação perfeita entre design atraente e funcionalidade intuitiva.
            </p>
            
            <p>
              Além da programação, sou entusiasta de <strong>UI/UX Design</strong> e sempre busco incorporar princípios de design centrado no usuário em meus projetos. Meu objetivo é criar interfaces que não apenas pareçam boas, mas que também proporcionem uma experiência fluida e agradável.
            </p>
            
            <p>
              Quando não estou codificando, gosto de explorar novas tecnologias, contribuir para projetos open-source e compartilhar conhecimento com a comunidade. Acredito fortemente no aprendizado contínuo e estou sempre em busca de novos desafios para expandir minhas habilidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
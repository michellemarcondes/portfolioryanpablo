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
              src="logofb.png" 
              alt="Ryan Pablo" 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
          
          {/* Texto */}
          <div className="space-y-4 text-gray-700">
            <p>
              Sou Ryan Pablo, um estudante do Ensino Médio da Fundação Bradesco com uma paixão genuína por tecnologia e um forte desejo de transformar ideias em soluções práticas. Minha trajetória acadêmica é impulsionada pela curiosidade e pela busca constante por conhecimento, sempre buscando conectar os conceitos aprendidos em sala de aula com as aplicações do mundo real. Acredito que a base educacional sólida e os valores de responsabilidade social que a Fundação Bradesco me proporcionou são os pilares para minha carreira futura.
            </p>
            
            <p>
              Durante meu percurso, desenvolvi não apenas competências técnicas, mas também habilidades interpessoais essenciais. Participei ativamente de projetos em grupo, onde pude exercitar minha comunicação, trabalho em equipe e capacidade de liderança para alcançar objetivos comuns. Essas experiências me ensinaram a importância da colaboração, da adaptabilidade e da perseverança diante de novos desafios, preparando-me para um ambiente profissional dinâmico e competitivo.
            </p>
            
            <p>
              Busco agora minha primeira oportunidade no mercado de trabalho para aplicar todo o conhecimento adquirido, contribuir com minha energia e dedicação, e continuar evoluindo tanto profissional quanto pessoalmente. Meu objetivo é me integrar a uma equipe inovadora onde eu possa aprender, crescer e, ao mesmo tempo, agregar valor através do meu comprometimento e vontade de fazer a diferença.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
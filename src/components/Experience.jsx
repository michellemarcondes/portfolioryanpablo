import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Desenvolvedor Front-end Sênior',
      company: 'TechSolutions Inc.',
      period: 'Jan 2022 - Presente',
      description: 'Desenvolvimento de aplicações web com React e TypeScript, liderando equipe de front-end e implementando melhores práticas.',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Jest']
    },
    {
      id: 2,
      title: 'Desenvolvedor Full Stack',
      company: 'WebInnovate',
      period: 'Mar 2019 - Dez 2021',
      description: 'Desenvolvimento de soluções web completas, desde o back-end com Node.js até o front-end com React.',
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS']
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'DesignHub',
      period: 'Jun 2017 - Fev 2019',
      description: 'Criação de interfaces de usuário e experiências para aplicações web e mobile, com foco em usabilidade e acessibilidade.',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research']
    }
  ];

  return (
    <section id="experiencia" className="py-16">
      <div className="container">
        <div className="flex items-center justify-center mb-12">
          <FaBriefcase className="text-primary text-2xl mr-3" />
          <h2 className="section-title mb-0">Experiências Profissionais</h2>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white shadow"></div>
                
                {/* Content */}
                <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-secondary">{exp.title}</h3>
                    <p className="text-gray-600 italic mb-2">{exp.company}</p>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
                      {exp.period}
                    </span>
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-gray-100 text-secondary text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
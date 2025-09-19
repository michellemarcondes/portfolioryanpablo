import { useState } from 'react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      image: 'ACENDERLED.png',
      title: 'Circuito Eletrônico - Acender LED',
      description: 'Projeto de circuito eletrônico desenvolvido no Tinkercad para acionamento de LED. Demonstra conceitos básicos de eletrônica, incluindo uso de resistores, botões e fontes de energia. O projeto simula o funcionamento de um circuito simples com componente luminoso, ideal para introdução à eletrônica digital.'
    },
    {
      id: 2,
      image: 'AJUDAIDOSOTELA.png',
      title: 'Projeto de Conclusão de Curso - Ajuda ao Idoso',
      description: 'Aplicativo mobile desenvolvido no MIT App Inventor como Trabalho de Conclusão de Curso. A solução oferece lembretes personalizados para medicamentos, destinado a idosos e pessoas com deficiência. Inclui funcionalidades como alertas sonoros, interface acessível com botões grandes e recursos de emergência para situações críticas.'
    },
    {
      id: 3,
      image: 'CALCULADORA.png',
      title: 'Calculadora em Linguagem C',
      description: 'Software desenvolvido em linguagem C com funcionalidades avançadas de cálculo. Implementa operações básicas (soma, subtração) e avançadas (divisão, resto da divisão) com tratamento de erros, incluindo verificação de divisão por zero. Interface de linha de comando intuitiva com mensagens descritivas em português.'
    },
    {
      id: 4,
      image: 'CATRACA.png',
      title: 'Circuito Eletrônico - Sistema de Catraca',
      description: 'Sistema de controle de acesso baseado em Arduino UNO, simulando o funcionamento de uma catraca eletrônica. Desenvolvido no Tinkercad, o projeto incorpora sensores, atuadores e lógica de programação para automação de controle de fluxo de pessoas, com indicadores visuais de status.'
    },
    {
      id: 5,
      image: 'CLIMATELA.png',
      title: 'Aplicativo Mobile - Previsão do Tempo',
      description: 'Aplicativo meteorológico desenvolvido no MIT App Inventor com integração de API de previsão do tempo. Apresenta interface intuitiva com dados em tempo real, localização automática e exibição de temperatura em diferentes escalas. Projeto educativo para aprendizado de consumo de APIs RESTful em aplicações mobile.'
    },
    {
      id: 6,
      image: 'FOLHETO PESQ.jpeg',
      title: 'STRONG PLANTS - Projeto de Pesquisa 2023',
      description: 'Projeto abrangente de desenvolvimento de marca e materiais promocionais para sistema de horta inteligente. Inclui criação de identidade visual, site responsivo, folhetos informativos, banners e presença nas redes sociais. Destaque para os benefícios de alimentos naturais sem agrotóxicos, economia de espaço e sistema automatizado de irrigação.'
    },
    {
      id: 7,
      image: 'média.png',
      title: 'Algoritmo em C - Cálculo de Média',
      description: 'Algoritmo desenvolvido em linguagem C para cálculo de média aritmética de três notas. Demonstra conceitos fundamentais de programação como entrada/saída de dados, variáveis, operadores aritméticos e formatação de resultados. Interface amigável em português com prompts claros para o usuário.'
    },
    {
      id: 8,
      image: 'par ou ímpar.png',
      title: 'Algoritmo em C - Verificação Par/Ímpar',
      description: 'Programa em linguagem C para determinação de paridade numérica (números pares ou ímpares). Utiliza operador módulo (%) para verificação matemática, demonstrando aplicação prática de operadores aritméticos e estruturas condicionais (if-else) em programação básica.'
    },
    {
      id: 9,
      image: 'primos.png',
      title: 'Algoritmo em C - Números Primos',
      description: 'Algoritmo avançado em linguagem C para identificação de números primos. Implementa otimização matemática verificando divisibilidade apenas até a metade do número (n/2). Inclui tratamento de casos especiais e retorno informativo sobre a primalidade do número testado.'
    },
    {
      id: 10,
      image: 'SEMAFARO.png',
      title: 'Circuito Eletrônico - Semáforo Interativo',
      description: 'Sistema completo de semáforo inteligente desenvolvido com Arduino. Inclui temporização programável, botão para pedestres solicitarem travessia, e transição segura entre estados (vermelho, amarelo, verde). Projeto demonstra aplicação prática de microcontroladores em soluções de tráfego e segurança urbana.'
    }
  ]

  // Função para construir o caminho correto da imagem
  const getImagePath = (imageName) => {
    // Se estiver em desenvolvimento local, use o caminho normal
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return `/${imageName}`
    }
    // Se estiver no GitHub Pages, use o caminho relativo
    return imageName
  }

  return (
    <section id="projects" className="py-12 bg-neutro-fundo">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-azul-escuro mb-8">Projetos</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={getImagePath(project.image)} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    // Fallback para caso a imagem não carregue
                    e.target.src = 'https://via.placeholder.com/300x200?text=Imagem+não+encontrada';
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-azul-escuro text-center leading-tight">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white rounded-xl max-w-4xl w-full overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="absolute top-4 right-4 text-white bg-azul-escuro rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-dourado transition-colors"
                >
                  X
                </button>
                <img 
                  src={getImagePath(selectedProject.image)} 
                  alt={selectedProject.title}
                  className="w-full h-72 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x400?text=Imagem+não+encontrada';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-azul-escuro mb-4 border-b border-dourado pb-2">{selectedProject.title}</h3>
                <p className="text-neutro-texto leading-relaxed">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
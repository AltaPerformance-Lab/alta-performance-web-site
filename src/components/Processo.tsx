// components/Processo.tsx (VERSÃO CORRIGIDA)
"use client"; // Manter se você já estiver usando FadeInWhenVisible aqui

import React from 'react';
import FadeInWhenVisible from './FadeInWhenVisible'; // Se estiver usando

const etapas = [
  {
    numero: "1",
    titulo: "Imersão e Diagnóstico",
    desc: "Antes de uma linha de código, fazemos uma imersão profunda no seu negócio para entender sua dor real, processos e objetivos. Aqui definimos o 'fit perfeito'."
  },
  {
    numero: "2",
    titulo: "Planejamento e Design (UI/UX)",
    desc: "Desenhamos a solução. Criamos a arquitetura do sistema, o fluxo de navegação (UX) e uma interface (UI) intuitiva, moderna e focada em resultados."
  },
  {
    numero: "3",
    titulo: "Desenvolvimento Ágil",
    desc: "É aqui que a 'Alta Performance Web' ganha vida. Usando nosso stack de ponta (Node, React, Next.js), construímos seu projeto com código limpo e escalável."
  },
  {
    numero: "4",
    titulo: "Lançamento e Otimização",
    desc: "Colocamos sua solução no ar com segurança, monitoramos a performance inicial e garantimos que tudo funcione perfeitamente. Nosso trabalho só termina quando o seu sucesso começa."
  }
];

const Processo = () => {
  return (
    <section id="processo" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <FadeInWhenVisible>
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Temos um Método para o Seu Sucesso
          </h2>
          <p className="mb-16 text-center text-lg text-gray-600">
            Projetos sob medida exigem um processo claro. Da ideia ao lançamento, garantimos transparência e excelência.
          </p>
        </FadeInWhenVisible>

        {/* Linha do tempo visual - Reestruturada */}
        <div className="relative">
          {/* A linha vertical no centro (visível em telas médias e maiores) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gray-200 md:block"></div>
          
          <div className="space-y-16 md:space-y-0"> {/* Aumentei o espaçamento vertical para mobile */}
            {etapas.map((etapa, index) => (
              // Cada etapa agora é um item flexível para controle de layout
              <div 
                key={etapa.numero} 
                className={`relative flex items-center justify-start md:w-full ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end' // Altera o lado em telas maiores
                }`}
              >
                {/* O ponto na linha do tempo (apenas para desktop) */}
                <div 
                  className={`absolute left-1/2 top-1/2 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-blue-600 bg-white md:block z-10`}
                ></div>

                {/* Conteúdo da etapa */}
                <div 
                  className={`w-full p-4 rounded-lg bg-white shadow-md z-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8' // Padding para afastar do centro
                  }`}
                >
                  <FadeInWhenVisible delay={index * 0.1}>
                    <div 
                      className={`flex items-center mb-4 ${
                        index % 2 === 0 ? 'justify-start md:justify-end md:text-right' : 'justify-start'
                      }`}
                    >
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white flex-shrink-0 ${
                          index % 2 === 0 ? 'md:order-2' : 'md:order-1' // Troca a ordem do número e texto
                      }`}>
                        {etapa.numero}
                      </div>
                      <h3 className={`text-2xl font-semibold text-gray-900 ${
                          index % 2 === 0 ? 'md:mr-6 ml-4' : 'md:ml-6 ml-4' // Ajusta margem para texto
                      }`}>
                        {etapa.titulo}
                      </h3>
                    </div>
                    <p className={`text-gray-600 ${
                       index % 2 === 0 ? 'md:text-right' : 'md:text-left' // Alinha o texto da descrição
                    }`}>
                      {etapa.desc}
                    </p>
                  </FadeInWhenVisible>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Processo;
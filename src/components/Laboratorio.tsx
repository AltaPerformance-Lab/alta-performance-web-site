// components/Laboratorio.tsx
"use client";

import React from 'react';
import FadeInWhenVisible from './FadeInWhenVisible';
// Ícones para os botões e para o stack de cada projeto
import { Github, ExternalLink } from 'lucide-react';
import { SiNextdotjs, SiWordpress, SiNodedotjs, SiReact } from 'react-icons/si';

// Nossos 3 projetos-conceito
const projetos = [
  {
    titulo: "Projeto Velocitas",
    categoria: "Site Institucional / Landing Page",
    descricao: "Um showcase de UI/UX e animações fluidas para um produto de luxo. A prova de que um site pode ser bonito e ter nota 100/100 em performance.",
    tech: [
      { nome: "Next.js", icon: <SiNextdotjs /> },
      { nome: "React", icon: <SiReact /> },
    ],
    demoUrl: "#", // (Link para a demo na Vercel no futuro)
    repoUrl: "#"  // (Link para o GitHub no futuro)
  },
  {
    titulo: "Headless E-commerce",
    categoria: "Loja Virtual de Alta Performance",
    descricao: "A solução para a lentidão do e-commerce. Usamos o WordPress/WooCommerce como painel, mas o frontend é 100% Next.js, resultando em uma loja 10x mais rápida.",
    tech: [
      { nome: "Next.js", icon: <SiNextdotjs /> },
      { nome: "WordPress", icon: <SiWordpress /> },
    ],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    titulo: "Dashboard Analítico",
    categoria: "Sistema Web / SaaS",
    descricao: "Uma prova de conceito de um painel de gestão (SaaS) com gráficos interativos e manipulação de dados complexos em tempo real.",
    tech: [
      { nome: "Next.js", icon: <SiNextdotjs /> },
      { nome: "Node.js", icon: <SiNodedotjs /> },
    ],
    demoUrl: "#",
    repoUrl: "#"
  }
];

const Laboratorio = () => {
  return (
    // Fundo cinza-claro para "quebrar" o ritmo das seções brancas/escuras
    <section id="laboratorio" className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        
        <FadeInWhenVisible>
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Nosso Laboratório 🧪
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600 md:text-xl">
            Não apenas dizemos que fazemos. Nós provamos. <br/>
            Veja o que é possível com nossa expertise técnica.
          </p>
        </FadeInWhenVisible>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projetos.map((proj, index) => (
            <FadeInWhenVisible key={proj.titulo} delay={index * 0.1}>
              <div className="flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-white shadow-lg transition-shadow hover:shadow-xl">
                
                {/* Imagem Placeholder (Idealmente 1200x800) */}
                <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                  <span className="text-gray-500">(Imagem do Projeto {proj.titulo})</span>
                </div>

                <div className="p-6 flex-grow">
                  <h3 className="mb-1 text-2xl font-semibold text-gray-900">{proj.titulo}</h3>
                  <p className="mb-4 text-sm font-medium text-blue-600">{proj.categoria}</p>
                  <p className="mb-5 text-gray-600">{proj.descricao}</p>

                  {/* Mini-stack de tecnologia */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-gray-700">Tech:</span>
                    {proj.tech.map(t => (
                      <div key={t.nome} className="flex items-center gap-1 text-gray-500" title={t.nome}>
                        {React.cloneElement(t.icon, { size: 18 })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Os Botões de Ouro */}
                <div className="border-t border-gray-100 p-4 flex gap-4">
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-1/2 items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:bg-blue-700"
                  >
                    <ExternalLink size={16} />
                    Ver Demo
                  </a>
                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-1/2 items-center justify-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
                  >
                    <Github size={16} />
                    Ver Código
                  </a>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Laboratorio;
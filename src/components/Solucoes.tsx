// components/Solucoes.tsx
import React from 'react';
import { Code, ShoppingCart, Monitor } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';

const solucoes = [
  {
    icon: <Code size={40} className="text-blue-600" />,
    titulo: "Sistemas Web Exclusivos",
    paraQuem: "Empresas que precisam de uma solução 100% moldada aos seus processos, superando softwares prontos.",
    entrega: "Plataformas de Gestão (ERP/CRM), Dashboards, Áreas de Membros e Plataformas SaaS prontas para escalar.",
    tecnologia: "Stack de ponta: Node.js, React, Next.js e TypeScript para construir aplicações robustas e seguras."
  },
  {
    icon: <ShoppingCart size={40} className="text-blue-600" />,
    titulo: "E-commerce de Alta Performance",
    paraQuem: "Negócios que levam vendas online a sério e não podem perder clientes por lentidão ou checkout complicado.",
    entrega: "Lojas 100% customizáveis, otimizadas para conversão e integradas com seu ERP, pagamentos e logística.",
    tecnologia: "Flexibilidade do WooCommerce (WordPress) ou arquiteturas Headless (com Next.js) para velocidade extrema."
  },
  {
    icon: <Monitor size={40} className="text-blue-600" />,
    titulo: "Presença Digital Estratégica",
    paraQuem: "Empresas que buscam um site institucional que funcione como uma máquina de geração de autoridade e leads.",
    entrega: "Sites focados em contar sua história e guiar o usuário à ação, com SEO desde a fundação.",
    tecnologia: "Entregamos em WordPress (para autonomia total de conteúdo) ou Next.js (para máxima performance e segurança)."
  }
];

const Solucoes = () => {
  return (
    <section id="solucoes" className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <FadeInWhenVisible>
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            A Solução Exata para o Seu Desafio
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Não importa o tamanho da sua necessidade, temos a tecnologia e a expertise para construir a plataforma ideal.
          </p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solucoes.map((s, index) => (
            <FadeInWhenVisible key={s.titulo} delay={index * 0.1}>
              {/* Adicionado h-full para garantir que todos os cards tenham a mesma altura */}
              <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white shadow-lg transition-shadow hover:shadow-xl">
                <div className="p-6">
                  <div className="mb-4">{s.icon}</div>
                  <h3 className="mb-3 text-2xl font-semibold text-gray-900">{s.titulo}</h3>
                </div>
                
                <div className="flex-grow border-t border-gray-200 p-6">
                  <p className="mb-4 text-gray-600"><span className="font-semibold text-gray-800">Para quem:</span> {s.paraQuem}</p>
                  <p className="mb-4 text-gray-600"><span className="font-semibold text-gray-800">O que entregamos:</span> {s.entrega}</p>
                  <p className="text-gray-600"><span className="font-semibold text-gray-800">Tecnologia:</span> {s.tecnologia}</p>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solucoes;
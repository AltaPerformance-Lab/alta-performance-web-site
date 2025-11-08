// components/Dores.tsx
"use client"; // Necessário por causa do componente FadeIn...

import React from 'react';
import { Zap, Lock, RefreshCcw, Lightbulb } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';
const dores = [
  {
    icon: <Lock size={32} className="text-blue-500" />,
    titulo: "Sua plataforma atual é limitada?",
    desc: "Você sente que seu crescimento está travado por um software que não acompanha a sua demanda ou não permite as funcionalidades que você precisa?"
  },
  {
    icon: <RefreshCcw size={32} className="text-blue-500" />,
    titulo: "Seus sistemas não se integram?",
    desc: "Você perde tempo precioso com retrabalho manual, inserindo dados em planilhas e sistemas diferentes que não conversam entre si?"
  },
  {
    icon: <Zap size={32} className="text-blue-500" />, // Ícone de "raio" quebrando (performance ruim)
    titulo: "Seu site não gera resultados?",
    desc: "Sua presença online até recebe visitas, mas elas não se transformam em clientes reais? A lentidão e a má experiência estão custando vendas?"
  },
  {
    icon: <Lightbulb size={32} className="text-blue-500" />,
    titulo: "Você tem uma visão única?",
    desc: "Você precisa de uma solução tão exclusiva quanto o seu negócio — um sistema, SaaS ou plataforma — que nenhuma ferramenta pronta no mercado pode oferecer?"
  }
];

const Dores = () => {
  return (
    <section id="dores" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <FadeInWhenVisible> {/* Embrulha o título */}
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Seu negócio enfrenta algum destes desafios?
          </h2>
        </FadeInWhenVisible>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {dores.map((dor, index) => (
            // Embrulha cada card e adiciona um delay escalonado
            <FadeInWhenVisible key={dor.titulo} delay={index * 0.1}>
              <div className="h-full rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  {dor.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{dor.titulo}</h3>
                <p className="text-base text-gray-600">{dor.desc}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        <FadeInWhenVisible delay={0.4}> {/* Embrulha a citação */}
          <blockquote className="mt-16 border-l-4 border-blue-500 bg-blue-50 p-6 text-center text-xl italic text-gray-800 md:text-2xl">
            Para cada um desses problemas, existe uma solução de alta performance. <br />
            <span className="font-semibold">Nós não adaptamos o seu negócio a uma ferramenta; nós criamos a ferramenta exata para o seu negócio.</span>
          </blockquote>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Dores;
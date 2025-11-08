// components/Ecossistema.tsx
"use client";

import React from 'react';
import FadeInWhenVisible from './FadeInWhenVisible';
// Ícones para representar parcerias, educação e futuro
import { Users, GraduationCap, Sparkles } from 'lucide-react';

const pilares = [
  {
    icon: <Users size={32} className="text-blue-500" />,
    titulo: "Parcerias Estratégicas",
    desc: "Mantemos uma rede ativa com profissionais e educadores da área, garantindo uma visão 360º sobre as melhores práticas e soluções do mercado."
  },
  {
    icon: <GraduationCap size={32} className="text-blue-500" />,
    titulo: "Vanguarda Tecnológica",
    desc: "Nossa conexão direta com a academia e professores nos mantém na vanguarda, aplicando as arquiteturas mais atuais e eficientes em seu projeto."
  },
  {
    icon: <Sparkles size={32} className="text-blue-500" />,
    titulo: "Formando o Futuro",
    desc: "Estamos comprometidos em formar a próxima geração de talentos através de um programa futuro de estágios e mentorias. Investir em pessoas é investir em performance."
  }
];

const Ecossistema = () => {
  return (
    // Usamos bg-white para contrastar com a seção Stack (bg-gray-900)
    <section id="ecossistema" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        
        <FadeInWhenVisible>
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Mais que uma Agência: Um Ecossistema de Talentos
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600 md:text-xl">
            Acreditamos que a alta performance só é sustentável quando conectada à comunidade.
          </p>
        </FadeInWhenVisible>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pilares.map((p, index) => (
            <FadeInWhenVisible key={p.titulo} delay={index * 0.1}>
              {/* O mesmo card usado em "Diferenciais" para consistência visual */}
              <div className="h-full rounded-lg bg-gray-50 p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    {p.icon}
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">{p.titulo}</h3>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Ecossistema;
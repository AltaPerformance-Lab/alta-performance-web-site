// components/Diferenciais.tsx
import React from 'react';
import { Target, Zap, Users } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';

const diferenciais = [
  {
    icon: <Target size={32} className="text-blue-600" />,
    titulo: "Fit Perfeito (Zero Limites)",
    desc: "Nosso DNA é o 'sob medida'. Não tentamos encaixar o seu negócio em uma plataforma pronta. Nós ouvimos sua necessidade e criamos a plataforma exata para o seu negócio."
  },
  {
    icon: <Zap size={32} className="text-blue-600" />,
    titulo: "Performance Real (Código Limpo)",
    desc: "Nosso nome é nossa promessa. Construímos sites e sistemas com código limpo, otimizado e focado na velocidade. Performance não é um luxo, é o que garante mais conversões."
  },
  {
    icon: <Users size={32} className="text-blue-600" />,
    titulo: "Parceria, Não Apenas Código",
    desc: "Não somos apenas fornecedores; somos seus consultores técnicos. Entramos no seu projeto como parceiros estratégicos, dedicados a resolver seu desafio com tecnologia."
  }
];

const Diferenciais = () => {
  return (
    <section id="diferenciais" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <FadeInWhenVisible>
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Por que escolher a Alta Performance Web?
          </h2>
        </FadeInWhenVisible>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {diferenciais.map((d, index) => (
            <FadeInWhenVisible key={d.titulo} delay={index * 0.1}>
              {/* Adicionado h-full para garantir que todos os cards tenham a mesma altura */}
              <div className="h-full rounded-lg bg-gray-50 p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    {d.icon}
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">{d.titulo}</h3>
                <p className="text-gray-600">{d.desc}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
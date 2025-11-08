// components/Stack.tsx (VERSÃO COM PARTÍCULAS)
"use client";

import React, { useCallback } from 'react'; // <-- Adicionado useCallback
import FadeInWhenVisible from './FadeInWhenVisible';

// Importando ícones (Corrigi SiAmazon para SiAmazonaws)
import { 
  SiNodedotjs, SiReact, SiNextdotjs, SiTypescript, SiWordpress, 
  SiTailwindcss, SiFigma, SiAmazon, SiDocker, SiVercel, 
  SiPostgresql, SiPrisma, SiMongodb, SiGit, SiGithub, SiDigitalocean
} from "react-icons/si";

// Imports para as Partículas
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { particleOptions } from "@/lib/particle-config"; // <-- Nosso arquivo de config

// Array de tecnologias (Corrigido para SiAmazonaws)
const techs = [
  // Linha 1 Desktop
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Prisma", icon: <SiPrisma />, color: "#2D3748" },
  // Linha 2 Desktop
  { name: "WordPress", icon: <SiWordpress />, color: "#21759B" },
  { name: "DigitalOcean", icon: <SiDigitalocean />, color: "#0080FF" }, 
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "GitHub", icon: <SiGithub />, color: "#FFFFFF" },
  { name: "AWS", icon: <SiAmazon />, color: "#FF9900" }, 
  { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF" },
];

const Stack = () => {
  // --- NOVO (Função para carregar o motor das partículas) ---
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  // --- Fim da Novidade ---

  return (
    // --- NOVO (Adicionado 'relative' e 'overflow-hidden') ---
    <section 
      id="stack" 
      className="relative w-full bg-gray-900 py-16 text-white md:py-24 overflow-hidden"
    >

      {/* --- NOVO (Componente de Partículas no fundo) --- */}
      <Particles
        id="stack-particles" // ID único para esta instância
        init={particlesInit}
        options={particleOptions}
        className="absolute inset-0 z-0" // Posiciona atrás de tudo
      />
      
      {/* --- NOVO (Adicionado 'relative' e 'z-10' para o conteúdo) --- */}
      <div className="relative z-10 container mx-auto max-w-6xl px-4 text-center">
        <FadeInWhenVisible>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            As Ferramentas Certas para o Seu Desafio
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-lg text-gray-300">
            Nossa expertise técnica garante que seu projeto seja moderno, escalável e robusto.
          </p>
        </FadeInWhenVisible>
        
        <FadeInWhenVisible delay={0.2}>
          <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
            
            {techs.map((tech) => (
              <div 
                key={tech.name}
                className="flex flex-col items-center justify-center gap-3 rounded-lg border border-gray-700 bg-gray-800 p-4 aspect-square transition-all duration-300 ease-in-out hover:border-gray-500 hover:bg-gray-700"
                style={{ '--icon-color': tech.color } as React.CSSProperties}
              >
                <span style={{ color: tech.color }} className="flex items-center justify-center">
                   {React.cloneElement(tech.icon, { size: 40 })}
                </span>
                <span className="text-xs font-medium text-gray-200 text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </FadeInWhenVisible>
        
        <FadeInWhenVisible delay={0.4}>
          <p className="mx-auto mt-10 max-w-3xl text-base text-gray-400">
            Da performance do <span className="text-white">Node.js</span> à velocidade do <span className="text-white">Next.js</span>, temos o stack completo para entregar a solução ideal.
          </p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Stack;
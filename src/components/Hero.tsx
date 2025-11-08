// components/Hero.tsx
"use client"; // Obrigatório para animações e partículas

import React, { useCallback } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

// Imports para o fundo dinâmico
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // O motor do "plexus"
import type { Engine } from "tsparticles-engine";
import { particleOptions } from "@/lib/particle-config"; // Nosso arquivo de config

const Hero = () => {
  // Função para carregar o motor das partículas
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section 
      id="hero" 
      // "relative" é crucial para o "z-index" funcionar
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-900 text-white"
    >
      {/* 1. O FUNDO DE PARTÍCULAS (z-0, no fundo) */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
        className="absolute inset-0 z-0" // Posiciona atrás de tudo
      />
      
      {/* Container do Conteúdo (z-10, na frente) */}
      <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center">
        
        {/* 2. TIPOGRAFIA + ANIMAÇÃO (H1) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Sistemas, E-commerce e Sites que
            {/* Destaque no resultado */}
            <span className="text-blue-500"> Realmente Fazem a Diferença</span>
            para o Seu Negócio.
          </h1>
        </motion.div>

        {/* 2. TIPOGRAFIA + ANIMAÇÃO (H2) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="mt-6 text-xl text-gray-300 md:text-2xl">
            Soluções de prateleira não atendem?
            {/* Destaque na sua solução */}
            <span className="block font-semibold text-white">Nós construímos o Fit Perfeito.</span>
          </h2>
        </motion.div>
        
        {/* 3. BOTÕES + ANIMAÇÃO */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <a
            href="#cta"
            className="rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-700"
          >
            Quero uma Solução Sob Medida
          </a>

          {/* 4. POLIMENTO DO BOTÃO SECUNDÁRIO */}
          <a
            href="#solucoes"
            className="flex items-center gap-2 rounded-full border border-gray-500 px-6 py-3 text-lg font-medium text-gray-300 transition-all duration-300 ease-in-out hover:border-gray-300 hover:bg-gray-800"
          >
            Conhecer Nossos Serviços <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>

      {/* Camada de "vinheta" opcional para escurecer as bordas e focar o centro */}
      <div className="absolute inset-0 z-5 bg-black opacity-20" />
    </section>
  );
};

export default Hero;
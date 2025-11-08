// components/Header.tsx (VERSÃO FINAL com Mobile Premium ++)
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// Importe AnimatePresence e os ícones de Menu/X
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { nome: "Serviços", href: "#solucoes", id: "solucoes" },
  { nome: "Processo", href: "#processo", id: "processo" },
  { nome: "Diferenciais", href: "#diferenciais", id: "diferenciais" },
  { nome: "Contato", href: "#cta", id: "cta" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // <-- NOSSO ESTADO

  // Efeito para o fundo do header e o scroll spy (sem mudanças)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Lógica do Scroll Spy
      let currentActive = 'hero';
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = item.id;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <> {/* Usamos Fragment para o Header e o Menu serem "irmãos" */}
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled 
            ? 'rgba(17, 24, 39, 0.8)' // bg-gray-900/80
            : 'rgba(17, 24, 39, 0)',   // transparente
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 z-40 w-full text-white" // z-40 para ficar abaixo do menu mobile
      >
        <nav className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href="#hero" className="text-xl font-bold">
            Alta Performance Web
          </Link>
          
          {/* Menu Desktop (igual antes) */}
          <div className="hidden space-x-6 md:flex">
            {navItems.map((item) => (
              <Link 
                key={item.nome} 
                href={item.href} 
                className={`font-medium transition-colors hover:text-blue-400 ${
                  activeSection === item.id ? 'text-blue-400' : 'text-white'
                }`}
              >
                {item.nome}
              </Link>
            ))}
          </div>
          
          {/* CTA Desktop (igual antes) */}
          <Link 
            href="#cta"
            className="hidden rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 md:block"
          >
            Fale Conosco
          </Link>

          {/* ---- BOTÃO HAMBURGER (SÓ MOBILE) ---- */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className="p-2"
              aria-label="Abrir menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ---- O OVERLAY DO MENU MOBILE (Premium ++) ---- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            // O Overlay de fundo
            className="fixed inset-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-gray-900/95 backdrop-blur-lg"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Botão de Fechar (X) */}
            <button
              className="absolute top-4 right-4 p-4 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <X size={32} />
            </button>
            
            {/* Navegação Mobile */}
            <nav className="flex flex-col items-center gap-10 text-center">
              {navItems.map((item, index) => (
                // A animação em "cascata" (staggered)
                <motion.div
                  key={item.nome}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.2 + (index * 0.1), // A mágica da cascata
                    duration: 0.3 
                  }}
                >
                  <Link
                    href={item.href}
                    className="text-3xl font-medium text-gray-200 transition-colors hover:text-blue-400"
                    onClick={() => setIsMobileMenuOpen(false)} // Fecha o menu ao clicar
                  >
                    {item.nome}
                  </Link>
                </motion.div>
              ))}
              
              {/* CTA Mobile (Aparece por último) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (navItems.length * 0.1), duration: 0.3 }}
              >
                <Link 
                  href="#cta"
                  className="rounded-full bg-blue-600 px-10 py-4 text-xl font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-700"
                  onClick={() => setIsMobileMenuOpen(false)} // Fecha o menu ao clicar
                >
                  Fale Conosco
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
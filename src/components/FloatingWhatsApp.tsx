// components/FloatingWhatsApp.tsx
"use client";

import React from 'react';
import { SiWhatsapp } from 'react-icons/si'; // Usando o react-icons
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  const numero = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const mensagem = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE;
  
  // Codifica a mensagem para a URL
  const urlWhatsapp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem || '')}`;

  return (
    <motion.a
      href={urlWhatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg"
      aria-label="Fale Conosco no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <SiWhatsapp size={32} />
    </motion.a>
  );
};

export default FloatingWhatsApp;
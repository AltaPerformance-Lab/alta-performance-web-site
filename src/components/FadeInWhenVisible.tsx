// components/FadeInWhenVisible.tsx
"use client"; // Obrigatório para componentes com interatividade e hooks

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number; // Permite um pequeno atraso (delay)
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Anima apenas uma vez
    threshold: 0.1,    // Começa a animar quando 10% do item estiver visível
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, delay }} // Transição suave de 0.5s
      variants={{
        visible: { opacity: 1, y: 0 }, // Posição final (visível)
        hidden: { opacity: 0, y: 20 }, // Posição inicial (invisível e 20px abaixo)
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
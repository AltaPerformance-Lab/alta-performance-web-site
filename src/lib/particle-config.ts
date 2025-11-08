import type { ISourceOptions } from "tsparticles-engine";

export const particleOptions: ISourceOptions = {
  // O "z-index" aqui é apenas para as partículas em si, 
  // vamos controlar o container com Tailwind
  fullScreen: {
    enable: false,
    zIndex: 0 
  },
  particles: {
    number: {
      value: 60, // Quantidade de pontos
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff" // Cor dos pontos
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.3, // Opacidade dos pontos
      random: false,
      anim: {
        enable: false,
      }
    },
    size: {
      value: 2, // Tamanho dos pontos
      random: true,
      anim: {
        enable: false,
      }
    },
    // O EFEITO "PLEXUS" (LINHAS)
    links: {
      enable: true,
      distance: 150, // Distância para conectar
      color: "#ffffff", // Cor da linha
      opacity: 0.2, // Opacidade da linha
      width: 1
    },
    move: {
      enable: true,
      speed: 1, // Velocidade do movimento
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      // Efeito de "repulsão" ao passar o mouse
      onhover: {
        enable: true,
        mode: "repulse" 
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100, // Distância da repulsão
        duration: 0.4
      }
    }
  },
  detectRetina: true
};
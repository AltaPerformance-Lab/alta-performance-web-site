import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // Importante para os nossos componentes
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',     // Importante para o App Router
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // Aqui é onde adicionaremos cores e fontes personalizadas no futuro
    },
  },
  plugins: [],
};
export default config;
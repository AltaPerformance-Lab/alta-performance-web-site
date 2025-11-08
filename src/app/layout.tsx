// app/layout.tsx (CORRIGIDO)
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

// O objeto metadata está PERFEITO. O Next.js vai pegar isso
// e criar o <head> automaticamente para você.
export const metadata: Metadata = {
  title: 'Alta Performance Web: Sites, E-commerce e Sistemas Sob Medida', 
  description: 'Quando soluções de prateleira não atendem, nós construímos o Fit Perfeito. Especialistas em Next.js, Node.js e React para performance real.',
  openGraph: {
    title: 'Alta Performance Web: Sites, E-commerce e Sistemas Sob Medida',
    description: 'Soluções digitais de alta performance, 100% sob medida.',
    url: 'https://www.altaperformanceweb.com.br', // (Seu domínio quando estiver no ar)
    siteName: 'Alta Performance Web',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // O Next.js gerencia o <html> e <head> por trás das cenas
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* Coloque os dados estruturados aqui. 
            O Next.js é inteligente o suficiente para saber onde colocar os scripts. */}
        <StructuredData /> 
        
        <Header />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
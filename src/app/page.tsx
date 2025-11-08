import Hero from '@/components/Hero';
import Dores from '@/components/Dores';
import Solucoes from '@/components/Solucoes';
import Laboratorio from '@/components/Laboratorio';
import Processo from '@/components/Processo';
import Stack from '@/components/Stack';
import Diferenciais from '@/components/Diferenciais';
import Ecossistema from '@/components/Ecossistema';
import Cta from '@/components/Cta';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Para um layout profissional, geralmente envolvemos cada seção 
        em 'w-full' e usamos um 'container mx-auto' interno para centralizar o conteúdo.
        Vou aplicar isso nos componentes filhos.
      */}

      <Hero />
      <Dores />
      <Solucoes />
      <Laboratorio />
      <Processo />
      <Stack />
      <Diferenciais />
      <Ecossistema />
      <Cta />
      
      {/* Um rodapé simples para começar */}
      <footer className="w-full bg-gray-900 py-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Alta Performance Web. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
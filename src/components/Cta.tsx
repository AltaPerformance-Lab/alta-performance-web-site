// components/Cta.tsx (VERSÃO FINAL POLIDA)
"use client"; 

// Adicionamos useState, useRef e useEffect para os novos polimentos
import React, { useEffect, useState, useRef } from 'react';
import FadeInWhenVisible from './FadeInWhenVisible';
import { useFormState, useFormStatus } from 'react-dom';
import { submitLead } from '@/actions';

// Estado inicial do formulário
const initialState = {
  status: '',
  message: '',
  errors: {},
};

// Componente interno para o Botão (mostra "Enviando...")
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {pending ? 'Enviando...' : 'Enviar e Agendar Consultoria'}
    </button>
  );
}

const Cta = () => {
  const [state, formAction] = useFormState(submitLead, initialState);
  
  // --- NOVO (Polimento 1: Máscara de Telefone) ---
  // Criamos um estado local SÓ para o campo de telefone formatado
  const [phone, setPhone] = useState('');
  
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value;
    v = v.replace(/\D/g, ''); // Remove tudo que não é dígito
    v = v.replace(/^(\d{2})(\d)/g, '($1) $2'); // Coloca parênteses nos dois primeiros
    v = v.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca hífen após o 5º dígito (para celular)
    if (v.length > 15) v = v.slice(0, 15); // Limita o tamanho (XX) XXXXX-XXXX
    setPhone(v);
  };
  // --- Fim do Polimento 1 ---

  // --- NOVO (Polimento 3: Reset do Formulário) ---
  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    if (state.status === 'success') {
      alert(state.message); // O ideal é trocar isso por um 'Toast' (react-hot-toast) no futuro
      formRef.current?.reset(); // Reseta os campos do formulário
      setPhone(''); // Reseta o estado local do telefone
    }
  }, [state]);
  // --- Fim do Polimento 3 ---

  return (
    <section id="cta" className="w-full bg-blue-700 py-16 text-white md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          
          <FadeInWhenVisible>
            <div className="text-center md:text-left">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Vamos construir algo incrível juntos?
              </h2>
              <p className="mb-8 text-lg text-blue-100">
                Chega de soluções limitadas. Estamos prontos para analisar seu desafio e desenhar a plataforma de alta performance que o seu negócio merece.
              </p>
              <p className="text-blue-200">
                Preencha o formulário ao lado ou, se preferir, chame diretamente em nosso WhatsApp.
              </p>
            </div>
          </FadeInWhenVisible>
          
          <FadeInWhenVisible delay={0.2}>
            <div className="rounded-lg bg-white p-8 text-gray-900 shadow-2xl">
              
              <form ref={formRef} action={formAction}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="nome" className="mb-1 block text-sm font-medium">Nome</label>
                    <input 
                      type="text" 
                      id="nome" 
                      name="nome" 
                      required 
                      className="w-full rounded-md border border-gray-400 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Seu nome completo" // <-- NOVO (Polimento 2)
                    />
                    {state?.errors?.nome && <p className="text-sm text-red-500">{state.errors.nome[0]}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full rounded-md border border-gray-400 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="seu@email.com" // <-- NOVO (Polimento 2)
                    />
                    {state?.errors?.email && <p className="text-sm text-red-500">{state.errors.email[0]}</p>}
                  </div>
                  <div>
                    <label htmlFor="telefone" className="mb-1 block text-sm font-medium">Telefone/WhatsApp</label>
                    <input 
                      type="tel" 
                      id="telefone" 
                      name="telefone" 
                      required 
                      className="w-full rounded-md border border-gray-400 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="(XX) XXXXX-XXXX" // <-- NOVO (Polimento 2)
                      value={phone} // <-- NOVO (Polimento 1)
                      onChange={handlePhoneChange} // <-- NOVO (Polimento 1)
                      maxLength={15} // <-- NOVO (Polimento 1)
                    />
                    {state?.errors?.telefone && <p className="text-sm text-red-500">{state.errors.telefone[0]}</p>}
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="mb-1 block text-sm font-medium">Qual desafio você precisa resolver?</label>
                    <textarea 
                      id="mensagem" 
                      name="mensagem" 
                      rows={4} 
                      required 
                      className="w-full rounded-md border border-gray-400 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Conte-nos sobre o seu projeto ou ideia..." // <-- NOVO (Polimento 2)
                    ></textarea>
                    {state?.errors?.mensagem && <p className="text-sm text-red-500">{state.errors.mensagem[0]}</p>}
                  </div>

                  {state.status === 'error' && !state.errors && (
                    <p className="text-sm text-red-500">{state.message}</p>
                  )}

                  <SubmitButton />
                </div>
              </form>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default Cta;
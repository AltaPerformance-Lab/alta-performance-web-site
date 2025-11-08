// OBRIGATÓRIO: Esta linha diz ao Next.js que tudo aqui roda no servidor.
"use server";

import { PrismaClient } from '@prisma/client';
import { z } from 'zod'; // Vamos usar Zod para validação "Premium ++"

// Inicializa o Prisma Client (só fazemos isso uma vez)
const prisma = new PrismaClient();

// Definimos o "formato" que esperamos do formulário (validação)
const LeadSchema = z.object({
  nome: z.string().min(2, { message: "O nome é obrigatório." }),
  email: z.string().email({ message: "O e-mail é inválido." }),
  telefone: z.string().min(8, { message: "O telefone é obrigatório." }),
  mensagem: z.string().min(5, { message: "A mensagem é muito curta." }),
});

// Nossa Server Action
export async function submitLead(prevState: any, formData: FormData) {
  // 1. Extrair os dados do formulário
  const rawData = {
    nome: formData.get('nome'),
    email: formData.get('email'),
    telefone: formData.get('telefone'),
    mensagem: formData.get('mensagem'),
  };

  // 2. Validar os dados com Zod
  const validated = LeadSchema.safeParse(rawData);

  // 3. Se a validação falhar, retorne os erros
  if (!validated.success) {
    return {
      status: 'error',
      message: 'Falha na validação',
      errors: validated.error.flatten().fieldErrors,
    };
  }

  // 4. Se a validação for SUCESSO, salvar no Neon
  try {
    await prisma.lead.create({
      data: {
        nome: validated.data.nome,
        email: validated.data.email,
        telefone: validated.data.telefone,
        mensagem: validated.data.mensagem,
      },
    });

    // 5. Retornar SUCESSO
    return {
      status: 'success',
      message: 'Solicitação enviada com sucesso!',
    };

  } catch (error) {
    // 6. Se o banco falhar, retorne um erro
    console.error("Erro ao salvar no banco:", error);
    return {
      status: 'error',
      message: 'Ocorreu um erro no servidor. Tente novamente.',
    };
  }
}
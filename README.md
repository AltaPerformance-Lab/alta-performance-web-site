# 🚀 Alta Performance Web - Site Institucional

Este é o repositório oficial do site institucional da **Alta Performance Web**.

Mais do que nosso site, este é o "Projeto Laboratório" número um e a prova viva da nossa filosofia de marca:
> "Não tem como oferecer o topo e não estar no topo, oferecer rapidez e não ser veloz."

---

## 🎯 Nossa Filosofia: O "Fit Perfeito"

Cansados de soluções de prateleira lentas e limitadas, construímos este site do zero como a fundação da nossa promessa: performance real, segurança robusta e uma experiência de usuário "Premium ++".

Quando soluções prontas não atendem, nós construímos o "Fit Perfeito".

## 🛠️ O Arsenal (Stack de Tecnologia)

Este site foi construído usando o que há de mais moderno e performático no ecossistema de desenvolvimento web.

### Frontend
* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Biblioteca:** [React 18](https://react.dev/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Animações:** [Framer Motion](https://www.framer.com/motion/)
* **Partículas Dinâmicas:** [react-tsparticles](https://particles.js.org/)

### Backend & Banco de Dados
* **API:** Next.js Server Actions
* **Banco de Dados:** [Neon](https://neon.tech/) (PostgreSQL Serverless)
* **ORM:** [Prisma](https://www.prisma.io/)
* **Validação:** [Zod](https://zod.dev/)

### Hospedagem & Infra
* **Plataforma:** [Vercel](https://vercel.com/)
* **Repositório:** [GitHub](https://github.com/) (Organização)

---

## 🧑‍💻 Rodando Localmente

Quer testar a performance na sua máquina?

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/AltaPerformance-Lab/alta-performance-web-site.git](https://github.com/AltaPerformance-Lab/alta-performance-web-site.git)
    cd alta-performance-web-site
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure o Banco de Dados:**
    * Crie uma conta gratuita no [Neon](https://neon.tech/).
    * Crie um arquivo `.env` na raiz do projeto.
    * Copie sua String de Conexão do Neon e adicione ao `.env`:
        ```.env
        DATABASE_URL="sua_string_de_conexao_neon_aqui?sslmode=require&pg-bouncer=true"
        ```

4.  **Sincronize o Banco de Dados:**
    * Este comando vai ler seu `prisma/schema.prisma` e criar a tabela `leads` no seu banco Neon.
    ```bash
    npx prisma db push
    ```

5.  **Gere o Prisma Client:**
    ```bash
    npx prisma generate
    ```

6.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

Acesse `http://localhost:3000` e veja a mágica acontecer.

---

## ⚡ Quer essa performance para o seu negócio?

Visite nosso site oficial e veja o que a **Alta Performance Web** pode construir para você.

**[Acesse altaperformanceweb.com.br](https://altaperformanceweb.com.br)**

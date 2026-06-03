# Plano de Implementação: Landing Page Profissional / Currículo (Astrojs + Tailwind CSS v4)

Este documento detalha o plano de desenvolvimento do portfólio/currículo do desenvolvedor e Tech Lead **Mailon Torres** (@mr4torr), baseado na imagem de referência fornecida, usando o framework Astro e a nova versão do Tailwind CSS v4.

---

## 🎨 Design & Estética

O layout seguirá a imagem de referência fornecida, adaptado para um perfil técnico de Engenheiro de Software / Tech Lead:
*   **Tema:** Light Mode (Fundo claro, limpo e minimalista) com tipografia refinada.
*   **Cores de Destaque:** Tons neutros de cinza suave (fundo secundário) e botões/acentos em laranja quente/amber (`#f97316` / `bg-orange-500` / `hover:bg-orange-600`).
*   **Tipografia:** Combinação de fontes premium via Google Fonts (ex: **Outfit** para títulos e acentos modernos, e **Inter** para leitura limpa do texto).
*   **Acessibilidade e Interatividade:** Efeitos de hover suaves nos botões, links e cards de projetos, com micro-animações em Tailwind CSS.
*   **Avatar:** Foto de perfil dinâmica obtida diretamente do GitHub (`https://github.com/mr4torr.png`).
*   **Rodapé:** Fundo azul marinho escuro/antracite com imagem de silhueta de montanhas estilizada (conforme a imagem de referência).

---

## 🛠️ Tecnologias e Configuração

*   **Astro v6.4.2**
*   **Tailwind CSS v4** (instalado via `tailwindcss` e `@tailwindcss/vite` na configuração do Vite para performance otimizada).
*   **Ícones:** Inline SVGs otimizados para cada tecnologia e redes sociais, evitando pacotes externos pesados e mantendo o carregamento ultrarrápido.
*   **Dados Dinâmicos:** Importação direta e tipada dos dados em `docs/metadata/config.json`, `docs/metadata/experiences.json` e o parse de `docs/projects.md`.

---

## 🏛️ Estrutura da Página (`index.astro`)

A página única (Landing Page) será estruturada com as seguintes seções:

### 1. Header (Navbar)
*   Menu de navegação fixo com efeito de desfoque de fundo (backdrop-blur) ao rolar a página.
*   Logotipo de texto estilizado: `</> mr4torr` ou `Mailon Torres`.
*   Links rápidos para as seções: *Sobre*, *Habilidades*, *Experiência*, *Projetos* e *Contato*.
*   Botão de chamada para ação (CTA): "Fale Comigo".

### 2. Seção Hero (Apresentação Principal)
*   Inspirada no topo da imagem de referência.
*   Avatar circular centralizado ou flutuado à direita no desktop (GitHub avatar: `https://github.com/mr4torr.png`).
*   Título de Destaque: `Portfólio Profissional` ou `Tech Lead & Arquiteto de Software`.
*   Descrição curta baseada no perfil profissional (`config.json -> preview`).
*   Links de redes sociais principais com ícones oficiais (GitHub, LinkedIn).

### 3. Seção "Eu sou Tech Lead" (Sobre / Métricas)
*   Adaptando a seção "eu sou designer" da imagem de referência.
*   Destaque para a trajetória técnica: prover abstrações, modernizar legados e liderar equipes.
*   Exibição de métricas numéricas em destaque:
    *   **15+** anos de experiência profissional.
    *   **200+** desenvolvedores impactados por suas diretrizes e ferramentas core.
    *   **24** projetos open-source / de estudo no GitHub.

### 4. Grade de Competências (Skills)
*   Exibição das habilidades divididas pelas categorias de domínio de `config.json`:
    *   **Forte/Avançado:** PHP, Symfony, Laravel, Doctrine ORM, Rust, TypeScript, React 19, Bun, ElysiaJS, Drizzle ORM, Software Architecture, Clean Architecture, Docker, Linux, PostgreSQL, MySQL, GitLab CI/CD, APIs REST.
    *   **Médio/Intermediário:** Ruby, Rails, Node.js, Express, Oracle, SQL Server, Redis, MongoDB, AppSec, Nginx, Scrum, Kanban, UX, SEO, etc.
    *   **Básico:** Go Lang, VueJS, CakePHP, jQuery, etc.
*   Cada tecnologia terá seu respectivo logotipo SVG inline para garantir alta qualidade e visual premium.

### 5. Histórico Profissional (Timeline)
*   Linha do tempo vertical moderna e interativa.
*   Cada nó da timeline representará uma experiência de `experiences.json`:
    *   Título da vaga e nome da empresa.
    *   Período de atuação.
    *   Descrição detalhada das responsabilidades e conquistas.
    *   Badges com as tecnologias principais utilizadas em cada experiência.

### 6. Grade de Projetos do GitHub (Filtros Dinâmicos)
*   Seção com tabs interativas para filtrar os projetos de `projects.md` por categoria:
    *   **Categorias:** `Todos`, `Backend (Estudo)`, `Frontend & UI`, `Segurança`, `Ferramentas & Utilidades`, `Temas & Personalizações`, `Estudos & Cursos`.
*   Layout em grade responsiva (CSS Grid) com efeito hover de zoom suave e elevação de sombra.
*   Cards com título do projeto, ícone descritivo, tecnologias destacadas e link direto para o repositório no GitHub.

### 7. Seção de Contato e Rodapé
*   Cards de Contato Direto:
    *   **E-mail:** Link `mailto:` configurado.
    *   **LinkedIn:** Link direto para o perfil profissional.
*   Fundo do rodapé escuro (Navy/Preto) com uma silhueta estilizada de montanha de fundo (gerada por IA e salva no projeto), ícones sociais e dados de formação acadêmica e cursos complementares do Mailon.

---

## 🚀 Proposta de Alterações nos Arquivos

### [MODIFY] `astro.config.mjs`
*   Configurar a integração com o Tailwind CSS v4 através do plugin Vite `@tailwindcss/vite`.

### [MODIFY] `package.json`
*   Instalar `tailwindcss` e `@tailwindcss/vite` como dependências de desenvolvimento.

### [NEW] `src/styles/global.css`
*   Arquivo de estilos globais contendo a importação do Tailwind `@import "tailwindcss";`, definição de variáveis de cores personalizadas, fontes do Google Fonts e animações personalizadas.

### [NEW] `src/components/TechIcon.astro`
*   Componente auxiliar para renderizar os SVGs oficiais de cada tecnologia (PHP, Rust, Symfony, Docker, etc.) de forma dinâmica.

### [MODIFY] `src/pages/index.astro`
*   Implementação completa da landing page consumindo os arquivos JSON e Markdown de `docs/` e implementando a interface responsiva.

### [MODIFY] `src/layouts/Layout.astro`
*   Importar o `global.css`, configurar as fontes e atualizar o título/meta-tags SEO de acordo com o `config.json`.

---

## 🧪 Plano de Verificação

### Testes Automatizados e Builds
1. Executar `bun install` para instalar as novas dependências.
2. Executar `bun run build` para garantir que o build estático do Astro ocorra sem erros.
3. Validar a conformidade de linting e TypeScript (se aplicável).

### Verificação Manual
1. Iniciar o servidor de desenvolvimento local com `bun run dev`.
2. Validar a responsividade da página no navegador (Desktop, Tablet e Mobile).
3. Testar a funcionalidade interativa das abas de filtro dos projetos (JavaScript nativo leve no Astro).
4. Testar a interatividade da linha do tempo e hovers de botões.
5. Garantir que os links externos (GitHub, LinkedIn, E-mail) funcionem corretamente.

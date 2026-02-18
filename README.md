# 🛍️ Product Explorer App

Aplicação web desenvolvida com Vue 3, TypeScript, Pinia e Vite, que permite explorar produtos e gerenciar um carrinho de compras com persistência local.

---

## 📖 Introdução

O **Product Explorer App** é uma Single Page Application (SPA) focada em listagem e visualização de produtos, com funcionalidades completas de carrinho de compras e persistência de dados no navegador.

A aplicação foi construída utilizando o ecossistema moderno do Vue 3, priorizando:

- Organização e escalabilidade
- Tipagem forte com TypeScript
- Performance
- Boa experiência do usuário

---

## 📑 Table of Contents

- [🌐 Deploy Online](#-deploy-online)
- [🚀 Como Rodar o Projeto](#-como-rodar-o-projeto)
- [🏗️ Build para Produção](#️-build-para-produção)
- [🧠 Decisões Técnicas](#-decisões-técnicas)
- [📦 Funcionalidades](#-funcionalidades)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [⚙️ Tecnologias](#️-tecnologias)
- [📋 Requisitos](#-requisitos)
- [🔧 Pontos de Melhoria](#-pontos-de-melhoria)

---

## 🌐 Deploy Online

A aplicação está disponível em:

👉 https://product-explorer-app-two.vercel.app/ 

---

## 🚀 Como Rodar o Projeto

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/wandreyverson/product-explorer-app.git
```

### 2️⃣ Acesse a pasta

```bash
cd product-explorer-app
```

### 3️⃣ Instale as dependências

```bash
npm install
```

### 4️⃣ Execute o projeto

```bash
npm run dev
```

O projeto estará disponível em:

```
http://localhost:5173
```

---

## 🏗️ Build para Produção

Gerar build otimizado:

```bash
npm run build
```

Visualizar build localmente:

```bash
npm run preview
```

---

## 🧠 Decisões Técnicas

### Vue 3 + Composition API

Escolhido por ser o padrão moderno do Vue:

- Melhor organização de código
- Maior reutilização de lógica
- Melhor suporte ao TypeScript
- Mais flexibilidade que Options API

---

### Vite

Motivos da escolha:

- Inicialização extremamente rápida
- Hot reload instantâneo
- Melhor performance que Webpack
- Configuração simples

---

### Pinia (Gerenciamento de Estado)

Gerenciador oficial do Vue 3.

Vantagens:

- API simples e moderna
- Excelente integração com TypeScript
- Mais leve que Vuex

Utilizado para gerenciar:

- Carrinho de compras
- Quantidade de itens
- Total do carrinho

#### Persistência com pinia-plugin-persistedstate

Permite manter os dados do carrinho salvos no navegador, mesmo após recarregar a página.

Isso melhora significativamente a experiência do usuário.

---

### Axios

Utilizado para consumo da API de produtos.

Motivos:

- Simples de usar
- Amplamente utilizado
- Suporte a interceptors
- Fácil tratamento de erros

---

### Vue Router

Responsável pela navegação SPA entre páginas:

- Home
- Carrinho
- Detalhes do produto

---

## 📦 Funcionalidades

- ✔️ Listagem de produtos  
- ✔️ Visualização de detalhes  
- ✔️ Adicionar ao carrinho  
- ✔️ Aumentar quantidade  
- ✔️ Diminuir quantidade  
- ✔️ Remover item  
- ✔️ Cálculo automático do total  
- ✔️ Persistência local  

---

## ⚙️ Tecnologias

- Vue 3  
- TypeScript  
- Vite  
- Pinia  
- Axios  
- Vue Router  

---

## 📋 Requisitos

- Node.js >= 20

---

## 🔧 Pontos de Melhoria

### Arquitetura

- Separar melhor camadas (domain, services, stores)
- Aplicar princípios de Clean Architecture
- Padronizar DTOs

### Testes

- Adicionar testes unitários (Vitest ou Jest)
- Adicionar testes E2E (Cypress ou Playwright)

### UX/UI

- Adicionar loading skeleton
- Melhorar feedback visual
- Adicionar animações
- Melhorar acessibilidade (A11y)

### Funcionalidades Futuras

- Sistema de login
- Backend próprio
- Salvar carrinho no servidor
- Sistema de favoritos

---
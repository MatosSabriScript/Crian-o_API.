# Temporary User API

## Sumário

- [Introdução](#introdução)
- [Instalação](#instalação)
- [Endpoints](#endpoints)
  - [Adicionar um Novo Usuário](#adicionar-um-novo-usuário)
  - [Listar Todos os Usuários](#listar-todos-os-usuários)
  - [Listar Usuários com Status Verdadeiro](#listar-usuários-com-status-verdadeiro)
  - [Listar Usuários com Status Falso](#listar-usuários-com-status-falso)
- [Modelo de Dados](#modelo-de-dados)
- [Exemplos de Uso](#exemplos-de-uso)

## Introdução

Esta API permite a criação e gerenciamento de usuários temporários com atributos específicos. É possível adicionar novos usuários, listar todos os usuários e filtrar usuários com base no status complementado.

## Instalação

1. Clone o repositório.
2. Instale as dependências.
3. Inicie o servidor.

## Endpoints

### **Adicionar um Novo Usuário**

- **URL:** `/usernew`
- **Método:** `POST`
- **Parâmetros:**
  - `raceNumber`: Número da corrida.
  - `statusComplemented`: Status complementado. **(Typeof= Boolean)**
  - `createdAt`: Data de criação.
- **Descrição:** Adiciona um novo usuário temporário e retorna os detalhes do usuário criado.

### **Listar Todos os Usuários**

- **URL:** `/user`
- **Método:** `GET`
- **Descrição:** Retorna a lista de todos os usuários temporários.

### **Listar Usuários com Status Verdadeiro**

- **URL:** `/user/true`
- **Método:** `GET`
- **Descrição:** Retorna a lista de todos os usuários temporários com `statusComplemented` igual a `true`.

### **Listar Usuários com Status Falso**

- **URL:** `/user/false`
- **Método:** `GET`
- **Descrição:** Retorna a lista de todos os usuários temporários com `statusComplemented` igual a `false`.

## Modelo de Dados

### **TempUser**

Um usuário temporário possui os seguintes atributos:

- `id`: Identificador único gerado automaticamente.
- `raceNumber`: Número da corrida.
- `statusComplemented`: Status complementado.
- `createdAt`: Data de criação.

## Exemplos de Uso

### Adicionar um Novo Usuário

Adiciona um novo usuário temporário fornecendo o número da corrida, status complementado e a data de criação. Retorna os detalhes do usuário criado.

### Listar Todos os Usuários

Retorna uma lista de todos os usuários temporários, incluindo seus identificadores únicos, número da corrida, status complementado e data de criação.

### Listar Usuários com Status Verdadeiro

Retorna uma lista de todos os usuários temporários cujo `statusComplemented` é `true`.

### Listar Usuários com Status Falso

Retorna uma lista de todos os usuários temporários cujo `statusComplemented` é `false`.
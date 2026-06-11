# Cypress API Automation

Projeto de automação de testes focado em Back-end e APIs REST, desenvolvido para garantir a confiabilidade, segurança e o formato correto das respostas dos serviços.

## ⚙️ Tecnologias Utilizadas
* Cypress (utilizando `cy.request()`)
* JavaScript
* Node.js

## 📋 Cenários Automatizados
* Validação de retornos com sucesso (Status Code `200 OK` e `201 Created`).
* Tratamento e validação de erros (Status Code `400 Bad Request`, `401 Unauthorized`, `404 Not Found`).
* Validação de Contrato (JSON Schema) para garantir a estrutura do payload de resposta.
* Testes de CRUD (Create, Read, Update, Delete) utilizando os métodos `POST`, `GET`, `PUT` e `DELETE`.
* Medição de tempo de resposta da API.

## 🚀 Como executar o projeto

### Pré-requisitos
É necessário ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Instalação e Execução
1. Clone este repositório para sua máquina local.
2. Acesse a pasta do projeto via terminal e instale as dependências executando:
```bash
npm install

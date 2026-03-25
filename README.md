# Portal de Gestão de Estoque — Módulo de Produtos

> Port do projeto `esig-desafio-tecnico` (C# + ADO.NET + WebForms + SQL Server)
> para stack JavaScript moderna (Node.js + Express + React + PostgreSQL).

---

## 🧭 Contexto e Processo de Desenvolvimento

Este projeto não surgiu do zero. Ele é a evolução direta de um sistema real
que já construí.

### O projeto original

O [`esig-desafio-tecnico`](https://github.com/1nogueirae/esig-desafio-tecnico)
foi desenvolvido em C# como resposta a um desafio técnico real da ESIG Group.
O sistema gerencia cadastro de pessoas, cargos e cálculo de salários, utilizando:

- **ASP.NET WebForms** como camada de apresentação
- **ADO.NET puro** para acesso ao banco (sem ORM)
- **SQL Server** com *stored procedure* para encapsular a lógica de cálculo
- **Crystal Reports** para geração de relatórios em PDF
- **async/await** no processamento de cálculo de salários

Foi um projeto que me ensinou muito sobre arquitetura em camadas, acesso a
dados e as particularidades do ecossistema .NET.

### Por que fazer o port?

Depois de entregar o projeto em C#, decidi reconstruí-lo do zero em
JavaScript — não para abandonar o que aprendi, mas para entender como as
mesmas decisões técnicas se traduzem em um ecossistema completamente diferente.

A pergunta central foi: *"Como eu implementaria as mesmas responsabilidades
— Models, acesso a dados, validação, apresentação — usando Node.js, Express
e React?"*

### Como a IA foi usada como ferramenta

Para simular um ambiente profissional real, utilizei o Claude (Anthropic) no
papel de coordenador técnico de uma empresa fictícia (NovaTech Soluções). Isso
significou:

- Receber uma **especificação técnica formal** — disponível em `/docs` —
  como as que circulam em times de engenharia reais
- Ter um **backlog estruturado por camada técnica** (Models, Controllers,
  Rotas, Front-end, Testes) em vez de uma lista aleatória de tarefas
- Discutir e **justificar decisões técnicas** — como migrar do SQL Server
  para PostgreSQL, e do ADO.NET puro para o driver `pg`
- Ser cobrado em **testes e documentação desde o início**, não como
  um afterthought

A IA não escreveu o código. O papel dela foi estruturar o processo e simular
o tipo de cobrança que existe em um time real.

### Por que isso importa

No projeto C#, eu não tinha testes automatizados, não havia documentação de
API e o gerenciamento era informal. Este port existe para corrigir exatamente
isso — aplicar, na prática, as disciplinas que faltaram na primeira versão:
testes de API com Postman, testes E2E com Cypress e gestão visível com
GitHub Projects.

> O board público do GitHub Projects documenta cada etapa desse processo,
> das issues abertas até as entregas concluídas.

## 📄 Especificação Técnica
O documento de demanda que guiou este projeto está disponível em [`/docs/especificacao_tecnica_novatech.pdf`](./docs/especificacao_tecnica_novatech.pdf).

---

<!-- As seções abaixo serão preenchidas conforme o projeto avançar -->

## 🛠️ Tecnologias

## 📁 Estrutura do Projeto

## ⚙️ Como Rodar Localmente

## 🧪 Como Rodar os Testes

## 📋 Board do Projeto

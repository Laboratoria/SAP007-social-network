# DevDoubt

## Índice

- [1. Resumo do Projeto](#1-resumo-do-projeto)
- [2. Definição do Projeto](#2-definição-do-projeto)
- [3. Planejamento e Organização](#3-planejamento-e-organização)
- [4. Protótipo de Baixa Fidelidade](#4-protótipo-de-baixa-fidelidade)
- [5. Protótipo de Alta Fidelidade](#5-protótipo-de-alta-fidelidade)
- [6. Paleta de Cores](#6-paleta-de-cores)
- [7. Histórias de Usuários](#7-histórias-de-usuários)
- [8. Testes de Usabilidade](#8-testes-de-usabilidade)
- [9. Tecnologias Utilizadas](#9-tecnologias-utilizadas)
- [10. Considerações](#10-considerações)

***

## 1. Resumo do Projeto.

**_DevDoubt_** foi pensado e desenvolvido com a intenção de ajudar os programadores profissionais e os entusiastas a encontrarem respostas para suas dúvidas de forma mais rápida e prática.

Como sabemos, a internet possue uma infinidade de informações, e muitas vezes, para conseguir filtrar essas informações, acaba demandando um bom tempo de experiência, sendo assim, decidimos unir em um só lugar as melhores soluções para seus Bugs ou até mesmo aperfeiçoamento de seu código.

## 2. Definição do Projeto.

O site foi desenvolvido para que o usuário possa navegar de forma simples e prática.

Nossa inspiração para a criação do nosso app, foi o renomado site [Stack Overflow](https://pt.stackoverflow.com/).

A nossa missão foi criar uma [Single-page Application
(SPA)](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica) que fosse responsiva e com mais de uma tela, onde o usuário pudessse criar uma conta de acesso, logar-se com ela, criar, editar, deletar e dar likes em publicações.

Você pode acessar a aplicação utilizando o usuário de teste abaixo:
<div align='center'>

| # | Login | 
|:-----------------------:|:----------------------------: |
| &#128233; | sap007@laboratoria.com.br | 
| &#128272; | lab007 | 

</div>

## 3. Planejamento e Organização.

O projeto foi desenvolvido em trio e a principal ferramenta utilizada para nossa organização foi o Trello.

Nele trabalhamos cada história de usuário e esmiuçamos em Baby Steps, o que facilitou muito a nossa comunicação e desenvolvimento.

Outro ponto bastante positivo, foi que procuramos fazer o projeto na sua grande maioria em pair programming, o que nos ajudou a chegarmos ainda mais perto do resultado esperado.

<img src="readme.img/trello.png">

## 4. Protótipo de Baixa Fidelidade.

Foi esboçado a princípio um projeto em folha de papel, para que pudéssemos juntar as ideias, após, fizemos um protótipo utilizando a ferramenta do Figma.
Houve algumas pequenas mudanças, mas buscamos manter a idéia original.

### Protótipo de baixa fidelidade feita à mão em folha de papel

<img src="readme.img/prototipoBaixaMobile(folha_de_papel).jpg">

### Protótipo de baixa fidelidade feita na ferramenta do Figma

<img src="readme.img/prototipoBaixaMobile.png">

## 5. Protótipo de Alta Fidelidade.

O protótipo de alta fidelidade foi desenvolvido na ferramenta do Figma.

<img src="readme.img/prototipoAltaMobile.png">

## 6. Paleta de Cores.

Nossa paleta de cores foi inspirada no reconhecido site Stack Overflow.

<img src="readme.img/paletaDeCores.jpeg" width= 70%>

## 7. Histórias de Usuários.

Buscamos através das [_Histórias de Usuários_](https://www.canva.com/design/DAE7WS-Ty_8/1xkLEZNoytuAD-69_wOALg/view?utm_content=DAE7WS-Ty_8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink) entender as necessidades do nosso público e trazer um app que possa facilitar o dia a dia dos programadores profissionais e os entusiastas centralizando em um só lugar, as respostas para diversas dúvidas de códigos.

**1**. "Como desenvolvedor, gostaria de poder navegar pelo app e encontrar diversas soluções de problemas".

#### Critérios de aceitação:
- [x] Interface que exiba as soluções postadas.
- [x] Visualização da página que está navegando.

#### Definição de pronto:

- Página HTML que exiba as soluções postadas.
- Estilização conforme protótipo e responsividade.
- Testes unitários e de usabilidade.
- Implementação.

**2**. "Como usuário tendo contato com a aplicação pela primeira vez, gostaria de acessar e saber do que se trata".

#### Critérios de aceitação:
- [x] Interface que defina a finalidade da aplicação.
- [x] Opção de login.

#### Definição de pronto:

- Página HTML que exiba o slogan.
- Inputs de entrada.
- Estilização conforme protótipo e responsividade.
- Testes unitários e de usabilidade.
- Implementação.

**3**. "Como usuário interessado no conteúdo da página, gostaria de efetuar o cadastro para login de acesso".

#### Critérios de aceitação:
- [x] Opção de cadastro.
- [x] Validação do usuário sem repetição.
- [x] Validação do email.
- [x] Validação da senha de modo oculto.
- [x] Voltar para a página de login.

#### Definição de pronto:

- Campos de preenchimento.
- Autenticações.
- Estilização conforme protótipo e responsividade.
- Testes unitários e de usabilidade.
- Implementação.

**4**. "Como usuário da rede social, desejo acessar o aplicativo com a conta Google para um acesso mais rápido".

#### Critérios de aceitação:
- [x] Opção de login com Google.
- [x] Validação da conta Google.

#### Definição de pronto:

- Botão clicável que autentique conta Google e dá acesso ao aplicativo.
- Estilização conforme protótipo e responsividade.
- Testes unitários e de usabilidade.
- Implementação.

**5**. "Como usuário da rede social, gostaria de acessar com meu e-mail e senha".

#### Critérios de aceitação:
- [x] Opção de login.
- [x] Verificar se o usuário está logado.

#### Definição de pronto:

- Botão clicável que permita o login e autentique.
- Estilização conforme protótipo e responsividade.
- Testes unitários e de usabilidade.
- Implementação.

**6**. "Como usuário da rede social, gostaria de postar uma solução encontrada para ajudar outros desenvolvedores".

#### Critérios de aceitação:
- [x] Campo de postagem.
- [x] Campo para título e texto.
- [x] Botão de postagem.

#### Definição de pronto:

- Botão postar funcional.
- Campos de texto com validação de conteúdo.
- Estilização conforme protótipo e responsividade.
- Testes unitários e de usabilidade.
- Implementação.
- Guardar postagens no banco de dados.

**7**. "Como usuário da rede social, gostaria de editar ou deletar a minha postagem".

#### Critérios de aceitação:
- [x] Opção editar que altere a forma de visualização.
- [x] Opção deletar que confirme a exclusão.

#### Definição de pronto:

- Botões de editar e deletar no perfil.
- Campos de texto com validação de conteúdo.
- Estilização conforme protótipo e responsividade.
- Testes unitários e de usabilidade.
- Implementação.
- Guardar as alterações no banco de dados.

**8**. "Como usuário da rede social, gostaria de curtir postagens de outros usuários".

#### Critérios de aceitação:
- [x] Opção de curtida única.
- [x] Contagem ativa das curtidas.
- [x] Exclusão da curtida.

#### Definição de pronto:

- Botão de curtida.
- Ativação e inativação da curtida.
- Adição e subtração da curtida.
- Estilização conforme protótipo e responsividade.
- Testes unitários e de usabilidade.
- Implementação.

## 8. Testes de Usabilidade.

Foram realizados testes de usabilidades com pessoas de diferentes cargos e faixas etárias:

### Mônica Moreira - 22 anos:
_Cargo:_ Social Media (Secretaria Municipal de Saúde SP)

- Diminuir a quantidade mínima de caracteres para poder postar.

Solução: Mantivemos a quantidade mínima de dez caracteres, pois por se tratar de uma rede em que as pessoas publicam soluções, uma quantidade menor de caracteres não seria possível dar informações relevantes.

- Escrita do botão loggin Google com fonte fora da área do botão.

Solução: Ajustamos o layout do botão.

### Karina Silva - 34 anos:
_Cargo:_ Community Manager (Mutato, Draftline Ambev)

- Quando o usuário se loga pelo cadastro de e-mail e senha, o nome não aparece nas postagens.

Solução: Implementamos a funcionalidade em que aparece no post o nome que o usuário utilizou no momento da realização do cadastro.

### Thiago Capelo - 34 anos:
_Cargo:_ Software Engineer (Loft)

- Adicionar o cursor pointer nos botões (ficar uma mãozinha).
- Campo título input ao invés de textarea.

Solução: Implementamos as melhorias propostas.

## 9. Tecnologias Utilizadas.
- HTML 5
- CSS3
- JavaScript Vanilla
- Node.js
- Git
- GitHub
- GitHub Pages
- Jest
- Firebase
- Figma
- Slack
- Trello

## 10. Considerações.

DevDoubt foi desenvolvido por [_Fernanda Monteiro_](https://github.com/Fe-Monteiro), [_Leticia Antunes_](https://github.com/leticiaantunesjpeg) e [_Thaís Bonalume_](https://github.com/moreirathais) uma equipe incrível, sendo nosso terceiro projeto a ser realizado no Bootcamp da <Laboratória> &#128155; na turma SAP007 e nos ensinou sobre:
- Manipulação do DOM, Objetos e Array;
- Funções;
- Consumo de banco de dados externo;
- Firebase;
- Desenvolvimento de testes unitários;
- Responsividade;
- Single-page Application (SPA)
- UX Design;
- GitHub;
- Eslint;
- Aprender a aprender;

Agradecemos por esse grande desafio, pelo trio fantástico e pelo apoio das mentoras, psicólogas e colegas de squad.
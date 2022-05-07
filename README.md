# Bem vindas(os) à DevCooks
### A rede social de receitas práticas para devs!

## Índice

- [1. Introdução à DevCooks](#1-introdução-a-devcooks)
- [2. Nosso Usuário](#2-nosso-usuário)
- [3. Layout](#3-layout)
- [4. Aprendizado](#4-aprendizado)
- [5. Ferramentas Ultilizadas](#5-ferramentas-ultilizadas)
- [6. Tecnologias Ultilizadas](#6-tecnologias-ultilizadas)

## 1. Introdução à DevCooks


### Planejamento

Para a realização do projeto, tomamos como referêcia o período de cinco semanas e ultilizamos da metodologia ágil para nos planejar. A ferramenta ultilizada para esse intuito foi o Notion.

<img src="src/img/pag1html.jpeg" width="350px" alt="Print planejamento Notion">

## 2. Nosso Usuário

A partir da pesquisa que realizamos através do Google Forms,

### Histórias de Usuário

História 1: 

**Enquanto:** Um usuário do DevCooks

**Eu quero:** poder criar uma conta com email e senha

**Para que:** Para ter fácil acesso ao conteúdo do site nas próximas vezes que entrar.

**Critérios de aceitação (para as necessidades do usuário):**
- Ter uma tela de login que peça o cadastro a partir de um e-mail e de uma senha;
- Validar os dados após o login;
- Ter os dados salvos para o próximo acesso;
    
**Definição de pronto(técnico):**
    
**Criação e login de conta de usuário**
- O usuário deve poder criar uma conta de acesso ou autenticar-se com conta de e-mail e senha
- E também com uma conta do Google.
    
 **Validações:**
- Somente usuários com contas válidas têm acesso permitido.
- Não haver usuários repetidos.
- A conta do usuário deve ser um email válido.
- O que o usuário digita no campo de senha (input) deve ser secreto.
- Quando o formulário de registro ou login é enviado, ele deve ser validado.
- Se houver erros, mensagens descritivas devem ser exibidas para ajudar o usuário.

História 2:

**Enquanto:** Um usuário do DevCooks

**Eu quero:** poder criar e editar uma postagem na página de linha do tempo do Dev Cooks

**Para que:** possa compartilhar minhas receitas favoritas com os demais usuários do DevCooks


**Critérios de aceitação (para as necessidades do usuário):**
- O usuário poderá criar uma postagem no feed;
- O post deverá ser validado;
- Verificação de login do usuário no carregamento da página, para que possa ter acesso ao conteúdo dos posts

**Definição de pronto(técnico):**

**Validações:**
- Ao publicar, deve ser validado se há conteúdo no input.

**Comportamento:**
- Criar Template das postagens
- Ao recarregar o aplicativo, é necessário verificar se o usuário está logado antes de exibir o conteúdo (Observador)
- Conseguir publicar um post.
- Ao clicar em editar um post, você deve alterar o texto para um input que permite editar o texto e salvar as alterações.
- Ao salvar as alterações, você deve voltar ao texto normal, mas com a informação editada.
- Ao recarregar a página, poder ver os textos editados.
 
 História 3:

**Enquanto um:** Usuário do DevCooks

**Eu quero:** poder excluir uma publicação criada por mim

**Para que:** possa ter uma interação mais dinâmica com a aplicação e um controle sobre o conteúdo que compartilho

**Critérios de aceitação (para as necessidades do usuário):**
- O usuário poderá excluir uma postagem que ele criou;
- Após a exclusão, a publicação não será mais disponível a acesso e visualização;

**Definição de pronto(técnico):**
- Poder excluir uma postagem específica.
- Solicitar confirmação antes de excluir um post.

História 4:

**Enquanto um:** Usuário do DevCooks

**Eu quero:** poder dar likes nas publicações da linha do tempo do Dev Cooks

**Para que:** possa interagir com os outros usuários do DevCooks

**Critérios de aceitação (para as necessidades do usuário):**
- O usuário poderá curtir e descurtir as publicações criadas no feed do DevCooks;
- A contagem de curtidas deverá estar visível aos demais usuários;
- Será permitido uma única curtida por usuário em cada postagem;

**Definição de pronto(técnico):**
- Poder dar e remover likes em uma publicação. Máximo de um por usuário.
- Visualizar contagem de likes.

## 3. Protótipos de Layout

Para este projeto, tínhamos que fazer primeiro um protótipo de baixa fidelidade, mais simples e sem necessidade de usar ferramentas, apenas para esboçar uma primeira solução de interface que suprisse as necessidades do usuário.


Ultilizamos o Figma para fazer o protótipo de alta fidelidade

### Layout escolhido:


## 4. Aprendizado

O projeto Social Network foi um divisor de águas, porque além de ter sido sido cumulativo com conhecimentos adquiridos nos anteriores, apresentou para nós esse "proto back end" com a criação de um banco de dados pelo Firestore, pois antes só havíamos usado bancos de dados prontos. 

Também aprendemos como usar serviços do Firebase de autenticação, fazer de postagens, dar likes, log out e log in de usuário entre outros, que envolvem promises, dando para nós um panorama real de como funciona o mecanismo do assincronismo dentro de apps.

Não poderia deixar de ressaltar que no final, todos as linhas de código tem como finalidade chegar ao usuário com a melhor interface possível, de uma forma intuitiva e simples de usar. Por isso, a parte de pesquisa para entender quais as reais necessidades dos nossos usuários foi essencial, assim conseguimos filtrar o que seria crucial de ter em nosso app. 
 

## 5. Ferramentas Ultilizadas

**Código:**
-Vscode: editor de código.
-Git & Github: controle de versão, criação de branchs, commits e deploy final no Github Pages.

**Comunicação & Planejamento:**
-Notion
-Zoom
-Whatsapp
-Live Share
-Slack

## 6. Tecnologias Ultilizadas

-JavaScript (vanilla)
-HTML5
-CSS3
-Node.js
-Jest (testes unitários do JavaScript)
-Firebase e Firestore
-Figma (protótipo)

### Projeto desenvolvido por Louiza Lima e Isabela Gregoraci- SAP007 Laboratória 2022

<table>
  <tr>
    <td alig="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/72285598?v=4" width="100px" alt="Foto de Louiza Lima"/><br>
        <sub>
          <h2><a style="color:purple" href="https://github.com/loulima" target="_blank">Louiza Lima</a></h2><br>
        </sub>
      </a>
    </td>
    <td alig="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/90584412?v=4" width="100px;" alt="Foto de Isabela Gregoraci"/><br>
        <sub>
          <h2><a style="color:purple" href="https://github.com/Gregisa" target="_blank">Isabela Gregoraci</a></h2><br>
        </sub>
      </a>
    </td>
  </tr>
</table>

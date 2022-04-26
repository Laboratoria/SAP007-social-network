<div align="center">
   <img alt="Logo Eu, Poesia" src="/src/img/logo-background.png">

## Eu, Poesia é uma rede social para postar poesias.

**Status do Projeto:** _Em Andamento_
  
**Deploy:** 
</div>

---

## ÍNDICE

* [1. Introdução](#1-introdução)
* [2. Histórias de Usuários](#2-histórias-de-usuários)
* [3. Critérios de Aceitação](#3-critérios-de-aceitação)
* [4. Definição de Pronto](#4-definição-de-pronto)
* [5. Protótipos](#5-protótipos)
* [6. Tecnologias Utilizadas](#6-tecnologias-utilizadas)
* [7. Autoras](#7-autoras)

***

## 1. INTRODUÇÃO

A rede social Eu, Poesia tem como objetivo reunir pessoas que gostam de escrever e/ou ler poesias. Para criar um cadastro nela basta escolher um nome de usuário, colocar um e-mail e criar uma senha de, no mínimo, seis dígitos. Após ter sua conta criada, o usuário pode publicar poesias, ver o que outros usuários postaram e curtir aquelas que lhe agradam. Cada usuário possui uma página de perfil em que fica visível o seu nome de usuário e o email que está sendo utilizado. Além disso, o usuário consegue ver todas as suas publicações podendo editá-las ou apagá-las. 

## 2. HISTÓRIAS DE USUÁRIOS

### História de usuário 1
>"Como uma pessoa que gosta de poesias, quero criar uma conta na rede social Eu, poesia."
Para isso, ao entrar na página inicial, o futuro usuário precisará clicar em "Registre-se" e, então, será direcionado para a página de cadastro em que deverá digitar Nome de usuário, e-mail e Senha. Caso o cadastro seja concluído aparecerá uma mensagem de sucesso e o usuário será redirecionado para a página de publicações. Caso contrário, aparecerá uma mensagem explicativa de erro.
<br>

### História de usuário 2
>"Como usuário da rede social Eu, Poesia quero entrar em minha conta."
Ao acessar a página inicial da rede social, o usuário poderá colocar seu email e senha de cadastro. Se as informações estivererm corretas, será direcionado para a página "Feed" em que poderá ver todas as publicações e fazê-las também. Caso as informações estejam incorretas aparecerá uma mensagem explicativa de erro. Ainda, se o usuário tiver esquecido sua senha poderá clicar em "Esqueci a senha" para fazer a redefinição.
<br>

### História de usuário 3
>"Como usuário da rede social Eu, Poesia quero entrar em minha conta porém esqueci minha senha."
Ao clicar em "Esqueci a senha" na página de login, o usuário será levado para uma página em que deverá digitar o email que foi utilizado para cadastro. Assim, será encaminhado para sua caixa de entrada um e-mail em que, ao clicar no link, será possível digitar uma nova senha. Após isso, basta o usuário voltar para a página de login, digitar seu e-mail e sua nova senha e então será redirecionado para o "Feed".
<br>

### História de usuário 4
>"Como usuário da rede social Eu, Poesia quero sair da minha conta."
Após o usuário logar em sua conta, todas páginas da rede social terão a opção de Sair de sua conta. Ao clicar nessa opção o usuário, é direcionado para a página inicial.
<br>

### História de usuário 5
>"Como usuário da rede social Eu, Poesia quero publicar minhas poesias."
Na página Feed, o usuário encontrará um campo para digitar sua poesia. Ao clicar no botão "Publicar", o post passará a integrar o feed.
<br>

### História de usuário 6
>"Como usuário da rede social Eu, Poesia quero ver as poesias dos outros usuários."
Logo abaixo da área para digitar sua poesia, o usuário encontrará todos os posts que foram realizados. Cada post mostrará a poesia digitada, a data em que foi criado, o nome do usuário que o fez e a quantidades de likes que recebeu. 
<br>

### História de usuário 7
>"Como usuário da rede social Eu, Poesia quero dar like em poesias que gostei"
Para dar like em suas poesias favoritas o usuário só precisará clicar no ícone em formato de coração que, de cinza passará a ser roxo. O usuário poderá curtir cada post apenas uma vez e ao clicar novamente no ícone, o usuário retirará o like e o coração voltará a ser cinza. 
<br>

### História de usuário 8
>"Como usuário da rede social Eu, Poesia quero editar uma publicação que havia feito."
O usuário deverá entrar na página "Meu Perfil". Lá ele verá todos os seus posts e um ícone de lápis para poder realizar a edição naquele que desejar.
<br>

### História de usuário 9
>"Como usuário da rede social Eu, Poesia quero deletar uma publicação que havia feito."
Ainda na página "Meu Perfil", em cada post realizado haverá um ícone de lixeira que, ao ser clicado, confirmará se o usuário realmente quer apagar o post. O post só será apagado se a opção escolhida for "Sim".

## 3. CRITÉRIOS DE ACEITAÇÃO
- Uma mensagem de erro deve aparecer se ocorrer algum erro no login/registro;
- O usuário não pode conseguir entrar na rede social se ocorrer algum erro;
- Um usuário pode curtir apenas uma vez cada post;
- Criar novos posts;
- Aparecer todos os posts realizados;
- Edições e exclusões permitidas apenas para os posts do próprio usuário;

## 4. DEFINIÇÃO DE PRONTO
- Ser uma SPA (Single Page Application).
- Ser responsivo - Mobile First.
- Receber code review de pelo menos uma parceira de outra equipe.
- Fazer testes unitários.
- Fazer testes manuais buscando erros e imperfeições simples.
- Fazer testes de usabilidade e incorporar o feedback dos usuários como melhorias.
- Fazer deploy do aplicativo e marcar a versão (git tag).

## 5. PROTÓTIPOS

## 6. TECNOLOGIAS UTILIZADAS

- **Firebase**
  - **[Authentication](https://firebase.google.com/docs/auth?authuser=0&hl=pt)**
  - **[Firestore](https://firebase.google.com/docs/firestore?hl=pt&authuser=0)**
- **JavaScript Vanilla**
- **CSS3**
- **HTML5**
- **GitHub**
- **Visual Studio Code**
- Planejamento: **[Whimsical](https://www.whimsical.com/)**
- Protótipos: **[Figma](https://www.figma.com/)**
- Edições de imagem: **[Canva](https://www.canva.com/)**

## 7. AUTORAS

<table>
  <td>
    <div align= "center">
      <img alt="Beatriz de Sousa Carvalho" height="150" src="https://avatars.githubusercontent.com/u/99045620?v=4"> 
    </div>
    <h3 align="center"><a href="https://github.com/BeaSCarvalho">Beatriz de Sousa Carvalho</a></h3>
    <h4 align="center">Projeto do Bootcamp da <em><a href="https://hub.laboratoria.la/br">Laboratoria</a></em></h4>
    <div align="center">
       <a href = "mailto:beaproscarva@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
      <a href="https://www.linkedin.com/in/beatriz-de-sousa-carvalho/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
    </div>
  </td>
  
  <td>
    <div align= "center">
      <img alt="Maria Luiza Costa" height="150" src="https://avatars.githubusercontent.com/u/97482423?v=4"> 
    </div>
    <h3 align="center"><a href="https://github.com/MariaLuizaSantana">Maria Luiza Costa</a></h3>
    <h4 align="center">Projeto do Bootcamp da <em><a href="https://hub.laboratoria.la/br">Laboratoria</a></em></h4>
    <div align="center">
      <a href = "mailto:costamalu123@outlook.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
      <a href="https://www.linkedin.com/in/maria-luiza-costaa/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
    </div>
  </td>
  
  <td>
    <div align= "center">
      <img alt="Raele Pereira" height="150" src="https://media-exp1.licdn.com/dms/image/C4D03AQFk_iaYzngkkg/profile-displayphoto-shrink_800_800/0/1649704776713?e=1656547200&v=beta&t=9xAY_61Jm1xlDdJ4b-85IdD3kNdnVMCahzl5WQC-SJI"> 
    </div>
    <h3 align="center"><a href="https://github.com/raelepereira">Raele Pereira</a></h3>
    <h4 align="center">Projeto do Bootcamp da <em><a href="https://hub.laboratoria.la/br">Laboratoria</a></em></h4>
    <div align="center">
      <a href = "mailto:raelepereira.nutri@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
      <a href="https://www.linkedin.com/in/raelepereira/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
    </div>
  </td>
</table>
  
  



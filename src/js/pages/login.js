import {
  authUserLabFriends,
  authUserWithGoogle,
  forgotPassword,
} from "../../config/authentication.js";
import { initModal } from "../components/modal.js";

export function createLogin() {
  const container = document.createElement("section");
  container.classList.add("container-login");
  container.innerHTML = `
      <form class="user-form">
        <img src="./img/log-labfriends-black.png" id="logo" alt="Logo da LabFriends">
        <label for="user-email" class="user-label">Email</label>
        <input type="email" id="user-email" class="user-input" placeholder="Digite seu email">
        <label for="user-password" class="user-label">Senha</label>
        <input type="password" id="user-password" class="user-input input-password-spacing" placeholder="Digite sua senha">
        <a href="#" type="button" class="link small-text-right modal-open" data-modal="open">
          Esqueceu a senha?
        </a>
        <span id="message"></span>
        <button type="submit" id="login-labfriends" class="user-button button-pink">
          ENTRAR
        </button>
        <div class="line">
          <span class="text-line">ou</span>
        </div>
        <button id="login-google" class="user-button  button-green"> 
          <img class="icon-button" src="./img/icons/icon-logo-google.ico">  
          ENTRAR COM GOOGLE
        </button>
        <p class="new-account" >
          Não tem conta?<br> <a href="#register" class="emphasis-pink">Crie uma conta agora!</a>
        </p>
      </form>

      <section class="modal-container" data-modal="container">
        <div class="modal">
          <button class="modal-close" data-modal="close">X</button>
          <label for="user-email-reset" class="title-modal">Informe o seu email</label>
          <input type="email" id="user-email-reset" class="user-input-modal" placeholder="Digite seu email">
          <button type="submit" id="button-reset-password" class="user-button button-pink">
            ENVIAR POR EMAIL
          </button>
          <span id="message-reset"></span>
        </div>
      </section>
    `;

  const buttonLoginLabfriends = container.querySelector("#login-labfriends");
  const buttonLoginGoogle = container.querySelector("#login-google");
  const buttonResetPassword = container.querySelector("#button-reset-password");
  const modalOpen = container.querySelector('[data-modal="open"');
  const modalClose = container.querySelector('[data-modal="close"]');
  const modalContainer = container.querySelector('[data-modal="container"]');

  buttonLoginLabfriends.addEventListener("click", loginLabFriends);
  buttonLoginGoogle.addEventListener("click", loginGoogle);
  buttonResetPassword.addEventListener("click", resetPassword);
  initModal(modalOpen, modalClose, modalContainer);

  return container;
}

function loginLabFriends(e) {
  e.preventDefault();
  const email = document.querySelector("#user-email").value;
  const password = document.querySelector("#user-password").value;
  const newEmail = email.match(/[\w.\-+]+@[\w-]+\.[\w-.]+/gi);
  const message = document.querySelector("#message");

  if (!email || !password) {
    message.innerHTML = "Preencha todos os campos!";
  } else if (!newEmail) {
    message.innerHTML = "Preencha o campo de email corretamente!";
  } else if (email && password && newEmail) {
    authUserLabFriends(email, password);
  }
}

function loginGoogle(e) {
  e.preventDefault();
  authUserWithGoogle();
}

function resetPassword(e) {
  e.preventDefault();
  const emailResetPassword = document.querySelector("#user-email-reset").value;
  const messageReset = document.querySelector("#message-reset");
  forgotPassword(emailResetPassword)
    .then(() => {
      messageReset.innerHTML = "Email enviado com sucesso!";
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/missing-email":
          messageReset.innerHTML = "Preencha o campo de email!";
          break;
        case "auth/user-not-found":
          messageReset.innerHTML =
            "Usuário não encontrado! Cadastre-se no LabFriends!";
          break;
      }
    });
}

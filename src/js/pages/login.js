import { initModal } from '../components/modal.js';
import { userValidation, resetEmailValidation } from '../components/user-validation.js';
import { GoogleAuthProvider } from '../../config/export.js';
import { authUserWithGoogle } from '../../config/authentication.js';

const redirectedPage = '#feed';
const regexEmail = /[\w.\-+]+@[\w-]+\.[\w-.]+/gi;

export function createLogin() {
  const container = document.createElement('section');
  container.classList.add('container-login');
  container.innerHTML = `
      <form class="user-form">
        <img src="./img/log-labfriends-black.png" id="logo" alt="Logo da LabFriends">
        <label for="user-email" class="user-label">Email</label>
        <input type="email" id="user-email" class="user-input" placeholder="Digite seu email">
        <label for="user-password" class="user-label">Senha</label>
        <input type="password" id="user-password" class="user-input input-password-spacing" placeholder="Digite sua senha">
        <a href="#" type="button" class="link small-text-right" data-email="open">
          Esqueceu a senha?
        </a>
        <p id="message"></p>
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

      <section class="modal-container" data-email="container">
        <div class="modal">
          <button class="modal-close" data-email="close">X</button>
          <label for="user-email-reset" class="title-modal">Informe o seu email</label>
          <input type="email" id="user-email-reset" class="user-input-modal" placeholder="Digite seu email">
          <button type="submit" id="button-reset-password" class="user-button button-pink">
            ENVIAR POR EMAIL
          </button>
          <p id="message-reset"></p>
        </div>
      </section>
    `;

  return container;
}

function loginLabFriends(e) {
  e.preventDefault();
  const name = '';
  const email = document.querySelector('#user-email').value;
  const password = document.querySelector('#user-password').value;
  const passwordRepeat = '';
  const validatedEmail = email.match(regexEmail);
  userValidation(name, email, validatedEmail, password, passwordRepeat);
}

function resetPassword(e) {
  e.preventDefault();
  const emailClean = document.querySelector('#user-email-reset');
  const emailReset = emailClean.value;
  const validatedEmail = emailReset.match(regexEmail);
  resetEmailValidation(emailReset, validatedEmail);
}

function loginGoogle(e) {
  e.preventDefault();
  authUserWithGoogle()
    .then(() => {
      window.location.hash = redirectedPage;
    })
    .catch((error) => {
      GoogleAuthProvider.credentialFromError(error);
    });
}

export function loginWorking() {
  const buttonLoginLabfriends = document.querySelector('#login-labfriends');
  const buttonLoginGoogle = document.querySelector('#login-google');
  const buttonResetPassword = document.querySelector('#button-reset-password');
  const modalOpen = document.querySelector('[data-email="open"');
  const modalClose = document.querySelector('[data-email="close"]');
  const modalContainer = document.querySelector('[data-email="container"]');

  buttonLoginLabfriends.addEventListener('click', loginLabFriends);
  buttonLoginGoogle.addEventListener('click', loginGoogle);
  buttonResetPassword.addEventListener('click', resetPassword);
  initModal(modalOpen, modalContainer, modalClose);
}

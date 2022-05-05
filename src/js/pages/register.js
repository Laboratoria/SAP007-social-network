import { userValidation } from '../components/user-validation.js';

function registerUser(e) {
  e.preventDefault();
  const name = document.querySelector('#user-name').value;
  const email = document.querySelector('#user-email').value;
  const password = document.querySelector('#user-password').value;
  const passwordRepeat = document.querySelector('#user-password-repeat').value;
  const validatedEmail = email.match(/[\w.\-+]+@[\w-]+\.[\w-.]+/gi);
  const message = document.querySelector('#message');
  userValidation(name, email, validatedEmail, password, passwordRepeat, message);
}

export function createRegister() {
  const container = document.createElement('section');
  container.classList.add('container-login');
  container.innerHTML = `
    <form class="user-form">
      <img src="./img/log-labfriends-black.png" id="logo" alt="Logo da LabFriends">
      <label for="user-name" class="user-label">
        Nome Social
      </label>
      <input type="text" name="user-name" id="user-name" class="user-input" placeholder="Digite seu nome">
      <label for="user-email" class="user-label">
        Email
      </label>
      <input type="email" name="user-email" id="user-email" class="user-input" placeholder="Digite seu email">
      <label for="user-password" class="user-label">
        Senha
      </label>
      <input type="password" name="user-password" id="user-password" class="user-input" placeholder="Digite sua senha">
      <label for="user-password-repeat" class="user-label">
        Repita a Senha
      </label>
      <input type="password" name="user-password-repeat" id="user-password-repeat" class="user-input" placeholder="Digite sua senha novamente">
      <p id="message"></p>
      <input type="submit" value="CRIAR CONTA" id="new-login" class="user-button button-green">
      <a href="#login" class="link small-text-right">
        < Voltar para o Login
      </a>
    </form>
    `;

  const buttonNewUser = container.querySelector('#new-login');
  buttonNewUser.addEventListener('click', registerUser);
  return container;
}

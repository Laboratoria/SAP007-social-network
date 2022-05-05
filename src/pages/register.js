import { userCreate } from '../lib/authentication.js';

export default () => {
  const container = document.createElement('form');
  container.setAttribute('class', 'container-register');

  const template = `
    <div class="template">
      <input class="username" placeholder="nome de usuário" required></input>
      <input class="email-register" placeholder="e-mail" type="email" required></input>
      <span class="error"></span>
      <input class="password-register" placeholder="senha" minlength="6" type="password" required></input>
      <button class="button-enter" type="submit">Cadastrar</button>
      <span class="registered"></span>
      <div class="user-register">
        <a href="#">Já tenho um cadastro</a>
      </div>
    </div>
  `;

  container.innerHTML = template;

  const email = container.querySelector('.email-register');
  const password = container.querySelector('.password-register');
  const message = container.querySelector('.error');
  const registered = container.querySelector('.registered');
  const userName = container.querySelector('.username');

  container.addEventListener('submit', (e) => {
    e.preventDefault();
    userCreate(email.value, password.value, userName.value)
      .then(() => {
        registered.innerHTML = 'Usuário(a) cadastrado(a) com sucesso';
        setTimeout(() => {
          window.location.hash = '#timeline';
        }, 2000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (error.code === 'auth/invalid-email') {
          message.innerHTML = 'Digite um e-mail válido';
        } else if (error.code === 'auth/email-already-in-use') {
          message.innerHTML = 'Esse e-mail já está sendo utilizado';
        }
        return errorMessage;
      });
  });
  return container;
};

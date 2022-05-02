import { userLogin, googleLogin } from '../lib/authentication.js';

export default () => {
  const container = document.createElement('form');
  container.setAttribute('class', 'container');

  const template = `
    <div class="login"><input class="input-email" placeholder="e-mail" type="email" required></input>
      <span class="error-email"></span>
      <input class="input-password" placeholder="senha" minlength="6" type="password" required></input>
      <span class="error-password"></span>
      <button class="enter" type="submit">Entrar</button>
      <p>ou</p>
      <button class="google-button" type="submit"><img class="google-logo" src="./images/google.png" alt="google-icon"/>Login com o Google</button>
    </div>
    <div class="register">
      <a href="#register">Cadastre-se</a>
    </div>
    `;

  container.innerHTML = template;

  const email = container.querySelector('.input-email');
  const password = container.querySelector('.input-password');
  const googleButton = container.querySelector('.google-button');
  const messageEmail = container.querySelector('.error-email');
  const messagePassword = container.querySelector('.error-password');

  container.addEventListener('submit', (e) => {
    e.preventDefault();
    userLogin(email.value, password.value)
      .then(() => {
        window.location.hash = '#timeline';
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (error.code === 'auth/user-not-found') {
          messageEmail.innerHTML = 'E-mail não cadastrado';
          email.value = '';
          password.value = '';
        } else if (error.code === 'auth/wrong-password') {
          messagePassword.innerHTML = 'Senha inválida';
          email.value = '';
          password.value = '';
        }
        return errorMessage;
      });
  });

  googleButton.addEventListener('click', (e) => {
    e.preventDefault();
    googleLogin()
      .then(() => {
        window.location.hash = '#timeline';
      })
      .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });
  });

  return container;
};

import '../firebase/FireBaseConfig.js';
import {
  signinWithGoogle,
  signinPassword,
} from '../firebase/authentication.js';

export default () => {
  const containerHome = document.createElement('div');
  containerHome.setAttribute('class', 'container');
  const templateHome = `
  <div class='home'>
  <h3 class="login-title">Acesse a sua conta para continuar</h3>
  <input type="email" placeholder="E-mail" class="input-email" id="email">
  <input type="password" placeholder="Senha" class='input-password' id="password">
  <button type="submit" id="submit-form" class="btns">Acessar</button>
  <p class="reset-password">
    Esqueceu a senha?
    <button type="submit" class="btns">Redefinir minha senha </button>
  </p>
  <p> OU </p>
  <button type="submit" class="btn-google"><img src="img/google.png" alt="botão Google">Entrar com o Google </button>
  <p id="register">
    Não possui uma conta?
    <button type="submit" class="btns">Cadastrar uma nova conta</button>
  </p>
  `;
  containerHome.innerHTML = templateHome;
  const email = containerHome.querySelector('.input-email');
  const password = containerHome.querySelector('.input-password');
  const google = containerHome.querySelector('.btn-google');
  containerHome.addEventListener('submit', (e) => {
    e.preventDefault();
    signinPassword(email.value, password.value)
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });
  });
  google.addEventListener('click', (e) => {
    e.preventDefault();
    signinWithGoogle().then(() => {
      window.location.hash = '#feed';
    });
  });
  return containerHome;
};

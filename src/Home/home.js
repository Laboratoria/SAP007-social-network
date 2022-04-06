import '../firebase/FireBaseConfig.js';
import {
  signinWithGoogle,
  signinPassword,
} from '../firebase/authentication.js';

export default () => {
  const containerHome = document.createElement('div');
  containerHome.setAttribute('class', 'containerHome');
  const templateHome = `
  
  <h3 class="login-title">Acesse a sua conta para continuar</h3>
  <input type="email" placeholder="E-mail" class="input-email" id="email">
  <span class="failed-email"></span>
  <input type="password" placeholder="Senha" class='input-password' id="password">
  <span class="failed-password"></span>
  <button type="submit" id="submit-form" class="btn-google">Acessar</button>
  <p class="reset-password">
    Esqueceu a senha?
    <a href="#">Redefinir minha senha </a>
  </p>
  <p> OU </p>
  <button type="submit" class="btn-google"><img src="img/google.png" alt="botão Google">Entrar com o Google
  </button>
  <p id="register">
    Não possui uma conta?
    <a href="#Register">Não Possui conta?</a>
  </p>
 
  `;
  containerHome.innerHTML = templateHome;
  const email = containerHome.querySelector('.input-email');
  const password = containerHome.querySelector('.input-password');
  const google = containerHome.querySelector('.btn-google');
  const mgsErrorEmail = containerHome.querySelector('.failed-email');
  const mgsErrorpassword = containerHome.querySelector('.failed-password');

  containerHome.addEventListener('submit', (e) => {
    e.preventDefault();
    signinPassword(email.value, password.value)
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (error.code === 'auth/user-not-found') {
          mgsErrorEmail.innerHTML =
            'Não há registro de usuário com e-mail fornecido';
        } else if (error.code === 'auth/invalid-password') {
          mgsErrorpassword.innerHTML = 'Senha inválida';
        }
        return errorMessage;
      });
  });
  google.addEventListener('click', (e) => {
    e.preventDefault();
    signinWithGoogle()
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });
  });
  return containerHome;
};

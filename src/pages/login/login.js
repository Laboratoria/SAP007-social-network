// aqui exportaras las funciones que necesites

import { createLogin } from '../register/page-register.js';

export const pageLogin = () => {
  const main = document.getElementById('root');
  main.innerHTML = '';
  const login = document.createElement('div');
  login.setAttribute('class', 'box-form-login');
  login.innerHTML = `
   <link rel="stylesheet" href="./pages/login/login.css"/> 
   <section class="box-slogan">
      <figure class="box-slogan">
         <img src="../img/logo.png" alt="Logotype" class="logo-icon">
      </figure>
      <h3 class="slogan">A rede social da comunidade Fandom</h3>
   </section>
   <section class="box-form-login">
      <form method="post">
         <input type="email" placeholder="E-mail" id="email-area" name="email-area" class="login-area">
         <input type="password" placeholder="Senha" id="password-area" name="password-area" class="login-area">
      </form>
   </section>
   <section class="inerror-message" id="error-login"></div>
      <button class="btn-sign-in btn-area" id="btn-sign-in">Entrar</button>
      <p>ou</p>
      <button class="btn-google btn-area" id="btn-google">Acesse com Google</button>
      <button class="btn-register btn-area" id="btn-register">Cadastre-se</button>
   </section>
  `;
  const inputEmail = login.getElementById('email-area');
  const inputPassword = login.getElementById('password-area');
  console.log(inputEmail.value, inputPassword.value);

  main.appendChild(login);

  const btnRegister = login.querySelector('#btn-register');
  btnRegister.addEventListener('click', () => {
    createLogin();
  });
};

// const buttonLogin = document.getElementById('btn-sign-In');
// console.log(buttonLogin);
// buttonLogin.addEventListener('click', (e) => {
//   e.preventDefault();
//   const inputEmail = document.querySelector('#email-area');
//   console.log(inputEmail.value);
// });

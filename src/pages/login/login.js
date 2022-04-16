// aqui exportaras las funciones que necesites

// import { createLogin } from '../register/page-register.js';
import { logar, logarGmail } from './authentication.js';

export const pageLogin = () => {
  const login = document.createElement('div');
  login.setAttribute('class', 'box-form-login');
  login.innerHTML = `    
    
      <figure class="box-slogan-page-login">
        <img src="./img/kfandom.svg" alt="Logotype" class="logo-icon-page-login">
      </figure>  
      <figure class="section-btn-about" id="section-btn-about">
      <button class="btn-about" id="btn-about"><img src="./img/interrogacao.png" alt="btn-about" class="img-btn-about"></button>
      </figure>
        <form method="post" class = "form-login">
          <input type="email" placeholder="seu@email.com" class="login-area font-size" id="email-area" name="email-area" requered>
          <input type="password" placeholder="Senha" class="login-area font-size" id="password-area" name="password-area" requered>
          <button class="btn-sign-in btn-area font-size" id="btn-sign-in">Entrar</button>          
        </form>
      <p class="error text-center font-size" id="user-error"></p> 
      <p class="error text-center font-size" id = "user-error-gmail"></p>
      <p class="our text-center font-size">- ou -</p>
      <button class="btn-google text-center font-size" id="btn-google"><img src="./img/G.svg" alt="btn-google" class="img-btn-google">Sign in with Google</button>
      <p class="font-size text-center">
        Ainda não tem conta? <a href="#createLogin" id="click-register">Cadastre-se</a>
      </p> 
  `;
  login.querySelector('#btn-about').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#about';
  });

  login.querySelector('#btn-sign-in').addEventListener('click', (e) => {
    const inputEmail = login.querySelector('#email-area').value;
    const inputPassword = login.querySelector('#password-area').value;
    const invalidFormat = /\S+@\S+\.\S+/.test(inputEmail);
    const userError = login.querySelector('#user-error');
    e.preventDefault();
    if (!inputEmail || !inputPassword) {
      userError.innerHTML = 'Campos obrigatórios';
      userError.style.display = 'block';
    } else if (!invalidFormat) {
      userError.innerHTML = 'Preencha o campo de email corretamente';
      userError.style.display = 'block';
    } else if (inputEmail && inputPassword && invalidFormat) {
      logar(inputEmail, inputPassword).then((response) => {
        console.log('success', response);
        window.location.hash = '#feed';
      }).catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            userError.innerHTML = 'Campos obrigatórios';
            userError.style.display = 'block';
            break;
          case 'auth/internal-error':
            userError.innerHTML = 'Campos obrigatórios';
            userError.style.display = 'block';
            break;
          case 'auth/wrong-password':
            userError.innerHTML = 'Email ou senhas estão errados';
            userError.style.display = 'block';
            break;
          case 'auth/user-not-found':
            userError.innerHTML = 'Usuário não cadastrado, registre-se!';
            userError.style.display = 'block';
            break;

          default:
        }
      });
    }
  });

  login.querySelector('#btn-google').addEventListener('click', (e) => {
    e.preventDefault();
    const userErrorGmail = login.querySelector('#user-error-gmail');
    logarGmail().then(() => {
      window.location.hash = '#feed';
    }).catch((error) => {
      switch (error.code) {
        case 'auth/user-disabled':
          userErrorGmail.innerHTML = 'Não foi possivel logar com sua conta Google';

          break;

        default:
      }
    });
  });

  return login;
};

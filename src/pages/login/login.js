// aqui exportaras las funciones que necesites

//import { createLogin } from '../register/page-register.js';
import { logar } from './authentication.js';
export const pageLogin = () => {
    //const main = document.getElementById('root');
    // main.innerHTML = '';
    const login = document.createElement('div');
    login.setAttribute('class', 'box-form-login');

    login.innerHTML = `
      <link rel="stylesheet" href="./pages/login/login.css"/>      
         <figure class="box-slogan">
            <img src="../img/logo.png" alt="Logotype" class="logo-icon">
         </figure>
         <h3 class="slogan">A rede social da comunidade Fandom</h3>    
      <section class="box-form-login">
         <form method="post">
            <input type="email" placeholder="seu@email.com" class="login-area" id="email-area" name="email-area">
            <section class = "error" id="email-requested">*O campo de email é obrigatório</section>
            <section class = "error" id="email-invalid">*Email inválido</section>
            <input type="password" placeholder="Senha" class="login-area" id="password-area" name="password-area">
            <section class = "error" id="password-requested">*O campo de senha é obrigatório</section>
            <section class="inerror-message" id="error-login"></div>
            <button class="btn-sign-in btn-area" id="btn-sign-in" >Entrar</button>
            </form>
      </section>
      <section>
         <p>ou</p>
         <button class="btn-google btn-area" id="btn-google">Acesse com Google</button>
         <button class="btn-register btn-area" id="btn-register">Cadastre-se</button>
      </section>
  `;

    const inputEmail = login.querySelector('#email-area');
    const inputPassword = login.querySelector('#password-area');
    console.log(inputEmail.value, inputPassword.value);

    //main.appendChild(login);

    //  const btnRegister = login.querySelector('#btn-register');
    //  btnRegister.addEventListener('click', () => {
    //      createLogin();
    //  });

    const form = {
        email: () => document.querySelector('#email-area'),
        password: () => document.querySelector('#password-area')
    }

    function loginAcess() {
        login.querySelector('#btn-sign-in').addEventListener('click', (e) => {
            e.preventDefault();
            logar(form.email().value, form.password().value)
            window.location.href = '#feed'
        })
    }

    loginAcess();
    //  function validateEmail() {
    //      toggleButtonsDisable();
    //      toggleError();
    //  }

    //  function toggleButtonsDisable() {
    //      const emailValid = isEmailvalid();
    //      document.querySelector('#btn-sign-in').disabled = !emailValid || !passwordValid;
    //  }

    //  function toggleError() {
    //      const email = document.querySelector('#email-area').value;
    //      if (!email) {
    //          document.querySelector('#error').style.display = 'block';
    //      }
    //  }

    //  function isEmailvalid() {
    //      const email = document.querySelector('#email-area').value;
    //      if (!email) {
    //          return false;
    //      }
    //      return validateTestEmail;
    //  }

    //  function isPasswordValid() {
    //      const password = document.querySelector('#password-area').value;
    //      if (!password) {
    //          return false;
    //      }
    //      return true;
    //  }

    //  function validateTestEmail(email) {
    //      return /\S+@\S+\.\S+/.test(email);
    //  }

    return login
};

// const buttonLogin = document.getElementById('btn-sign-In');
// console.log(buttonLogin);
// buttonLogin.addEventListener('click', (e) => {
//   e.preventDefault();
//   const inputEmail = document.querySelector('#email-area');
//   console.log(inputEmail.value);
// });
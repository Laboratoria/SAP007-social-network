// aqui exportaras las funciones que necesites

// import { createLogin } from '../register/page-register.js';
import { logar } from './authentication.js';

export const pageLogin = () => {
  const login = document.createElement('div');
  login.setAttribute('class', 'box-form-login');
  login.innerHTML = `    
    <figure class="box-slogan">
      <img src="#" alt="Logotype" class="logo-icon">
    </figure>
    <h3 class="slogan">A rede social da comunidade Fandom</h3>    
    <section class="box-form-login">
      <form action="" method="post">
        <input type="email" placeholder="seu@email.com" class="login-area" id="email-area" name="email-area">
        <section class = "error" id="email-requested">*O campo de email é obrigatório</section>
        <section class = "error" id="email-invalid">*Email inválido</section>
          <input type="password" placeholder="Senha" class="login-area" id="password-area" name="password-area">
          <section class = "error" id="password-requested">*O campo de senha é obrigatório</section>
          <section class="inerror-message" id="error-login"></div>
            <button class="btn-sign-in btn-area" id="btn-sign-in" >Entrar</button>
        </section>
      </form>
      <section>
         <p>ou</p>
         <button class="btn-google btn-area" id="btn-google">Acesse com Google</button>
         <button class="btn-register btn-area" id="btn-register">Cadastre-se</button>
      </section>
  `;

  // const btnRegister = login.querySelector('#btn-register');
  // btnRegister.addEventListener('click', () => {
  //  });

  login.querySelector('#btn-sign-in').addEventListener('click', (e) => {
    const inputEmail = login.querySelector('#email-area').value;
    const inputPassword = login.querySelector('#password-area').value;
    e.preventDefault();
    logar(inputEmail, inputPassword).then((response) => {
      console.log('success', response);
      window.location.hash = '#feed';
    }).catch((error) => {
      // switch (error.code) {
      // case 'auth/invalid-email':
      // emailError.innerHTML = "Campo obrigatorio";
      // emailError.style.display = "block";
      // break;
      // default
      console.log('error', error.code);
      // };
    });
  });

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

  return login;
};

// const buttonLogin = document.getElementById('btn-sign-In');
// console.log(buttonLogin);
// buttonLogin.addEventListener('click', (e) => {
//   e.preventDefault();
//   const inputEmail = document.querySelector('#email-area');
//   console.log(inputEmail.value);
// });

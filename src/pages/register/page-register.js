import {register} from './create-login.js';

export const createLogin = () => {
  const main = document.getElementById('root');
  main.innerHTML = '';
  const createLoginStr = document.createElement('div');
  createLoginStr.setAttribute('class', 'box-form-create-login');
  createLoginStr.innerHTML = `
  <link rel="stylesheet" href="./pages/register/create-login.css"/>      
  // <figure class="box-slogan">
  //  <img src="../img/logo.png" alt="Logotype" class="logo-icon">
  // </figure>
  <section class="box-form-create-login">
    <form method="post">
      <input type="text" placeholder="Nome Completo" id="name-area" name="name-area" class="create-area">
      <input type="text" placeholder="Apelido" id="nick-name-area" name="nick-name-area" class="create-area">
      <input type="date" placeholder="Data de nascimento" id="birth-area" name="birth-area" class="create-area">
      <input type="email" placeholder="E-mail" id="email-area" name="email-area" class="create-area">
      <input type="password" placeholder="Senha" id="password-area" name="password-area" class="create-area">
      <p class="inerror-message" id="error-register"></p>
    </form>
    <button class="btn-back btn-area" id="btn-back">Voltar</button>
    <button class="btn-confirm btn-area" id="btn-confirm">Confirmar</button>
  </section>
  `;


  const inputName = createLoginStr.querySelector('#name-area');
  // const inputNickName = createLoginStr.querySelector('#nick-name-area');
  // const inputBirth = createLoginStr.querySelector('#birth-area');
  const inputEmail = createLoginStr.querySelector('#email-area');
  const inputPassword = createLoginStr.querySelector('#password-area');
  const newRegister = createLoginStr.querySelector('#btn-confirm');
  // const backPage = createLoginStr.querySelector('#btn-back');
  // const inputError = createLoginStr.querySelector('#error-register');

  // const onError = () => {
  //   if (errorCodes) {
  //     inputError.innerHTML = "erro de senha";
  //   } else {
  //     inputError.innerHTML = "erro de email";
  //   }
  // };

  const newUser = (event) => {
    event.preventDefault();
    return register(inputName.value, inputEmail.value, inputPassword.value);
  };
  newRegister.addEventListener('click', newUser);
  return createLoginStr
};
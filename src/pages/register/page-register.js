import { register } from './create-login.js';
// eslint-disable-next-line
import { getAuth, updateProfile } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

export const createLogin = () => {
  const main = document.getElementById('root');
  main.innerHTML = '';
  const createLoginStr = document.createElement('div');
  createLoginStr.setAttribute('class', 'box-form-create-register');
  createLoginStr.innerHTML = `
   <figure class="box-slogan-page-register">
     <img src="./img/kfandom.svg" alt="Logotype" class="logo-icon-page-register">
   </figure>
   <form method="post" class="form-register">
     <h1>Vamos começar!</h1>
     <figure>
       <img src='./img/camera.png' class='img-camera'>
       <input type='file' name='arquivo' class='profile-figure'>
     </figure>
     <input type="text" placeholder="Nome Completo" id="name-area" name="name-area" class="create-area">
     <input type="text" placeholder="Apelido" id="nick-name-area" name="nick-name-area" class="create-area">
     <input type="date" placeholder="Data de nascimento" id="birth-area" name="birth-area" class="create-area">
     <input type="email" placeholder="seu@email.com" id="email-area" name="email-area" class="create-area">
     <input type="password" placeholder="Senha" id="password-area" name="password-area" class="create-area">
     <p class="inerror-message" id="error-register"></p>
   </form>
   <div class="box-btns">
     <a href="#login" class="btn-back btn-area" id="btn-back">Voltar</a>
     <button class="btn-confirm btn-area"  id="btn-confirm">Confirmar</button>
    </div>
  `;
  const inputName = createLoginStr.querySelector('#name-area');
  const inputEmail = createLoginStr.querySelector('#email-area');
  const inputPassword = createLoginStr.querySelector('#password-area');
  const newRegister = createLoginStr.querySelector('#btn-confirm');
  const errorRegister = createLoginStr.querySelector('#error-register');

  const newUser = (event) => {
    event.preventDefault();
    const auth = getAuth();

    register(inputName.value, inputEmail.value, inputPassword.value).then(() => {
      window.location.hash = '#login';
    }).catch((error) => {
      switch (error.code) {
        case 'auth/internal-error':
          errorRegister.innerHTML = 'Preencha todos os campos';
          errorRegister.style.display = 'block';
          break;
        case 'auth/weak-password':
          errorRegister.innerHTML = 'A senha deve ter 6 caracteres ou mais.';
          errorRegister.style.display = 'block';
          break;
        case 'auth/email-already-in-use':
          errorRegister.innerHTML = 'Email já cadastrado, volte a página login!';
          errorRegister.style.display = 'block';
          break;

        default:
      }
    });
    updateProfile(auth.currentUser, {
      displayName: inputName.value,

    });
  };
  newRegister.addEventListener('click', newUser);
  return createLoginStr;
};

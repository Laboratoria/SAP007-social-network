import { register } from './create-login.js';
// eslint-disable-next-line
import { getAuth, updateProfile } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

export const createLogin = () => {
  const createLoginStr = document.createElement('div');
  createLoginStr.setAttribute('class', 'box-form-create-register');
  createLoginStr.innerHTML = `
   <figure class="box-slogan-page-register">
     <img src="./img/kfandom.svg" alt="Logotype" class="logo-icon-page-register">
   </figure>
   <form method="post" class="form-register">
     <h1>Vamos começar!</h1>
     <input type="text" placeholder="Nome" id="name-area" class="create-area">
     <input type="email" placeholder="seu@email.com" id="email-area" class="create-area">
     <input type="password" placeholder="Senha" id="password-area" class="create-area">
     <input type="text" placeholder="URL para a foto do perfil" id="photo-area" class="create-area">
     <p class="inerror-message" id="error-register"></p>
   </form>
   <div class="box-btns">
     <a href="#login" class="btn-back btn-area" id="btn-back">Voltar</a>
     <button type="submit" class="btn-confirm btn-area"  id="btn-confirm">Confirmar</button>
    </div>
  `;
  const inputName = createLoginStr.querySelector('#name-area');
  const inputEmail = createLoginStr.querySelector('#email-area');
  const inputPassword = createLoginStr.querySelector('#password-area');
  const newRegister = createLoginStr.querySelector('#btn-confirm');
  const errorRegister = createLoginStr.querySelector('#error-register');
  const inputPhoto = createLoginStr.querySelector('#photo-area');

  const newUser = (event) => {
    event.preventDefault();
    const auth = getAuth();

    register(inputEmail.value, inputPassword.value)
      .then(() => updateProfile(auth.currentUser, {
        displayName: inputName.value,
        photoURL: inputPhoto.value || 'img/avatar.jpg',
      }))
      .then(() => {
        window.location.hash = '#login';
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/missing-email':
            errorRegister.innerHTML = 'Preencha todos os campos';
            errorRegister.style.display = 'block';
            break;
          case 'auth/invalid-email':
            errorRegister.innerHTML = 'E-mail inválido';
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
  };
  newRegister.addEventListener('click', newUser);
  return createLoginStr;
};

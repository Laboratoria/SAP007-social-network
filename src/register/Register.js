import '../firebase/FireBaseConfig.js';
import { creatNewUser } from '../firebase/authentication.js';

export default () => {
  const containerRegister = document.creatElement('div');
  containerRegister.setAttribute('class', 'container');
  const templateRegister = `
  <section class="register">
  <h3>Cadastro</h3>
  <input type="email" name="email" class="email-input" placeholder="Insera e-mail"
    autocomplet required/>
    <input type="password" name="password" class="input-password placeholder="Insera uma senha" requerid />
    <button type="submit" id="btn-register">Cadastrar</button>
   <a href="#"> Já possui conta?</a>
</section>
 `;
  containerRegister.innerHTML = templateRegister;
  const email = containerRegister.querySelector('.email-input');
  const password = containerRegister.querySelector('.password-input');
  containerRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    creatNewUser(email.value, password.value)
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });
  });
  return containerRegister;
};

// eslint-disable-next-line
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
// } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
// import '../firebase/FireBaseConfig.js';

// const authentication = getAuth();

// const botao = document.querySelector('#botão');

// botao.addEventListener('click', (e) => {
//   e.preventDefault();

//   const form = document.querySelector('#form-test');
//   const email = form[0].value;
//   const senha = form[1].value;

//   createUserWithEmailAndPassword(authentication, email, senha);
// });

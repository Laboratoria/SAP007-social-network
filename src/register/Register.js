import '../firebase/FireBaseConfig.js';
import { creatNewUser } from '../firebase/authentication.js';

export default () => {
  const containerRegister = document.creatElement('div');
  containerRegister.setAttribute('class', 'container');
  const templateRegister = `
  <section class="register">
  <h3>Cadastro</h3>
  <input type="email" name="email" class="email" placeholder="Insera e-mail"
    autocomplet required/>
    <input type="password" name="password" class="password" placeholder="Insera uma senha" requerid />
    <button type="submit" id="btn-register">Cadastrar</button>
   <a href="#login"> Já possui conta?</a>
</section>
 `;
  containerRegister.innerHTML = templateRegister;
  const email = containerRegister.querySelector('.input-email');
  const password = containerRegister.querySelector('.input-password');
  const somethingWrong = containerRegister.querySelector('.error');
  containerRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    creatNewUser(email.value, password.value)
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch((error) => {
        const errorMessage = error.somethingWrong;
        if (error.code === 'auth/email-already-exists') {
          somethingWrong.innerHTML = 'O e-mail fornecido já está em uso por outro usuário';
        } else if (error.code === 'auth/invalid-email') {
          somethingWrong.innerHTML = 'Não é válido, digite um e-mail válido';
        } else if (error.code === 'auth/invalid-password') {
          somethingWrong.innerHTML = 'Senha inválida, digite uma senha de pelo menos 6 caracteres';
        }
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

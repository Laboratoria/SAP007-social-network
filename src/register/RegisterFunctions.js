// eslint-disable-next-line
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js'
import '../firebase/FireBaseConfig.js';

const authentication = getAuth();

const botao = document.querySelector('#botão');

botao.addEventListener('click', (e) => {
  e.preventDefault();

  const form = document.querySelector('#form-test');
  const email = form[0].value;
  const senha = form[1].value;

  createUserWithEmailAndPassword(authentication, email, senha);
});

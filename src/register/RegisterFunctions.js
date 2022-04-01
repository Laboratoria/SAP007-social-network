import '../firebase/FireBaseConfig.js';
import {creatNewUser } from '../firebase/authentication.js'
export default() => {
  const containerRegister = document.creatElement("div");
  const templateRegister =`
  <section class="register">
  <h3>Cadastro</h3>
  <form action="#" class="input-register">
    <input
      type="email"
      name="email"
      id="email-input"
      placeholder="Insera e-mail"
      autocomplet
      required
    />
    <input type="password" name="password" class="input-register
    id="password-input" placeholder="Insera uma senha" requerid />
    <button type="submit" id="btn-register">Cadastrar</button>
  </form>
  <a href="#"> Já possui conta?</a>
</section>
 `;
  containerRegister.innerHTML = templateRegister;
  const email = containerRegister.querySelector('#email-input');
  const password = containerRegister.querySelector('#password-input');
  containerRegister.addEventListener("submit", (e) => {
    e.preventDefault();
      creatNewUser(email.value, password.value)
      .then(() => {
        window.location.hash = "#about";
      })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
  });
      });
 return containerRegister
};






// eslint-disable-next-line
/*import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
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

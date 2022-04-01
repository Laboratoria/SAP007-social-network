import '../firebase/FireBaseConfig.js';
import {
  signinPassword,signinWithGoogle
} from '../firebase/authentication.js'


  export default() => {
  const containerLogin = document.creatElement("div");
  const templateLogin =`
    <section id="login" class="box-login"
    <h3>login</h3>
  <section class="input-login">
    <input type="email" name="email" id="email-input" placeholder="Insera e-mail" required />
    <section class="input-login">
      <input type="password" name="password" id="password-input" placeholder="Insera uma senha"  requerid/>
    </section>
    <section id="recover-password"></section>
    <a href=""> Esqueceu a sua senha?</a>
  </section>
  <button type="submit" id="btn-login">Entrar</button>
  <p>Ou</p>
  <button type="submit" id="btn-google">Entrar com o Google</button>
  <hr />
</section>
<p>Não tem conta?</p>
<a href="btn-register" href="/#"> Cadastre-se</a>
  `;
  containerLogin.innerHTML = templateLogin;

  
   export default() => {
    const containerLogin = document.creatElement("form");
    const templateLogin =`
      <section id="login" class="box-login"
      <h3>login</h3>
    <section class="input-login">
      <input type="email" name="email" id="email-input" placeholder="Insera e-mail" required />
      <section class="input-login">
        <input type="password" name="password" id="password-input" placeholder="Insera uma senha"  requerid/>
      </section>
      <section id="recover-password"></section>
      <a href=""> Esqueceu a sua senha?</a>
    </section>
    <button type="submit" id="btn-login">Entrar</button>
    <p>Ou</p>
    <button type="submit" id="btn-google">Entrar com o Google</button>
    <hr />
  </section>
  <p>Não tem conta?</p>
  <a href="btn-register" href="/#"> Cadastre-se</a>
    `;
    containerLogin.innerHTML = templateLogin;
  
    const getEmail = document.querySelector('#email-input');
    const getPassword = document.querySelector('#password-input');
   const form = containerLogin.getElementById("")
    containerLogin.addEventListener("submit", (e) => {
          e.preventDefault();
        signinPassword(getEmail.value, getPassword.value)
        .then((userCredential) => {
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        
  
    };
  




/*import {
  getAuth,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import '../firebase/FireBaseConfig.js';

const loginAuth = getAuth();
const btnLogin = document.querySelector('#submit-form');
btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  const getEmail = document.querySelector('#email');
  const getPassword = document.querySelector('#password');
  signInWithEmailAndPassword(loginAuth, getEmail, getPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user, 'entrou');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
    });

  console.log('entrou');
});

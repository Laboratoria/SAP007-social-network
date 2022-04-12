import '../firebase/firebaseconfig.js';
import { signinPassword, googleLogin } from '../firebase/authentication.js';

export const login = () => {
  const containerLogin = document.createElement('div');
  containerLogin.setAttribute('class', 'container');
  const templateLogin = `
  <form class="input-login">
  <p>Login</p>
  <input type="email" name="email" class="email-input" placeholder="Insera e-mail" required /><br>
  <input type="password" name="password" class="password-input" placeholder="Insera uma senha" requerid /><br>
  <a href=""> Esqueceu a sua senha?</a><br>
  <br><button type="submit">Entrar</button><br>

  <button class="btn-google"><img src="img/google.png" alt="botão Google">Entrar com o Google
  </button><br>
</form>
</section>
  <p>Não tem conta? <a href="#register"> Cadastre-se</a></p>

  

  `;
  containerLogin.innerHTML = templateLogin;
  const email = containerLogin.querySelector('.email-input');
  const password = containerLogin.querySelector('.password-input');
  const google = containerLogin.querySelector('.btn-google');

  containerLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    signinPassword(email.value, password.value)
      .then(() => {
        window.location.hash = '#timeline';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  });

  google.addEventListener('click', (e) => {
    e.preventDefault();
    googleLogin().then(() => {
      window.location.hash = '#timeline';
    });
  });
  return containerLogin;
};

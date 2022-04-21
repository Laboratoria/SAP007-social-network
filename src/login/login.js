import '../firebase/firebaseconfig.js';
import { signinPassword, googleLogin } from '../firebase/authentication.js';

export const login = () => {
  const containerLogin = document.createElement('div');
  containerLogin.setAttribute('class', 'container');
  const link = document.getElementById('stylePages');
  link.href = 'login/login.css';
  const templateLogin = `
  <form class="input-login">
  <p>Login</p>
  <span class='error-login'><span>
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
  const errorLogin = containerLogin.querySelector('.error-login');

  containerLogin.addEventListener(
    'submit',
    (e) => {
      e.preventDefault();
      signinPassword(email.value, password.value)
        .then(() => {
          window.location.hash = '#timeline';
        })
        .catch((error) => {
          if (error.code === 'auth/invalid-email') {
            // e-mail inválido
            errorLogin.innerHTML =
              'E-mail não é válido, favor digite um e-mail válido.';
            errorLogin.style.display = 'block';
          } else if (error.code === 'auth/internal-error') {
            // error alternativo
            errorLogin.innerHTML = 'Campos obrigatórios!';
            errorLogin.style.display = 'block';
          } else if (error.code === 'auth/wrong-password') {
            // senha inválida
            errorLogin.innerHTML = 'Senha não é válida';
            errorLogin.style.display = 'block';
          } else if (error.code === 'auth/user-not-found') {
            // usuário sem conta
            errorLogin.innerHTML = 'Usuário não cadastrado, registre-se!';
            errorLogin.style.display = 'block';
          }
          const errorMessage = error.message;
          return errorMessage;
        });
    },

    google.addEventListener('click', (e) => {
      e.preventDefault();
      googleLogin().then(() => {
        window.location.hash = '#timeline';
      });
    }),
  );
  return containerLogin;
};

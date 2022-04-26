import '../firebase/firebaseconfig.js';
import { signinPassword, googleLogin } from '../firebase/firebaseauth.js';

export const login = () => {
  const containerLogin = document.createElement('div');
  containerLogin.setAttribute('class', 'container-login');
  const templateLogin = `
  <form class="form-login">
  <p class='paragraph'>Login</p>
  <span class='error-login'></span>
  <input type="email" name="email" class="email-input input-users" placeholder="Insera e-mail" required /><br>
  <input type="password" name="password" class="password-input input-users" placeholder="Insera uma senha" requerid /><br>
  <a href="" > <p class='reset-password'>Esqueceu a sua senha?</p></a><br>
  <br><button class='btn-submit' type="submit">Entrar</button><br>
  <button class="btn-google"><img src="img/google.png" alt="botão Google">Entrar com o Google
  </button><br>
</form>
</section>
 <a href="#register"> <p class ='signup'>Não tem conta? Cadastre-se </p></a> 
  
  `;
  containerLogin.innerHTML = templateLogin;
  const email = containerLogin.querySelector('.email-input');
  const password = containerLogin.querySelector('.password-input');
  const google = containerLogin.querySelector('.btn-google');
  const errorLogin = containerLogin.querySelector('.error-login');
  const link = document.getElementById('stylePages'); // Criando o caminho para o Css
  link.href = 'login/login.Css';

  containerLogin.addEventListener(
    'submit',
    (e) => {
      e.preventDefault();
      signinPassword(email.value, password.value)
        .then(() => {
          window.location.hash = '#timeline';
        })
        .catch((error) => {
          if (error.code === 'auth/internal-error') {
            // error alternativo
            errorLogin.innerHTML = 'Campos obrigatórios!';
            errorLogin.style.display = 'block';
          } else if (error.code === 'auth/wrong-password') {
            // senha inválida
            errorLogin.innerHTML = 'Senha não é válida!';
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

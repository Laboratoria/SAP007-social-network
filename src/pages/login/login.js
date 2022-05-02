import { userWithLogin } from '../../configs/authentication.js';

export default function login() {
  const container = document.createElement('div');
  container.classList.add('content-login');

  const templateLogin = `
    <img class="logo-site" src="img/logo-eu-poesia-r.png" alt="Logo Eu, Poesia">
    <form class="form-login">
      <input type="email" id="input-email" class="input-email" placeholder="E-mail" autocomplete="on">
      <input type="password" id="input-password" class="input-email" placeholder="Senha">
      <div class="checkbox">
        <input type="checkbox" id="remember-password" class="remember-password" name="remember-password">
        <label for="remember-password">Lembrar senha</label>
        <a href="#forgot-password" class="link-forgot-password">Esqueci a senha</a>
      </div>  
      <span id="message" class="message"></span>
      <button type="button" id="button-login" class="button-login">Login</button>
      <p class="register-text">
      Caro Poeta, caso não tenha conta 
      <br>
      <a href="#register" class="link-register" id="link-register">Registre-se</a>
    </form>
    <footer class="footer">
      <p class="footer-text">
        Desenvolvido por <br> Beatriz de Sousa Carvalho, Maria Luiza Costa Santana e Raele Pereira
      </p>
    </footer>
  `;

  container.innerHTML = templateLogin;

  const buttonEmail = container.querySelector('#input-email');
  const buttonPassword = container.querySelector('#input-password');
  const buttonLogin = container.querySelector('#button-login');
  const msgAlert = container.querySelector('#message');

  buttonLogin.addEventListener('click', (event) => {
    event.preventDefault();
    userWithLogin(buttonEmail.value, buttonPassword.value)
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch((error) => {
        const errorCode = error.code;
        let errorMessage = error.message;

        switch (errorCode) {
          case 'auth/wrong-password':
            errorMessage = 'Senha errada.';
            msgAlert.innerHTML = errorMessage;
            break;
          case 'auth/invalid-email':
            errorMessage = 'Insira um email válido.';
            msgAlert.innerHTML = errorMessage;
            break;
          case 'auth/user-not-found':
            errorMessage = 'Usuário não encontrado. Crie um cadastro clicando em "Registre-se".';
            msgAlert.innerHTML = errorMessage;
            break;
          case 'auth/internal-error':
            errorMessage = 'Insira a senha.';
            msgAlert.innerHTML = errorMessage;
            break;
          default:
            errorMessage = 'Erro desconhecido';
            msgAlert.innerHTML = errorMessage;
        }
      });
  });
  return container;
}

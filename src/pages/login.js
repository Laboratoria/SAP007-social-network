import { login, loginGoogle, redefinePassword } from '../services/authentication.js';

export default () => {
  const loginArea = document.createElement('div');
  loginArea.classList.add('login');

  loginArea.innerHTML = `
    <div class="container">
      <div class="main-login">
        <img src="../img/logo.png" alt="Logo Laboriam" class="logo">
        <form>
          <h2>Login</h2>
          <input type="email" placeholder="E-mail" id="email-input">
          <input type="password" placeholder="Senha" id="password-input">
          <p id="error-message" class="error-message"></p>
          <button type="button" id="enter-button" class="enter-button">
            <a href="/#feed">Entrar</a>
          </button>
          <a id="redefine-password" class="redefine-password">Esqueceu a senha?</a>
          <div class="login-alternative">
            <div></div>
            <p>OU</p>
            <div></div>
          </div>
          <section class="buttons">
            <button class="google" id="google">
              <img src="../img/icon-google.png" alt="Ícone do Google" class="google-icon">
            </button>
            <button class="facebook">
              <img src="../img/icon-facebook.png" alt="Ícone do Facebook" class="facebook-icon">
            </button>
            <button class="github">
              <img src="../img/icon-github.png" alt="Ícone do GitHub" class="github-icon">
            </button>
          </section>
          <p class="createAnAccount">Não tem uma conta? <a href="/#signup">Criar conta</a></p>
        </form>
      </div>
      <img src="../img/laboriam-phone.png" alt="Imagem ilustrativa de celulares" class="phones-image">
    </div>
    <footer class="devs">
      <p>Copyright &copy Desenvolvido por:</p>
      <p>Cássia Costa, Dayane Rodrigues e Viviane Soares</p>
    </footer>
`;

  const emailInput = loginArea.querySelector('#email-input');
  const passwordInput = loginArea.querySelector('#password-input');
  const googleButton = loginArea.querySelector('#google');
  const enterButton = loginArea.querySelector('#enter-button');
  const errorMessage = loginArea.querySelector('#error-message');
  const resetPasswordButton = loginArea.querySelector('#redefine-password');

  enterButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (emailInput.value && passwordInput.value) {
      login(emailInput.value, passwordInput.value, errorMessage);
    } else if (emailInput.valor === '' || passwordInput.value === '') {
      errorMessage.innerHTML = ' Preencher todos os campos!';
    } else {
      errorMessage.innerHTML = ' Ocorreu algum erro! Tente novamente mais tarde.';
    }
  });

  googleButton.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle(errorMessage);
  });

  resetPasswordButton.addEventListener('click', (e) => {
    e.preventDefault();
    redefinePassword(emailInput.value, errorMessage);
  });

  return loginArea;
};

import { loginGoogle, register } from '../services/authentication.js';

export default () => {
  const signupArea = document.createElement('div');
  signupArea.classList.add('signup');

  signupArea.innerHTML = `
    <div class="container">
      <div id="main-signup" class="main-signup">
        <img src="../img/logo.png" alt="Logo Laboriam" class="logo">
        <form>
          <h2>Cadastro</h2>
          <input type="email" placeholder="Endereço de e-mail" id="email-input">
          <input type="text" placeholder="Nome completo" id="name-input">
          <input type="password" placeholder="Senha" id="password-input">
          <p id="error-message" class="error-message"></p>
          <button type="button" id="register-button" class="register-button">   
            <a href="/#feed">Cadastre-se</a> 
          </button>
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
          <p class="goToAccount">Tem uma conta? <a href="/#login">Conecte-se</a></p>
        </form>
      </div>
      <img src="../img/laboriam-phone.png" alt="Imagem ilustrativa de celulares" class="phones-image">
    </div>
    <footer class="devs">
      <p>Copyright &copy Desenvolvido por:</p>
      <p>Cássia Costa, Dayane Rodrigues e Viviane Soares</p>
    </footer>
`;

  const registerButton = signupArea.querySelector('#register-button');
  const emailInput = signupArea.querySelector('#email-input');
  const passwordInput = signupArea.querySelector('#password-input');
  const usernameInput = signupArea.querySelector('#name-input');
  const googleButton = signupArea.querySelector('#google');
  const errorMessage = signupArea.querySelector('#error-message');

  registerButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (emailInput.value, usernameInput.value, passwordInput.value) {
      register(emailInput.value, passwordInput.value, usernameInput.value, errorMessage);
    } else if (emailInput.valor === '' || usernameInput.value === '' || passwordInput.value === '') {
      errorMessage.innerHTML = ' Preencher todos os campos!';
    }
  });

  googleButton.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle(errorMessage);
  });

  return signupArea;
};
import '../firebase/firebase.js';
import { userCreate, googleLogin } from '../firebase/auth-firebase.js';

export const register = () => {
  const registerCreate = document.createElement('div');
  registerCreate.setAttribute('class', 'container');
  const templateRegister = `
  <main class="home-container registerContainer">
    <h2 class="subtitle">Cadastrar</h2>
    <form id="registerForm" class="registerForm">
    <input
    class="inputNames"
    type="text"
    id="registerName"
    placeholder="Digite seu nome. Ex:'Laura Silva' " autocomplet
    required
  />
    <input
      class="registerEmail inputNames"
      type="text"
      id="registerEmail"
      type="email"
      placeholder="Digite um e-mail" autocomplet
      required
    />
    <input
    class="registerPassword inputNames"
    type="password"
    id="registerPassword"
    minlength="6" type="password"
    placeholder="Digite uma senha"
    required
  />
  
  <div class="button-container login-container">
      <button id="registerEnter" class="button registerButton loginEnter" type="submit">
        Cadastrar
      </button>
      </div>
      <span class="error-message"></span>
      <div class="social-media registerButton">
      <p>Ou cadastre-se com o Google</p>
      <button class="buttonGoogle" type="button" id="buttonGoogle">
      <img class="buttonGoogleImg" src="img/icone-google.png" alt="Imagen logo de Google" />
      </button>
      </div>
    </form>
    <div class="social-media">
    </div>
    <div class="backContainer">
    <a href="#home" class="backHome">Voltar a tela inicial</a>
    </div>
  </main>
 
    `;

  registerCreate.innerHTML = templateRegister;

  const email = registerCreate.querySelector('.registerEmail');
  const password = registerCreate.querySelector('.registerPassword');
  const googleButton = registerCreate.querySelector('.buttonGoogle');

  registerCreate.addEventListener('submit', (e) => {
    e.preventDefault();
    userCreate(email.value, password.value)
      .then(() => {
        window.location.hash = '#timeline';
      })
      .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });
  });

  googleButton.addEventListener('click', (e) => {
    e.preventDefault();
    googleLogin()
      .then(() => {
        window.location.hash = '#timeline';
      })
      .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });
  });
  return registerCreate;
};

/*

   <div class="">
  <h2 class="subtitle">Cadastrar</h2>

  <input class="inputNames" placeholder="Digite seu nome. Ex:'Laura Silva'" required>

  <input class="inputNames" placeholder="Digite um e-mail" type="email" required>

  <span class="error"></span>

  <input class="inputNames" placeholder="Digite uma senha" minlength="6" type="password" required>

  <button class="button-enter" type="submit">Cadastrar</button>

  <div class="user-register"><a href="#">Já tenho um cadastro</a></div>
  </div>

*/

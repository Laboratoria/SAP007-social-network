import '../firebase/firebase.js';
import { userCreate, googleLogin } from '../firebase/auth-firebase.js';

export const register = () => {
  const registerCreate = document.createElement('div');
  const templateRegister = `
  <main class="home-container registerContainer">
    <h2 class="subtitle">Cadastrar</h2>
    <form id="registerForm" class="registerForm">
    <input
    class="userName inputNames"
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
      <span class= "error"></span>
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
  const msgErro = registerCreate.querySelector('.error');
  // const user = registerCreate.querySelector('.userName');

  registerCreate.addEventListener('submit', (e) => {
    e.preventDefault();
    userCreate(email.value, password.value)
      .then(() => {
        window.location.hash = '#timeline';
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          msgErro.innerHTML = 'Digite um e-mail válido';
        } else if (error.code === 'auth/email-already-in-use') {
          msgErro.innerHTML = 'Esse e-mail já está sendo utilizado';
        }
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

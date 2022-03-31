import { signIn, signInGoogle } from "/firebase.js";

export default function Login() {
  const login = document.createElement("div");
  login.innerHTML = `   
 
      <main class="box">
          <div class="container">
  
              <div class="banner">
                  <div class="title-container">
                      <img class="logo" src="../../img/LOGO.png" alt="Logo" />
                      <h3 class="inf">LOGIN</h3>
                  </div>
              </div>
              
              <section>
                  <form class="form">
                  <input class="input" id="email" type="email" autocomplete="on" placeholder="E-mail" required>
                  <input class="input" id="password" type="password" autocomplete="on" placeholder="Senha" required>
                  <p id="loginError" class="error-message font-work"></p>
                  </form>
  
                  <div class="signin">
                  <button id="signin-button" class="signin-button buttons">Entrar</button>
                  <p class="option"> OU </p>
                  </div>
  
              </section>
  
              <button id="google-button" class="google-button buttons">
                <img class="google-icon-btn" src="../../img/google.png" alt="Ícone do Google"/>
                Entrar com Conta Google
            </button>
  
              <button id="signup-button" class="signup-button buttons"> Não possui cadastro? <span>Clique aqui</span> </button>
          </div>
      </main>
      
      `;

  const signUpButton = login.querySelector("#signup-button");
  const signInButton = login.querySelector("#signin-button");
  const googleBtn = login.querySelector('#google-button');
  const email = login.querySelector("#email");
  const password = login.querySelector("#password");
  const loginError = login.querySelector('#loginError');

  signUpButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.hash = "register";
  });

  signInButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (email.value) {
      signIn(email.value, password.value)
        .then(() => {
          window.location.hash = "feed"; // ir para o feed
        })
        .catch((error) => {
            if (error.code === "auth/wrong-password") {
              loginError.innerHTML = "Senha incorreta";
            } else if (error.code === "auth/invalid-email") {
              loginError.innerHTML = "E-mail incorreto";
            } else {
              loginError.innerHTML = "E-mail não cadastrado.";
            }
        });
    }
  });

  googleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signInGoogle()
    .then(() => {
      window.location.hash = "feed"; // ir para o feed
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        // eslint-disable-next-line no-alert
        alert('Essa conta já existe com uma credencial diferente');
      }
    })
  });  

  return login;
}
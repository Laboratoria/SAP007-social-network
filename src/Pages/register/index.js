import { registerUser, saveUserUpdate } from "/firebase.js";

export default function Register() {
  const register = document.createElement("div");
  register.innerHTML = `
      <main class="box">
          <div class="container">
            <div class="banner">
                <div class="title-container">
                    <img class="logo" src="../../img/LOGO.png" alt="Logo"/>
                    <h3 class="inf">CADASTRO</h3>
                </div>
            </div>
           
            <section>
                <form class="form">
                    <input class="input" id="name" type="name" autocomplete="on" placeholder="Nome Completo" required/>
                    <input class="input" id="email" type="email" autocomplete="on" placeholder="E-mail" required/>                    
                    <input class="input" id="password" type="password" autocomplete="on" placeholder="Senha" required/>
                    <p id="email-error" class="error-message font-work"></p>
                </form>
                <button id="signup-button-register" class="buttons register-button">Cadastrar-se</button>
                <button id="gobackButton" class="goback-button">
                    <img src="./img/arrow.png" class="seta" alt="Ícone de Seta" width="50" height="50"> 
                </button>
            </section>
          </div>
      </main>
      
    `;

  const name = register.querySelector("#name");
  const email = register.querySelector("#email");
  const password = register.querySelector("#password");
  const emailError = register.querySelector('#email-error');

  const gobackButton = register.querySelector("#gobackButton");
  gobackButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.hash = "home";
  });

  const signUpButtonRegister = register.querySelector(
    "#signup-button-register"
  );
  signUpButtonRegister.addEventListener("click", (e) => {
    e.preventDefault();
    registerUser(email.value, password.value)
    .then(() => {
      saveUserUpdate(name.value);
    })
    .catch((error) => {
      if (error.code === 'auth/uid-already-exists') {
        emailError.innerHTML = 'E-mail já cadastrado';
      } else if (error.code === 'auth/email-already-in-use') {
        emailError.innerHTML = 'E-mail já cadastrado';
      } else if (error.code === 'auth/invalid-email') {
        emailError.innerHTML = 'E-mail invalido';
      } else {
        emailError.innerHTML = 'Preencha novamente.';
      }
    });
  });

  return register;
}

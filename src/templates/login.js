import { signIn, validateEmail } from "../lib/auth-firebase.js"; // eslint-disable-line no-unused-vars

export default function login() {
  const container = document.createElement("div");
  container.classList.add("login-page");

  container.innerHTML = `
    <div class="main">
        <div class="left">
        <img src="images/wowlogo_1.svg" alt="logo escrito WOW">
                    </div>
        <div class="right">
            <div class="card-login">
                <h2>LOGIN</h2>
                <div class="textfield">
                    <label for="usuario">E-mail</label>
                    <input type="text" name="e-mail" placeholder="Digite seu e-mail" id="inputEmail">
                </div>  
                <div class="textfield">
                    <label for="senha">Senha</label>
                    <input id="password" type="password" name="senha" placeholder="Digita sua senha">
                </div>     
                <button id="signin-button" class="botaologin">ENTRAR</button>
                <button id="register">Faça seu cadastro</button>             
            </div>
        </div>     
    </div>
  `;

  const registerButton = container.querySelector("#register");
  registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.hash = "register";
  });

  const email = container.querySelector("#inputEmail");
  const password = container.querySelector("#password");
  const loginError = container.querySelector("#loginError");
  const signInButton = container.querySelector("#signin-button");

  signInButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (email.value) {
      signIn(email.value, password.value)
        .then(() => {
          window.location.hash = "home";
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "email-already-in-use") {
            loginError.style.color = "red";
            loginError.innerHTML = "Não há registro de usuário correspondente a este e-mail";
          } else if (errorCode === "auth/wrong-password") {
            loginError.style.color = "red";
            loginError.innerHTML = "Senha inválida";
          }
        });
    } else {
      loginError.innerHTML = "Preencha o campo de E-mail";
    }
  });

  return container;
}

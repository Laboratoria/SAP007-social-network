import "../lib/config-firebase.js";
import {
  userLogin,
  userGoogle
} from "../lib/authentication.js";

export default () => {
  const container = document.createElement("form");
  const templateLoging = `
  <input class="email" placeholder ="e-mail" type="email" required></input>
  <span class="email-error"></span>
  <input class="password" placeholder="senha" minlength="6" type="password" required></input>
  <span class="password-error"></span>
  <button class="enter" type="submit">Entrar</button>
  <p>ou</p>
  <button class="google" type="submit">Login com o Google</button>
  <div class="register"><a href="/#register">Cadastre-se</a></div>
  `;

  container.innerHTML = templateLoging;



  const email = container.querySelector(".email");
  const password = container.querySelector(".password");
  const loginGoogle = container.querySelector(".google");
  const messageErrorEmail = container.querySelector(".email-error");
  const messageErrorPassword = container.querySelector(".password-error");


  container.addEventListener("submit", (e) => {
    e.preventDefault();
    userLogin(email.value, password.value)
      .then(function () {
        window.location.hash = "#feed";
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (error.code == "auth/user-not-found") {
          messageErrorEmail.innerHTML = "Conta não cadastrada";
        } else if (error.code == "auth/wrong-password") {
          messageErrorPassword.innerHTML = "Senha inválida";
        }
        return errorMessage;
      });
  });



  loginGoogle.addEventListener("click", (e) => {
    e.preventDefault();
    userGoogle()
      .then(() => {
        window.location.hash = "#feed";
      })
      .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });
  });

  return container;
};

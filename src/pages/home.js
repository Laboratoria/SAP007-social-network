import "../lib/firebase.js";
import { userLogin, googleLogin } from "../lib/authentication.js";

export default () => {
  const container = document.createElement("form");
  container.setAttribute("class", "container");

  const template = `
    <input class="input-email" placeholder="e-mail" type="email"></input>
    <span class="error"></span>
    <input class="input-password" placeholder="senha" minlength="6" type="password"></input>
    <button class="enter" type="submit">Entrar</button>
    <p>ou</p>
    <button class="google-button" type="submit"><img class="google-logo" src="./images/google.png" alt="google-icon"/>Login com o Google</button>
    <div class="register"><a href="#register">Cadastre-se</a></div>
    `;

  container.innerHTML = template;

  const email = container.querySelector(".input-email");
  const password = container.querySelector(".input-password");
  const googleButton = container.querySelector(".google-button");

  container.addEventListener("submit", (e) => {
    e.preventDefault();
    userLogin(email.value, password.value)
      .then(function () {
        window.location.hash = "#timeline";
      })
      .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });
  });

  googleButton.addEventListener("click", (e) => {
    e.preventDefault();
    googleLogin()
    .then(() => {
      alert("google com sucesso");
      // window.location.hash = "#timeline";
    })
    .catch((error) => {
      const errorMessage = error.message;
      return errorMessage;
    });
  });

  return container;
};


import "../lib/firebase.js";
import { userLogin } from "../lib/authentication.js";

export default () => {
  const container = document.createElement("form");
  container.setAttribute("class", "container");

  const template = `
        <input class="input-email" placeholder="e-mail" type="email" required></input>
        <span class="error"></span>
        <input class="input-password" placeholder="senha" minlength="6" type="password" required></input>
        <button class="enter" type="submit">Entrar</button>
        <div class="register"><a href="#register">Cadastre-se</a></div>
    `;

  container.innerHTML = template;

  const email = container.querySelector(".input-email");
  const password = container.querySelector(".input-password");

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

  return container;
};

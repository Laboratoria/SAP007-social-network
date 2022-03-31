import "../lib/firebase.js";
import {userCreate} from "../lib/authentication.js";

export default () => {
  const container = document.createElement("form");
  container.setAttribute("class", "container-register");

  const template = `
    <div class="template">
    <input class="username" placeholder="nome de usuário" required></input>
    <input class="input-email" placeholder="e-mail" type="email" required></input>
    <input class="input-password" placeholder="senha" minlength="6" type="password" required></input>
    <input class="confirm-password" placeholder="confirmar senha" minlength="6" type="password" required></input>
    <button class="enter" type="submit">Cadastrar</button>
    <div class="user-register"><a href="#">Já tenho um cadastro</a></div>
    </div>
    `;

  container.innerHTML = template;

  const email = container.querySelector(".input-email");
  const password = container.querySelector(".input-password");
  //const user = container.querySelector(".username");

  container.addEventListener("submit", (e) => {
    e.preventDefault();
    userCreate(email.value, password.value)
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

import "../lib/firebase.js";
import {userCreate } from "../lib/authentication.js";

export default () => {
  const container = document.createElement("form");
  container.setAttribute("class", "container-register");

  const template = `
    <div class="template">
    <input class="gap" placeholder="nome de usuário" required></input>
    <input class="gap" placeholder="e-mail" type="email" required></input>
    <span class="error"></span>
    <input class="gap" placeholder="senha" minlength="6" type="password" required></input>
    <button class="button-enter" type="submit">Cadastrar</button>
    <div class="user-register"><a href="#">Já tenho um cadastro</a></div>
    </div>
    `;

  container.innerHTML = template;

  const email = container.querySelector(".input-email");
  const password = container.querySelector(".input-password");
  const message = container.querySelector(".error");
  //const user = container.querySelector(".username");


  container.addEventListener("submit", (e) => {
    e.preventDefault();
    userCreate(email.value, password.value)
      .then(function () {
        window.location.hash = "#timeline";
      })
      .catch((error) => {
        const errorMessage = error.message;
        if(error.code == "auth/invalid-email"){
          message.innerHTML = "Digite um e-mail válido"
        }else if (error.code == 'auth/email-already-in-use') {
           message.innerHTML = "Esse e-mail já está sendo utilizado"
        } 
        return errorMessage;
      });
  });



  return container;
};

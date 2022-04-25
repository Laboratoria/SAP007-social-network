import "../lib/config-firebase.js";
import {
  userRegister
} from "../lib/authentication.js";
//import { template } from "@babel/core";

export default () => {
  const container = document.createElement("section");


  const template = `
  <div class="container">
  <form class="form-register">
  <input type="text" class="name-register" placeholder="nome:"/>
  <input type="email" class="email-register" id="email" autocomplete="on" required placeholder="e-mail:"/>
  <input type="password" class="password-register" id="password" minlength="6"required placeholder="crie uma senha:"/>
  <input type="password" class="password-register" id="password" minlength="6"required placeholder="confirmar senha:"/>
  <span class="error-register"></span>
  <button type= "submit" class="button-register">Cadastrar</button>
  </form>
  </div>`;

  container.innerHTML = template;

  //const registerName = container.querySelector(".name-register");
  const registerEmail = container.querySelector(".email-register");
  const registerPassword = container.querySelector(".password-register");
  const buttonRegister = container.querySelector(".button-register");
  const messageError = container.querySelector(".error-register");

  container.addEventListener("submit", (e) => {
    e.preventDefault();
    userRegister(registerEmail.value, registerPassword.value)
      .then(() => {
        window.location.hash = "#feed";
      })
      .catch((error) => {
        if (error.code === "auth/email-already-exists") {
          messageError.innerHTML = "E-mail já cadastrado"
        } else if (error.code === "auth/invalid-email") {
          messageError.innerHTML = "E-mail inválido"
        } else if (error.code === "auth/invalid-password") {
          messageError.innerHTML = "Sua senha deve ter no mínimo 6 carecteres"
        }
        return messageError
      });
  })
  return container;
};

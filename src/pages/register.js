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
  <button type= "submit" class="button-register">Cadastrar</button>
  </form>
  </div>`;

  container.innerHTML = template;
  return container;
};

/* const registerName = container.querySelector(".name-register");
const registerEmail = container.querySelector(".email-register");
const registerPassword = container.querySelector(".password-register");
const buttonRegister = container.querySelector(".button-register");

container.addEventListener("submit", (e) => {
  e.preventDefault();
  userRegister(registerEmail.value, registerPassword.value)
    .then(() => {
      window.location.hash = "#feed";
    })
  catch ((error) => {
    const errorMessage = error.message;
    alert("Verifique seus dados");
    return errorMessage
  });
});
return container;
}
*/

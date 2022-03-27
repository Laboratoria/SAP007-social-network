import { Login } from "./Login.js";
import { registerUser } from "../lib/librariesfirebase.js";

export const Register = () => {
  document.getElementById("root").innerHTML = `
    <div id="div-login">
        <div id="divLogo">
            <img src="images/logo.png" class="logo"/>
         </div>
        <div class="div-username">
            <i class="fa-solid fa-circle-info e-mailIcon"></i>
            <input type="text" class="register-input"  id="name" placeholder="Nome e Sobrenome"></input>
        </div>
        <div class="div-username">
            <i class="fa-solid fa-envelope e-mailIcon"></i>
            <input type="text" class="register-input" id="e-mail" placeholder="Email"></input>
        </div>
        <div class="div-username">
            <i class="fa-solid fa-lock passwordIcon"></i>
            <input type="password" class="register-input" id="password" placeholder="Senha"></input>
        </div>
        <div class="div-username">
            <i class="fa-solid fa-lock passwordIcon"></i>
            <input type="password" class="register-input" id="confirmPassword" placeholder="Confirmar senha"></input>
        </div>
        <button class="register-btn" id="register">Registrar-se</button><br>
        <i class="fa-solid fa-circle-chevron-left" id="register-icon-back"></i>
        </div>
        <div class="div__imageLogin"><img src="images/wall2.jpeg" class="img-login"/>
    </div>`;

  document
    .getElementById("Register__iconBack")
    .addEventListener("click", () => {
      window.location.hash = "#/login";
    });

  document.getElementById("register").addEventListener("click", registerUser);
};

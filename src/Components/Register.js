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

  // const register = document.getElementById("register");
  // register.addEventListener('click', () => {
  //   const valueOfEmail= document.getElementById("e-mail").value;
  //   const valueOfconfirmPassword= document.getElementById("confirmPassword").value;
  //   console.log(valueOfEmail, valueOfconfirmPassword)

  //   auth
  //   .createUserWithEmailAndPassword(valueOfEmail, valueOfconfirmPassword)
  //   .then( userCredential => {
  //     console.log('Sign up')
  //   });
  // });

  document
    .getElementById("Register__iconBack")
    .addEventListener("click", () => {
      window.location.hash = "#/login";
    });

  document.getElementById("register").addEventListener("click", registerUser);
};

// eslint-disable-next-line import/no-cycle
// import { onNavigate } from '../main.js';

// export const Register = () => {
//   const HomeDiv = document.createElement('div');
//   HomeDiv.textContent = 'Bienvenida al Resgistro';
//   const buttonHome = document.createElement('button');

//   buttonHome.textContent = 'Regresar al Home';

//   buttonHome.addEventListener('click', () => onNavigate('/'));

//   HomeDiv.appendChild(buttonHome);

//   return HomeDiv;
// };

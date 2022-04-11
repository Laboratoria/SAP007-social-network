import {
  newUserWithEmailAndPassword,
  nerwUserWithGoogle,
} from "../../connection-firebase/authentication.js";
import { auth, provider } from "../../connection-firebase/config-firebase.js";

export const login = () => {
  const container = document.createElement("div");
  container.setAttribute("id", "container-general");
  container.innerHTML = `
    <form id="user-form">
      <img src="./img/log-labfriends-black.png" id="logo" alt="Logo da LabFriends">
      <label for="user-email" class="user-label">
        Email
      </label>
      <input type="email" name="user-email" id="user-email" class="user-input" placeholder="Digite seu email" required>
      <label for="user-password" class="user-label">
        Senha
      </label>
      <input type="password" name="user-password" id="user-password" class="user-input input-password-spacing" placeholder="Digite sua senha" required>
      <a href="#" type="button" data-modal="open-modal" class="small-text-right">
        Esqueceu a senha?
      </a>
      <input type="submit" id="login-labfriends" class="user-button button-pink">
        ENTRAR  
      </input>
      <div class="line">
        <span class="text-line">ou</span>
      </div>
      <button id="login-google" class="user-button  button-green">   
        Register with Google 
        <img src="./img/icone/cons8-google-logo-48.ico">
      </button>
      <p class="new-account" >
        Não tem conta? <a href="#register" class="emphasis-pink">Crie uma conta agora!</a>
      </p>
    </form>

    <section class="container-modal" data-modal="container-modal">
      <div class="modal">
        <button class="close" data-modal="close-modal">X</button>
        <label for="user-email" class="user-label">Informe o seu email</label>
        <input type="email" name="user-email" id="user-reset-email" class="user-input" placeholder="Digite seu email" required>
        <button type="submit" id="button-reset-password">
          ENVIAR POR EMAIL
        </button>
      </div>
    </section>
    `;

  const form = document.getElementById("user-form");
  form.addEventListener("submit", (e) => {
    // e = comportamento padrão daquele evento ou o evento que eu estabelecer como padrão
    e.preventDefault(); // previnir que o comportamento padrão
    const email = form.querySelector("#user-email").value;
    const password = form.querySelector("#user-password").value;
    newUserWithEmailAndPassword(email, password).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //...
    });
  });
  form.querySelector("#google-register").addEventListener("click", () => {
    nerwUserWithGoogle(auth, provider);
  });

  return container;
};

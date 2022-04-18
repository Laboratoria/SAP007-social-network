import {
  authUserLabFriends,
  authUserWithGoogle,
} from "../connection-firebase/authentication.js";

const login = {
  createLogin: function () {
    const container = document.createElement("div");
    container.setAttribute("id", "container-general");
    container.innerHTML = `
      <form id="user-form">
        <img src="./img/log-labfriends-black.png" id="logo" alt="Logo da LabFriends">
        <label for="user-email" class="user-label">Email</label>
        <input type="email" name="user-email" id="user-email-labfriends" class="user-input" placeholder="Digite seu email">
        <label for="user-password" class="user-label">Senha</label>
        <input type="password" name="user-password" id="user-password-labfriends" class="user-input input-password-spacing" placeholder="Digite sua senha">
        <a href="#" type="button" id="button-reset-password" class="small-text-right">
          Esqueceu a senha?
        </a>
        <span id="message"></span>
        <button type="submit" id="login-labfriends" class="user-button button-pink">
          ENTRAR
        </button>
        <div class="line">
          <span class="text-line">ou</span>
        </div>
        <button id="login-google" class="user-button  button-green"> 
          <img class="icon-button" src="./img/icons/icon-logo-google.ico">  
          Entrar com Google 
        </button>
        <p class="new-account" >
          Não tem conta? <a href="#register" class="emphasis-pink">Crie uma conta agora!</a>
        </p>
      </form>
      <section id="modal-open">
      </section>
    `;

    const modalContainer = container.querySelector("#modal-open");
    const buttonLoginLabfriends = container.querySelector("#login-labfriends");
    const buttonLoginGoogle = container.querySelector("#login-google");
    const buttonResetPassword = container.querySelector(
      "#button-reset-password"
    );
    const message = container.querySelector("#message");

    buttonLoginLabfriends.addEventListener("click", (e) => {
      e.preventDefault();
      const email = container.querySelector("#user-email-labfriends").value;
      const password = container.querySelector(
        "#user-password-labfriends"
      ).value;
      let newEmail = email.match(/[\w.\-+]+@[\w-]+\.[\w-.]+/gi);

      if (!email || !password) {
        message.innerHTML = "Preencha todos os campos!";
      } else if (!newEmail) {
        message.innerHTML = "Preencha o campo de email corretamente!";
      } else if (email && password && newEmail) {
        authUserLabFriends(email, password)
          .then((window.location.hash = "#timeline")) //Está dando erro
          .catch(() => {
            console.log("erro");
          });
      }
    });

    buttonLoginGoogle.addEventListener("click", (e) => {
      e.preventDefault();
      authUserWithGoogle().then(() => {
        window.location.hash = "#timeline";
      });
    });

    buttonResetPassword.addEventListener("click", () => {
      modalContainer.innerHTML = `
      <div id="modal-container" class="modal-container">
        <div class="modal">
          <button id="modal-close" class="modal-close">X</button>
          <label for="user-email" class="user-label">Informe o seu email</label>
          <input type="email" name="user-email" id="user-reset-email" class="user-input" placeholder="Digite seu email" required>
          <button type="submit" id="button-reset-password">
            ENVIAR POR EMAIL
          </button>
        </div>
      </div>`;

      const close = modalContainer.querySelector("#modal-close");
      modalContainer.style.display = "block";

      close.onclick = function () {
        modalContainer.style.display = "none";
      };
    });

    return container;
  },
};

export default login;

/*
switch (errorCode) {
  case "auth/invalid-email":
    errorMessage = "Insira um email válido.";
    msgAlert.innerHTML = errorMessage;
    break;
  case "auth/user-not-found":
    errorMessage =
      'Usuário não encontrado. Crie um cadastro clicando em "Registre-se".';
    msgAlert.innerHTML = errorMessage;
    break;
  case "auth/internal-error":
    errorMessage = "Insira a senha.";
    msgAlert.innerHTML = errorMessage;
    break;
}
*/

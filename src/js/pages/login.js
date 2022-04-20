import {
  authUserLabFriends,
  authUserWithGoogle,
  forgotPassword,
  verificationEmail,
} from "../../config/authentication.js";

const login = {
  createLogin: function () {
    const container = document.createElement("section");
    container.classList.add("container-login");
    container.innerHTML = `
      <form class="user-form">
        <img src="./img/log-labfriends-black.png" id="logo" alt="Logo da LabFriends">
        <label for="user-email" class="user-label">Email</label>
        <input type="email" id="user-email" class="user-input" placeholder="Digite seu email">
        <label for="user-password" class="user-label">Senha</label>
        <input type="password" id="user-password" class="user-input input-password-spacing" placeholder="Digite sua senha">
        <a href="#" type="button" class="link small-text-right modal-open">
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
          ENTRAR COM GOOGLE
        </button>
        <p class="new-account" >
          Não tem conta?<br> <a href="#register" class="emphasis-pink">Crie uma conta agora!</a>
        </p>
      </form>

      <section id="modal-container" class="modal-container">
        <div class="modal">
          <button id="modal-close" class="modal-close">X</button>
          <label for="user-email-reset" class="title-modal">Informe o seu email</label>
          <input type="email" id="user-email-reset" class="user-input-modal" placeholder="Digite seu email">
          <button type="submit" id="button-reset-password" class="user-button button-pink">
            ENVIAR POR EMAIL
          </button>
          <span id="message-reset"></span>
        </div>
      </section>
    `;

    const buttonLoginLabfriends = container.querySelector("#login-labfriends");
    const buttonLoginGoogle = container.querySelector("#login-google");
    const buttonResetPassword = container.querySelector(
      "#button-reset-password"
    );
    const modalOpen = container.querySelector(".modal-open");
    const modalClose = container.querySelector(".modal-close");
    const modalContainer = container.querySelector(".modal-container");
    const message = container.querySelector("#message");
    const messageReset = container.querySelector("#message-reset");

    buttonLoginLabfriends.addEventListener("click", (e) => {
      e.preventDefault();
      const email = container.querySelector("#user-email").value;
      const password = container.querySelector("#user-password").value;
      const newEmail = email.match(/[\w.\-+]+@[\w-]+\.[\w-.]+/gi);

      if (!email || !password) {
        message.innerHTML = "Preencha todos os campos!";
      } else if (!newEmail) {
        message.innerHTML = "Preencha o campo de email corretamente!";
      } else if (email && password && newEmail) {
        const emailValidation = verificationEmail();
        console.log(emailValidation);
        if (emailValidation === "true") {
          authUserLabFriends(email, password);
        } else {
          message.innerHTML = "Email inexistente!";
        }
      }
    });

    buttonLoginGoogle.addEventListener("click", (e) => {
      e.preventDefault();
      authUserWithGoogle().then(() => {
        window.location.hash = "#timeline";
      });
    });

    buttonResetPassword.addEventListener("click", (e) => {
      e.preventDefault();
      const emailResetPassword =
        container.querySelector("#user-email-reset").value;
      const newEmailReset = emailResetPassword.match(
        /[\w.\-+]+@[\w-]+\.[\w-.]+/gi
      );
      console.log(emailResetPassword);
      forgotPassword(emailResetPassword);
    });

    if (modalOpen && modalClose && modalContainer) {
      const emailResetPassword =
        container.querySelector("#user-email-reset").value;
      const toogle = function (e) {
        e.preventDefault();
        emailResetPassword = "";
        messageReset.innerHTML = "";
        modalContainer.classList.toggle("active");
      };
      const outside = function (e) {
        if (e.target === this) {
          e.preventDefault();
          emailResetPassword.value = "";
          messageReset.innerHTML = "";
          modalContainer.classList.toggle("active");
        }
      };
      modalOpen.addEventListener("click", toogle);
      modalClose.addEventListener("click", toogle);
      modalContainer.addEventListener("click", outside);
    }
    return container;
  },
};

export default login;

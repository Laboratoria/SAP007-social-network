import {
  authUserLabFriends,
  authUserWithGoogle,
  forgotPassword,
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
        <a href="#" type="button" class="small-text-right modal-open">
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

      <section id="modal-container" class="modal-container">
        <div class="modal">
          <button id="modal-close" class="modal-close">X</button>
          <label for="user-email" class="user-label">Informe o seu email</label>
          <input type="email" name="user-email" id="user-email-reset" class="user-input" placeholder="Digite seu email">
          <button type="submit" id="button-reset-password">
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
      const email = container.querySelector("#user-email-labfriends").value;
      const password = container.querySelector(
        "#user-password-labfriends"
      ).value;
      const newEmail = email.match(/[\w.\-+]+@[\w-]+\.[\w-.]+/gi);

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

    if (modalOpen && modalClose && modalContainer) {
      const emailResetPassword = container.querySelector("#user-email-reset");
      const toogle = function (e) {
        e.preventDefault();
        emailResetPassword.value = "";
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

    buttonResetPassword.addEventListener("click", (e) => {
      e.preventDefault();
      const emailResetPassword =
        container.querySelector("#user-email-reset").value;
      const newEmailReset = emailResetPassword.match(
        /[\w.\-+]+@[\w-]+\.[\w-.]+/gi
      );

      if (!emailResetPassword) {
        messageReset.innerHTML = "Preencha o campo de email!";
      } else if (!newEmailReset) {
        messageReset.innerHTML = "Preencha o campo de email corretamente!";
      } else {
        forgotPassword(emailResetPassword)
          .then(() => {
            messageReset.innerHTML = "Email enviado.";
          })
          .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;

            switch (errorCode) {
              case "auth/invalid-email":
                errorMessage = "Email inválido.";
                messageReset.innerHTML = errorMessage;
                break;
              case "auth/user-not-found":
                errorMessage = "Usuário não encontrado.";
                messageReset.innerHTML = errorMessage;
                break;
              case "auth/missing-email":
                errorMessage = "Insira um email.";
                messageReset.innerHTML = errorMessage;
                break;
            }
          });
      }
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

import {
  authUserLabFriends,
  authUserWithGoogle,
} from "../../connection-firebase/authentication.js";

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
      <a href="#" type="button" data-modal="open-modal" class="small-text-right">
        Esqueceu a senha?
      </a>
      <span id="error">Erro ao acessar a sua conta! Verifique o seu email e senha!</span>
      <button type="submit" id="login-labfriends" class="user-button button-pink">
        ENTRAR
      </button>
      <div class="line">
        <span class="text-line">ou</span>
      </div>
      <button id="login-google" class="user-button  button-green"> 
        <img class="icon-button" src="./img/icons/icon-logo-google.ico">  
        Entre com Google 
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

    const email = container.querySelector("#user-email-labfriends");
    const password = container.querySelector("#user-password-labfriends");
    const msgAlert = container.querySelector("#erroMessage");

    container
      .querySelector("#login-labfriends")
      .addEventListener("click", (event) => {
        event.preventDefault();
        authUserLabFriends(email.value, password.value)
          .then(function () {
            //window.location.hash = "#timeline";
            console.log("Entrou na conta!");
          })
          .cath((error) => {
            //arrumar ao usar login
            console.log(errorCode);
            console.log(errorMessage);
            /*
            switch (errorCode) {
              case "auth/wrong-password":
                errorMessage = "Senha errada.";
                msgAlert.innerHTML = errorMessage;
                break;
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
            }*/
          });
      });

    container
      .querySelector("#login-google")
      .addEventListener("click", (event) => {
        event.preventDefault();
        authUserWithGoogle();
      });

    return container;
  },
};

export default login;
/*Mostrar erro */

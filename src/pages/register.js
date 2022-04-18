import { registerNewUser } from "../connection-firebase/authentication.js";

const register = {
  createRegister: function () {
    const container = document.createElement("div");
    container.setAttribute("id", "container-general");
    container.innerHTML = `
    <form id="user-form">
      <img src="./img/log-labfriends-black.png" id="logo" alt="Logo da LabFriends">
      <label for="user-name" class="user-label">
        Nome Social
      </label>
      <input type="text" name="user-name" id="user-name" class="user-input" placeholder="Digite seu nome" required>
      <label for="user-email" class="user-label">
        Email
      </label>
      <input type="email" name="user-email" id="user-email" class="user-input" placeholder="Digite seu email" required>
      <label for="user-password" class="user-label">
        Senha
      </label>
      <input type="password" name="user-password" id="user-password" class="user-input" placeholder="Digite sua senha" required>
      <label for="user-password-repeat" class="user-label">
        Repita a Senha
      </label>
      <input type="password" name="user-password-repeat" id="user-password-repeat" class="user-input" placeholder="Digite sua senha novamente" required>
      <input type="button" value="CRIAR CONTA" id="new-login" class="user-button button-green">
      <span id="message"></span>
      <a href="#login" class="small-text-right">
        < Voltar para o Login
      </a>
    </form>
    `;

    container.querySelector("#new-login").addEventListener("click", (e) => {
      e.preventDefault();
      const name = container.querySelector("#user-name");
      const email = container.querySelector("#user-email-labfriends");
      const password = container.querySelector("#user-password-labfriends");
      const passwordRepeat = container.querySelector("#user-password-repeat");
      const emailValue = email.value;
      const newEmail = email.match(/[\w.\-+]+@[\w-]+\.[\w-.]+/gi);
      const message = container.querySelector("#message");

      if (password.value != passwordRepeat.value) {
        message.innerHTML = "Digite a senha novamente!";
      } else {
        if (!name.value || !email.value || !password.value) {
          message.innerHTML = "Preencha todos os campos!";
        } else if (!newEmail) {
          message.innerHTML = "Preencha o campo de email corretamente!";
        } else if (name.value && email.value && password.value && newEmail) {
          registerNewUser(name.value, email.value, password.value)
            .then(function () {
              window.location.hash = "#home";
              alert("Email Cadastrado");
            })
            .catch((error) => {
              let errorCode = error.code;
              let errorMessage = error.message;

              switch (errorCode) {
                case "auth/invalid-email":
                  errorMessage = "Insira um email válido.";
                  message.innerHTML = errorMessage;
                  break;
                case "auth/weak-password":
                  errorMessage = "A senha deve ter no mínimo seis caracteres.";
                  message.innerHTML = errorMessage;
                  break;
                case "auth/email-already-in-use":
                  errorMessage = "Email já cadastrado.";
                  message.innerHTML = errorMessage;
                  break;
                case "auth/missing-email":
                  errorMessage = "Insira um email.";
                  message.innerHTML = errorMessage;
                  break;
                default:
                  errorMessage = "Preencha todos os campos";
                  message.innerHTML = errorMessage;
              }
            });
        }
      }
    });

    return container;
  },
};

export default register;

import { registerNewUser } from "../../config/authentication.js";

const register = {
  createRegister: function () {
    const container = document.createElement("section");
    container.classList.add("container-login");
    container.innerHTML = `
    <form class="user-form">
      <img src="./img/log-labfriends-black.png" id="logo" alt="Logo da LabFriends">
      <label for="user-name" class="user-label">
        Nome Social
      </label>
      <input type="text" name="user-name" id="user-name" class="user-input" placeholder="Digite seu nome">
      <label for="user-email" class="user-label">
        Email
      </label>
      <input type="email" name="user-email" id="user-email" class="user-input" placeholder="Digite seu email">
      <label for="user-password" class="user-label">
        Senha
      </label>
      <input type="password" name="user-password" id="user-password" class="user-input" placeholder="Digite sua senha">
      <label for="user-password-repeat" class="user-label">
        Repita a Senha
      </label>
      <input type="password" name="user-password-repeat" id="user-password-repeat" class="user-input" placeholder="Digite sua senha novamente">
      <span id="message"></span>
      <input type="button" value="CRIAR CONTA" id="new-login" class="user-button button-green">
      <a href="#login" class="link small-text-right">
        < Voltar para o Login
      </a>
    </form>
    `;

    container.querySelector("#new-login").addEventListener("click", (e) => {
      e.preventDefault();
      const name = container.querySelector("#user-name").value;
      const email = container.querySelector("#user-email").value;
      const password = container.querySelector("#user-password").value;
      const passwordRepeat = container.querySelector(
        "#user-password-repeat"
      ).value;
      const newEmail = email.match(/[\w.\-+]+@[\w-]+\.[\w-.]+/gi);
      const message = container.querySelector("#message");

      if (password !== passwordRepeat) {
        message.innerHTML =
          "As duas senhas não coincidem. Digite-as novamente!";
      }
      if (!newEmail) {
        message.innerHTML = "Preencha o campo de email corretamente!";
      } else if (name && email && password && passwordRepeat && newEmail) {
        registerNewUser(email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            message.innerHTML = "Cadastro realizado com sucesso!";
          })
          .catch((error) => {
            switch (error.code) {
              case "auth/email-already-in-use":
                message.innerHTML = "Email já cadastrado! Escolha outro email.";
                break;
              case "auth/weak-password":
                message.innerHTML =
                  "Sua senha deve ter no mínimo 6 caracteres.";
                break;
            }
          });
      }
    });
    return container;
  },
};

export default register;

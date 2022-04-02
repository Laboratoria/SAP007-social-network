const register = {
  createUser: function () {
    const container = document.createElement("form");
    container.setAttribute("id", "user-form");
    container.innerHTML = `
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
      <a href="#login" class="small-text-right">
        < Voltar para o Login
      </a>
    `;
    return container;
  },
};

export default register;

const login = {
  createLogin: function () {
    const container = document.createElement("form");
    container.setAttribute("id", "user-form");
    const template = `
      <img src="./img/log-labfriends-black.png" id="logo" alt="Logo da LabFriends">
      <label for="user-email" class="user-label">
        Email
      </label>
      <input type="email" name="user-email" id="user-email" class="user-input" placeholder="Digite seu email" required>
      <label for="user-password" class="user-label">
        Senha
      </label>
      <input type="password" name="user-password" id="user-password" class="user-input input-password-spacing" placeholder="Digite sua senha" required>
      <a href="#reset-password" data-modal="open-modal" class="small-text-right">
        Esqueceu a senha?
      </a>
      <button id="login-labfriends" class="user-button button-pink">
        ENTRAR  
      </button>
      <div class="line">
        <span class="text-line">ou</span>
      </div>
      <input type="button" value="ENTRAR COM GOOGLE" id="login-google" class="user-button button-green">
      <p class="new-account">
        Não tem conta? <a href="#register" class="emphasis-pink">Crie uma conta agora!</a>
      </p>
    `;
    container.innerHTML = template;
    return container;
  },
};

export default login;

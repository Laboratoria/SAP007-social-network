const login = {
  createLogin: function () {
    const container = document.createElement("div");
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
      <button id="login-labfriends" class="user-button button-pink">
        ENTRAR  
      </button>
      <div class="line">
        <span class="text-line">ou</span>
      </div>
      <input type="button" value="ENTRAR COM GOOGLE" id="login-google" class="user-button button-green">
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
    return container;
  },

  initModal: function () {
    const openModal = document.querySelector('[data-modal="open-modal"]');
    const closeModal = document.querySelector('[data-modal="close-modal"]');
    const containerModal = document.querySelector(
      '[data-modal="container-modal"]'
    );
    if (openModal && closeModal && containerModal) {
      let toogle = function (event) {
        event.preventDefault();
        containerModal.classList.toggle("active");
      };
      let outside = function (event) {
        if (event.target === this) {
          event.preventDefault();
          containerModal.classList.toggle("active");
        }
      };
      openModal.addEventListener("click", toogle);
      closeModal.addEventListener("click", toogle);
      containerModal.addEventListener("click", outside);
    }
  },
};

export default login;

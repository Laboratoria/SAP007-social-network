const header = {
  createHeader: function () {
    const container = document.createElement("header");
    container.setAttribute("id", "header");
    container.innerHTML = `
        <section class="menu-header">
          <h1 class="container-logo">
            <a href="#timeline">
              <img src="../img/icons/icon-logo.png" id="logo-header" alt="Ícone do logo da LabFriends">
            </a>
          <h1>
          <nav id="menu">
            <ul>
              <li class="menu-list">
                <a href="#friends">
                  <img src="../img/icons/icon-frinds-list.png" class="menu-icon" alt="Ícone de lista de amigas">
                  <p class="menu-text">Amigas</p>
                </a>
              </li>
              <li class="menu-list">
                <a href="#timeline">
                  <img src="../img/icons/icon-timeline.png" class="menu-icon" alt="Ícone de início">
                  <p class="menu-text">Timeline</p>
                </a>
              </li>
              <li class="menu-list">
                <a href="/#" class="modal-open">
                  <img src="../img/icons/icon-add.png" class="menu-icon" alt="Ícone de nova mensagem">
                  <p class="menu-text">Novo Post</p>
                </a>
              </li>
              <li id="submenu" class="menu-list">
                <button class="btn-menu">
                  <img src="../img/icons/icon-perfil.png" class="menu-icon" alt="Ícone do meu perfil">
                  <p class="menu-text">Meu Perfil</p>
                </button>
                <ul class="submenu-list">
                  <li><a href="#profile">Visualizar Perfil</a></li>
                  <li>
                    <button type="button" id="button-logout">
                      SAIR
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </section>
      </header>
      <button type="button" id="button-logout">
        SAIR
      </button>
    `;

    const buttonLogout = container.querySelector("#button-logout");
    buttonLogout.addEventListener("click", () => {
      logout().then(() => {
        window.location.hash = "#login";
      });
    });

    return container;
  },
};

export default header;

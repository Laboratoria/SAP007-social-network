const header = {
  createHeader: function () {
    const template = `
      <header id="header">
        <section class="menu-header">
          <h1>
            <a href="#timeline">
              <img src="../img/icons/icon-logo.png" id="logo-timeline" alt="Ícone do logo da LabFriends">
            </a>
          <h1>
          <nav id="menu-nav">
            <ul class="menu" id="menu" role="menu">
              <li class="menu-list">
                <a href="#friends">
                  <img src="../img/icons/icon-frinds-list.png" class="menu-icon" alt="Ícone de lista de amigas">
                  <p class="menu-text">Amigas</p>
                </a>
              </li>
              <li class="menu-list">
                <a href="#timeline">
                  <img src="../img/icons/icon-timeline.png" class="menu-icon" alt="Ícone de início">
                  <p class="menu-text" Início</p>
                </a>
              </li>
              <li class="menu-list">
                <a href="/#" class="modal-open">
                  <img src="../img/icons/icon-add.png" class="menu-icon" alt="Ícone de nova mensagem">
                  <p class="menu-text">Nova Mensagem</p>
                </a>
              </li>
              <li class="menu-list">
                <a href="/#">
                  <img src="../img/icons/icon-perfil.png" class="menu-icon" alt="Ícone do meu perfil">
                  <p class="menu-text">Meu Perfil</p>
                </a>
                <ul class="menu" id="menu" role="menu">
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
    `;

    return template;
  },
};

export default header;

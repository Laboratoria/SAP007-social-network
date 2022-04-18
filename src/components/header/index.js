const header = {
  createHeader: function () {

    const header = `
    <header id="header">
      <a href="#timeline">
        <img src="../img/icons/icon-logo.png" id="logo-timeline" alt="Ícone do logo da LabFriends">
      </a>
      <nav id="menu">
        <ul>
          <li class="menu-list">
            <a href="#">
              <img src="../img/icons/icon-frinds-list.png" class="menu-icon" alt="Ícone de lista de amigas">
              <p class="menu-text">Amigas</p>
            </a>
          </li>
          <li class="menu-list">
            <a href="/#">
              <img src="../img/icons/icon-timeline.png" class="menu-icon" alt="Ícone de início">
              <p class="menu-text" Início</p>
            </a>
          </li>
          <li class="menu-list">
            <a href="/#">
              <img src="../img/icons/icon-add.png" class="menu-icon" alt="Ícone de nova mensagem">
              <p class="menu-text">Nova Mensagem</p>
            </a>
          </li>
          <li class="menu-list">
            <a href="/#profile">
              <img src="../img/icons/icon-perfil.png" class="menu-icon" alt="Ícone do meu perfil">
              <p class="menu-text">Meu Perfil</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <div style="height: 80px"></div>
    `;
    return header;
  },
};

export default header;

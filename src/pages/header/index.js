const header = {
  createHeader: function () {
    const container = document.getElementById("container-general");
    container.innerHTML = `
    <header id="header">
      <h1>
        <a href="#login">
          <img src="../img/icons/icon-logo.png" id="logo-timeline" alt="Ícone do logo da LabFriends">
        </a>
      </h1
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
            <a href="/#">
              <img src="../img/icons/icon-perfil.png" class="menu-icon" alt="Ícone do meu perfil">
              <p class="menu-text">Meu Perfil</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
    `;
    return container;
  },
};

export default header;

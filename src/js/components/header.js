

export function createHeader() {
  const container = document.createElement("section");
  container.setAttribute("class", "menu-header");
  container.innerHTML = `
          <h1 class="container-logo">
            <a href="#feed">
              <img src="../img/icons/icon-logo.png" id="logo-icon" alt="Ícone do logo da LabFriends">
            </a>
            <a href="#feed">
              <img src="../img/log-labfriends-yellow.png" id="logo-header" alt="Ícone do logo da LabFriends">
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
                <a href="#feed">
                  <img src="../img/icons/icon-feed.png" class="menu-icon" alt="Ícone de início">
                  <p class="menu-text">Feed</p>
                </a>
              </li>
              <li class="menu-list">
                <a href="/#" class="modal-open">
                  <img src="../img/icons/icon-add.png" class="menu-icon" alt="Ícone de nova mensagem">
                  <p class="menu-text">Novo Post</p>
                </a>
              </li>
              <li class="menu-list">
                <a href="/#" class="modal-open">
                  <img src="../img/icons/icon-perfil.png" class="menu-icon" alt="Ícone do meu perfil">
                  <p class="menu-text">Meu Perfil</p>
                </a>
                <ul class="submenu-list">
                  <li>
                    <a href="#profile">Visualizar Perfil</a>
                  </li>
                  <li>
                    <button a href="/#" class="button-logout">SAIR</button>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
    `;
  return container;
}

export const createHeader = `
      <header id="header">
        <section class="menu-header">
          <h1 class="container-logo">
            <a href="#feed">
              <img src="../img/icons/icon-logo.png" id="logo-icon" alt="Ícone do logo da LabFriends">
            </a>
            <a href="#feed">
              <img src="../img/log-labfriends-yellow.png" id="logo-header" alt="Ícone do logo da LabFriends">
            </a>
          </h1>
          <nav class="menu">
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
                <a href="/#" id="openPost" class="modal-open" data-post="open">
                  <img src="../img/icons/icon-add.png" class="menu-icon" alt="Ícone de nova mensagem">
                  <p class="menu-text">Novo Post</p>
                </a>
              </li>
              <li id="dropdown-open" class="menu-list">
                <a href="/#" data-menu="open">
                  <img src="../img/icons/icon-perfil.png" class="menu-icon" alt="Ícone do meu perfil">
                  <p class="menu-text">Meu Perfil</p>
                </a>
              </li>
            </ul>
          </nav>
        </section>
        
        <section data-menu="container">
          <div class="modal-menu">
            <button data-menu="close">X</button>
            <ul class="dropdown-menu">
              <li>
                <a href="#profile" class="container-dropdown">
                  <img src="../img/icons/icon-perfil.png" class="drop-icon" alt="Ícone do meu perfil">
                  <div class="drop-text">
                    <p class="name-user">Nome do Usuário</p>
                    <p class="text-small">Veja seu perfil</p>
                  </div>
                </a>
              </li>
              <li>
                <button id="button-logout" class="user-button button-pink">
                  SAIR
                </button>
              </li>
            </ul>
          </div>
        </section>

        <section class="modal-container" data-post="container">
          <div class="modal">
            <button class="modal-close" data-post="close">X</button>
            <section>
              <img src="../img/icons/icon-frinds-list.png" alt="Foto do perfil">
              <p>Nome do Usuário</p>
              <label for="user-comment">
                <textarea id="message" class="comment-input" autocomplete="on" minlength="1" maxlength="1000" placeholder="Escreva uma mensagem..."></textarea>
              </label>
              <button>
                <img src="../img/icons/icon-add-image.png" alt="Ícone de adicionar imagens">
                <p>adicionar imagem</p>
              </button>
            </section>
            <input id="btn-publicar" type="button" value="PUBLICAR" data-modal="close" />
          </div>
        </section>
      </header>
    `;

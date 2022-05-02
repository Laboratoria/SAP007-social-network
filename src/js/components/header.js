import { auth } from '../../config/start-firebase.js';
import { initModal } from './modal.js';
import { logout } from '../../config/authentication.js';
import { createAddPost } from './add-post.js';

export function createHeader() {
  const header = `
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
                  <img src="../img/icons/icon-profile.png" class="menu-icon" alt="Ícone do meu perfil">
                  <p class="menu-text">Meu Perfil</p>
                </a>
                <section data-menu="container">
                  <div class="modal-menu">
                    <button data-menu="close">X</button>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="#profile" class="container-dropdown">
                          <img src="../img/icons/icon-profile.png" class="drop-icon" alt="Ícone do meu perfil">
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
              </li>
            </ul>
          </nav>
        </section>

        ${ createAddPost()}

      </header>
    `;

  return header;
}

export function headerWorking() {
  const postOpen = document.querySelector('[data-post="open"]');
  const postClose = document.querySelector('[data-post="close"]');
  const postContainer = document.querySelector('[data-post="container"]');
  const menuOpen = document.querySelector('[data-menu="open"]');
  const menuClose = document.querySelector('[data-menu="close"]');
  const menuContainer = document.querySelector('[data-menu="container"]');

  postOpen.addEventListener('focus', () => {
    initModal(postOpen, postContainer, postClose);
  });
  postOpen.addEventListener('touchstart', () => {
    initModal(postOpen, postContainer, postClose);
  });
  menuOpen.addEventListener('focus', () => {
    initModal(menuOpen, menuContainer, menuClose);
  });
  menuOpen.addEventListener('touchstart', () => {
    initModal(menuOpen, menuContainer, menuClose);
  });

  document.querySelector('#button-logout').addEventListener('click', () => {
    logout().then(() => {
      window.location.hash = '#login';
    });
  });
}

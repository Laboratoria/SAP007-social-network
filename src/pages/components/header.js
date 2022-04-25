import { logout } from '../../configs/authentication.js';

export default () => {
  const containerHeader = document.createElement('div');
  containerHeader.classList.add('content-header');
  const templateHeader = `
    <header class="header">
      <img class="header-image" src="./img/logo3.png" alt="logo">
      <nav class="header-menu" id="nav">
        <button id="btn-mobile" class="btn-mobile" aria-label="Open menu" aria-haspopup="true" aria-controls="menu" aria-expanded="false">Menu
          <span id="hamburger"></span>
        </button>

        <ul id="menu" class="menu" role="menu"> 
          <li><a class="header-menu-item" href="#about">Sobre nós</a></li>
          <li><a class="header-menu-item" href="#userprofile">Meu Perfil</a></li>
          <li><a class="header-menu-item" href="#feed">Feed</a></li>
          <li><a class="header-menu-item link-login" href="#login" id="btn-exit">Sair</a></li>
        </ul>  
      </nav>
    </header>
  `;

  containerHeader.innerHTML = templateHeader;

  const logoutButton = containerHeader.querySelector('#btn-exit');

  // função para sair do seu login
  logoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    logout()
      .then(() => {
        window.location.hash = '#login';
      });
  });

  return containerHeader;
};

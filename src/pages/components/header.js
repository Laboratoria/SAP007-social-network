import { logout } from '../../configs/authentication.js';

export function header() {
  const containerHeader = document.createElement('div');
<<<<<<< HEAD

=======
>>>>>>> bf0be9fad9ff87194f5c802e9e0235420afe2e8d
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
          <li><a id="btn-exit" class="header-menu-item">Sair</a></li>
        </ul>  
      </nav>
    </header>
  `;

  containerHeader.innerHTML = templateHeader;
  return containerHeader;
}

export function logoutUser() {
  logout()
    .then(() => {
      window.location.hash = '#login';
    });
}

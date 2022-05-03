import { userLogout } from '../lib/auth.js';

export function printNav() {
  const navContainer = document.createElement('nav');
  navContainer.classList.add('nav-menu');
  const navigationBar = ` 
    <a href="#login"><img src="assets/logout.png" class="logout-icon" id="icon-logout"></a>
    `;
    navContainer.innerHTML = navigationBar;
    const logOut = navContainer.querySelector('#icon-logout');
    logOut.addEventListener('click',(e) => {
      e.preventDefault();
      userLogout();
    });
    return navContainer;
  }
  
import { createLogin } from './pages/login.js';
import { createRegister } from './pages/register.js';
import { createHeader } from './components/header.js';
import { createFeed } from './pages/feed.js';
import { createFriends } from './pages/friends.js';
import { createProfile } from './pages/profile.js';
import { logout } from '../config/authentication.js';
import { authChange } from '../config/user.js';
import { initModal } from './components/modal.js';

function creatingInternalElements() {
  const container = document.getElementById('root');
  const sectionGeneral = document.createElement('section');
  container.style.backgroundImage = 'none';
  sectionGeneral.classList.add('container-labfriends');
  sectionGeneral.innerHTML = createHeader;
  container.append(sectionGeneral);

  const postOpen = container.querySelector('[data-post="open"]');
  const postClose = container.querySelector('[data-post="close"]');
  const postContainer = container.querySelector('[data-post="container"]');
  const menuOpen = container.querySelector('[data-menu="open"]');
  const menuClose = document.querySelector('[data-menu="close"]');
  const menuContainer = document.querySelector('[data-menu="container"]');

  postOpen.addEventListener('focus', () => {
    initModal(postOpen, postClose, postContainer);
  });
  postOpen.addEventListener('touchstart', () => {
    initModal(postOpen, postClose, postContainer);
  });
  menuOpen.addEventListener('focus', () => {
    initModal(menuOpen, menuClose, menuContainer);
  });
  menuOpen.addEventListener('touchstart', () => {
    initModal(menuOpen, menuClose, menuContainer);
  });

  document.querySelector('#button-logout').addEventListener('click', () => {
    logout().then(() => {
      window.location.hash = '#login';
    });
  });

  const headerGeneral = document.querySelector('header');
  return headerGeneral;
}

function redirectPages() {
  const container = document.getElementById('root');
  container.innerHTML = '';
  authChange((logged) => {
    if (logged) {
      const header = creatingInternalElements();
      switch (window.location.hash) {
        case '#friends':
          header.after(createFriends());
          break;
        case '#profile':
          header.after(createProfile());
          break;
        case '#feed':
        default:
          header.after(createFeed());
          break;
      }
    } else {
      const background = document.querySelector('#root');
      background.style.backgroundImage = 'url(../../img/background.gif)';
      switch (window.location.hash) {
        case '#register':
          container.append(createRegister());
          break;
        case '#login':
        default:
          window.location.hash = '';
          container.append(createLogin());
          break;
      }
    }
  });
}

window.addEventListener('load', () => {
  redirectPages();
  window.addEventListener('hashchange', redirectPages);
});

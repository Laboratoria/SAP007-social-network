import { createLogin } from './pages/login.js';
import { createRegister } from './pages/register.js';
import { createHeader } from './components/header.js';
import { createFeed } from './pages/feed.js';
import { createFriends } from './pages/friends.js';
import { createProfile } from './pages/profile.js';
import { logout } from '../config/authentication.js';
import { authChange } from '../config/user.js';
import { initModal } from './components/modal.js';
import { createNewPost } from './components/add-post.js';

const container = document.getElementById('root');

function internalRoute(page) {
  const background = document.querySelector('#root');
  background.style.backgroundImage = 'none';

  const sectionGeneral = document.createElement('section');
  sectionGeneral.classList.add('container-labfriends');

  const header = document.createElement('header');
  header.setAttribute('id', 'header');
  header.prepend(createHeader());
  header.append(createNewPost());

  sectionGeneral.append(header);
  container.append(sectionGeneral);

  switch (page) {
    case 'feed':
      header.after(createFeed());
      break;
    case 'friends':
      header.after(createFriends());
      break;
    case 'profile':
      header.after(createProfile());
      break;
    default:
  }

  const modalOpen = document.querySelector('[data-modal="open"]');
  const modalClose = document.querySelector('[data-modal="close"]');
  const modalContainer = document.querySelector('[data-modal="container"]');
  initModal(modalOpen, modalClose, modalContainer);

  const menuOpen = document.querySelector('[data-menu="open"]');
  const menuClose = document.querySelector('[data-menu="close"]');
  const menuContainer = document.querySelector('[data-menu="container"]');
  initModal(menuOpen, menuClose, menuContainer);

  document.querySelector('#button-logout').addEventListener('click', () => {
    logout().then(() => {
      window.location.hash = '#login';
    });
  });
}

function redirectPages() {
  container.innerHTML = '';
  const loggedIn = authChange();
  switch (window.location.hash) {
    case '#login':
      container.append(createLogin());
      break;
    case '#register':
      container.append(createRegister());
      break;
    case '#feed':
      if (loggedIn) internalRoute('feed');
      else window.location.hash = '#home';
      break;
    case '#friends':
      if (loggedIn) internalRoute('friends');
      else window.location.hash = '#home';
      break;
    case '#profile':
      if (loggedIn) internalRoute('profile');
      else window.location.hash = '#home';
      break;
    default:
  }
}

window.addEventListener('load', () => {
  redirectPages();
  window.addEventListener('hashchange', redirectPages);
});

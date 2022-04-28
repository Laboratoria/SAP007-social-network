import { createLogin } from './pages/login.js';
import { createRegister } from './pages/register.js';
import { createHeader } from './components/header.js';
import { createFeed } from './pages/feed.js';
import { createFriends } from './pages/friends.js';
import { createProfile } from './pages/profile.js';
import { logout } from '../config/authentication.js';
import { authChange } from '../config/user.js';
import { initModal } from './components/modal.js';
import { createAddPost } from './components/add-post.js';

const container = document.getElementById('root');

function creatingInternalElements() {
  container.style.backgroundImage = 'none';
  const sectionGeneral = document.createElement('section');
  sectionGeneral.classList.add('container-labfriends');
  const header = document.createElement('header');
  header.setAttribute('id', 'header');
  header.prepend(createHeader());
  header.append(createNewPost());
  sectionGeneral.append(header);
  container.append(sectionGeneral);

  const postOpen = document.querySelector('[data-post="open"]');
  const menuOpen = document.querySelector('[data-menu="open"]');

  postOpen.addEventListener('click', (e) => {
    e.preventDefault();
    const postClose = document.querySelector('[data-post="close"]');
    const postContainer = document.querySelector('[data-post="container"]');
    initModal(postOpen, postClose, postContainer);
  });

  menuOpen.addEventListener('click', (e) => {
    e.preventDefault();
    const menuClose = document.querySelector('[data-menu="close"]');
    const menuContainer = document.querySelector('[data-menu="container"]');
    initModal(menuOpen, menuClose, menuContainer);
  });

  document.querySelector('#button-logout').addEventListener('click', () => {
    logout().then(() => {
      window.location.hash = '#login';
    });
  });
  return header;
}

function redirectPages() {
 container.innerHTML = "";
  authChange((logged) => {
    if (logged) {
  switch (window.location.hash) {
    case '#login':
      container.append(createLogin());
      break;
    case '#register':
      container.append(createRegister());
      break;
    case '#friends':
      if (loggedIn) {
        const header = creatingInternalElements();
        header.after(createFriends());
      } else window.location.hash = '#home';
      break;
    case '#profile':
      if (loggedIn) {
        const header = creatingInternalElements();
        header.after(createProfile());
      } else window.location.hash = '#home';
      break;
    default:
      case '#feed':
      if (loggedIn) {
        const header = creatingInternalElements();
        header.after(createFeed());
      } else window.location.hash = '#home';
      break;
    } else {
      const background = document.querySelector("#root");
      background.style.backgroundImage = "url(../../img/background.gif)";

      switch (window.location.hash) {
        case "#register":
          container.append(createRegister());
          break;
        case "#login":
        default:
          window.location.hash = "";
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

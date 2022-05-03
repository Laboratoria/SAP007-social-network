import { createLogin, loginWorking } from './pages/login.js';
import { createRegister } from './pages/register.js';
import { createHeader, headerWorking } from './components/header.js';
import { createFeed, feedWorking } from './pages/feed.js';
import { createFriends } from './pages/friends.js';
import { createProfile } from './pages/profile.js';
import { createEditProfile } from './pages/edit-profile.js';
import { authChange } from '../config/authentication.js';

function creatingInternalElements() {
  const container = document.getElementById('root');
  const sectionGeneral = document.createElement('section');

  container.style.backgroundImage = 'none';
  sectionGeneral.classList.add('container-labfriends');
  sectionGeneral.innerHTML = createHeader();
  container.append(sectionGeneral);

  headerWorking();

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
        case '#edit-profile':
            header.after(createEditProfile());
            break;
        case '#feed':
        default:
          header.after(createFeed());
          feedWorking();
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
          loginWorking();
          break;
      }
    }
  });
}

window.addEventListener('load', () => {
  redirectPages();
  window.addEventListener('hashchange', redirectPages);
});

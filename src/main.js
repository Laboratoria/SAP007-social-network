import login from './pages/login.js';
import register from './pages/register.js';
import feed from './pages/feed.js';
import {checkLogin} from './lib/auth.js';

const mainContent = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
    mainContent.innerHTML = '';
    switch (window.location.hash) {
      case '':
        mainContent.appendChild(login());
        break;
      case '#login':
        mainContent.appendChild(login());
        break;
      case '#cadastro':
        mainContent.appendChild(register());
        break;
      case '#feed':
        mainContent.appendChild(feed());
        break;
      case '#register':
        mainContent.appendChild(register());
        break;
      default:
        mainContent.appendChild(login());
    }
  });
};

window.addEventListener('load', () => {
  mainContent.appendChild(login());
  init();
});

window.addEventListener('load', () => {
  checkLogin((logged) => {
    if (logged) {
      window.location.hash = '#feed';
    }
    else {
      window.location.hash = '#login';
    }
  });
});
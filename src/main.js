import './configs/config.firebase.js';
import login from '../pages/login/login.js';
import register from '../pages/register/register.js';
import feed from '../pages/feed/feed.js';

const mainContent = document.querySelector('#root');
// essa função é onde permite a mudança da rota
const init = () => {
  window.addEventListener('hashchange', () => {
    mainContent.innerHTML = '';
    switch (window.location.hash) {
      case '':
        mainContent.appendChild(login());
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

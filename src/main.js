import './lib/config-firebase.js';
import home from './pages/home/index.js';
import login from './pages/login/index.js';
import register from './pages/register/index.js';
import feed from './pages/feed/index.js';

const main = document.querySelector('#root');

function verificarHash() {
  switch (window.location.hash) {
    case ' ':
      main.appendChild(home());
      break;
    case '#login':
      main.appendChild(login());
      break;
    case '#register':
      main.appendChild(register());
      break;
    case '#feed':
      main.appendChild(feed());
      break;
    default:
      main.appendChild(home());
  }
}
const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    verificarHash();
  });
};
window.addEventListener('load', () => {
  verificarHash();
  init();
});

import '../firebase/firebaseconfig.js';
import home from '../home/home.js';
import { register } from '../register/register.js';
import { login } from '../login/login.js';
import { timeline } from '../feed/feed.js';

const main = document.querySelector('#root');
const renderizar = () => {
  switch (window.location.hash) {
    case '#home':
      main.appendChild(home());
      break;
    case '#register':
      main.appendChild(register());
      break;
    case '#login':
      main.appendChild(login());
      break;
    case '#timeline':
      main.appendChild(timeline());
      break;
    default:
      main.appendChild(home());
      break;
  }
};
const clear = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    renderizar();
  });
};

window.addEventListener('load', () => {
  renderizar();
  clear();
});

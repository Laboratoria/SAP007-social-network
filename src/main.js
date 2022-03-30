// EVENTOS DOM
import './config-firebase.js';

import { home } from './pages/home/home.js';
import { login } from './pages/login/login.js';
import { register } from './pages/register/register.js';

const content = document.querySelector('#root');

const initialContent = () => {
  content.appendChild(home());
};

const contentChange = () => {
  content.innerHTML = '';

  switch (window.location.hash) {
    case '#login':
      content.appendChild(login());
      break;
    case '#register':
      content.appendChild(register());
      break;
    case '#home':
      content.appendChild(home());
      break;
    default:
  }
};

window.addEventListener('load', initialContent);
window.addEventListener('reload', initialContent);
window.addEventListener('hashchange', contentChange);

// EVENTOS DOM
import './config-firebase.js';

import { home } from './pages/home/home.js';
import { login } from './pages/login/login.js';
import { register } from './pages/register/register.js';

const content = document.querySelector('#root');

const contentChange = () => {
  switch (window.location.hash) {
    case '#login':
      content.appendChild(login());
      break;
    case '#register':
      content.appendChild(register());
      break;
    case '#timeline':
      content.appendChild(timeline());
      break;
    case '#home':
      content.appendChild(home());
      break;
    default:
      content.appendChild(home());
  }
};

const initialContent = () => {
  window.addEventListener('hashchange', () => {
    content.innerHTML = '';
    contentChange();
  });
};

window.addEventListener('load', () => {
  contentChange();
  initialContent();
});

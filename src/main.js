// EVENTOS DOM - ROTAS
import './firebase/firebase.js';

import { home } from './home/home.js';
import { login } from './login/login.js';
import { register } from './register/register.js';
import { timeline } from './timeline/timeline.js';
import { reset } from './reset-password/reset.js';

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
    case '#reset':
      content.appendChild(reset());
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

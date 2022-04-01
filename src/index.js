// Este es el punto de entrada de tu aplicacion
import './configurafirebase/configfirebase.js';
import { pageLogin } from './pages/login/login.js';
import { feed } from './pages/feed/feed.js';
import { createLogin } from './pages/register/page-register.js';

const main = document.getElementById('root');

// main.innerHTML = '';
// main.appendChild(pageLogin());

const init = () => {
  switch (window.location.hash) {
    case '#createLogin':
      main.appendChild(createLogin());
      break;
    case '#feed':
      main.appendChild(feed());
      break;
    default:
      main.appendChild(pageLogin());
  }
};

const eventHash = () => {
  window.addEventListener('hashchange', () => {
    console.log(window.location.hash);
    main.innerHTML = '';
    init();
  });
};

window.addEventListener('load', () => {
  init();
  eventHash();
});

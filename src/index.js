// Este es el punto de entrada de tu aplicacion
import './configurafirebase/configfirebase.js';
import { pageAbout } from './pages/about/about.js';
import { pageLogin } from './pages/login/login.js';
import { feed } from './pages/feed/feed.js';
import { createLogin } from './pages/register/page-register.js';

const main = document.getElementById('root');

const init = () => {
  switch (window.location.hash) {
    case '#about':
      main.appendChild(pageAbout());
      break;
    case '#createLogin':
      // tentar por o user aqui. parametro
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
    main.innerHTML = '';
    init();
  });
};

window.addEventListener('load', () => {
  init();
  eventHash();
});

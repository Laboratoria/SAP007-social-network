// Este es el punto de entrada de tu aplicacion
import './configurafirebase/configfirebase.js';
import { pageLogin } from './pages/login/login.js';
import { feed } from './pages/feed/feed.js';
// import { createLogin } from './pages/register/page-register.js';

const main = document.getElementById('root');

// main.innerHTML = '';
// main.appendChild(pageLogin());

const init = () => {
  window.addEventListener('hashchange', () => {
    console.log(window.location.hash);
    main.innerHTML = '';
    switch (window.location.hash) {
      case '':
        main.appendChild(pageLogin());
        break;
      case '#feed':
        main.appendChild(feed());
        break;
      default:
        main.appendChild(pageLogin());
    }
  });
};

window.addEventListener('load', () => {
  main.appendChild(pageLogin());
  init();
});

import { myFunction } from './lib/index.js';
// eslint-disable-next-line
import "./serverfirebase.js";

import home from './pages/home/index.js';
import login from './pages/login/index.js';
import feed from './pages/feed/index.js';

myFunction();

const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = ' ';
    switch (window.location.hash) {
      case ' ':
        main.appendChild(home());
        break;
      case '#login':
        main.appendChild(login());
        break;
      case '#feed':
        main.appendChild(feed());
        break;
      default:
        main.appendChild(home());
    }
  });
};

const main = document.querySelector('#root');

window.addEventListener('load', () => {
  main.appendChild(home());
  init();
});

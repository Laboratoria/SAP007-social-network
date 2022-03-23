// Este es el punto de entrada de tu aplicacion
// import './dependencies/config-firebase.js';
// import { myFunction } from './lib/index.js';

// myFunction();
import login from './pages/login.js';
// import feed from './pages/feed.js';
import singUp from './pages/singup.js';

const main = document.querySelector('#root');
const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '':
        main.appendChild(login());
        break;
      case '#feed':
        main.appendChild(feed());
        break;
      case '#singUp':
        main.appendChild(singUp());
        break;
      default:
        main.appendChild(login()); //criar error
    }
  });
};

window.addEventListener('load', () => {
  main.appendChild(login());
  init();
});

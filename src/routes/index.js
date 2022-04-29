import login from '../pages/login.js';
import feed from '../pages/feed.js';
import signUp from '../pages/signup.js';
import publish from '../pages/publish.js';
import { logged } from '../services/authentication.js';

const main = document.querySelector('#root');
const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '':
        logged((logado) => {
          if (logado) {
            main.appendChild(feed());
          } else {
            main.appendChild(login());
          }
        });
        break;
      case '#login':
        logged((logado) => {
          if (logado) {
            main.appendChild(feed());
          } else {
            main.appendChild(login());
          }
        });
        break;
      case '#feed':
        logged((logado) => {
          if (logado) {
            main.appendChild(feed());
          } else {
            main.appendChild(login());
          }
        });
        break;
      case '#signUp':
        logged((logado) => {
          if (logado) {
            main.appendChild(feed());
          } else {
            main.appendChild(signUp());
          }
        });
        break;
      case '#publish':
        logged((logado) => {
          if (logado) {
            main.appendChild(publish());
          } else {
            main.appendChild(login());
          }
        });
        break;
      default:
        main.appendChild(login());
    }
  });
};

window.addEventListener('load', () => {
  logged((logado) => {
    if (logado) {
      main.appendChild(feed());
    } else {
      main.appendChild(login());
    }
  });
  init();
});

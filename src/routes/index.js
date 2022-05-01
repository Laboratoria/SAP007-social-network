import login from '../pages/login.js';
import feed from '../pages/feed.js';
import signup from '../pages/signup.js';
import publish from '../pages/publish.js';
import { logged } from '../services/authentication.js';

const main = document.querySelector('#root');
const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '':
        logged((log) => {
          if (log) {
            main.appendChild(feed());
          } else {
            main.appendChild(login());
          }
        });
        break;
      case '#login':
        logged((log) => {
          if (log) {
            main.appendChild(feed());
          } else {
            main.appendChild(login());
          }
        });
        break;
      case '#feed':
        logged((log) => {
          if (log) {
            main.appendChild(feed());
          } else {
            main.appendChild(login());
          }
        });
        break;
      case '#signup':
        logged((log) => {
          if (log) {
            main.appendChild(feed());
          } else {
            main.appendChild(signup());
          }
        });
        break;
      case '#publish':
        logged((log) => {
          if (log) {
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
  logged((log) => {
    if (log) {
      main.appendChild(feed());
    } else {
      main.appendChild(login());
    }
  });
  init();
});

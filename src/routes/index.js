import login from '../pages/login.js';
import feed from '../pages/feed.js';
import signUp from '../pages/signup.js';
import publish from '../pages/publish.js';
import profile from '../pages/user-profile.js';
import { loggedIn } from '../services/authentication.js';

const main = document.querySelector('#root');
const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '':
        loggedIn((logado) => {
          if (logado) {
            main.appendChild(feed());
          } else {
            main.appendChild(login());
          }
        })
        break;
      case '#login':
        loggedIn((logado) => {
          if (logado) {
            main.appendChild(feed());
          } else {
            main.appendChild(login());
          }
        })
        break;
      case '#feed':
        loggedIn((logado) => {
          if (logado) {
            main.appendChild(feed());
          } else {
            main.appendChild(login());
          }
        })
        break;
      case '#signUp':
        loggedIn((logado) => {
          if (logado) {
            main.appendChild(feed());
          } else {
            main.appendChild(signUp());
          }
        })
        break;
      case '#publish':
        loggedIn((logado) => {
          if (logado) {
            main.appendChild(publish());
          } else {
            main.appendChild(login());
          }
        })
        break;
      case '#profile':
        loggedIn((logado) => {
          if (logado) {
            main.appendChild(profile());
          } else {
            main.appendChild(login());
          }
        })
        break;
      default:
        main.appendChild(login()); //criar error
    }
  });
};

window.addEventListener('load', () => {
  loggedIn((logado) => {
    if (logado) {
      main.appendChild(feed());
    } else {
      main.appendChild(login());
    }
  })
  init();
});

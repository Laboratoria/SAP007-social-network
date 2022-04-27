import login from './pages/login.js';
import register from './pages/register.js';
import feed from './pages/feed.js';
import { checkLogin } from './lib/auth.js';
import writePost from './pages/writePost.js';

const mainContent = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
    mainContent.innerHTML = '';
    //const logado= checkLogin();

    switch (window.location.hash) {
      case '':
        checkLogin((logado) => {
          if (logado) {
            mainContent.appendChild(feed());
          } else {
            mainContent.appendChild(login());
          }
        })
        break;
      case '#login':
        checkLogin((logado) => {
          if (logado) {
            mainContent.appendChild(feed());
          } else {
            mainContent.appendChild(login());
          }
        })
        break;
      case '#feed':
        checkLogin((logado) => {
          if (logado) {
            mainContent.appendChild(feed());
          } else {
            mainContent.appendChild(login());
          }
        })
        break;
      case '#register':
        checkLogin((logado) => {
          if (logado) {
            mainContent.appendChild(feed());
          } else {
            mainContent.appendChild(register());
          }
        })
        break;
      case '#writePost':
        checkLogin((logado) => {
          if (logado) {
            mainContent.appendChild(writePost());
          } else {
            mainContent.appendChild(login());
          }
        })
        break;
      default:
        mainContent.appendChild(login()); 
    }
  });
};

window.addEventListener('load', () => {
  checkLogin((logado) => {
    if (logado) {
      mainContent.appendChild(feed());
    } else {
      mainContent.appendChild(login());
    }
  })
  init();
});

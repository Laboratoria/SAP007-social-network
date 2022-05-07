
import login from './pages/login.js';
import register from './pages/register.js';
import feed from './pages/feed.js';
import { checkLogin } from './lib/auth.js';

const mainContent = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
    mainContent.innerHTML = '';
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

// export const renderPage = () => {
//   const mainContent = document.getElementById('root');
//   const routes = {
//     '/': login,
//     "/login": login,
//     '/feed': feed,
//     '/cadastro': register,
//   };
//   mainContent.innerHTML = '';
//   mainContent.appendChild(routes[window.location.pathname]());

//   window.addEventListener("popstate", renderPage);
//   window.addEventListener('load', renderPage);
// };

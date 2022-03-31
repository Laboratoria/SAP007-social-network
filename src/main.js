import login from './pages/login.js';
import register from './pages/register.js';
import feed from './pages/feed.js';

const mainContent = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
    mainContent.innerHTML = '';
    switch (window.location.hash) {
      case '':
        main.appendChild(login());
        break;
      case '#login':
        mainContent.appendChild(login());
        break;
      case '#cadastro':
        mainContent.appendChild(register());
        break;
      case '#feed':
        mainContent.appendChild(feed());
        break;
      default:
        mainContent.appendChild(login());
    }
  });
};

window.addEventListener('load', () => {
  mainContent.appendChild(login());
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
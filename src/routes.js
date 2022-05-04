import login from './pages/home.js';
import register from './pages/register.js';
import feed from './pages/feed.js';
import { verifyLogged } from './firebase/authetication.js';

const mainHome = document.querySelector('#root');
const verificarHash = () => {
  switch (window.location.hash) {
    case '':
      mainHome.appendChild(login());
      break;
    case '#home':
      mainHome.innerHTML = '';
      mainHome.appendChild(login());
      break;
    case '#register':
      mainHome.innerHTML = '';
      mainHome.appendChild(register());
      break;
    case '#feed':
      verifyLogged((loggerUser) => {
        if (loggerUser) {
          mainHome.appendChild(feed());
        } else {
          window.location.hash = '#home';
        }
      });
      mainHome.innerHTML = '';
      mainHome.appendChild(feed());
      break;

    default:
      mainHome.innerHTML = '';
      mainHome.appendChild(login());
  }
}

window.addEventListener('hashchange', (e) => {
  e.preventDefault();
  verificarHash();

});

window.addEventListener('load', () => {
  verificarHash();
});

const links = document.querySelectorAll('a');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    history.pushState({}, e.target.getAttribute('href'));
  });
});

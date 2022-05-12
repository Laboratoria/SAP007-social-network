import login from './pages/home.js';
import register from './pages/register.js';
import feed from './pages/feed.js';
import { verifyLogged } from './firebase/authentication.js';

const mainHome = document.querySelector('#root');
const verificarHash = async () => {
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
      await verifyLogged(async (loggerUser) => {
        if (loggerUser) {
          const templateFeed = await feed();
          mainHome.appendChild(templateFeed);
        } else {
          window.location.hash = '#home';
        }
      });
      mainHome.innerHTML = '';
      break;

    default:
      mainHome.innerHTML = '';
      mainHome.appendChild(login());
  }
};

window.addEventListener('hashchange', async (e) => {
  e.preventDefault();
  verificarHash();
});

window.addEventListener('load', async () => {
  await verificarHash();
});

const links = document.querySelectorAll('a');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-restricted-globals
    history.pushState({}, e.target.getAttribute('href'));
  });
});

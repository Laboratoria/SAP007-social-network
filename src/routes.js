import login from './pages/home.js';
import register from './pages/register.js';
import feed from './pages/feed.js';
import { verifyLogged } from './firebase/authetication.js';

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
        console.log(loggerUser);
        if (loggerUser) {
          const templateFeed = await feed();
          mainHome.appendChild(templateFeed);
        } else {
          window.location.hash = '#home';
        }
      });
      mainHome.innerHTML = '';
      //mainHome.appendChild(templateFeed);
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

    history.pushState({}, e.target.getAttribute('href'));
  });
});

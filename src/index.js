// Este es el punto de entrada de tu aplicacion
import './configurafirebase/configfirebase.js';
import { pageAbout } from './pages/about/about.js';
import { pageLogin } from './pages/login/login.js';
import { feed } from './pages/feed/feed.js';
import { createLogin } from './pages/register/page-register.js';
import { getPersistedUser } from './pages/feed/firestore-functions.js';
import { feedWithoutUser } from './pages/feed/without-user.js';

const main = document.getElementById('root');

const init = () => {
  switch (window.location.hash) {
    case '#about':
      main.appendChild(pageAbout());
      break;
    case '#createLogin':
      main.appendChild(createLogin());
      break;
    case '#feed': {
      const user = getPersistedUser();
      if (user) {
        main.appendChild(feed(user));
      } else {
        main.appendChild(feedWithoutUser());
      }
      break;
    }
    default:
      main.appendChild(pageLogin());
  }
};

const eventHash = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    init();
  });
};

window.addEventListener('load', () => {
  init();
  eventHash();
});

import login from '../pages/login.js';
import feed from '../pages/feed.js';
import signUp from '../pages/signup.js';

const main = document.querySelector('#root');
const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '':
        main.appendChild(login());
        break;
      case '#feed':
        main.appendChild(feed());
        break;
      case '#signUp':
        main.appendChild(signUp());
        break;
      default:
        main.appendChild(login()); //criar error
    }
  });
};

window.addEventListener('load', () => {
  main.appendChild(login());
  init();
});

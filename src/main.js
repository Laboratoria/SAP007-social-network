import './lib/firebase.js';
import home from './pages/home.js';
import register from './pages/register.js';
import timeline from './pages/timeline.js';
import profile from './pages/profile.js';
import { loggedIn } from './lib/authentication.js';

const main = document.querySelector('#root');

function redirect() {
  switch (window.location.hash) {
    case '#register':
      main.appendChild(register());
      break;
    case '#timeline':
      loggedIn((logged) => {
        if (logged) {
          main.appendChild(timeline());
        } else {
          window.location.hash = '#home';
        }
      });
      break;
    case '#profile':
      loggedIn((logged) => {
        if (logged) {
          main.appendChild(profile());
        } else {
          window.location.hash = '#home';
        }
      });
      break;
    default:
      main.appendChild(home());
  }
}

const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    redirect();
  });
};

window.addEventListener('load', () => {
  redirect();
  init();
});

// let orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;

// if (orientation === 'landscape-primary') {
// console.log('That looks good.');
// } else if (orientation === 'landscape-secondary') {
// console.log('Mmmh... the screen is upside down!');
// } else if (orientation === 'portrait-secondary' || orientation === 'portrait-primary') {
// console.log('Mmmh... you should rotate your device to landscape');
// } else if (orientation === undefined) {
// console.log("The orientation API isn't supported in this browser :(");
// }
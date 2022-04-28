import './configs/start-firebase.js';
import { isLoggedIn } from './configs/authentication.js';
import login from './pages/login/login.js';
import newuser from './pages/newuser/newuser.js';
import recover from './pages/login/recover.js';
import feed from './pages/feed/feed.js';
import about from './pages/about/about.js';
import userprofile from './pages/userprofile/userprofile.js';

const main = document.querySelector('#root');

function redirect() {
  switch (window.location.hash) {
    case '':
      main.appendChild(login());
      break;
    case '#login':
      main.appendChild(login());
      break;
    case '#register':
      main.appendChild(newuser());
      break;
    case '#forgot-password':
      main.appendChild(recover());
      break;
    case '#feed':
      isLoggedIn((logged) => {
        if (logged) {
          main.appendChild(feed());
        } else{
          window.location.hash = '#login';
        }
      }) 
      break; 
    case '#userprofile':
      isLoggedIn((logged) => {
        if (logged) {
          main.appendChild(userprofile());
        } else {
          window.location.hash = '#login';
        }
      }) 
      break; 
    case '#about':
      isLoggedIn((logged) => {
        if (logged) {
          main.appendChild(about());
        } else {
          window.location.hash = '#login';
        }
    })  
      break;
    default:
      main.appendChild(login());
  }
}

window.addEventListener('hashchange', () => {
  main.innerHTML = '';
  redirect();
});

window.addEventListener('load', () => {
  redirect();
});

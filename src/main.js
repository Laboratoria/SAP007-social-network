import login from './pages/login.js';
import register from './pages/register.js';
import feed from './pages/feed.js';
import { checkLogin } from './lib/auth.js';
import writePost from './pages/writePost.js';

const mainContent = document.querySelector('#root');

const init = () => {
  mainContent.innerHTML = '';
  const logado = checkLogin();
  // eslint-disable-next-line no-console
  console.log(logado);
    if (logado) {
      switch (window.location.hash) {
        case "#register":
        mainContent.appendChild(register());
        break;
      case '#feed':
        mainContent.appendChild(feed());
        break;
      case '#writePost':
        mainContent.appendChild(writePost());
        break;
      default:
        mainContent.appendChild(login());
    }
  } else {
    window.location.hash = '';
    mainContent.appendChild(login());
  }
};

window.addEventListener('hashchange', () => {
  init();
});

window.addEventListener('load', () => {
  // mainContent.appendChild(login());
  init();
});

// window.addEventListener("load", () => {
//   checkLogin((logged) => {
//     if (logged) {
//       window.location.hash = "#feed";
//     } else {
//       window.location.hash = "#login";
//     }
//   });
// });

// case "#login":
//   mainContent.appendChild(login());
//   break;
// case "#cadastro":
//   mainContent.appendChild(register());
//   break;

// case "#register":
//   mainContent.appendChild(register());
//   break;
// case "#writePost":
//   mainContent.appendChild(writePost());
//   break;

// }

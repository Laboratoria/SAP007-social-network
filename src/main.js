import login from './pages/login.js';
import register from './pages/register.js';
import feed from './pages/feed.js';
import { checkLogin } from './lib/auth.js';
import writePost from './pages/writePost.js';

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
      case '#writePost':
        checkLogin((logado) => {
          if (logado) {
            mainContent.appendChild(writePost());
          } else {
            mainContent.appendChild(login());
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

//   const logado = checkLogin();
//   // eslint-disable-next-line no-console
//   console.log(logado);
//     if (logado) {
//       switch (window.location.hash) {
//         case "#register":
//         mainContentContent.appendChild(register());
//         break;
//       case '#feed':
//         mainContentContent.appendChild(feed());
//         break;
//       case '#writePost':
//         mainContentContent.appendChild(writePost());
//         break;
//       default:
//         mainContentContent.appendChild(login());
//     }
//   } else {
//     window.location.hash = '';
//     mainContentContent.appendChild(login());
//   }
// };

// window.addEventListener('hashchange', () => {
//   init();
// });

// window.addEventListener('load', () => {
//   // mainContentContent.appendChild(login());
//   init();
// });

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
//   mainContentContent.appendChild(login());
//   break;
// case "#cadastro":
//   mainContentContent.appendChild(register());
//   break;

// case "#register":
//   mainContentContent.appendChild(register());
//   break;
// case "#writePost":
//   mainContentContent.appendChild(writePost());
//   break;

// }

import login from './pages/login.js';
import register from './pages/register.js';
import feed from './pages/feed.js';
import { checkLogin } from './lib/auth.js';
import writePost from './pages/writePost.js';

const mainContent = document.querySelector('#root');

const init = () => {
  mainContent.innerHTML = '';
  const loggedUser = checkLogin();
  if (loggedUser) {
    switch (window.location.hash) {
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
    switch (window.location.hash) {
      case '#register':
        mainContent.appendChild(register());
        break;
      default:
        mainContent.appendChild(login());
    }
  }
};

window.addEventListener('hashchange', () => {
  init();
});

window.addEventListener('load', () => {
  init();
});

// const init = () => {
//   window.addEventListener('hashchange', () => {
//     mainContent.innerHTML = '';
//     switch (window.location.hash) {
//       case '':
//         checkLogin((loggedUser) => {
//           if (loggedUser) {
//             mainContent.appendChild(feed());
//           } else {
//             mainContent.appendChild(login());
//           }
//         });
//         break;
//       case '#login':
//         checkLogin((loggedUser) => {
//           if (loggedUser) {
//             mainContent.appendChild(feed());
//           } else {
//             mainContent.appendChild(login());
//           }
//         });
//         break;
//       case '#feed':
//         checkLogin((loggedUser) => {
//           if (loggedUser) {
//             mainContent.appendChild(feed());
//           } else {
//             mainContent.appendChild(login());
//           }
//         });
//         break;
//       case '#register':
//         checkLogin((loggedUser) => {
//           if (loggedUser) {
//             mainContent.appendChild(feed());
//           } else {
//             mainContent.appendChild(register());
//           }
//         });
//         break;
//       case '#writePost':
//         checkLogin((loggedUser) => {
//           if (loggedUser) {
//             mainContent.appendChild(writePost());
//           } else {
//             mainContent.appendChild(login());
//           }
//         });
//         break;
//       default:
//         mainContent.appendChild(login());
//     }
//   });
// };

// window.addEventListener('load', () => {
//   checkLogin((loggedUser) => {
//     if (loggedUser) {
//       mainContent.appendChild(feed());
//     } else {
//       mainContent.appendChild(login());
//     }
//   });
//   init();
// });

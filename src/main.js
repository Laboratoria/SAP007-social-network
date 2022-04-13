import home from "./pages/home.js";
import register from "./pages/register.js";
import timeline from "./pages/timeline.js";
import { loggedIn } from "./lib/authentication.js";

const main = document.querySelector("#root");

function redirect () {
  switch (window.location.hash) {
    case "#register":
      main.appendChild(register());
      break;
    case "#timeline":
      loggedIn((logged) => {
        if (logged) {
          main.appendChild(timeline());
        } else window.location.hash = "#home";
      });
      break;
    default:
      main.appendChild(home());
  }
}

const init = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = "";
    redirect()
  });
};

window.addEventListener("load", () => {
  redirect()
  init()
});

// document.addEventListener('DOMContentLoaded', () => {
//   const loadEl = document.querySelector('#root');

//   try {
//     firebase.app();
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         window.location.hash = 'timeline';
//       }
//     });
//   } catch (e) {
//     // eslint-disable-next-line no-console
//     // console.error(e);
//     // loadEl.textContent = 'Error loading the Firebase SDK, check the console.';
//   }
// });

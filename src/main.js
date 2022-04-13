import home from "./pages/home.js";
import register from "./pages/register.js";
import timeline from "./pages/timeline.js";

const main = document.querySelector("#root");

const init = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = "";
    switch (window.location.hash) {
      case "#register":
        main.appendChild(register());
        break;
        case "#timeline":
        main.appendChild(timeline());
        break;
      default:
        main.appendChild(home());
    }
  });
};

window.addEventListener("load", () => {
  main.appendChild(home());
  location.hash = "#";
  init();
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
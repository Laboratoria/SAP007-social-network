import home from "./pages/home.js";
import register from "./pages/register.js";
import timeline from "./pages/timeline.js";
import { loggedIn } from "./lib/authentication.js";

const main = document.querySelector("#root");

function redirect() {
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
    redirect();
  });
};

window.addEventListener("load", () => {
  redirect();
  init();
});

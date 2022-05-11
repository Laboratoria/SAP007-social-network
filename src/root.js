import login from "./templates/login.js";
import register from "./templates/register.js";
import home from "./templates/home.js";
import posts from "./templates/posts.js";
import { keepUserLoggedIn } from "./lib/auth-firebase.js";

const main = document.querySelector("#root");

const redirect = () => {
  main.innerHTML = "";
  switch (window.location.hash) {
    case "#register":
      main.appendChild(register());
      break;
    case "#home":
      keepUserLoggedIn((logged) => {
        if (logged) {
          main.appendChild(home());
        } else {
          window.location.hash = "login";
        }
      });
      break;
    case "#posts":
      keepUserLoggedIn((logged) => {
        if (logged) {
          main.appendChild(posts());
        } else {
          window.location.hash = "login";
        }
      });
      break;
    default:
      main.appendChild(login());
  }
};

const init = () => {
  window.addEventListener("hashchange", () => {
    redirect();
  });
};

window.addEventListener("load", () => {
  redirect();
  init();
});

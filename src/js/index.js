import login from "./pages/login.js";
import register from "./pages/register.js";
import timeline from "./pages/timeline.js";
import friends from "./pages/friends.js";
import perfil from "./pages/perfil.js";
import { authChange } from "../config/authentication.js";

const container = document.getElementById("container-general");

window.addEventListener("load", () => {
  redirectPages();
  initPages();
});

const initPages = () => {
  window.addEventListener("hashchange", () => {
    container.innerHTML = "";
    redirectPages();
  });
};

function redirectPages() {
  switch (window.location.hash) {
    default:
    case "#login":
      container.appendChild(login.createLogin());
      break;
    case "#register":
      container.appendChild(register.createRegister());
      break;
    case "#timeline":
      authChange((logged) => {
        if (logged) {
          container.appendChild(timeline.createTimeline());
        } else window.location.hash = "#home";
      });
      break;
    case "#friends":
      authChange((logged) => {
        if (logged) {
          container.appendChild(friends.createFriendsList());
        } else window.location.hash = "#home";
      });
      break;
    case "#perfil":
      authChange((logged) => {
        if (logged) {
          container.appendChild(perfil.createPerfil());
        } else window.location.hash = "#home";
      });
      break;
  }
}

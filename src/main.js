import login from "./pages/login.js";
import register from "./pages/register.js";
import timeline from "./pages/timeline.js";
//import friends from "./pages/friends.js";
//import perfil from "./pages/perfil.js";

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
    case " ":
      container.appendChild(login.createLogin());
      break;
    case "#login":
      container.appendChild(login.createLogin());
      break;
    case "#register":
      container.appendChild(register.createRegister());
      break;
    case "#timeline":
      container.appendChild(timeline.createTimeline());
      break;
    case "#friends":
    //container.appendChild(friends.createFriendsList());
    //break;
    case "#perfil":
    //container.appendChild(perfil.createPerfil());
    //break;
    default:
      container.appendChild(login.createLogin());
  }
}

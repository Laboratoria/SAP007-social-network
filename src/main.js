import login from "./pages/login/index.js";
import register from "./pages/register/index.js";
import timeline from "./pages/timeline/index.js";
import profile from "./pages/profile/index.js";

const section = document.getElementById("container-general");

function initPages() {
  window.addEventListener("hashchange", () => {
    section.innerHTML = "";
    switch (window.location.hash) {
      case " ":
      case "#login":
        section.appendChild(login.createLogin());
        break;
      case "#register":
        section.appendChild(register.createRegister());
        break;
      case "#timeline":
        section.appendChild(timeline.createTimeline());
        break;
        case "#profile":
        section.appendChild(profile.createProfile());
        break;
      default:
        section.appendChild(login.createLogin());
    }
  });
}

window.addEventListener("load", () => {
  section.appendChild(login.createLogin());
  initPages();
});

import login from "./pages/login/index.js";
import register from "./pages/register/index.js";

const section = document.getElementById("container-general");

function initPages() {
  window.addEventListener("hashchange", () => {
    section.innerHTML = "";
    switch (window.location.hash) {
      case " ":
        section.appendChild(login.createLogin());
        break;
      case "#login":
        section.appendChild(login.createLogin());
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



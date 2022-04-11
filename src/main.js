import login from "./pages/login/index.js";
import register from "./pages/register/index.js";

const section = document.getElementById("container-general");

function initPages() {
  window.addEventListener("hashchange", () => {
    section.innerHTML = "";
    switch (window.location.hash) {
      case " ":
        section.appendChild(login);
        break;
      case "#login":
        section.appendChild(login);
        break;
      default:
        section.appendChild(login);
    }
  });
}

window.addEventListener("load", () => {
  section.appendChild(login);
  initPages();
});

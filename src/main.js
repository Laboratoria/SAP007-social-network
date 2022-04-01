import login from "./pages/login/index.js";
import register from "./pages/register/index.js";

const section = document.getElementById("container");

function initPages() {
  window.addEventListener("hashchange", () => {
    section.innerHTML = "";
    console.log(window.location.hash);
    switch (window.location.hash) {
      case " ":
        section.appendChild(login.createLogin());
        break;
      case "#register":
        section.appendChild(register.createUser());
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

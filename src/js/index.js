import { createLogin } from "./pages/login.js";
import { createRegister } from "./pages/register.js";
import timeline from "./pages/timeline.js";
import friends from "./pages/friends.js";
import profile from "./pages/profile.js";
import { authChange } from "../config/authentication.js";

const container = document.getElementById("root");

window.addEventListener("load", () => {
  redirectPages();
  window.addEventListener("hashchange", () => {
    container.innerHTML = "";
    redirectPages();
  });
});

function redirectPages() {
  switch (window.location.hash) {
    default:
    case "#login":
      container.appendChild(createLogin());
      break;
    case "#register":
      container.appendChild(createRegister());
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
    case "#profile":
      authChange((logged) => {
        if (logged) {
          container.appendChild(profile.createProfile());
        } else window.location.hash = "#home";
      });
      break;
  }
}

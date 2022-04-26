import { createLogin } from "./pages/login.js";
import { createRegister } from "./pages/register.js";
import { createHeader } from "./components/header.js";
import { createFeed } from "./pages/feed.js";
import { createFriends } from "./pages/friends.js";
import { createProfile } from "./pages/profile.js";
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
      container.append(createLogin());
      break;
    case "#register":
      container.append(createRegister());
      break;
    case "#feed":
      authChange((logged) => {
        if (logged) {
          internalRoute("feed");
        } else window.location.hash = "#home";
      });
      break;
    case "#friends":
      authChange((logged) => {
        if (logged) {
          internalRoute("friends");
        } else window.location.hash = "#home";
      });
      break;
    case "#profile":
      authChange((logged) => {
        if (logged) {
          internalRoute("profile");
        } else window.location.hash = "#home";
      });
      break;
  }
}

function internalRoute(page) {
  const background = document.querySelector(".background");
  background.style.backgroundImage = "none";

  const section = document.createElement("section");
  section.classList.add("container-labfriends");
  section.append(createHeader());
  container.append(section);

  const header = document.querySelector("#header");

  switch (page) {
    case "feed":
      header.after(createFeed());
      break;
    case "friends":
      header.after(createFriends());
      break;
    case "profile":
      header.after(createProfile());
      break;
  }
}

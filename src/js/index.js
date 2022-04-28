// Autenticação e configurações
import { logout, authChange } from "../config/authentication.js";

// Páginas
import { createLogin } from "./pages/login.js";
import { createRegister } from "./pages/register.js";
import { createFeed } from "./pages/feed.js";
import { createFriends } from "./pages/friends.js";
import { createProfile } from "./pages/profile.js";

// Componentes
import { createHeader } from "./components/header.js";
import { initModal } from "../js/components/modal.js";
import { createNewPost } from "../js/components/add-post.js";

const container = document.getElementById("root");

window.addEventListener("load", () => {
  redirectPages();
  window.addEventListener("hashchange", redirectPages);
});

function redirectPages() {
  container.innerHTML = "";

  authChange((logged) => {
    if (logged) {
      switch (window.location.hash) {
        case "#friends":
          internalRoute("friends");
          break;
        case "#profile":
          internalRoute("profile");
          break;
        case "#feed":
        default:
          window.location.hash = "#feed";
          internalRoute("feed");
          break;
      }
    } else {
      const background = document.querySelector("#root");
      background.style.backgroundImage = "url(../../img/background.gif)";

      switch (window.location.hash) {
        case "#register":
          container.append(createRegister());
          break;
        case "#login":
        default:
          window.location.hash = "#login";
          container.append(createLogin());
          break;
      }
    }
  });
}

function internalRoute(page) {
  const background = document.querySelector("#root");
  background.style.backgroundImage = "none";

  const sectionGeneral = document.createElement("section");
  sectionGeneral.classList.add("container-labfriends");

  const header = document.createElement("header");
  header.setAttribute("id", "header");
  header.prepend(createHeader());
  header.append(createNewPost());

  sectionGeneral.append(header);
  container.append(sectionGeneral);

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

  const modalOpen = document.querySelector('[data-modal="open"]');
  const modalClose = document.querySelector('[data-modal="close"]');
  const modalContainer = document.querySelector('[data-modal="container"]');
  initModal(modalOpen, modalClose, modalContainer);

  const menuOpen = document.querySelector('[data-menu="open"]');
  const menuClose = document.querySelector('[data-menu="close"]');
  const menuContainer = document.querySelector('[data-menu="container"]');
  initModal(menuOpen, menuClose, menuContainer);

  document.querySelector("#button-logout").addEventListener("click", () => {
    logout().then(() => {
      window.location.hash = "#login";
    });
  });
}

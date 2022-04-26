import { createLogin } from "./pages/login.js";
import { createRegister } from "./pages/register.js";
import { createHeader } from "./components/header.js";
import { createFeed } from "./pages/feed.js";
import { createFriends } from "./pages/friends.js";
import { createProfile } from "./pages/profile.js";
import { authChange, logout } from "../config/authentication.js";
import { initModal } from "../js/components/modal.js";
import { createNewPost } from "../js/components/add-post.js";

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
  const background = document.querySelector("#root");
  background.style.backgroundImage = "none";

  //criar header
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

  //usar função de modal
  //usar funçao logout

  const modalOpen = document.querySelector(".modal-open");
  const modalClose = document.querySelector(".modal-close");
  const modalContainer = document.querySelector(".modal-container");
  initModal(modalOpen, modalClose, modalContainer);

  const buttonLogout = document.querySelector(".button-logout");
  buttonLogout.addEventListener("click", () => {
    logout().then(() => {
      window.location.hash = "#login";
    });
  });
}

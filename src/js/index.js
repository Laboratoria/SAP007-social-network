import login from "./pages/login.js";
import register from "./pages/register.js";
import timeline from "./pages/timeline.js";
import friends from "./pages/friends.js";
import profile from "./pages/profile.js";
import { authChange } from "../config/authentication.js";

const container = document.getElementById("root");

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
    case "#profile":
      authChange((logged) => {
        if (logged) {
          container.appendChild(profile.createProfile());
        } else window.location.hash = "#home";
      });
      break;
  }
}

/*
function internalRoute(page) {
  const background = document.querySelector(".background");
  background.style.backgroundImage = "none";

  const section = document.createElement("section");
  section.classList.add("container-labfriends");
  section.innerHTML = header.createHeader();
  section.innerHTML += addPost.createNewPost();

  switch (page) {
    case "timeline":
      section.innerHTML += timeline.createTimeline();
      break;
    case "friends":
      section.innerHTML += friends.createFriendsList();
      break;
    case "profile":
      section.innerHTML += profile.createProfile();
      break;
  }
  container.appendChild(section);

  //mudar essa função para o header
  const buttonLogout = container.querySelector("#button-logout");
  buttonLogout.addEventListener("click", (e) => {
    e.preventDefault();
    logout().then(() => {
      window.location.hash = "#login";
    });
  });
  //usar async
}
*/

import login from "./pages/login.js";
import feed from "./pages/feed.js";

const main = document.querySelector("#root");

const init = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = "";
    switch (window.location.hash) {
      case "":
        main.appendChild(login());
        break;
      case "#feed":
        main.appendChild(feed());
        break;

      default:
        main.appendChild(login());
    }
  });
};

window.addEventListener("load", () => {
  main.appendChild(login());
  init();
});

console.log("ola");

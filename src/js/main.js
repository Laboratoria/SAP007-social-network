import signin from "./pages/signin.js";
import register from "./pages/register.js";
import timeLine from "./pages/feed.js";

const main = document.getElementById("root");

const init = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = "";
    switch (window.location.hash) {
      case "#signin":
        main.appendChild(signin());
        break;
      case "#register":
        main.appendChild(register());
        break;
      case "#timeLine":
        main.appendChild(timeLine());
        break;
      default:
        main.appendChild(signin());
    }
  });
};

window.addEventListener("load", () => {
  main.appendChild(signin());
  init();
});

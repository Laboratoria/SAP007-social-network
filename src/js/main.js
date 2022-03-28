import signin from "./pages/signin.js";
import register from "./pages/register.js";
import timeLine from "./pages/feed.js";
import { header } from "./components/header.js";

const main = document.getElementById("root");

const init = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = "";
    switch (window.location.hash) {
      case "#signin":
        main.appendChild(header());
        main.appendChild(signin());
        break;
      case "#register":
        main.appendChild(header());
        main.appendChild(register());
        break;
      case "#timeLine":
        main.appendChild(header());
        main.appendChild(timeLine());
        break;
      default:
        main.appendChild(header());
        main.appendChild(signin());
    }
  });
};

window.addEventListener("load", () => {
  main.appendChild(header());
  main.appendChild(signin());
  init();
});

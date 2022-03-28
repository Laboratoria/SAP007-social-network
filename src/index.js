import home from "./Pages/home.js";

const mainHome = document.querySelector("#root");

window.addEventListener("load", () => {
  mainHome.appendChild(home());
});

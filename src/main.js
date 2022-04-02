import home from "./pages/home.js"

const mainHome = document.querySelector("#root");
window.addEventListener("load", () => {
    mainHome.appendChild(home());
});







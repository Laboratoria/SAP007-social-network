import login from "./pages/login.js"
import register from "./pages/register.js"

const main = document.querySelector("#root");

window.addEventListener("load", () => {
    main.appendChild(login());
})
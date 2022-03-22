import home from "./Pages/home.js";
import "./lib/firebase.js";

const main = document.querySelector("#root");

window.addEventListener("load", () =>{
    main.appendChild(home());
})


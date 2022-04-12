import home from "./pages/home/mainHome.js"

const main = document.querySelector("#main")

window.addEventListener("load", () =>{
    main.appendChild(home())
})
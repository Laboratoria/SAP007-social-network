import home from "./pages/home/home.js";
import login from "./pages/login/login.js"
import register from "./pages/register/register.js"

const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => {
    main.innerHTML = "";    
    switch(window.location.hash){
        case "#home":
            main.appendChild(home());
            break;
        case "#login":
            main.appendChild(login());
            break;  
        case "#register":
            main.appendChild(register());
            break;
        default:
        main.appendChild(home());                
    }}
    )
}

window.addEventListener("load", () => {
    main.appendChild(home());
    init();
})
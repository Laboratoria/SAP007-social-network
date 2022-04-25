import login from "./pages/login.js"
import register from "./pages/register.js"

const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => {
    main.innerHTML = "";    
    switch(window.location.hash){
        case " ":
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
    main.appendChild(login());
    init();
})
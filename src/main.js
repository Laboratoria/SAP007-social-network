import home from "./pages/home/home.js";
import login from "./pages/login/login.js"
import register from "./pages/register/register.js"
import feed from "./pages/feed/feed.js"
import { userLogout } from "../../lib/auth-firebase.js";

const main = document.querySelector("#root");
const logout = document.querySelector("#btnLogout");

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
        case "#feed":
            main.appendChild(feed());
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

logout.addEventListener('click', (e) => {
    e.preventDefault();
    userLogout().then(() => {
      window.location.hash = '';
    });
  });
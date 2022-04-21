import "./pages/firebase/config-firebase.js";
import login from "./pages/home/login.js";
import cadastro from "./pages/home/cadastro.js";
import home from "./pages/home/mainHome.js";

const main = document.querySelector("#main")

const init = () => {
        main.innerHTML="";
        switch (window.location.hash) {
            case "#login":
                main.appendChild(login());
                break;
            case "#cadastro":
                main.appendChild(cadastro());
                break;
            default:
                main.appendChild(home());
        }
    

}

window.addEventListener("load", () => {
    init()
})

window.addEventListener("hashchange", () => {
    init()
})
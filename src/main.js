import "./lib/firebase.js";
import home from "./pages/home.js";
import register from "./pages/register.js";
//import timeline from "./pages/timeline.js";


const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        switch(window.location.hash){
            case "#register":
                main.appendChild(register());
                break;
            default:
                main.appendChild(home());
        }
    })
}

window.addEventListener("load", () =>{
    main.appendChild(home());
    init();
})


import login from "./templates/login.js";
import register from "./templates/register.js";
import home from "./templates/home.js";
import posts from "./templates/posts.js";
//import edit from "./componentes/edit.js"


const main = document.querySelector("#root");

const redirect = () => {
    main.innerHTML = "";
    switch (window.location.hash) {
        case "":
            main.appendChild(login());
            break
        case "#register":
            main.appendChild(register());
            break;
        case "#home":
            main.appendChild(home());
            break;
        case "#posts":
            main.appendChild(posts());
            break;
       /*case "#edit":
            main.appendChild(edit());
            break;*/
        default:
            main.appendChild(login());
    }

}
const init = () => {
    window.addEventListener('hashchange', () => {
        redirect();
    });
}

window.addEventListener('load', () => {
    redirect();
    init();
});

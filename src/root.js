import login from "./templates/login.js";
import register from "./templates/register.js";

const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        switch (window.location.hash) {
            case " ":
                main.appendChild(login());
                break
            case "#register":
                main.appendChild(register());
                break;
            default:
                main.appendChild(login());
        }
    })

}

window.addEventListener("load", () => {
    main.appendChild(login());
    init();
})
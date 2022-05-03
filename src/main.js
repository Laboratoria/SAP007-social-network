import pageLogin from "./pages/pageLogin/login.js";
import pageRegister from "./pages/pageRegister/register.js";

const main = document.querySelector("#root");

const init = () => {
    main.innerHTML = "";
    const url = window.location.hash;
    let page = pageLogin();
    switch (url) {
        case "#register":
            page = pageRegister();
            break
        case "#":
            page = pageRegister();
            break
    }
    main.appendChild(page)
}

window.addEventListener("load", init);
window.addEventListener("hashchange", init);

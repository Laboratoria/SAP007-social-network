import "./configs/config.firebase.js"
import login from "../pages/login/login.js"
import register from "../pages/register/register.js"


const main = document.querySelector("#root");
//essa função é onde permite a mudança da rota
const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        // usa o tal do switch e o hashchange SOS AINDA NAO ENTENDI ISSO
        switch (window.location.hash) {
        case "#register":
        main.appendChild(register());
            break;
        case // coloca o feed"#timeLine":
        main.appendChild(timeLine()):
            break;
        default:
        main.appendChild(login());
    }
    });
};

window.addEventListener("load", () => {
    main.appendChild(login());
    init();
});


//   window.addEventListener("load",() => {
//     console.log('load')
//     main.appendChild(login());

// });
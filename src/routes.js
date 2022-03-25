import register from "./pages/register/index.js";
import login from "./pages/signIn/index.js";
import feed from "./pages/feed/index.js";

const main = document.getElementById('root');

const init = () => {
    window.addEventListener('hashchange', () => {
        main.innerHTML = '';
        switch (window.location.hash) {
            case '#register':
                main.appendChild(register());
                break;
            case '#login':
                main.appendChild(login());
                break;
            case '#feed':
            main.appendChild(feed());
            break;
            default:
                main.appendChild(register());
        }
    });
};

window.addEventListener('load', () => {
    main.appendChild(register());
    init();
});

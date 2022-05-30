import './lib/config-firebase.js';
import home from './pages/home/home.js';
import login from './pages/login/login.js';
import register from './pages/register/register.js';
import feed from './pages/feed/feed.js';

const main = document.querySelector('#root');

function verificarHash() {
            switch (window.location.hash) {
            case '#home':
            main.appendChild(home());
            break;
    case '#login':
                main.appendChild(login());
                break;
    case '#register':
                    main.appendChild(register());
                    break;
    case '#feed':
                    main.appendChild(feed());
                    break;
    default:
                main.appendChild(home());
                }
}
const init = () => {
            window.addEventListener('hashchange', () => {
    main.innerHTML = '';
            verificarHash();
        },
)};
window.addEventListener('load', () => {
    verificarHash();
            init();
    });

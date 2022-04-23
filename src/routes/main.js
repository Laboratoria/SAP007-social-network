import '../firebase/firebaseconfig.js';
import about from '../about/about.js';
import home from '../Home/home.js';
import { register } from '../register/register.js';
import { login } from '../login/login.js';
import { timeline } from '../feed/feed.js';
import notfound from '../not-found/error404.js';
import { stateVerification } from '../firebase/authentication.js';

const main = document.querySelector('#root'); // pega a div do HTML para colocar o conteúdo da página
const renderizar = () => {
  switch (window.location.hash) {
    case '#home':
      main.appendChild(home());
      break;
    case '#about':
      main.appendChild(about());
      break;
    case '#register':
      main.appendChild(register());
      break;
    case '#login':
      main.appendChild(login());
      break;
    case '#timeline':
      stateVerification((logado) => {
        if (logado === true) {
          main.appendChild(timeline());
        } else window.location.hash = '#login';
      });
      break;
    default:
      main.appendChild(notfound());
  }
};
// limpa o texto atual da página e trás o conteúdo do novo #hash
window.addEventListener('hashchange', () => {
  main.innerHTML = '';
  renderizar();
});

// toda vez que a pessoa der o load na página executam as funcões
window.addEventListener('load', () => {
  renderizar();
});

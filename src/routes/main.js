import '../firebase/firebaseconfig.js';
import about from '../about/about.js';
import home from '../Home/home.js';
import { register } from '../register/register.js';
import { login } from '../login/login.js';
import { timeline } from '../feed/feed.js';

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
      main.appendChild(timeline());
      break;
    default:
      main.appendChild(home());
      break;
  }
};
// limpa o texto atual da página e trás o conteúdo do novo #hash
const clear = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    renderizar();
  });
};
// toda vez que a pessoa der o load na página executam as funcões
window.addEventListener('load', () => {
  renderizar();
  clear();
});

import '../firebase/FireBaseConfig.js';
import {about} from '../about/about.js'

const main = document.querySelector('#root');
const renderizar = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = "";
    switch (window.location.hash) {
      case "":
        main.appendChild(home());
        break;
      case "#about":
        main.appendChild(about());
        break;
      case "#signUp":
        main.appendChild(register());
        break;
      case "#feed":
        main.appendChild(feed());
        break;
      case "#login":
        main.appendChild(login());
        break;
      default:
        main.appendChild(home());
        break;
    }
  });
};

window.addEventListener("load", () => {
  main.appendChild("home"());
  renderizar();
});









/*import HtlmHome from '../Home/Home.js'
import HtlmLogin from '../Home/Home.js'
const routes = {
  404: '<h1>Pagina não encontrada</h1>',
  '#': pages.login,
  '#about': pages.register,
  '#Home': HtlmHome.Home,
  '#services': pages.services,
};

const handleLocation = () => {
  let path = window.location.hash;

  /* O link de home passa uma # apenas e quando usamos window.location.hash, ele pega o que vem a # e o que vem apos, caso tenha apenas a # ela vem uma string vazia, essa condição é para caso o window.location.hash nos traga uma string vazia, ela ser alterada pra '#', para conseguir buscar dentro do objeto routes */

 /* if (path === '') {
    path = '#';
  }

  const rota = routes[path] || routes[404];

  console.log(path);
  document.getElementById('root').innerHTML = rota;
};

const route = (e) => {
  // eslint-disable-next-line no-param-reassign
  e = e || window.event;
  e.preventDefault();
  window.history.pushState({}, '', e.target.href);

  handleLocation();
};

const botoes = document.querySelectorAll('.header_nav-item');
botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    route();
  });
});

window.onpopstate = handleLocation;

handleLocation();

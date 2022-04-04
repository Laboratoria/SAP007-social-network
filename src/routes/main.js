import '../firebase/FireBaseConfig.js';
import Home from '../home/Home.js';
import register from '../register/register.js';
import feed from '../feed/Feed.js';

const main = document.querySelector('#root');
const renderizar = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '#register':
        main.appendChild(register());
        break;
      case '#feed':
        main.appendChild(feed());
        break;
      default:
        main.appendChild(Home());
        break;
    }
  });
};

window.addEventListener('load', () => {
  main.appendChild(Home());
  renderizar();
});

// import HtlmHome from '../Home/Home.js'
// import HtlmLogin from '../Home/Home.js'
// const routes = {
//   404: '<h1>Pagina não encontrada</h1>',
//   '#': pages.login,
//   '#about': pages.register,
//   '#Home': HtlmHome.Home,
//   '#services': pages.services,
// };

// const handleLocation = () => {
//   let path = window.location.hash;

//   if (path === '') {
//     path = '#';
//   }

//   const rota = routes[path] || routes[404];

//   console.log(path);
//   document.getElementById('root').innerHTML = rota;
// };

// const route = (e) => {
//   // eslint-disable-next-line no-param-reassign
//   e = e || window.event;
//   e.preventDefault();
//   window.history.pushState({}, '', e.target.href);

//   handleLocation();
// };

// const botoes = document.querySelectorAll('.header_nav-item');
// botoes.forEach((botao) => {
//   botao.addEventListener('click', () => {
//     route();
//   });
// });

// window.onpopstate = handleLocation;

// handleLocation();

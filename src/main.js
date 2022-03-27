// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { routes } from './lib/routes.js';


myFunction();
const init = () => {
    window.location.hash = '#/login';
    routes(window.location.hash);
    // observador();
  };
  init();
  
  // Al terminar de cargar la página(Event Load) se ejecuta la función INIT.
  // window.addEventListener('load', init);
  
  /*  El evento hashchange es ejecutado cuando el fragmento identificador de la URL ha cambiado. */
  window.addEventListener('hashchange', () => {
    routes(window.location.hash);
  });
  

// import { Home } from './Components/Home.js';
// import { Login } from './Components/Login.js';
// import { Register } from './Components/Register.js';

// const rootDiv = document.getElementById('root');

// const routes = {
//   '/': Home,
//   '/register': Register,
//   '/login': Login,
// };

// export const onNavigate = (pathname) => {
//   window.history.pushState(
//     {},
//     pathname,
//     window.location.origin + pathname,
//   );

//   while (rootDiv.firstChild) {
//     rootDiv.removeChild(rootDiv.firstChild);
//   }

//   rootDiv.appendChild(routes[pathname]());
// };

// const component = routes[window.location.pathname];

// window.onpopstate = () => {
//   rootDiv.appendChild(component());
// };

// rootDiv.appendChild(component());

// const component = routes[window.location.pathname];

// window.onpopstate = () => {
//   while (rootDiv.firstChild) {
//     rootDiv.removeChild(rootDiv.firstChild);
//   }
//   rootDiv.appendChild(routes[window.location.pathname]());
// };

// rootDiv.appendChild(component());
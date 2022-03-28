// eslint-disable-next-line import/named
import { onAuthStateChanged } from '../firebase/firebase-initializer.js';
import { auth } from '../firebase/firebase-auth.js';
import { components } from './index.js';
import { Loader } from './Loader.js';

// se ejecuta una sola vez
export const Router = () => {
  // console.log("entró a función router");

  const $root = document.getElementById('root');
  $root.textContent = '';

  const loader = Loader();
  $root.appendChild(loader);

  // eslint-disable-next-line consistent-return
  function render() {
    const route = window.location.hash;
    $root.textContent = '';

    switch (route) {
      case '#': {
        if (auth.currentUser) window.location.hash = '#/timeline';
        return $root.appendChild(components.login());
      }
      case '#/': {
        if (auth.currentUser) window.location.hash = '#/timeline';
        return $root.appendChild(components.login());
      }
      case '#/register': {
        if (auth.currentUser) window.location.hash = '#/timeline';
        return $root.appendChild(components.registro());
      }
      case '#/timeline': {
        if (auth.currentUser) {
          $root.classList.remove('main-container');
          return $root.appendChild(components.timeline());
        }
        window.location.hash = '#/';
        break;
      }
      case '#/editPost': {
        if (auth.currentUser) {
          $root.classList.remove('main-container');
          return $root.appendChild(components.editPost());
        }
        window.location.hash = '#/';
        break;
      }
      case '#/muro': {
        if (auth.currentUser) {
          $root.classList.remove('main-container');
          return $root.appendChild(components.muro());
        }
        window.location.hash = '#/';
        break;
      }
      case '#/profile': {
        if (auth.currentUser) {
          $root.classList.remove('main-container');
          return $root.appendChild(components.profile());
        }
        window.location.hash = '#/';
        break;
      }
      case '#/passwordChange': {
        if (auth.currentUser.providerData[0].providerId === 'google.com') {
          // console.log(
          //   'AQUÍ HAREMOS APPEND DE UN COMPONENTE DE 404 NOT FOUND O ALGO'
          // );
        }
        if (auth.currentUser) {
          $root.classList.remove('main-container');
          return $root.appendChild(components.changePassword());
        }
        window.location.hash = '#/';
        break;
      }
      default:
        // todo: Deberíamos crear una vista en caso que el usuario coloque una url no existente
        if (auth.currentUser) {
          // return $root.appendChild(components.login());
          return $root.appendChild(components.timeline());
        }
        return $root.appendChild(components.login());
      // return (window.location.hash = "#/");

      // break;
    }
  }

  // para asegurar que se ejecute una sola vez
  let hasRouterStarted = false;

  // se ejecuta una sola vez
  function start() {
    render();
    window.addEventListener('hashchange', () => {
      render();
    });
    // ya me ejecute
    hasRouterStarted = true;
  }

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.hash = '#/';
    // console.log('el usuario ya está sign out!');
    }
    // ya se ejecuto el router?
    if (!hasRouterStarted) start();
  });
};

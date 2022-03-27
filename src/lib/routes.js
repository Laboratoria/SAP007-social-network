import { Register } from '../Components/Register.js';
import { Login } from '../Components/Login.js';
import { Home } from '../Components/Home.js';

export const routes = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = ''; // Reiniciando el Div a vacio;
  switch (hash) {
    case '#/login':
      Login();
      break;

    case '#/register':
      Register();
      break;

    case '#/home':
      Home();
      break;

    // En caso que el url no sea correcto, nos redigire a la página de "No esta disponible".
    default:
      containerRoot.innerHTML = 'Esta página no esta disponible';
  }
};
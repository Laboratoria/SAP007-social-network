// import home from "./pages/home.js"

// const mainHome = document.querySelector("#root");
// window.addEventListener("load", () => {
//     mainHome.appendChild(home());
// });

import login from './pages/home.js';
import register from './pages/register.js';
import feed from './pages/feed.js';

const mainHome = document.querySelector('#root'); 

window.addEventListener('popstate', (e) => {
  e.preventDefault();

  switch (window.location.hash) {
    case '':
      mainHome.appendChild(login());
      break;
    case '#home':
      mainHome.innerHTML = '';
      mainHome.appendChild(login());
      break;
    case '#registre-se':
      mainHome.innerHTML = '';
      mainHome.appendChild(register());
      break;
    case '#feed':
      mainHome.innerHTML = '';
      mainHome.appendChild(feed());
      break;
    case '#register':
      mainHome.innerHTML = '';
      mainHome.appendChild(register());
      break;
    default:
      mainHome.innerHTML = '';
      mainHome.appendChild(login());
  }
});

window.addEventListener('load', () => {
  mainHome.appendChild(login());
});

const links = document.querySelectorAll('a');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    history.pushState({}, e.target.getAttribute('href'));
  });
});

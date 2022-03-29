//EVENTOS DOM
import "./config-firebase.js"

import { home } from "./pages/home/home.js";

 const content = document.querySelector('#root');
window.addEventListener('load', () => {
    content.appendChild(home());
}) 


window.addEventListener('hashchange', function() {
    console.log('The hash has changed!', window.location.hash)
});
  

import { login } from "./pages/login/login.js";

/* const content = document.querySelector('#root');
window.addEventListener('load', () => {
    content.appendChild(login());
}) */
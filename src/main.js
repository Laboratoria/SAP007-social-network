// Este es el punto de entrada de tu aplicacion
import "../lib/config-firebase.js"
import { myFunction } from './lib/index.js';
import login from "./pages/login.js"

const main = document.querySelector("#root")

window.addEventListener("load", () =>{
  main.appendChild(login());

}
)


myFunction();

console.log('ola');

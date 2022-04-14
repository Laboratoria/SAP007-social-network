// Este es el punto de entrada de tu aplicacion
//import "../lib/config-firebase.js"
import login from "./pages/login.js"
import feed from "./pages/feed.js"

const main = document.querySelector("#root")

const init = () =>{ window.addEventListener("hashchange", () =>{
  switch (window.location.hash) {
    case "": main.appendChild(login());
      break;
    case "#feed": main.appendChild(login());
      break;
      default: main.appendChild(login());
  }


})}


window.addEventListener("load", () =>{
  main.appendChild(login());
  init();

})


myFunction();

console.log('ola');

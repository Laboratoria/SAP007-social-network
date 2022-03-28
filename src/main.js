import { myFunction } from './lib/index.js';
import "./configs/start-firebase.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import login from "./pages/login/login.js"
import newuser from "./pages/newuser/newuser.js"

const main = document.querySelector("#root");

const changePages = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = "";
    switch(window.location.hash){
      case " ":
        main.appendChild(login());  
        break;
      case "#login":
        main.appendChild(login());  
        break; 
      case "#register":
        main.appendChild(newuser()); 
        break;
    }
  })
}

window.addEventListener("load", () => {
  main.appendChild(login());  
  changePages();     
})

myFunction();

//a lista de rotas (window.location) pode ser criada aqui (main) ou em um arquivo separado de rotas
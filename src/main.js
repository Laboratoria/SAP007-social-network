import { myFunction } from './lib/index.js';
import "./configs/start-firebase.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import login from "./pages/login/index.js"

const main = document.querySelector("#root");

/*const changePages = () => {
fazer os switches aqui
}*/


window.addEventListener("load", () => {
    main.appendChild(login());  
    //changePages();    
  })


myFunction();

//a lista de rotas (window.location) pode ser criada aqui (main) ou em um arquivo separado de rotas
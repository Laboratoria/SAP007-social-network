import { myFunction } from './lib/index.js';
import "./configs/start-firebase.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

myFunction();

//a lista de rotas (window.location) pode ser criada aqui (main) ou em um arquivo separado de rotas
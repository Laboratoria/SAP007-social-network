import "./configs/start-firebase.js";
//import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import login from "./pages/login/login.js"
import newuser from "./pages/newuser/newuser.js"
import recover from "./pages/login/recover.js"
import feed from "./pages/feed/feed.js"
import { isLoggedIn } from "./configs/authentication.js"
import about from "./pages/about/about.js"
import userprofile from "./pages/userprofile/userprofile.js"


const main = document.querySelector("#root");

function redirect () {
  switch(window.location.hash){
    case "":
      main.appendChild(login());  
      break;
    case "#login":
      main.appendChild(login());  
      break; 
    case "#register":
      main.appendChild(newuser()); 
      break;
    case "#forgot-password":
      main.appendChild(recover()); 
      break;
    case "#feed":
      main.appendChild(feed()); 
      break; 
    case "#userprofile":
      main.appendChild(userprofile()); 
      break;
    case "#about":
      main.appendChild(about());       
  }

}

window.addEventListener("hashchange", () => {
  main.innerHTML = "";
  redirect();
})    


window.addEventListener("load", () => {
  redirect(); 
  isLoggedIn(function (logged) {
    if (logged) {
      window.location.hash = "#feed"
    }
  })   
})
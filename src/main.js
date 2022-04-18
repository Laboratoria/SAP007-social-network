import "./config-firebase.js"
import { myFunction } from './lib/index.js';

myFunction();


const usernameData = document.getElementById("email");
const passwordData = document.getElementById("password");
const buttonCreate = document.getElementById("create");
const buttonLogin = document.getElementById("login")


buttonCreate.addEventListener("click", () => createUser(usernameData,passwordData));

buttonLogin.addEventListener("click", () => authUser(usernameData,passwordData));

function createUser () {
    const auth = null;
    firebase.auth().createUserWithEmailAndPassword (usernameData,passwordData)
    .then(function(user){
        alert("Cadastrado com sucesso!")
    });
}

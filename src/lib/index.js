import login from "../pages/login/index.js"



const main = document.querySelector("#root");


window.addEventListener("load",() => {
    console.log('load')
    main.appendChild(login());

});
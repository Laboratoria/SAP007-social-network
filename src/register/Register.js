
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js"
import app from "./firebase/firebaseConfig.js"
const authentication = getAuth()
const app = app





const botao = document.querySelector("#botão")
botao.addEventListener("click", Event => {

    Event.preventDefault()

    const form = document.querySelector("#form-test")
    const email = form[0].value
    const senha = form[1].value


    createUserWithEmailAndPassword(authentication, email, senha)
})
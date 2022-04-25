import "../lib/config-firebase.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

export default () => {
    const containerRegister = document.createElement('div')

    const templateRegister = `
      <form>
      <p class="paragrafoLogin">Sign Up</p>
      <input type="text" name="name" class="name-input input-users" placeholder="Nome Completo" required /><br>
      <input type="email" name="email" class="email-input input-users" placeholder="Insera seu email" requerid /><br>
      <input type="password" name="password" class="password-input input-users" placeholder="Insera uma senha" requerid /><br>
      <input type="password" name="password" class="password-input input-users" placeholder="Confirme sua senha" requerid /><br>
    <br><button class='btn-submit' type="submit">Sign Up</button><br></form>
    `;

    containerRegister.innerHTML = templateRegister;

    return containerRegister;
}

const auth = getAuth();
const email = document.getElementById("email-input")
const password = document.getElementById("password-input")

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

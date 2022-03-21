import "./lib/config-firebase.js";
import { userCreate, userLogout } from "./lib/auth-firebase.js";
const buttonSubmit = document.getElementById("buttonSubmit");

buttonSubmit.addEventListener("click", async (e) => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const tryingLogin = await userCreate(email, password);
  console.log(tryingLogin);
});

myFunction();

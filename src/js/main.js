import "../lib/config-firebase.js";
import { userCreate, userLogout } from "../lib/auth-firebase.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const buttonSubmit = document.getElementById("buttonSubmit");

buttonSubmit.addEventListener("click", async (e) => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const tryingLogin = await userCreate(email, password);
  console.log(tryingLogin);
  const auth = getAuth();
  const user = auth.currentUser;

  console.log(user);
});

const logout = document.getElementById("logout");

logout.addEventListener("click", async (e) => {
  const tryingLogout = await userLogout();
  console.log(tryingLogout);
  const auth = getAuth();
  const user = auth.currentUser;

  console.log(user);
});

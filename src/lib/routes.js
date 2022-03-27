import { Register } from "../Components/Register.js";
import { Login } from "../Components/Login.js";
import { Home } from "../Components/Home.js";

export const routes = (hash) => {
  const containerRoot = document.getElementById("root");
  containerRoot.innerHTML = "";
  switch (hash) {
    case "#/login":
      Login();
      break;

    case "#/register":
      Register();
      break;

    case "#/home":
      Home();
      break;

    // Caso a url nao seja correta, irá para a pág "nao esta disponíve".

    default:
      containerRoot.innerHTML = "Esta página no esta disponible";
  }
};

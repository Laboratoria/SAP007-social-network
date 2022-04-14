import login from "./pages/login/index.js";
import register from "./pages/register/index.js";
import timeline from "./pages/timeline/index.js";

const section = document.getElementById("container-general");

function initPages() {
  window.addEventListener("hashchange", () => {
    section.innerHTML = "";
    switch (window.location.hash) {
      case " ":
        section.appendChild(login.createLogin());
        break;
      case "#login":
        section.appendChild(login.createLogin());
        break;
      case "#register":
        section.appendChild(register.createRegister());
        break;
      case "#timeline":
        section.appendChild(timeline.createTimeline());
        break;
      default:
        section.appendChild(login.createLogin());
    }
  });
}

window.addEventListener("load", () => {
  section.appendChild(login.createLogin());
  initPages();
});

/* INDEX LOGIN
Precisa fazer para adicionar novos usuários
Como capturar o erro na autenticação e trazer para esse arquivo?
Como descobrir qual erro está acontecendo? -> Senha errada, email não confere e usuário não cadastrado
Precisa enviar e-mail quando o usuário não lembrar a senha

* modal
*/

/*
AUTHENTICATION

COMO DESCOBRIR QUE O USUÁRIO ESTÁ LOGADO?
COMO DESCONECTAR? E COMO SEI QUE A ROTA SERÁ CHAMADA CORRETAMENTE?
*/

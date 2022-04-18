import { registerUser } from "/lib/auth-firebase.js"

export default function formRegister() {
  const container = document.createElement("div");
  container.className = "title-register"

  container.innerHTML = `
    <h1 class="title-register">Faça seu cadastro</h1>
      <form class="myForm">
        <div class="information">
          <label class="label-name">Nome e sobrenome</label>
          <input type="text" id="name" class="form-fields"/>

          <label class="label-user">Usuário</label>
          <input type="text" id="user" class="form-fields"/>

          <label class="label-email">E-mail</label>
          <input type="email" id="email" class="form-fields" required/>

          <label class="label-password">Senha</label>
          <input type="password" id="password-register" class="form-fields" autocomplete="on" required/>

          <button type="button" id="btn-register" class="btn-register">Enviar</button>
        </div>
      </form>
  `;

  const email = container.querySelector("#email");
  const password = container.querySelector("#password-register");
  const submitButton = container.querySelector("#btn-register");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    registerUser(email.value, password.value)
      .then(() => {
          alert("Usuário cadastrado com sucesso")
        }).catch((error) => {
          //coloca as mensagens de erro
        });   
  });

  return container;

}

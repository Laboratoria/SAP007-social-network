import { registerUser } from "/lib/auth-firebase.js"

export default function formRegister() {
  const registerPage = document.createElement("div");
  registerPage.classList.add("title-register")

  registerPage.innerHTML = `
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

  const email = registerPage.querySelector("#email");
  const password = registerPage.querySelector("#password-register");
  const submitButton = registerPage.querySelector("#btn-register");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    registerUser(email.value, password.value)
      .then(() => {
        window.location.hash = "home";
      }).catch((error) => {
        if (error.code === "auth/email-already-exists") {
          alert("E-mail já cadastrado");
        } else if (error.code == "auth/invalid-email") {
          alert('Digite um e-mail válido');
        } else if (error.code === "auth/invalid-password") {
          alert("A Senha precisa ter no minimo 6 caracteres");
        }
      });
  });

  return registerPage;

}

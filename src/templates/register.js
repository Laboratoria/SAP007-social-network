import { registerGoogle, registerUser } from "../lib/auth-firebase.js";

export default function formRegister() {
  const registerPage = document.createElement("div");
  registerPage.classList.add("title-register")

  registerPage.innerHTML = `
    <header>
      <h1 class="title-register">Crie uma conta</h1>
      <h2 class="subtitle-register">Inscreva-se com sua conta do google <br> ou endereço de e-mail</h2>
      <button id="button-google" class="button-google"><img src="./images/google.png" class="logo-google" alt="logo do google"></button>
    </header>
    <main>
      <form class="register-form" id="form-register">
        <div class="information">
            <label for="name" class="label-name">Nome completo</label>
            <input type="text" id="name" class="form-fields" placeholder="Nome completo"/>
            <p id="error-name" class="alert-error"></p>

            <label for="user" class="label-user">Usuário</label>
            <input type="text" id="user" class="form-fields" placeholder="Usuário"/>
            <p id="error-user" class="alert-error"></p>

            <label for="email" class="label-email">E-mail</label>
            <input type="email" id="email" class="form-fields" placeholder="E-mail"/>
            <p id="error-email" class="alert-error"></p>
        
            <label for="password-register" class="label-password">Senha</label>
            <input type="password" id="password-register" class="form-fields" placeholder="Senha" autocomplete="on"/>
            <p id="error-password" class="alert-error"></p>

          <button type="button" id="button-register" class="button-register">Enviar</button>
          <button type="button" id="button-register-back" class="button-register-back">Voltar</button>

          <p id="error-message" class="alert-error"></p>
        </div>
      </form>
      <p class="footer-register">Desenvolvido por Helena G. Silva <a class="footer-register" href="https://github.com/nannayusuf">[GitHub]</a> e Jaqueline de Oliveira <a class="footer-register" href="https://github.com/jaquelinedeoliveira93">[GitHub]</a></p>
    </main>
  `;
  const errorName = registerPage.querySelector("#error-name");
  const errorUser = registerPage.querySelector("#error-user");
  const errorEmail = registerPage.querySelector("#error-email");
  const errorPassword = registerPage.querySelector("#error-password");
  const msgError = registerPage.querySelector("#error-message");
  const name = registerPage.querySelector("#name");
  const user = registerPage.querySelector("#user");
  const email = registerPage.querySelector("#email");
  const password = registerPage.querySelector("#password-register");
  const submitButton = registerPage.querySelector("#button-register");

  /*//evento que dispara as validações
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    checkForm()
  })

  //Validação dos dados do formulário antes de mandar para o firebase
  function checkForm () {
    if (name.value === "") {
      errorName.innerHTML = "Este campo não pode estar vazio"
    }
    if (user.value === "") {
      errorUser.innerHTML = "Este campo não pode estar vazio"
    }
    if (email.value === "") {
      errorEmail.innerHTML = "Este campo não pode estar vazio"
    } else if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || (email.value.indexOf(".") - email.value.indexOf("@") === 1)) {
      errorEmail.innerHTML = "Preencha com um email válido"
    }
    if (password.value === "") {
      errorPassword.innerHTML = "Este campo não pode estar vazio"
    } else if (password.value.length <= 5) {
      errorPassword.innerHTML = "A senha precisa ter no mínimo 6 caracteres"
    }
  }*/

  //Função para fazer o cadastro
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    registerUser(email.value, password.value)
      .then(() => {
        window.location.hash = "home";
      }).catch((error) => {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          msgError.textContent = "E-mail já cadastrado.";
        } else if (error.code == "auth/invalid-email") {
          msgError.textContent = "Digite um e-mail válido.";
        } else if (error.code === "auth/weak-password") {
          msgError.textContent = "A Senha precisa ter no mínimo 6 caracteres";
        }
      });
  });

  //Função para cadastrar com o google
  const googleButton = registerPage.querySelector("#button-google");
  googleButton.addEventListener("click", (e) => {
    e.preventDefault();
    registerGoogle()
      .then(() => {
        window.location.hash = "home";
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/account-exists-with-different-credential") {
          alert("Já existi uma conta com esse endereço de e-mail.");
        } else if (error.code === "auth/popup-blocked") {
          alert("O pop-up foi bloqueado pelo navegador.");
        }
      });
  })

  //Função para voltar para a página de login
  const goBackButton = registerPage.querySelector("#button-register-back");
  goBackButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.hash = "posts";
  })

  return registerPage;
}
import { registerGoogle, registerUser, updateUsername } from "../lib/auth-firebase.js";
import { infoUser } from "../lib/firestore-firebase.js";

export default function formRegister() {
  const registerPage = document.createElement("div");
  registerPage.classList.add("title-register")

  registerPage.innerHTML = `
    <body class="body-register">
      <header>
        <h1 class="title-register">Crie uma conta</h1>
        <h2 class="subtitle-register">Inscreva-se com sua conta do google <br> ou endereço de e-mail</h2>
        <button id="button-google-register" class="button-google-register"><img src="./images/google.png" class="logo-google-register" alt="logo do google"></button>
      </header>
      <main>
        <form class="register-form" id="form-register">
          <div class="information-register">
              <label for="name-register" class="label-name">Nome completo</label>
              <input type="text" id="name-register" class="form-fields" placeholder="Nome completo"/>
              <p id="error-name" class="alert-error"></p>

              <label for="user-register" class="label-user">Usuário</label>
              <input type="text" id="user-register" class="form-fields" placeholder="Usuário"/>
              <p id="error-user" class="alert-error"></p>

              <label for="email-register" class="label-email">E-mail</label>
              <input type="email" id="email-register" class="form-fields" placeholder="E-mail"/>
              <p id="error-email" class="alert-error"></p>
          
              <label for="password-register" class="label-password">Senha</label>
              <input type="password" id="password-register" class="form-fields" placeholder="Senha" autocomplete="on"/>
              <p id="error-password" class="alert-error"></p>

            <button type="button" id="button-register" class="button-register">Enviar</button>
            <button type="button" id="button-register-back" class="button-register-back">Voltar</button>

            <p id="error-message" class="alert-error"></p>
          </div>
        </form>
      </main>
      <footer class="footer-register">Desenvolvido por Helena <a class="footer-register" href="https://github.com/nannayusuf">[GitHub]</a> e Jaqueline <a class="footer-register" href="https://github.com/jaquelinedeoliveira93">[GitHub]</a></footer>
    </body>
  `;

  const email = registerPage.querySelector("#email-register");
  const password = registerPage.querySelector("#password-register");

  //Validação dos dados do formulário antes de mandar para o firebase
  const name = registerPage.querySelector("#name-register");
  const user = registerPage.querySelector("#user-register");
  const errorName = registerPage.querySelector("#error-name");
  const errorUser = registerPage.querySelector("#error-user");
  const errorEmail = registerPage.querySelector("#error-email");
  const errorPassword = registerPage.querySelector("#error-password");

  function checkForm() {
    let isValid = true
    if (name.value === "") {
      errorName.innerHTML = "Este campo não pode estar vazio"
      isValid = false
    }
    if (user.value === "") {
      errorUser.innerHTML = "Este campo não pode estar vazio"
      isValid = false
    }
    if (email.value === "") {
      errorEmail.innerHTML = "Este campo não pode estar vazio"
      isValid = false
    } else if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || (email.value.indexOf(".") - email.value.indexOf("@") === 1)) {
      errorEmail.innerHTML = "Preencha com um email válido"
      isValid = false
    }
    if (password.value === "") {
      errorPassword.innerHTML = "Este campo não pode estar vazio"
      isValid = false
    } else if (password.value.length <= 5) {
      errorPassword.innerHTML = "A senha precisa ter no mínimo 6 caracteres"
      isValid = false
    }
    return isValid
  }

  //Função para fazer o cadastro
  const msgError = registerPage.querySelector("#error-message");
  const submitButton = registerPage.querySelector("#button-register");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const isValid = checkForm()
    if (isValid) {
      registerUser(email.value, password.value)
      .then(() => {
        updateUsername(name.value)
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
    }
    infoUser(name.value, user.value, email.value)
  });

  //Função para cadastrar com o google
  const googleButton = registerPage.querySelector("#button-google-register");
  googleButton.addEventListener("click", (e) => {
    e.preventDefault();
    registerGoogle()
      .then(() => {
        window.location.hash = "home";
      })
      .catch((error) => {
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
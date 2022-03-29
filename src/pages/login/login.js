// importar da .LIB a função de autenticação do firebase

export default function login() {
  const container = document.createElement("div");
  const template = `
  <section class="container-main-login">
  <div class="login-container">
    <form class="">
      <label for="" class="">Email</label>
      <input class="text-input" type="email" name="" id="email-login-input">
      <br>
      <label for="" class="">Senha</label>
      <input class="text-input" type="password" name="" id="password-login-input">
      <br>
      <button class="btn-login" type="submit" id="btn-submit-login">Entrar</button>
      <p>OU</p>
      <button class="btn-login-google" type="submit" id="">Entrar com google</button>
      <button class="btn-register" type="submit" id="">Não possui uma conta?cadastra-se</button>
    </form>
  </div>
</section>
    `;
  container.innerHTML = template;
      // após criar o template, cria variaveis pra pegar os valores dos inputs e do botao

  const email = container.querySelector("#email-login-input");
  const password = container.querySelector("#password-login-input");
  const btnSubmit = container.querySelector("#btn-submit-login");

    // ai coloca um addeventlistener pra ouvir o CLICK do botao 
  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
  //nao faço ideia pra que serve essas linhas debaixo SOS :(
    userCreate(email.value, password.value)
      .then(function () {
        window.location.hash = "#timeLine";
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Deu errado!");
        return errorMessage;
      });
  });
  
  return container;
}

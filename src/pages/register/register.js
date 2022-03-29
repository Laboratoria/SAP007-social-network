// importar da .LIB a função de autenticação do firebase

export default () =>{
    const container = document.createElement ('div');
    const template =`
    <section class="container-main-login">
    <div class="login-container">
      <form class="">
        <label for="" class="">Nome</label>
        <input class="text-input" type="text" name="" id="">
        <br>
        <label for="" class="">Senha</label>
        <input class="text-input" type="password" name="" id="">
        <br>
        <button class="btn-login" type="submit" id="">Registrar</button>
      </form>
    </div>
  </section>
    `;
    container.innerHTML=template;
    // após criar o template, cria variaveis pra pegar os valores dos inputs e do botao

  const email = container.querySelector("#email");
  const password = container.querySelector("#password");
  const buttonSubmit = container.querySelector("#buttonSubmit");

  // ai coloca um addeventlistener pra ouvir o CLICK do botao 
  buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    userLogin(email.value, password.value)
      .then(function () {
        window.location.hash = "#timeLine";
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Deu ruim!");
        return errorMessage;
      });
  });

    return container;
  }
//importar 

export default () => {
  const container = document.createElement("div");
  container.classList.add("content-login")
  
  const templateRecoverPassword = `
    <img class="logo-site" src="img/logo-eu-poesia-r.png">

    <form class="form-login">
      <p class="title-recover">Redefinir Senha</p>
      <p class="text-recover">Insira o seu email e enviaremos um link para você poder criar uma nova senha.</p>
      <input type="email" id="input-email" class="input-email" placeholder="E-mail">
      <button type="button" id="button-login" class="button-login">Enviar link</button>
      <span class="msg-recover" id="msg-recover"></span>
      <a href="#login" class="link-login">Voltar ao Login</a>
    </form>    
  `;

  container.innerHTML = templateRecoverPassword;

  return container;
}  
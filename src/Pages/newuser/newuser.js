export default () => {
  const container = document.createElement("div");
    
  const templateNewUser = `
    <img class="logo-site" src="img/logo-eu-poesia.jpeg">
    <p class="text-register>Registre-se para publicar suas poesias</p>
  
    <form>
      <input type="text" id="input-email" class="input-email" placeholder="exemplo@gmail.com">
      <input type="text" id="input-name" class="input-name" placeholder="Nome de usuário">
      <input type="date" id="birth-date" class="birth-date">
      <input type="password" id="input-password" class="input-password" placeholder="Senha">
      <button type="button" id="button-register" class="button-register">Cadastre-se</button>
    </form>
  
    <section class="message-register">
      <p class="text-register">
        Já possui cadastro? 
         <a href="#login">Login</a>
      </p>
    </section>
  `;
    
  container.innerHTML = templateNewUser;
  
  return container;
  }
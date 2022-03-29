export default () => {
  const container = document.createElement("div");
  const template = `
    <section class="container-main-login">
  <div class="login-container">
    <form class="">
      <label for="" class="">Email</label>
      <input class="text-input" type="email" name="" id="">
      <br>
      <label for="" class="">Senha</label>
      <input class="text-input" type="password" name="" id="">
      <br>
      <button class="btn-login" type="submit" id="">Entrar</button>
      <p>OU</p>
      <button class="btn-login-google" type="submit" id="">Entrar com google</button>
      <button class="btn-register" type="submit" id="">Não possui uma conta?cadastra-se</button>
    </form>
  </div>
</section>
    `;
  container.innerHTML = template;
  console.log("correu load");
  return container;
};

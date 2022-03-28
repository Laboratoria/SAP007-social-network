export default () =>{
    const container = document.createElement('div');
    const template =`
    <section class="container-main-login">
      <div class="login-container">
      <form class="">
    <label for="" class="">Email</label>
    <input class="" type="email" name="" id="">
    <br>
    <label for="" class="">Senha</label>
    <input class="" type="password" name="" id="">
    <br>
    <button class="" type="submit" id="">Entrar</button>
    </form>
    </div>
    </section>
    `;
    container.innerHTML=template;
    console.log('correu load')
    return container;
    
  }
  
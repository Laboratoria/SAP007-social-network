export default () =>{
    const container = document.createElement ('div');
    const template =`
    <div class="">
    <form class="">
    <label for="" class="">Nome</label>
    <input class="" type="text" name="" id="">
    <br>
    <label for="" class="">Email</label>
    <input class="" type="email" name="" id="">
    <br>
    <label for="" class="">Senha</label>
    <input class="" type="password" name="" id="">
    <br>
    <button class="" type="submit" id="">Entrar</button>
    </form>
    </div>
    `;
    container.innerHTML=template;
    return container;
  }
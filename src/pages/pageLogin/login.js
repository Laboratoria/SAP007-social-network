export default () => {
    const container = document.createElement('div');

    const infoLogin = `
    <div class="container">
      <div class="conteudo primeiro-conteudo">
        <div class="primeira-coluna">
          <img src="./meditacao (1).png" id="image">
          <h1>ZAZEN</h1>
        </div>
        <div class="segunda-coluna">
          <h2>Log In</h2>
          <form class="forms">
            <label class="input-label">
              <i class="fa-regular fa-envelope icon-modify"></i>
            <input type="email"placeholder="E-mail">
            </label>
            <label class="input-label">
              <i class="fa-solid fa-lock icon-modify"></i>
            <input type="password" placeholder="Password">
            </label>
            <button class="botao" id="botaoLogin">Log in</button>
            <button class="botao" id="botaoSignup"type="submit">Sign Up</button>
            <div class="alternative">
              <span>Continue with</span>
            </div>
            <button class="botao" id="botao-google" type="submit">
            <img src="./google (1).png" id="google">
          </button>    
          </form>
        </div>
      </div>
    </div>
    `
    container.innerHTML = infoLogin;

    return container;
}
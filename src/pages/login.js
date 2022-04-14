//import "../lib/config-firebase.js"

export default () =>{
  const container = document.createElement("form");
  const templateLoging = `
  <input class="email" placeholder ="e-mail" type="email" required></input>
  <input class="password" placeholder="senha" minlength="6" type="password" required></input>
  <button class="enter" type="submit">Entrar</button>
  <p>ou</p>
  <button class="google" type="submit">Login com o Google</button>
  <div class="register"><a href="/#">Cadastre-se</a></div>
  `;

  container.innerHTML= templateLoging;
  return container;

}

import { getPosts } from "../lib/firestore-firebase.js";
import { publishingPosts } from "../componentes/template-post.js";
import { logOff } from "../lib/auth-firebase.js"

export default function home() {
  const homePage = document.createElement("div");
  homePage.classList.add("body-home-page")

  homePage.innerHTML = `
    <input type="checkbox" id=check>
    <label for="check" class="label-user-icon-home"><img class="home-user-icon-posts" src="./images/user-icon.png" alt="ícone contorno do usuário"></label>
    <nav class="menu-home">
      <ul class="menu-options-home">
        <li><a class="link-menu-home" href="#posts">Perfil</a></li>
        <li><a id="link-logoff" class="link-menu-home">Sair</a></li>
      </ul>
    </nav>
    <input type="search" class="field-search-home" placeholder="Buscar">
    <button class="button-search-home">Buscar</button> 
    <div class="section-posts-container">
      <ul id="all-posts" class="section-post"></ul>
    </div>
    `;

  const showAllPosts = homePage.querySelector("#all-posts")

  getPosts().then((allPosts) => {
    allPosts.forEach((item) => {
      const postElement = publishingPosts(item);
      showAllPosts.prepend(postElement);
    });
  });

  //Função para sair da rede social
  const logOut = homePage.querySelector("#link-logoff")
  logOut.addEventListener("click", (e) => {
    e.preventDefault();
    logOff();
    window.location.hash = "login"
  })


  return homePage

}





/*const buttonPerfil = homePage.querySelector("#botao");
buttonPerfil.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.hash = "posts";
})*/

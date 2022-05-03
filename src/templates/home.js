import { getPosts } from "../lib/firestore-firebase.js";
import { publishingPosts } from "../componentes/template-post.js";

export default function home() {
  const homePage = document.createElement("div");
  homePage.classList.add("body-home-page")

  homePage.innerHTML = `
        <section class="section-search-icon-user">
          <input type="search" id="search-field" class="search-field" placeholder="Buscar">
          <button id="button-search" class="button-search">Buscar</button>
        </section>
        <button id="button-user" class="button-user"><img src="./images/user-icon.png" class="profile-user" alt="ícone contorno do usuário"></button>
        <div class="section-posts-container">
      <section id="all-posts" class="section-post"></section>
    </div>
    `;

  const showAllPosts = homePage.querySelector("#all-posts")
  
  getPosts().then((allPosts) => {
    allPosts.forEach((item) => {
      item.date;
      item.titleHQ;
      item.message;
      const postElement = publishingPosts(item);
console.log(allPosts)
      showAllPosts.prepend(postElement);

    });
  });

  return homePage

}





/*const buttonPerfil = homePage.querySelector("#botao");
buttonPerfil.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.hash = "posts";
})*/

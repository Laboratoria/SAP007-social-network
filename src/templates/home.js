import { getPosts } from "../lib/firestore-firebase.js"

export default function home() {
  const homePage = document.createElement("div");
  homePage.classList.add("profile-user")

  homePage.innerHTML = `
      <body class="home-page">
        <section class="section-search-icon-user">
          <input type="search" id="search-field" class="search-field" placeholder="Buscar">
          <button id="button-search" class="button-search">Buscar</button>
        </section>
        <button id="button-user" class="button-user"><img src="./images/user-icon.png" class="profile-user" alt="ícone contorno do usuário"></button>
        <button id="botao">Perfil</button>

      </body>
    `;

  getPosts()

  const buttonPerfil = homePage.querySelector("#botao");
  buttonPerfil.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.hash = "posts";
  })

  return homePage

}


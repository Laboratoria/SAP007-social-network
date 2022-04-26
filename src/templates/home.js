import { getPosts } from "../lib/firestore-firebase.js"

export default function home() {
    const homePage = document.createElement("div");
    homePage.classList.add("profile-user")
  
<<<<<<< HEAD
    container.innerHTML = `
      <h1>HOME</h1>
      <form> 
      <textarea class='post' placeholder="Escreva seu post"></textarea>
      </form>
      <button>postar</button>
      
=======
    homePage.innerHTML = `
      <body class="home-page">
        <section class="section-search-icon-user">
          <input type="search" id="search-field" class="search-field" placeholder="Buscar">
          <button id="button-search" class="button-search">Buscar</button>
        </section>
        <button id="button-user" class="button-user"><img src="./images/user-icon.png" class="profile-user" alt="ícone contorno do usuário"></button>
      </body>
>>>>>>> a019bf088e2f6c5e194440b2b3da3fb93384f51e
    `;

  getPosts()

    return homePage
  
  }
  
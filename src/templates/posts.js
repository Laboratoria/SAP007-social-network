//import {  } from "../lib/firestore-firebase.js"

export default function posts() {
    const profilePage = document.createElement("div");
    profilePage.classList.add("profile-user-posts")
  
    profilePage.innerHTML = `
      <section>
        <input type="search" placeholder="Buscar">
        <button>Buscar</button>
        <button><img class="profile-user-posts" src="./images/user-icon.png" alt="ícone contorno do usuário"></button>
      </section>
      <main>
        <input type="text" id="title-post" class="title-post" placeholder="Título do quadrinho"/>
        <textarea id="message" rows="5" cols="33" class="postProfile" placeholder="Conta um pouco sobre o quadrinho que você esta lendo">
        </textarea>
        <button id="post-button" class="post-button">POSTAR</button>
        <button id="delete-button" class="delete-button">EXCLUIR</button>
      </main>
    `;
  

  const message = profilePage.querySelector("#message");
  const titleHQ = profilePage.querySelector("#title-post");
  const postButton = profilePage.querySelector("#post-button");

  postButton.addEventListener("click", (e) => {
    e.preventDefault();
    creatPost(titleHQ.value, message.value)
  });

  return profilePage
  
}

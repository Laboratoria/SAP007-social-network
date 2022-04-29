import { creatPost } from "../lib/firestore-firebase.js"

export default function posts() {
  const profilePage = document.createElement("div");
  profilePage.classList.add("profile-user-icon-posts")

  profilePage.innerHTML = `
    <body class="body-post">
      <section>
        <input type="search" placeholder="Buscar">
        <button>Buscar</button>
        <button><img class="profile-user-icon-posts" src="./images/user-icon.png" alt="ícone contorno do usuário"></button>
      </section>
        
      <main class="main-posts">
        <div class="new-post">
          <div id="author" class="name-user"><strong>Nome do usuário</strong></div>
          <form class="form-post">
            <input for="message" type="text" id="title-post" class="title-post" placeholder="Título do quadrinho"/>
            <textarea name="textarea" id="message" class="postProfile" placeholder="Conta um pouco sobre o quadrinho que você esta lendo"></textarea>
            <div class="buttons-post-delete">
              <button id="post-button" class="post-button">POSTAR</button>
              <button id="delete-button" class="delete-button">EXCLUIR</button>
            </div>  
          </form>
        </div>
      </main>
    <body> 
    `;
  

  const message = profilePage.querySelector("#message");
  const titleHQ = profilePage.querySelector("#title-post");
  const postButton = profilePage.querySelector("#post-button");
  const author = profilePage.querySelector("#author");

  postButton.addEventListener("click", (e) => {
    e.preventDefault();
    creatPost(message.value, titleHQ.value, "Jaque")
    .then((post)=>{
      console.log(post)
      message.value = "";
      titleHQ.value = "";
    })
  });

  return profilePage
  
}

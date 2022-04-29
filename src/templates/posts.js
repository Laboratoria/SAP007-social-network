import { creatPost } from "../lib/firestore-firebase.js"

export default function posts() {
  const profilePage = document.createElement("div");
  profilePage.classList.add("header-search-menu");

  profilePage.innerHTML = `
    <div class="body-post">
      <div class="header-search-menu">
        <input type="search" placeholder="Buscar">
        <button>Buscar</button>
        <button class="button-icon-user"><img class="profile-user-icon-posts" src="./images/user-icon.png" alt="ícone contorno do usuário"></button>
      </div>
        
      <div class="main-posts">
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
      </div>
    <div> 
    `;

  const message = profilePage.querySelector("#message");
  const titleHQ = profilePage.querySelector("#title-post");
  const postButton = profilePage.querySelector("#post-button");
  const author = profilePage.querySelector("#author");

  //Validação dos campos menssagem e título antes de mandar para o firebase
function checkNewPostFields() {
  let isValid = true
  if (titleHQ.value === "") {
    alert("O campo título não pode estar vazio")
    isValid = false
  }
  if (message.value === "") {
    alert("O campo de mensagem não pode estar vazio");
    isValid = false
  } else if (message.value,length <= 20 ) {
    alert("Conte um pouco mais");
    isValid = false
  }
  return isValid
}

  postButton.addEventListener("click", (e) => {
    e.preventDefault();
    const isValid = checkNewPostFields()
    if (isValid) {
      creatPost(message.value, titleHQ.value, "Jaque")
      .then((post) => {
        console.log(post)
        message.value = "";
        titleHQ.value = "";
      }).catch((error) => {
        if (message.value === "") {
          alert("O campo de mensagem não pode estar vazio");
        } else if (message.value,length <= 20 ) {
          alert("Conte um pouco mais");
        }
        if (titleHQ.value === "") {
          alert("O campo título não pode estar vazio")
        }
      });
    }
  });

  return profilePage

}

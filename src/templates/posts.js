import { creatPost, getPosts, infoUser } from "../lib/firestore-firebase.js"
import { publishingPosts } from "../componentes/template-post.js"
import { logOff } from "../lib/auth-firebase.js"

export default function posts() {
  const profilePage = document.createElement("div");
  profilePage.classList.add("body-post");

  profilePage.innerHTML = `
    <input type="checkbox" id=check>
    <label for="check" class="label-user-icon"><img class="profile-user-icon-posts" src="./images/user-icon.png" alt="ícone contorno do usuário"></label>
    <nav class="menu">
      <ul class="menu-options">
        <li><a class="link-menu-post" href="#home">Feed</a></li>
        <li><a id="link-logoff" class="link-menu-post">Sair</a></li>
      </ul>
    </nav>
      <input type="search" class="field-search" placeholder="Buscar">
      <button class="button-search">Buscar</button> 
        
    <div id="new-post" class="section-new-post">
      <div class="new-post">
        <div id="author" class="name-user">Usuario</div>
        <form class="form-post">
          <input for="message" type="text" id="title-post" class="title-post" placeholder="Título do quadrinho"/>
          <textarea name="textarea" id="message" class="new-post-message" placeholder="Conta um pouco sobre o quadrinho que você esta lendo"></textarea>
          <div class="buttons-post-delete">
            <button id="post-button" class="post-button">postar</button>
            <button id="delete-button" class="delete-button">excluir</button>
          </div>  
        </form>
      </div>
    </div>

    <div class="posts-container">
      <section id="new-post-here"></section>
      <section id="all-posts-here"></section>
    </div>    
    `;

  const message = profilePage.querySelector("#message");
  const titleHQ = profilePage.querySelector("#title-post");
  const sectionNewPost = profilePage.querySelector("#new-post-here");

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
    } else if (message.value.length <= 20) {
      alert("Conte um pouco mais");
      isValid = false
    }
    return isValid
  }

  //Função para mandar os dados da nova postagem para o Clound Firestore
  const postButton = profilePage.querySelector("#post-button");
  postButton.addEventListener("click", (e) => {
    e.preventDefault();
    const isValid = checkNewPostFields()
    if (isValid) {
      creatPost(message.value, titleHQ.value)
        .then((post) => {
          console.log(post)
          message.value = "";
          titleHQ.value = "";
        }).catch((error) => {
          if (message.value === "") {
            alert("O campo de mensagem não pode estar vazio");
          } else if (message.value.length <= 20) {
            alert("Conte um pouco mais");
          }
          if (titleHQ.value === "") {
            alert("O campo título não pode estar vazio")
          }
        });
    }
  });

  //Função para quando clickar no botão excluir da nova postagem, antes de enviar, o campo fique limpo
  const deleteButton = profilePage.querySelector("#delete-button")
  deleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    titleHQ.value = "";
    message.value = ""
  })

  //Função para sair da rede social
  const logOut = profilePage.querySelector("#link-logoff")
  logOut.addEventListener("click", (e) => {
    e.preventDefault();
    logOff(); 
    window.location.hash = "login"
  })
    
  return profilePage

}

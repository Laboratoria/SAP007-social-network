import { getPosts, creatPost } from "../lib/firestore-firebase.js";
import { publishingPosts } from "../componentes/template-post.js";
import { userLogout } from "../lib/auth-firebase.js";
import { auth } from "../lib/config-firebase.js";

export default function home() {
  const homePage = document.createElement("div");
  homePage.classList.add("body-home-page");

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
    <div id="new-post" class="section-new-post">
      <div class="new-post">
        <div id="name" class="name-user">Olá, ${auth.currentUser.displayName}</div>
        <form class="form-post">
          <input type="text" id="title-post" class="title-post" placeholder="Título do quadrinho"/>
          <textarea name="textarea" id="message" class="new-post-message" placeholder="Conte em mais de 20 caracteres sobre o quadrinho que você esta lendo"></textarea>
          <span id="error-msg" class="error-msg"></span>
          <div class="buttons-post-delete">
          <button id="post-button" class="post-button">postar</button>
          <button id="delete-button" class="delete-button">excluir</button>
        </div>  
        </form>
      </div>
    </div>

    <div class="section-posts-container">
      <ul id="all-posts" class="section-post"></ul>
    </div>
    `;

  // Escrever um novo post
  const message = homePage.querySelector("#message");
  const titleHQ = homePage.querySelector("#title-post");
  const error = homePage.querySelector("#error-msg");

  // Validação dos campos menssagem e título antes de mandar para o firebase
  function checkNewPostFields() {
    let isValid = true;
    if (titleHQ.value === "") {
      error.textContent = "O campo título não pode estar vazio";
      isValid = false;
    }
    if (message.value === "") {
      error.textContent = "O campo mensagem não pode estar vazio";
      isValid = false;
    } else if (message.value.length <= 20) {
      error.textContent = "Esse campo precisa ter pelo menos 20 caracteres";
      isValid = false;
    }
    return isValid;
  }

  // Função para mandar os dados da nova postagem para o Clound Firestore
  const postButton = homePage.querySelector("#post-button");
  postButton.addEventListener("click", (e) => {
    e.preventDefault();
    const isValid = checkNewPostFields();
    if (isValid) {
      creatPost(message.value, titleHQ.value)
        .then(() => {
          message.value = "";
          titleHQ.value = "";
        }).catch(() => {
          if (message.value === "") {
            error.textContent = "O campo mensagem não pode estar vazio";
          } else if (message.value.length <= 20) {
            error.textContent = "Esse campo precisa ter pelo menos 20 caracteres";
          }
          if (titleHQ.value === "") {
            error.textContent = "O campo título não pode estar vazio";
          }
        });
    }
  });

  // Quando clicar no botão excluir da nova postagem, antes de enviar, o campo fique limpo
  const deleteButton = homePage.querySelector("#delete-button");
  deleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    titleHQ.value = "";
    message.value = "";
  });

  // Todos os posts na tela
  const showAllPosts = homePage.querySelector("#all-posts");
  getPosts().then((allPosts) => {
    allPosts.forEach((item) => {
      const postElement = publishingPosts(item);
      showAllPosts.prepend(postElement);
    });
  });

  // Função para sair da rede social
  const logOut = homePage.querySelector("#link-logoff");
  logOut.addEventListener("click", (e) => {
    e.preventDefault();
    userLogout().then(() => {
      window.location.hash = "";
    });
  });

  return homePage;
}

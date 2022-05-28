import "../../lib/config-firebase.js";
import { addPosts, getPost } from "../../lib/config-firestore.js";
import { criarCard } from "../../componentes/card.js";
import { auth } from "../../lib/auth-firebase.js";

export default () => {
  let containerFeed = document.createElement('div');
  let templateFeed = `
    <section class="feedcontainer">
    <div class="postt">
    <p class="post">Publique sua teoria &#x1F441</p>
    </div>
    <input id="titulo" type="text" placeholder="Título" maxlength="90"/><br>

    <input id="postText" type="text" placeholder="Sua teoria aqui" maxlength="280" /><br>
    <span id="error-message" class="error-writepost"></span>
    <br><button id="btnPost" type="submit">Postar</button><br>
    <div class="sectionFeedContainer">
    <section id="sectionNewPost" class="sectionPostClass"></section>
    <section id="sectionPost" class="sectionPostClass"></section>
    </div></section>
    `;

  containerFeed.innerHTML = templateFeed;

  const inputTitulo = containerFeed.querySelector("#titulo");
  const inputPost = containerFeed.querySelector("#postText");
  const postBtn = containerFeed.querySelector("#btnPost");
  const sectionAllPost = containerFeed.querySelector("#sectionPost");
  const sectionNewPost = containerFeed.querySelector("#sectionNewPost");
  const msgAlert = containerFeed.querySelector('#error-message');


  postBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputTitulo.value === '' || inputPost.value === '') {
      msgAlert.innerHTML = 'Escreva sua teoria';
    } else {
      addPosts(inputTitulo.value, inputPost.value, auth.currentUser.email).then((id) => {
        let titulo = inputTitulo.value;
        let post = inputPost.value;
        const date = new Date().toLocaleString("pt-br");
        const item = {
          userEmail: auth.currentUser.email,
          "titulo":titulo,
          "post":post,
          date,
          likes: [],  
        };
        sectionNewPost.appendChild(criarCard(item));
        titulo = "";
        post = "";
      });
    }
  });

  const getPosts = async () => {
    const arrayPosts = await getPost();
    arrayPosts.map(posts => {
      const elemento = criarCard(posts);
      sectionAllPost.appendChild(elemento);
    })
  };


  getPosts();
  return containerFeed;
}
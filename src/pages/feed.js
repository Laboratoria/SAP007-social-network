import { getPosts } from '../lib/firestore.js';
import { postComponent } from '../components/posts.js';
import { printNav } from '../components/navbar.js';
import { auth } from '../configs/config.firebase.js';
import { createPost } from '../lib/firestore.js';

export default function feed() {
  const feedContainer = document.createElement("section");
  feedContainer.classList.add("feed-content");

  feedContainer.innerHTML = `
  <div class="new-post">
    <input id="title-recipe" class="recipe-input" placeholder="Nome da receita" required></input>
    <textarea id="write-post" class="post-content" placeholder="Postar nova receita" required>
    </textarea>
    <p id="error-message" class="error-writepost"></p>
    <button class="post-btn" id="new-post-btn">Postar</button>
    <section class="show-posts" id="showPosts">
    </section>
  </div>
    `;

  feedContainer.appendChild(printNav());

  const sectionPost = feedContainer.querySelector("#showPosts");
  const postContent = feedContainer.querySelector('#write-post');
  const titleContent = feedContainer.querySelector('#title-recipe');
  const btnPost = feedContainer.querySelector('#new-post-btn');
  const errorMessage = feedContainer.querySelector('#error-message');

  btnPost.addEventListener("click", (e) => {
    e.preventDefault();
    errorMessage.innerHTML="";
    if (titleContent.value.length >= "10" && postContent.value.length >= "10"){
    createPost(postContent.value, auth.currentUser.email)
    showPosts();
  } else if (titleContent.value === "" && postContent.value === "") {
    errorMessage.innerText = "Preencha todos os campos acima";
  } else if (titleContent.value.length < "10" || postContent.value.length < "10"); {
    errorMessage.innerText = "Preencha os campos com mais de 10 caracteres";
  }
  });

  const showPosts = async () => {
    sectionPost.innerHTML = '';
    const postsArray = await getPosts();
    console.log(postsArray);
    postsArray.forEach((postObj) => {
      const postElement = postComponent(postObj);
      sectionPost.prepend(postElement);
    });
  };
  showPosts();
  return feedContainer;
}
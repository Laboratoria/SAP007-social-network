import { getPosts } from '../lib/firestore.js';
import { postComponent } from '../components/posts.js';
import { printNav } from '../components/navbar.js';
import { createPost } from '../lib/firestore.js';

export default function feed() {
  const feedContainer = document.createElement("section");
  feedContainer.classList.add("feed-content");

  feedContainer.innerHTML = `
  <div class="new-post">
    <input id="title-recipe" class="recipe-input" placeholder="Nome da receita" required></input>
    <textarea id="recipe-content" class="post-content" placeholder="Postar nova receita" required>
    </textarea>
    <span id="error-message" class="error-writepost"></span>
    <button class="post-btn" id="new-post-btn">Postar</button>
    <section class="show-posts" id="showPosts">
    </section>
  </div>
    `;

  feedContainer.appendChild(printNav());

  const sectionPost = feedContainer.querySelector("#showPosts");
  const newPost = feedContainer.querySelector('.new-post');
  const titleContent = feedContainer.querySelector('#title-recipe');
  const recipeContent = feedContainer.querySelector('#recipe-content');
  const btnPost = feedContainer.querySelector('#new-post-btn');
  const errorMessage = feedContainer.querySelector('#error-message');

  newPost.addEventListener('keyup', () => {
    let titleValue = titleContent.value;
    let recipeValue = recipeContent.value;
    if (titleValue.length >= 7 && recipeContent.length >= 10) {
      errorMessage.innerHTML = '';
      btnPost.disabled = false;
    } else {
      errorMessage.innerHTML = 'Insira uma receita válida';
    }
  });
// LIMPAR INPUTS APÓS SUBMETER RECEITA
  btnPost.addEventListener('click', async (e) => {
    // let titleValue = titleContent.value;
    // let recipeValue = recipeContent.value;
    e.preventDefault();
    errorMessage.innerHTML = "";
    const user = {
      email: localStorage.getItem('userEmail'),
      uid: localStorage.getItem('userId'),
    }
    await createPost(titleContent.value, recipeContent.value, user);
    showPosts();
    btnPost.disabled = true;
    titleContent.value = '';
    recipeContent.value = '';
  });


  // btnPost.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   errorMessage.innerHTML="";
  //   if (titleContent.value.length >= "10" && recipeContent.value.length >= "10"){
  //   createPost(recipeContent.value, auth.currentUser.email)
  //   showPosts();
  // } else if (titleContent.value === "" && recipeContent.value === "") {
  //   errorMessage.innerText = "Preencha todos os campos acima";
  // } else if (titleContent.value.length < "10" || recipeContent.value.length < "10"); {
  //   errorMessage.innerText = "Preencha os campos com mais de 10 caracteres";
  // } // else (errorMessage.innerHTML="");
  // });

  const showPosts = async () => {
    sectionPost.innerHTML = '';
    const postsArray = await getPosts();
    postsArray.forEach((postObj) => {
      const postElement = postComponent(postObj);
      sectionPost.prepend(postElement);
    });
  };
  showPosts();
  return feedContainer;
}
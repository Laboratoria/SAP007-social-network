// import { signIn} from '../lib/auth.js';
// import { createPost } from "../lib/firestore.js";

export default function writePost() {
  const writePostContainer = document.createElement('section');
  writePostContainer.classList.add('new-post-writePost');
  const postTemplate = `
    <br>
	  <label for="titulo"> Título</label>
	  <input type="text" name="titulo" required class="title-input">
        
    <label for ="autor"> Autor(a)</label>
	  <input type="text" name="autor" required class="title-input">

	  <label for ="post">Escreva sua receita</label>
      <textarea id="write-post" class="post-content" placeholder="Postar nova receita" autofocus required	>
      </textarea>

      <button class="post-btn">Postar</button>
    <br>
    <button class="return-feed"><a href="#feed"> Voltar para o feed </a></button>
    `;
  writePostContainer.innerHTML += postTemplate;

  // const postContent = writePost.querySelector('#write-post');
  // const btnPost = writePost.querySelector('#post-btn');

  // btnPost.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     createPost(postContent.value, auth.currentUser.email);
  //     window.location.hash = '#feed';
  // })
  return writePostContainer;
}

// const titleContent = writePostContainer.querySelector('#title-input');
// const authorContent = writePostContainer.querySelector('author-input');
// const recipeContet = writePostContainer.querySelector('#recipe-input');
//   btnPost.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (postContent.value !== " ") {
//       createPost(postContent.value);
//       window.location.hash = "#feed";
//     } else {
//       alert("deu ruim mané!");
//     }
//   });
// };

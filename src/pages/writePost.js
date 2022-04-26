// import { auth } from '../configs/config.firebase.js';
// import { createPost } from '../lib/firestore.js';

export default function writePost() {
  const writePostContainer = document.createElement('section');
  writePostContainer.classList.add('new-post-writePost');
  const postTemplate = `
    <br>
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

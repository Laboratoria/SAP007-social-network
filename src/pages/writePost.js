// import { auth } from '../configs/config.firebase.js';
// import { createPost } from '../lib/firestore.js';

export default function writePost() {
  const writePost = document.createElement('section');
  const postTemplate = `
    <button class="return-feed"><a href="#feed">Voltar para o feed</a></button>
    <textarea id="write-post" class="post-content" placeholder="Postar nova receita">
    </textarea>
    EH ISSOO0
    <button class="post-btn">Postar</button>
    `;
  writePost.innerHTML += postTemplate;

  //   const postContent = writePost.querySelector('#write-post');
  //   const btnPost = writePost.querySelector('#post-btn');

  //   btnPost.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     createPost(postContent.value, auth.currentUser.email);
  //     window.location.hash = '#feed';
  //   });
  return writePost;
}

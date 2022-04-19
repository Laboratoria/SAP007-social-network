import '../configs/config.firebase.js';
import { auth } from '../configs/config.firebase.js';
import { createPost } from '../lib/firestore.js';

export default function writePost() {
    const writePost = document.createElement('section');
    const postTemplate = `
    <textarea id="write-post" class="post-content" placeholder="Postar nova receita">
    </textarea>
    
    <button class="post-btn">Postar</button>
    `;
    writePost.innerHTML += postTemplate;

    const postContent = writePost.querySelector('#write-post');
    const btnPost = writePost.querySelector('#post-btn');
    
    btnPost.addEventListener("click", (e) => {
        e.preventDefault();
        createPost(postContent.value, auth.currentUser.email);
        window.location.hash = '#feed';
    })
    return writePost
}
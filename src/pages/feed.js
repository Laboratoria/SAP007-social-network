import { getPosts } from '../lib/firestore.js';
import { postComponent } from '../components/posts.js';
import { printNav } from '../components/navbar.js';
import { auth } from '../configs/config.firebase.js';
import { createPost } from '../lib/firestore.js';

export default function feed() {
  const feedContainer = document.createElement("section");

  feedContainer.innerHTML = `
  <div class="new-post-writePost">
    <textarea id="write-post" class="post-content" placeholder="Postar nova receita" autofocus required	>
    </textarea>
    <button class="post-btn" id="new-post-btn">Postar</button>
  </div>
  <section class="show-posts" id="showPosts">
  </section>
    `;

  feedContainer.appendChild(printNav());
  //feed.innerHTML+= printNav();

  const sectionPost = feedContainer.querySelector("#showPosts");
  const postContent = feedContainer.querySelector('#write-post');
  const btnPost = feedContainer.querySelector('#new-post-btn');

  btnPost.addEventListener("click", (e) => {
    e.preventDefault();
    createPost(postContent.value, auth.currentUser.email);
    showPosts();
  })

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
  console.log(feedContainer);
  return feedContainer;
}
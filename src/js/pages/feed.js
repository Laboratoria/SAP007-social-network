import { createNewPost } from '../../config/posts.js';
import { createPost } from '../components/post.js';
import { createAddComment } from '../components/add-comment.js';
import { createComment } from '../components/comments.js';

export function createFeed() {
  const container = document.createElement('main');
  container.setAttribute('id', 'main-container');
  container.innerHTML = `
    <ul class="cards">
      ${createListPost()}
    </ul>
  `;
  return container;
}

function createListPost (){
  const template = `
    <li class="post-card">
      <article class="user-post">
        ${createPost()}
        <!--${createAddComment()}-->
        <!--${createComment()}-->
      </article>
    </li>
  `
  return template;
}

function publish() {
  const message = document.querySelector('#message');
  const newPost = message.value;
  message.value = '';
  message.focus();
  createNewPost(newPost);
}

export function feedWorking() {
  const btnPublish = document.querySelector('#button-publish');
  btnPublish.addEventListener('click', publish);
}

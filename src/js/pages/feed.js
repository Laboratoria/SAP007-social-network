
import { createNewPost } from "../../config/posts.js";
import { createAddPost } from "../components/add-post.js";
import { initModal } from "../components/modal.js";

export function createFeed() {
  const container = document.createElement("main");
  container.setAttribute("id", "main-container");
  container.innerHTML = `
  <ul class="cards">
    <li class="post-card">
      <article class="user-post">
        <section class="post-timeline">adiciona post.js</section>
        <section class="container-comments">
          <section class="add-comments">adiciona add-comments.js</section>
          <article class="user-comment">adiciona comment.js</article>
        </section>
      </article>
    </li>
    <li class="post-card">
      <article class="user-post">
        <section class="post-timeline">adiciona post.js</section>
        <section class="container-comments">
          <section class="add-comments">adiciona add-comments.js</section>
          <article class="user-comment">adiciona comment.js</article>
        </section>
      </article>
    </li>
  </ul>`;

  container.append(createAddPost());
  const modalOpen = container.querySelector('[data-modal="open"');
  const modalClose = container.querySelector('[data-modal="close"]');
  const modalContainer = container.querySelector('[data-modal="container"]');
  initModal(modalOpen, modalClose, modalContainer);

  const btnPublicar = document.querySelector("#btn-publicar");
  btnPublicar?.addEventListener("click", publish);
  return container;
}


function publish() {
  const message = document.querySelector("#message");
  const newPost = message.value;
  createNewPost(newPost);
}

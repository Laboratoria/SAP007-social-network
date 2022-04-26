export function createFeed() {
  const container = document.createElement("main");
  container.setAttribute("id", "main-container");
  container.innerHTML = `
      <ul class="cards">
        <li class="post-card">
          <article class="user-post">
            <section class="post-timeline">
              adiciona post.js
            </section>
            <section class="container-comments">
              <section class="add-comments">
                adiciona add-comments.js
              </section>
              <article class="user-comment">
                adiciona comment.js
              </article>
            </section>
          </article>
        </li>
        <li class="post-card">
          <article class="user-post">
            <section class="post-timeline">
              adiciona post.js
            </section>
            <section class="container-comments">
              <section class="add-comments">
                adiciona add-comments.js
              </section>
              <article class="user-comment">
                adiciona comment.js
              </article>
            </section>
          </article>
        </li>
      </ul>      
    `;

  return container;
}

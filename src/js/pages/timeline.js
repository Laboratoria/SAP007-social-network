const timeline = {
  createTimeline: function () {
    const template = `
    <main class="main-container">
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
      </ul>      
    </main>
    `;

    return template;
  },
};

export default timeline;

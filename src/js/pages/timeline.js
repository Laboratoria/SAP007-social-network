import { logout } from "../../config/authentication.js";
import header from "../components/header.js";

const timeline = {
  createTimeline: function () {
    const background = document.querySelector(".background");
    background.style.backgroundImage = "none";

    const container = document.createElement("section");
    container.setAttribute("class", "container-labfriends");
    container.prepend(header.createHeader());
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

    container.innerHTML += template;

    return container;
  },
};

export default timeline;

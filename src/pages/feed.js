//import { getPost } from '../lib/firestore.js';
import {postComponent} from '../components/post.js';
import {printNav} from '../components/navbar.js';


export default function feed() {
  const feed = document.createElement("section");
  feed.innerHTML= `
  <section class="show-posts" id="showPosts">
  </section>
    `;
    feed.appendChild(postComponent());
  feed.appendChild(printNav());

  return feed;
}

  // const sectionPost = feed.querySelector("#showPosts");
  // const newRecipe = feed.querySelector("#btn-new-recipe");


//import { getPost } from '../lib/firestore.js';
//import {postComponent} from '../components/post.js';
import {printNav} from '../components/navbar.js';


export default function feed() {
  const feed = document.createElement("section");
  feed.innerHTML= `
  <section class="show-posts" id="showPosts">
  </section>
    `;

  feed.appendChild(printNav());

  return feed;
}

  // const sectionPost = feed.querySelector("#showPosts");
  // const newRecipe = feed.querySelector("#btn-new-recipe");

  // newRecipe.addEventListener("click", e);
  // {
  //   e.preventDefault();
  //   window.location.hash = "#writePost";
  // }

  // const showAllPosts = async () => {
  //   const allPosts = await getPost();
  //   allPosts.forEach((item) => {
  //     const postElement = postComponent(item);
  //     sectionPost.prepend(postElement);
  //   });
  // };
  // showAllPosts();
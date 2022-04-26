import { printNav } from '../components/navbar.js';
import { postComponent } from '../components/posts.js';
import { getPosts } from '../lib/firestore.js';
// import writePost from "../pages/writePost.js";

export default async function feed() {
  // eslint-disable-next-line no-shadow
  const feedContainer = document.createElement('section');
  feedContainer.classList.add('show-posts');
  feedContainer.id = 'showPosts';
  // feedContainer.innerHTML = `
  //  <section class="show-posts" id="showPosts">
  //  </section>
  //   `;
  // feedContainer.appendChild(postComponent(postObj));
  // feedContainer.appendChild(printNav());
  feedContainer.innerHTML += printNav();
  // const sectionPost = feedContainer.querySelector('#showPosts');

  const showPosts = async () => {
    const postsArray = await getPosts();
    postsArray.forEach((postObj) => {
      const postElement = postComponent(postObj);
      feedContainer.prepend(postElement);
    });
  };
  showPosts();
  console.log(feedContainer);
  return feedContainer;
}

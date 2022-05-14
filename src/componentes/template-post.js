import { dislike, like, getPosts } from "../lib/firestore-firebase.js"; // eslint-disable-line import/no-cycle
import { auth } from "../lib/config-firebase.js";

export function publishingPosts(post) {
  const currentUser = auth.currentUser;
  const templatePost = document.createElement("div");
  templatePost.classList.add("body-template-post");

  const time = post.date;
  const formatDate = new Date(time.seconds * 1000 + time.nanoseconds / 1000000);
  const date = formatDate.toLocaleDateString("pt-br");

  templatePost.innerHTML = `    
      <div class="section-post-published">
        <p class="username-post">${post.user}</p>
        <p class="date-post">${date}</p>
        <p class="HQ-title-post">${post.titleHQ}</p>
        <p class="message-post">${post.message}</p>
        <div class="container-like">
          <button class="button-like">
           <img class="img-like" src=${checkLikes()} alt="botão de like"/>
          </button>
          <p class="like-counter" id="like-${post.id}">${post.like.length}</p>
        </div>
      </div>
    `;

  const likeImage = templatePost.querySelector(".img-like");
  const likeCounter = templatePost.querySelector(`#like-${post.id}`);
  let arrLike = post.like.length;
  const buttonLike = templatePost.querySelector(".button-like");

  buttonLike.addEventListener("click", async (e) => {
    e.preventDefault();
    if (!post.like.includes(currentUser.uid)) {
      like(post.id, currentUser.uid);
      post.like.push(currentUser.uid);
      arrLike += 1;
      likeCounter.textContent = arrLike;
      likeImage.setAttribute("src", "./images/liked.png");
    } else {
      const likeUser = post.like.indexOf(currentUser.uid);
      dislike(post.id, currentUser.uid);
      post.like.splice(likeUser, 1);
      arrLike -= 1;
      likeCounter.textContent = arrLike;
      likeImage.setAttribute("src", "./images/like.png");
    }
  });

  function checkLikes() {
    if (post.like.includes(currentUser.uid)) {
      return "./images/liked.png";
    }
    return "./images/like.png";
  }

  return templatePost;
}

export function showPosts(homePage) {
  const showAllPosts = homePage.querySelector(".section-post");
  showAllPosts.innerHTML = "";
  getPosts().then((allPosts) => {
    allPosts.forEach((item) => {
      const postElement = publishingPosts(item);
      showAllPosts.prepend(postElement);
    });
  });
}

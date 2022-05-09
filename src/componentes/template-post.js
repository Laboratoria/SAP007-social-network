import { dislike, like } from "../lib/firestore-firebase.js";
import { auth } from "../lib/config-firebase.js";

export function publishingPosts(post) {
  const currentUser = auth.currentUser;
  console.log(currentUser)
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
          <button class="button-like" id="like">
           <img id="img-like" class="img-like" src=${checkLikes()} alt="botão de like"/>
          </button>
          <p class="total-likes" id="like-${post.id}">${post.likes.length}</p>
        </div>
      </div>
    `;

  buttonLike.addEventListener('click', async (e) => {
    e.preventDefault();
    if (!post.likes.includes(currentUser.uid)) {
      like(post.id, currentUser.uid);
      post.likes.push(currentUser.uid);
      arrLike += 1;
      likeCount.textContent = arrLike;
      likeImage.setAttribute("src", "./images/liked.png");
    } else {
      const likeUser = post.likes.indexOf(currentUser.uid);
      dislike(post.id, currentUser.uid);
      post.likes.splice(likeUser, 1);
      arrLike -= 1;
      likeCount.textContent = arrLike;
      likeImage.setAttribute("src", "./images/like.png");
    }
  });

  function checkLikes() {
    if (post.likes.includes(currentUser.uid)) {
      return "./images/liked.png";
    }
    return "./images/like.png";
  }



  return templatePost
}


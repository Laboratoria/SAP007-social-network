import { auth } from "../lib/authentication.js";
import { like, dislike } from "../lib/firestore.js";

export default function card(item) {
  const publications = document.createElement("div");
  publications.setAttribute("class", "publicated");
  const mold = `
    <h3 class="published-title">${item.title}</h3>
    <p class="published-text">${item.text}</p>
    <div class="user-name">${item.user}</div>
    <div class="container-like">
      <button class="buttons-like" id="like">
      <img id="imgLike" class="img-like" src="./images/like.png" alt="button-like"/>
      </button>
      <p class="likes" id="like-${item.id}">${item.likes.length}</p>
    </div>
  `;
  publications.innerHTML = mold;

  const buttonsLike = publications.querySelector(".buttons-like");
  const likeImage = publications.querySelector(".img-like");
  const likeCount = publications.querySelector(`#like-${item.id}`);
  let arrLike = item.likes.length;


  buttonsLike.addEventListener("click", async () => {
    const user = auth.currentUser;
    if (!item.likes.includes(user.uid)) {
      item.likes.push(user.uid);
      arrLike += 1;
      likeCount.textContent = arrLike;
      likeImage.setAttribute("src", "./images/icon-like.jpg");
    } else {
      const likeUser = item.likes.indexOf(user.uid);
      dislike(item.id, user.uid);
      item.likes.splice(likeUser, 1);
      arrLike -= 1;
      likeCount.textContent = arrLike;
      likeImage.setAttribute("src", "./images/like.png");
    }
  });

  return publications;
}

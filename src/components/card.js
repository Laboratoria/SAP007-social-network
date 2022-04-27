import { auth } from "../lib/authentication.js";
import { like } from "../lib/firestore.js";

export default (item, uid) => {
  const publications = document.createElement("div");
  publications.setAttribute("class", "publicated");
  const mold = `
    <h3 class="published-title">${item.title}</h3>
    <p class="published-text">${item.text}</p>
    <div class="user-name">${item.uid}</div>
    <div>
      <button class="buttons-like" id="like">like</button>
      <a href=""class=""edit">editar</a>
      <a href=""class="delete">deletar</a>
      <p class="likes">${item.likes.length}</p>
    </div>
    `;
  publications.innerHTML = mold;

  const buttonsLike = publications.querySelector(".buttons-like");
  // const numLikes = publications.querySelector(".likes");

  buttonsLike.addEventListener("click", async () => {
    const user = auth.currentUser;
    await like(item.id, user.uid);
  });

  return publications;
};

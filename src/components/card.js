import { auth } from "../lib/authentication.js";
import { deletePost, like } from "../lib/firestore.js";

export default function card(item) {
  const publications = document.createElement("div");
  publications.setAttribute("class", "publicated");
  const mold = `
    <h3 class="published-title">${item.title}</h3>
    <p class="published-text">${item.text}</p>
    <div class="user-name">${item.user}</div>
    <div>
      <button class="buttons-like" id="like">like</button>
      <a href=""class=""edit">editar</a>
      <button class="delete" type="submit" id="delete">deletar<button>
      <p class="likes"></p>
    </div>
    <span class="edition"></span>
  `;
  publications.innerHTML = mold;

  const deleteAction = publications.querySelector(".delete");
  deleteAction.addEventListener("click", async (e) => {
    //console.log("clicou");
    e.preventDefault();
    await deletePost(item.id);
    publications.remove();
  });

  // const editAction = document.querySelector(".edit");
  // const edition = document.querySelector(".edition");
  // editAction.addEventListener("click", async(e) => {
  // e.preventDefault();
  // edition.innerHTML += `
  // <textarea class="title" type="text" placeholder="Título"></textarea>
  // <textarea class="text" type="text" placeholder="Texto" wrap="hard"></textarea>
  // <button class="btn-post" type="submit">Atualizar</button>
  // `;
  // const id = await editPost()
  // });
  // const buttonsLike = publications.querySelector(".buttons-like");
  // // const numLikes = publications.querySelector(".likes");

  // buttonsLike.addEventListener("click", async () => {
  // const user = auth.currentUser;
  // await like(item.id, user);
  // });
  return publications;
}

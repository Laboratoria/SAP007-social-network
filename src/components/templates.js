import { deletePost, editPost } from "../lib/firestore.js";
import profile from "../pages/profile.js";

export default function card(item) {
  const publications = document.createElement("div");
  publications.setAttribute("class", "publicated");
  const mold = `
    <h3 class="published-title">${item.title}</h3>
    <p class="published-text">${item.text}</p>
    <div class="user-name">${item.user}</div>
    <div>
      <button class="edit">editar</button>
      <button class="delete" type="submit" id="delete">deletar</button>
    </div>
    <span class="edition"></span>
  `;
  publications.innerHTML = mold;

  const deleteAction = publications.querySelector(".delete");
  deleteAction.addEventListener("click", async (e) => {
    e.preventDefault();
    await deletePost(item.id);
    publications.remove();
  });

  const editAction = publications.querySelector(".edit");
  const edition = publications.querySelector(".edition");
 
  editAction.addEventListener("click", async (e) => {
    const valueTitle = document.getElementById("title");
    const valueText = document.getElementById("text");
    e.preventDefault();
    await editPost(item.id, valueTitle, valueText);
    edition.innerHTML += `
    <textarea class="title" id="title"type="text" placeholder="Título">${item.title}</textarea>
    <textarea class="text" id="text"type="text" placeholder="Texto" wrap="hard">${item.text}</textarea>
    <button class="btn-update" id="update"type="submit">Atualizar</button>
    `;
    const updatePost = document.getElementById("update")
    updatePost.addEventListener("click", (e)=> {
      e.preventDefault();
      // const valueTitle = publications.querySelector(".title").value;
      // const valueText = publications.querySelector(".text").value;
      // item.title = valueTitle;
      // item.text = valueText;
    })  
  });

  return publications;
}

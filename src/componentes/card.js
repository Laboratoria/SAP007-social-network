import { auth } from "../lib/auth-firebase.js";
import { modalEditPost } from "../componentes/modal.js"
import { deletePost, like, dislike } from "../lib/config-firestore.js";

export const criarCard = (post) => {

  const divCard = document.createElement("div")
  divCard.innerHTML = `
  <div class="divPost">
    <div class="tItulo">${post.titulo}</div><br>
    <h4 class="post-itens">Autor(a): </h4>
  
    <div id="data${post.id}" class="date">${post.date}
    </div> <hr><br>
    <div id="postText-${post.id}" class="post">${post.post}</div>
    <div class="linePost"></div><br>
    <hr>
    <div class="like-container" id="like">
    <button id="${post.id}" class="like">
    <i class="fa-brands fa-gratipay"></i>
    </button>  
    </div>
    <div>
        <button class='modal-buttons' id='modal-btn-edit'><img class='icon-img' src="../../img/editar.png" width="36" height="36"></button>
        <button id="delete${post.id}" class="iconDelete">
  <i class="fa-regular fa-trash-can"></i>
  </button>
      </div>
        </div>
`;

    const btnEditPost = divCard.querySelector("#modal-btn-edit");
    btnEditPost.addEventListener("click", (e) => {
      e.preventDefault();
      divCard.appendChild(modalEditPost(post, divCard));
    });

  const btnHeart = divCard.querySelector(".like");

  btnHeart.addEventListener("click", () => {
    if (btnHeart.style.color == "red") {
      dislike(post.id, auth.currentUser.email)
      btnHeart.style.color = "black"
    } else {
      like(post.id, auth.currentUser.email)
      btnHeart.style.color = "red"
    }
  })

  const buttonDelete = divCard.querySelector(".iconDelete");
  buttonDelete.addEventListener("click", () => {
    deletePost(post.id);
    divCard.remove();
  });

  return divCard
}
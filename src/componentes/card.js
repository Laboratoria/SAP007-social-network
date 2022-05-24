import { getUser, auth } from "../../lib/auth-firebase.js";
//import { getPosts, like, dislike } from "../lib/config-firestore.js";
import { modalEditPost } from "../componentes/modal.js"
const getUserEmail = getUser();

export const criarCard = (post) => {

  const divCard = document.createElement("div")
  divCard.innerHTML = `
  <div class="divPost">
    <div class="tItulo">${post.titulo}</div><br>
    <h4 class="post-itens">Autor(a): </h4>
  
    <div id="data${post.id}" class="date">${post.date}
    </div> <hr><br>
    <div class="post">${post.post}</div>
    <div class="linePost"></div><br>
    <hr>
    <div class="like-container" id="like">
    <button id="${post.id}" class="like">
    <i class="fa-brands fa-gratipay"></i>
    </button>  
    </div>
    <div>
        <button class='modal-buttons' id='modal-btn-edit'><img class='icon-img' src="../../img/editar.png" width="36" height="36"></button>
        <button class='modal-buttons'  id='modal-btn-delete'><img class='icon-img' src='../../img/excluir.png' width="36" height="36"></button>   
      </div>
        </div>
`;

    /*const deletePost = divCard.querySelector("#delete-post");
  
    deletePost.addEventListener("click", (e) => {
      e.preventDefault();
      divCard.appendChild(modalDeletePost(post, divCard));
    });*/
    const btnEditPost = divCard.querySelector("#modal-btn-edit");
    btnEditPost.addEventListener("click", (e) => {
      e.preventDefault();
      divCard.appendChild(modalEditPost(post, divCard));
    });

  const btnHeart = divCard.querySelector(".like");

  btnHeart.addEventListener("click", () => {
    if (btnHeart.style.color == "red") {
      btnHeart.style.color = "black"
    } else {
      btnHeart.style.color = "red"
    }
  })

  return divCard
}
import { auth } from "../lib/auth-firebase.js";
import { modalEditPost } from "../componentes/modal.js"
import { deletePost, like, dislike } from "../lib/config-firestore.js";

export const criarCard = (post) => {

  const divCard = document.createElement("div")
  divCard.innerHTML = `
  <div class="divPost">
    <div class="tItulo">${post.titulo}</div><br>   
      <h4 class="post-itens">Autor(a):${post.userEmail} </h4>
  
    <div id="data${post.id}" class="date">${post.date}
    </div> 
    <div id="postText-${post.id}" class="post">${post.post}</div>
      <div class="linePost"></div><br>
    <div class="likeContainer containerBtn" id="like">
      <button id="${post.id}" class="like iconBtn">
    <i class="fa-brands fa-gratipay"></i> 
    <label id="contlikes" class="contlikes">${post.likes.length}</label>
    </button>  
        <button class='iconLike iconBtn' id='modal-btn-edit'>
          <i class="fa-solid fa-pencil"></i>
        </button>
        <button id="delete${post.id}" class="iconDelete iconBtn">        
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
      <hr><br>
        </div>
`;

  const btnEditPost = divCard.querySelector("#modal-btn-edit");
  btnEditPost.addEventListener("click", (e) => {
    e.preventDefault();
    divCard.appendChild(modalEditPost(post, divCard));
  });

  const btnHeart = divCard.querySelector(".like");
  let contLike = divCard.querySelector("#contlikes");

  btnHeart.addEventListener("click", () => {
    if (btnHeart.style.color == "red") {
      dislike(post.id, auth.currentUser.email)
      btnHeart.style.color = "black";
      const addContLike = Number(contLike.innerHTML) - 1;
      contLike.innerHTML = addContLike;
    } else {
      like(post.id, auth.currentUser.email)
      btnHeart.style.color = "red"
      const addContLike = Number(contLike.innerHTML) + 1;
      contLike.innerHTML = addContLike;
    }
  })

  const buttonDelete = divCard.querySelector(".iconDelete");
  buttonDelete.addEventListener("click", () => {
    deletePost(post.id);
    divCard.remove();
  });

  return divCard
}
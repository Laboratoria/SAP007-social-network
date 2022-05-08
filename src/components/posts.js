import { likePost, dislikePost } from "../lib/firestore.js";
import { auth } from "../configs/config.firebase.js";
import { modalEditPost, modalDeletePost, } from "../components/modal.js";
import { getPosts } from "../lib/firestore.js";

export function postComponent(postObj) {
  const userId = auth.currentUser.uid;
  const isAuthor = postObj.user === userId;
  // const postId = postObj.id;

  const postsContainer = document.createElement("div");
  postsContainer.classList.add("new-post-writePost");

  const templatePost = `
    <div class= "post-container">
      <p>${postObj.date}</p>
        <ol class="posts">
          <li id="#title-${postObj.id}"> <b>Titulo:${postObj.title}</b>
            <p>Autor(a):${postObj.author}</p> 
            <p id="#recipe-${postObj.recipe}">Receita ${postObj.recipe}</p>
          </li>
        </ol>
      
      <div class='post-interations'>
      <button id="cookie-btn"> Curtir </button>

      <p class="num-likes">Likes:<span id="numLikes-${postObj.id}">${postObj.likes.length}</span></p>
     
     ${isAuthor ? `

      <button id="pencil-btn">Editar</button>
      <button id="trash-btn">Apagar</button> 
      <span id="edit-post"></span>
      <span id="delete-post"></span>
      ` : ""}
  </div>  
    </div>
    `;
  postsContainer.innerHTML = templatePost;

  /// MODAIS DE DELETAR E EDITAR

  if (isAuthor) {
    const editPost = postsContainer.querySelector("#pencil-btn");
    editPost.addEventListener("click", (e) => {
      e.preventDefault();
      postsContainer.appendChild(modalEditPost(postObj, postsContainer));
    });

    const deletePost = postsContainer.querySelector("#trash-btn");
    deletePost.addEventListener("click", (e) => {
      e.preventDefault();
      postsContainer.appendChild(modalDeletePost(postObj, postsContainer));
    });
  }

  ///FUNÇÃO LIKE
  const likeButton = postsContainer.querySelector("#cookie-btn");
  const countLikes = postsContainer.querySelector(`#numLikes-${postObj.id}`);
  const postLike = postObj.likes;
  let arrayLike = postLike.length;

  likeButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const postLike = postObj.likes;
    console.log(postLike);
    if (!postLike.includes(auth.currentUser.email)) {
      likePost(postObj.id, auth.currentUser.email);
      postLike.push(auth.currentUser.email);
      arrayLike += 1;
      countLikes.textContent = arrayLike;
    } else {
      const likeUser = postLike.indexOf(auth.currentUser.email);
      dislikePost(postObj.id, auth.currentUser.email);
      postLike.splice(likeUser, 1);
      arrayLike -= 1;
      countLikes.textContent = arrayLike;
    }
  });

  console.log(likePost(postObj.id, auth.currentUser.email));
  getPosts();
  return postsContainer;
}




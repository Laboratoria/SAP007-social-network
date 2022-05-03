import { auth } from "../configs/config.firebase.js";
//import { checkLogin } from "../lib/auth.js";
import { getPosts } from "../lib/firestore.js";
import { likePost } from "../lib/firestore.js";

export function postComponent(postObj) {
  // const curtida = postObj.like;
  const isPostOwner = postObj.userEmail === auth.currentUser.email;
  const postsContainer = document.createElement("div");
  postsContainer.classList.add("new-post-writePost");

 
  const templatePost = `
    <div class= "post-container">
      <p>${postObj.date}</p>
        <ol class="posts">
          <li> <b>Titulo:${postObj.title}</b>
            <p>Receita por:${postObj.author}</p> 
            <p>
            Receita ${postObj.recipe}
            </p>
          </li>
        </ol>
      
      <div class='post-interations'>

      <button id="cookie-btn"> Curtir </button>

      <p id="num-likes" class="num-likes">Likes: ${postObj.likes.length}</p>

      <button id="pencil-btn">Editar</button>
      <button id="trash-btn">Apagar</button> 
      </div>  
    </div>
    `;
  const likeButton = postsContainer.querySelector("#cookie-btn");
  const countLikes = postsContainer.querySelector("#num-likes");
console.log(likeButton);

  //window.onload = function () {
    //const getUserEmail =checkLogin();
    likeButton.addEventListener("click", (e) => {
     console.log('foi!');

      // const postLike = postObj.likes;
      // if (postLike.includes(auth.currentUser.email)) {
      //   likePost(postObj.id, auth.currentUser.email).then(() => {
      //     postLike.push(auth.currentUser.email);
      //     const addLikeNum = Number(countLikes.innerHTML) + 1;
      //     countLikes.innerHTML = addLikeNum;
      //   });
      // } else {
      //   dislike(postObj.id, auth.currentUser.email).then(() => {
      //     postLike.splice(auth.currentUser.email);
      //     const addLikeNum = Number(countLikes.innerHTML) - 1;
      //     countLikes.innerHTML = addLikeNum;
      //   });
      // }
     
    });
  // };

  postsContainer.innerHTML = templatePost;
  getPosts();

  return postsContainer;
}

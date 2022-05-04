
import { getPosts, deletePost, editPost, likePost } from "../lib/firestore.js";
import { auth } from "../configs/config.firebase.js";
//import { checkLogin } from "../lib/auth.js";

export function postComponent(postObj) {
  // const curtida = postObj.like;
  const isPostOwner = postObj.userEmail === auth.currentUser.email;
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
      <p id="num-likes" class="num-likes">Likes: ${postObj.likes.length}</p>

      <button id="pencil-btn">Editar</button>
      <button id="trash-btn">Apagar</button> 

      </div>  
      
      <span id="edit-post"></span>
      <span id="delete-post"></span>
    </div>
    `;
  
  postsContainer.innerHTML = templatePost;

  const likeButton = postsContainer.querySelector("#cookie-btn");
  const deletePostBtn = postsContainer.querySelector('#trash-btn');
  const deletePostSpan = postsContainer.querySelector('#delete-post');
  const editPostBtn = postsContainer.querySelector('#pencil-btn');
  const editPostSpan = postsContainer.querySelector('#edit-post');
  const title = postsContainer.querySelector(`#title-${postObj.id}`);
  const recipe = postsContainer.querySelector(`#recipe-${postObj.id}`);

  deletePostBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    deletePostSpan.innerHTML += `
    <h1>Tem certeza que quer excluir essa receita?</h1>
    <button class="span-delete-btn" id="yes-btn" type="submit">Excluir</button>
    <button class="span-delete-btn" id="no-btn" type="submit">Cancelar</button>
    `;
    
    const confirmBtn = document.getElementById('yes-btn');
    const declineBtn = document.getElementById('no-btn');

    confirmBtn.addEventListener('click', (e) => {
      e.preventDefault();
      deletePost(postObj.id);
      postsContainer.remove();
    })
    declineBtn.addEventListener('click', (e) => {
      deletePostSpan.innerHTML = '';
    })
  });

  editPostBtn.addEventListener('click', (e) => {
    e.preventDefault();
    editPostSpan.innerHTML += `
    <input class="title-edition" id="title-edit" type="text" placeholder="Título">${postObj.title}
    <textarea class="recipe-edition" id="recipe-edit" type="text" placeholder="Receita" wrap="hard">${postObj.recipe}</textarea>
    <button class="btn-update" id="cancel-update-btn" type="submit">Cancelar</button>
    <button class="btn-update" id="update-btn" type="submit">Atualizar</button>
    `;
  
    //   const titleValue = document.querySelector('#title-edit');
    //   const recipeValue = document.querySelector('#recipe-edit');
    //   const updatedPost = document.querySelector('#update-btn');
    //   // const cancelUpdate = document.querySelector('#cancel-update-btn');

    //   updatedPost.addEventListener('click', (e) => {
    //     (e).preventDefault();
    //     editPost(postObj.id, titleValue.value, recipeValue.value);
    //     title.textContent = titleValue.value;
    //     recipe.textContent = recipeValue.value;
    //     editPostSpan.innerHTML = '';
    //   });
    });

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

  getPosts();

  return postsContainer;
}

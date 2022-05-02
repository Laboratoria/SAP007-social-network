import { getPosts } from "../lib/firestore.js";
import { likePost } from "../lib/firestore.js";

export function postComponent(postObj) {
  const postsContainer = document.createElement("div");
  postsContainer.classList.add("new-post-writePost");

  const templatePost = `
    <div class= "post-container">
      <p>${postObj.date}</p>
        <ol class="posts">
          <li> <b>Titulo:${postObj.title}</b>
            <p>Receita por:${postObj.author}</p> 
            <p>Receita ${postObj.recipe}</p>
          </li>
        </ol>
      
      <div class='post-interations'>
      <button id="cookie-btn"> Curtir </button>

      <button id="pencil-btn">Editar</button>
      <button id="trash-btn">Apagar</button> 
      </div>  
    </div>
    `;
  const likeButton = postsContainer.querySelector("#cookie-btn");
  // const editPost = postsContainer.querySelector('#pencil-btn');
  // const deletePost = postsContainer.querySelector('#trash-btn');
  // deletePost.forEach((icon) => {
  //     icon.addEventListener('click', async(event) => {
  //         event.preventDefault();
  //         try {
  //             swal({
  //                 text:'Tem certeza que quer excluir essa receita?',
  //             });
  //             await deletePosts(event.target.dataset.id);
  //         } catch (error) {
  //             console.error('error', error);
  //         }
  //     });
  // });
  postsContainer.innerHTML = templatePost;
  getPosts();

  likeButton.addEventListener("click", (e) => {
    const postLike = post.likes;
    if (!postLike.includes(getUserEmail)) {
      like(post.id, getUserEmail).then(() => {
        postLike.push(getUserEmail);
        const addLikeNum = Number(countLikes.innerHTML) + 1;
        countLikes.innerHTML = addLikeNum;
      });
    } else {
      dislike(post.id, getUserEmail).then(() => {
        postLike.splice(getUserEmail);
        const addLikeNum = Number(countLikes.innerHTML) - 1;
        countLikes.innerHTML = addLikeNum;
      });
    }
  });

  return postsContainer;
}

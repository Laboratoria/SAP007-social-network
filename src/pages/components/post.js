import { auth } from '../../configs/authentication.js';
import {
  likePost,
  dislikePost,
  getFunctionDelet,
} from '../../configs/firestore.js';

export function createCardPost(post) {
  const seeWichPage = window.location.hash == "#userprofile";

  const containerPost = document.createElement('div');
  const templateCardPost = `
    <div class="card">
      <p class="date-card">Postado em:${post.date}</p}
      <section class="post-infos">
        <p class="write-message">${post.message}</p>    
        <p class="author">${post.displayName}</p>
        <button class="button-heart">
          <i class="fa fa-heart like-btn" id="like-button"></i>
         
          <span class="button-heart-text" id="number-of-likes" data-number="${post.likes}">${post.likes.length}</span>
        </button> 
        ${seeWichPage ? `
        <button class="button-edit-post" id="button-edit-post">
					<i class="fa fa-pencil"></i>
				</button>
				<button class="button-delete-post" id="button-delete-post">	
					<i class="fa fa-trash"></i>
				</button>` : ""}	
      </section>
    </div>    
  `;

  containerPost.innerHTML = templateCardPost;

  const likeButton = containerPost.querySelector('.button-heart');
  const numberOfLikes = containerPost.querySelector('#number-of-likes');
 
  likeButton.addEventListener('click', (e) => {
    const postLike = post.likes;
    const heartButton = e.currentTarget.querySelector('.like-btn');
    if (!postLike.includes(auth.currentUser.uid)) {
      console.log(post.id);
      likePost(post.id, auth.currentUser.uid)
        .then(() => {
          postLike.push(auth.currentUser.uid);
          const sumNumLikes = Number(numberOfLikes.innerHTML) + 1;
          numberOfLikes.innerHTML = sumNumLikes;
          console.log(numberOfLikes);
          heartButton.classList.add('liked');
        });
    } else {
      dislikePost(post.id, auth.currentUser.uid)
        .then(() => {
          const indexOfUser = postLike.indexOf(auth.currentUser.uid);
          postLike.splice(indexOfUser, 1);
          const reduceNumLikes = Number(numberOfLikes.innerHTML) - 1;
          numberOfLikes.innerHTML = reduceNumLikes;
          heartButton.classList.remove('liked');
        });
    }
  });

  if (seeWichPage) {
    const deleteButton = containerPost.querySelector("#button-delete-post");
    const editButton = containerPost.querySelectorAll("#button-edit-post");

    deleteButton.addEventListener("click", async () => {
      const confirmWantDelete = window.confirm("Caro poeta, deseja mesmo deletar esse poema?")
      if(!confirmWantDelete){
        return;
      } else{
        console.log(post.id)
        await getFunctionDelet(post.id)
        containerPost.remove();
      }  
    });
  }  

  return containerPost;
}

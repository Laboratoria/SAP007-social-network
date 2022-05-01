import { auth } from '../../configs/authentication.js';
import {
  likePost,
  dislikePost,
  getFunctionDelet,
  editAPost,
} from '../../configs/firestore.js';

export function createCardPost(post) {
  const seeWichPage = window.location.hash === '#userprofile';
  const colorLike = post.likes.includes(auth.currentUser.uid);

  const containerPost = document.createElement('div');
  const templateCardPost = `
    <div class="card">
      <section class="post-infos">
      <p class="date-card">${post.date}</p>
        <p class="write-message">${post.message[0].toUpperCase() + post.message.substr(1)}</p>    
        <p class="author">${post.displayName}</p>
        <div class="container-buttons">  
          <button class="button-heart">
            <i class="fa fa-heart like-btn ${colorLike ? 'liked' : ''}" id="like-button"></i>
            <span class="button-heart-text" id="number-of-likes" data-number="${post.likes}">${post.likes.length}</span>
          </button> 
          ${seeWichPage ? `
          <div id="modal-delete" class="modal-delete">
          </div>
          <button class="button-edit-post" id="button-edit-post">
					  <i class="fa fa-pencil"></i>
				  </button>
				  <button class="button-delete-post" id="button-delete-post">	
					  <i class="fa fa-trash"></i>
				  </button>` : ''}
        </div>  	
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
      likePost(post.id, auth.currentUser.uid)
        .then(() => {
          postLike.push(auth.currentUser.uid);
          const sumNumLikes = Number(numberOfLikes.innerHTML) + 1;
          numberOfLikes.innerHTML = sumNumLikes;
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
    const deleteButton = containerPost.querySelector('#button-delete-post');
    const editButton = containerPost.querySelector('#button-edit-post');
    const modalAlert = containerPost.querySelector('#modal-delete');

    deleteButton.addEventListener('click', async () => {
      const confirmAlertDelete = () => {
        const alertContainer = document.createElement('div');

        const templateConfirmDelete = `
          <p class='message'>
            Caro poeta, deseja mesmo deletar esse poema?
          </p>
          <button class="answer-alert" id="yes-alert">Sim
          </button>
          <button class="answer-alert" id="no-alert">Não
          </button>
        `;

        modalAlert.innerHTML = templateConfirmDelete;
<<<<<<< HEAD
        modalAlert.style.display = 'block';
=======
        modalAlert.style.visibility = 'block';
>>>>>>> bf0be9fad9ff87194f5c802e9e0235420afe2e8d
        deleteButton.style.visibility = 'hidden';
        editButton.style.visibility = 'hidden';

        const hideAlert = modalAlert.querySelector('#no-alert');
        const confirmAlert = modalAlert.querySelector('#yes-alert');

        confirmAlert.addEventListener('click', async () => {
          await getFunctionDelet(post.id);
          containerPost.remove();
        });

        hideAlert.addEventListener('click', () => {
          modalAlert.style.display = 'none';
          deleteButton.style.visibility = 'visible';
          editButton.style.visibility = 'visible';
        });

        return alertContainer;
      };

      confirmAlertDelete();
    });

    function editPost() {
      const editContainer = document.createElement('div');
      editContainer.classList.add('edit-box');

      const templateEditPost = `
        <textarea class="textarea" id="textarea">${post.message}</textarea>
        <button class="edit-buttons" id="save-edit">
          <i class="fa fa-check"></i>
        </button>
        <button class="edit-buttons" id="cancel-edit">
          <i class="fa fa-xmark"></i>
        </button>  
      `;

      editContainer.innerHTML = templateEditPost;
      return editContainer;
    }

    editButton.addEventListener('click', () => {
      containerPost.replaceWith(editPost(post));
      const saveEdit = document.querySelector('#save-edit');
      const cancelEdit = document.querySelector('#cancel-edit');
      const editedMessage = document.querySelector('#textarea');
      const editBox = document.querySelector('.edit-box');

      saveEdit.addEventListener('click', async () => {
        await editAPost(post.id, editedMessage.value);
        post.message = editedMessage.value;
        editBox.replaceWith(createCardPost(post));
      });

      cancelEdit.addEventListener('click', () => {
        editBox.replaceWith(createCardPost(post));
      });
    });
  }

  return containerPost;
}

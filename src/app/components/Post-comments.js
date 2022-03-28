import { addComment } from '../firebase/firebase-data.js';
import { auth } from '../firebase/firebase-auth.js';

export function NewComments(idPost) {
  const commentsDiv = document.createElement('div');

  const currentUser = auth.currentUser;

  const newComment = document.createElement('div');
  newComment.classList.add('newComment');

  const avatarDiv = document.createElement('div');
  avatarDiv.classList.add('avatarDiv');

  const avatarContainer = document.createElement('div');
  avatarContainer.classList.add('avatarContainer');
  const avatarImage = document.createElement('img');
  avatarImage.classList.add('avatarImage');
  // avatarImage.src = "./app/assets/user-img.jpg"
  avatarImage.src = auth.currentUser.photoURL;
  avatarContainer.append(avatarImage);
  avatarDiv.append(avatarContainer);

  const inputComment = document.createElement('textarea');
  inputComment.id = `comment_${idPost}`;
  inputComment.placeholder = 'Escribe un comentario...';
  inputComment.classList.add('postComment_input');

  const commentBtn = document.createElement('div');
  commentBtn.classList.add('commentBtnDiv');
  const commentIcon = document.createElement('span');
  commentIcon.classList.add('icon-send');
  commentIcon.classList.add('iconComment');

  commentBtn.append(commentIcon);

  commentBtn.addEventListener('click', async () => {
    const comment = document.getElementById(`comment_${idPost}`).value;
    if (comment !== '') {
      await addComment(currentUser, idPost, comment);
      window.location.hash = '#/';
    }
  });

  newComment.append(avatarDiv);
  newComment.append(inputComment);
  newComment.append(commentBtn);

  commentsDiv.append(newComment);

  return commentsDiv;
}

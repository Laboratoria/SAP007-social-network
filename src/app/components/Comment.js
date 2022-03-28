import {
  toggleComLikes,
  initListenerComLike,
} from '../firebase/firebase-data.js';
import { auth } from '../firebase/firebase-auth.js';
import { timeSince } from '../helpers/forms-validation.js';

export const Comment = (
  postId,
  com,
  abrirModalRemoveCom,
  setDataModalRemoveCom,
  abrirModalEditCom,
  setDataModalEditCom,
) => {
  const userId = auth.currentUser.uid;

  const container = document.createElement('div');
  container.classList.add('commentContainer');

  const avatarDiv = document.createElement('div');
  avatarDiv.classList.add('avatarDiv');
  const avatarCircle = document.createElement('div');
  avatarCircle.classList.add('commentAvatarCircle');
  const avatarImg = document.createElement('img');
  avatarImg.src = com.user_photo;
  avatarImg.classList.add('commentAvatar');

  avatarCircle.append(avatarImg);
  avatarDiv.append(avatarCircle);

  const likesDiv = document.createElement('div');
  likesDiv.classList.add('likesDiv');
  likesDiv.addEventListener('click', () => {
    toggleComLikes(postId, com.com_id);
  });
  const likesSpan = document.createElement('span');
  likesSpan.classList.add('icon-like');
  likesSpan.classList.add('likesIcon');
  const likesCounter = document.createElement('span');
  likesCounter.textContent = 'X';
  likesCounter.classList.add('likesCounter');
  likesCounter.id = `likeComCounter_${com.com_id}`;

  likesDiv.append(likesCounter);
  likesDiv.append(likesSpan);

  const commentDiv = document.createElement('div');
  commentDiv.classList.add('commentDiv');
  const commentInfo = document.createElement('div');
  commentInfo.classList.add('commentInfo');
  const commentName = document.createElement('h4');
  commentName.classList.add('commentName');
  commentName.textContent = `${com.user_name}`;
  const commentMessage = document.createElement('p');
  commentMessage.classList.add('commentMessage');
  commentMessage.textContent = `${com.message}`;
  const commentBottom = document.createElement('div');
  commentBottom.classList.add('commentBottom');
  const commentTime = document.createElement('span');
  commentTime.textContent = `${timeSince(com.date)}`;
  commentTime.classList.add('commentTime');

  commentBottom.append(commentTime);
  commentBottom.append(likesDiv);

  commentInfo.append(commentName);
  commentInfo.append(commentMessage);
  commentInfo.append(commentBottom);
  commentDiv.append(commentInfo);

  const optionsDiv = document.createElement('div');
  optionsDiv.classList.add('commentsOptionDiv');
  const optionsSpan = document.createElement('span');
  optionsSpan.classList.add('icon-options');
  optionsSpan.classList.add('commentOptionIcon');

  if (userId !== com.id_user) optionsSpan.classList.add('hiddenIcon');

  const handleClickEdit = () => {
    setDataModalEditCom(com, postId);
    abrirModalEditCom();
  };

  const handleClickRemove = () => {
    setDataModalRemoveCom(postId, com.com_id);
    abrirModalRemoveCom();
  };

  // eslint-disable-next-line no-use-before-define
  const { menuModalOptionsCom, toggleModalOptionsCom } = OptionListCom(
    handleClickRemove,
    handleClickEdit,
  );

  const optionsCom = menuModalOptionsCom;

  optionsSpan.addEventListener('click', () => {
    toggleModalOptionsCom();
  });

  optionsSpan.append(optionsCom);
  optionsDiv.append(optionsSpan);

  initListenerComLike(postId, com.com_id, (comDoc) => {
    // se podria cambiar cualquier campo de post pero en este caso solo necesitamos los likes

    // console.log(comDoc.data());

    const likes = comDoc.data().likes;

    if (likes.find((like) => like === userId)) {
      likesDiv.classList.add('selected');
    } else {
      likesDiv.classList.remove('selected');
      // console.log("no se encuentra");
    }

    likesCounter.textContent = `${likes.length}`;
  });

  container.append(avatarDiv);
  container.append(commentDiv);
  container.append(optionsDiv);

  return container;
};

function OptionListCom(onclickRemove, onClickEdit) {
  const modalOpciones = document.createElement('div');
  modalOpciones.classList.add('comOptions__dropdown', 'cerrar');

  const btnEditCom = document.createElement('button');
  btnEditCom.textContent = '✎';
  btnEditCom.classList.add('comOptionsBtn');

  const btnRemoveCom = document.createElement('button');
  btnRemoveCom.textContent = '✘';
  btnRemoveCom.classList.add('comOptionsBtn');

  modalOpciones.append(btnEditCom);
  modalOpciones.append(btnRemoveCom);

  btnRemoveCom.addEventListener('click', onclickRemove);
  btnEditCom.addEventListener('click', onClickEdit);

  const toggleModalOptionsCom = () => {
    modalOpciones.classList.toggle('cerrar');
  };

  return {
    menuModalOptionsCom: modalOpciones,
    toggleModalOptionsCom,
  };
}

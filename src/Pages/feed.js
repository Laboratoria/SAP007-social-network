import '../firebase/config-firebase.js';
import { logout } from '../firebase/authentication.js';
import {
  createPost,
  getPost,
  getCurrentUser,
  like,
  dislike,
  deletePost,
  editPost,
} from '../firebase/firestore.js';

export default async function feed() {
  // eslint-disable-next-line no-shadow
  const feed = document.createElement('div');
  const boxFeed = `
<div class="main-div">
<nav class="top-nav">
  <picture>
      <img class="logo" src="./img/logo-sem fundo.png" alt="logo">
  </picture>
  <picture>
    <a href="#home" id="logout">
      <img  class="button-logout" src="./img/logout.png" alt="Botão Sair">
    </a> 
  </picture>
</nav>
<div class= "line-header"> </div>
<div class = "container-publish">
<section class="publish" id="publish">
<textarea id="post-text" class="text-holder" placeholder="O que você quer compartilhar?"></textarea>
    <p id="alert-notification" class="error"></p>
    <div class= "btn-container">
      <button class="publish-btn" id="publish-btn">Publicar</button>
    </div>
</section>
</div>
<div id='posts-container' class="posts-container">  
</div>
  </div> 
  `;

  feed.innerHTML = boxFeed;

  const posts = feed.querySelector('#posts-container');
  const btnPosts = feed.querySelector('#publish-btn');
  const postText = feed.querySelector('#post-text');
  const msgAlert = feed.querySelector('#alert-notification');

  const convertDateObject = (dateObject) => {
    const date = dateObject.toDate();
    return date.toLocaleString('pt-br');
  };

  const convertTime = (timestamp) => {
    const dateObject = new Date(timestamp);
    const humanDateFormat = dateObject.toLocaleString();
    return humanDateFormat;
  };

  btnPosts.addEventListener('click', async () => {
    const control = posts.innerHTML;
    posts.innerHTML = '';
    if (postText.value === '') {
      msgAlert.innerHTML = 'Digite uma mensagem!';
    } else;
    await createPost(postText.value);
    posts.innerHTML += `
    <div class= "posts w-100" id= "posts" > 
    <p> ${getCurrentUser()}</p>
    <p>${convertTime(Date.now())}</p> 
    <p> ${postText.value} </p> 
    </div>
    `;
    posts.innerHTML += control;
    window.location.reload();
  });

  // trazendo posts do banco de dados pro feed e ordenando
  const getPostsFromDatabase = async () => {
    const elementPost = await getPost();
    const ordanatedPosts = elementPost.sort((a, b) => {
      const dateA = new Date(convertDateObject(a.date)).getTime();
      const dateB = new Date(convertDateObject(b.date)).getTime();
      if (dateA < dateB) return 1;
      return -1;
    });

    const currentUser = await getCurrentUser();
    ordanatedPosts.forEach(async (post) => {
      let postBtn;
      let postBtnEdit;
      if (post.userName === currentUser) {
        postBtn = '<img src="./img/trash-svg.svg">';
        postBtnEdit = '<img src="./img/page-edit.svg">';
      } else {
        postBtn = '';
        postBtnEdit = '';
      }

      feed.querySelector('#posts-container').innerHTML += `         
      <div class= "box-posts">
        <ul>
          <li>
          <p class="title-username">${post.userName}</p> 
          <p class="data">${convertDateObject(post.date)}</p> 
          <p contenteditable='false' class= "paragrafo" data-textId='${post.id}'>${post.textPost}</p>
          </li>
        </ul>
        
        <div class= "line"></div>
        <div class="icon">
         <button type="button" id="like-btn" class="btn-heart" data-post-id="${post.id}">
           <img src="./img/heart.svg" "id="btn-heart" class="btn-heart" width="20px"/>
         </button>
         <p id="num-likes" class="num-likes">${post.like.length}</p>  
         <button  type="button" class="button-edit" data-post-id="${post.id}">${postBtnEdit}</button>         
         <button type="button" class="button-delete" data-post-id="${post.id}">${postBtn}</button>          
        </div>
        <span class="confirm-delete"></span>        
      </div>       
     `;
    });

    const buttonEdit = feed.querySelectorAll('.button-edit');
    buttonEdit.forEach((edit) => {
      edit.addEventListener('click', (e) => {
        e.preventDefault();
        const postId = e.currentTarget.dataset.postId; // elemento do click + id do post/
        // eslint-disable-next-line max-len
        const selectEdit = elementPost.find((item) => item.id === postId); // pega primeiro elemento que encontrar que tem o id do post
        const paragrafo = feed.querySelector(`[data-textId="${postId}"]`);
        paragrafo.setAttribute('contenteditable', 'true'); // deixando editavel// 129- em que lugar do templante chamo o outro template
        e.currentTarget.parentElement.insertAdjacentHTML(
          'beforeend',
          ` 
        <section class='post-text'>
          <div class='saveAndCancelButtons'>
            <button data-save='true' class='save-button'>Salvar</button>
            <button data-cancel='true' class='cancel-button'>Cancelar</button>
          </div>
        </section>`,
        );

        e.currentTarget.parentElement
          .querySelector('.cancel-button')
          .addEventListener('click', (event) => {
            paragrafo.textContent = selectEdit.textPost; // voltando texto antigo
            paragrafo.setAttribute('contenteditable', 'false'); // bloqueio para não editar mais
            event.currentTarget.parentElement.parentElement.remove(); // removendo os icones
          });
        e.currentTarget.parentElement
          .querySelector('.save-button')
          .addEventListener('click', (event) => {
            paragrafo.setAttribute('contenteditable', 'false');
            editPost(postId, paragrafo.textContent);
            event.currentTarget.parentElement.parentElement.remove();
          });
      });
    });

    const deleteConfirm = feed.querySelector('.confirm-delete');
    const buttonDelete = feed.querySelectorAll('.button-delete');
    buttonDelete.forEach((button) => {
      button.addEventListener('click', async (e) => {
        e.preventDefault();
        const postId = e.currentTarget.dataset.postId;
        elementPost.find((item) => item.id === postId);

        const btnforReference = e.target.parentNode;
        e.target.parentNode.innerHTML = `
        <section class="for-remove">
        <p>Confirma a exclusão de seu poste?</p>
        
        <button class="btn-delete-confirm" id="yes">Sim</button>
        <button class="btn-delete-confirm" id="no">Não</button>
        </section>
        `;

        btnforReference.querySelector('.btn-delete-confirm').addEventListener('click', () => {
            const reference2 = btnforReference.parentNode.querySelector(
              `.button-delete[data-post-id=${postId}]`,
            );
            reference2.innerHTML = '';
            reference2.innerHTML = '<img src="./img/trash-svg.svg">';
          });
        
        const btnYes = document.getElementById('yes');
        const btnNo = document.getElementById('no');
        // eslint-disable-next-line no-shadow
        btnYes.addEventListener('click', async (e) => {
          e.preventDefault();
          await deletePost(postId);
          window.location.reload();
          // document.remove();
        });
        btnNo.addEventListener('click', () => {
          deleteConfirm.innerHTML = '';
        });
      });
    });

    const buttonsLike = feed.querySelectorAll('#like-btn');
    buttonsLike.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const selectPost = elementPost.find(
          (item) => item.id === e.currentTarget.dataset.postId,
        );
        const postLiked = selectPost.like;
        const likesCounter = e.currentTarget.nextElementSibling;

        const user = getCurrentUser();
        if (!postLiked.includes(user)) {
          like(selectPost.id, user).then(() => {
            postLiked.push(user);
            const likeNumber = Number(likesCounter.textContent) + 1;
            likesCounter.textContent = likeNumber;
          });
        } else {
          dislike(selectPost.id, user).then(() => {
            postLiked.splice(getCurrentUser);
            const likeNumber = Number(likesCounter.textContent) - 1;
            likesCounter.textContent = likeNumber;
          });
        }
      });
    });
  };

  await getPostsFromDatabase();

  const logoutUser = feed.querySelector('#logout');
  logoutUser.addEventListener('click', (e) => {
    e.preventDefault();
    logout().then(() => {
      window.location.hash = '#login';
    });
  });
  return feed;
}

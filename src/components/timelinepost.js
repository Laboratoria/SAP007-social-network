// import { removePost } from '../pages/feed/controll.js';

export function postElement(post) {
  const date = new Date(post.day.seconds * 1000);
  const timelinePost = document.createElement('div');
  timelinePost.setAttribute('class', 'box-post flex column');
  timelinePost.innerHTML = `
    <div class="informations-user flex">
      <div class="photo-name-post flex">
        <figure class="post-img-user" ><img class="post-img-user" src="${post.imgProfile}" alt="user"></figure>
        <div class="name-modifie-status flex column">
          <p class="post-name-user">${post.name}</p>
          <div class="message-modified-post">
            <p class="post-modified">${post.edit}</p>
          </div>
        </div>
      </div> 
      <nav class="nav-remove-modifie flex">
      </nav>
    </div>
    <div class="post-text-id flex column">
      <p class="post-date">${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}</p>
      <p class="post-text">${post.message}</p>
    </div>
    <div class="like-comment flex">
      <button class="post-like"><img src="" alt="">Gostei</button>
      <button class="post-comment"><img src="" alt="">Comentar</button>
    </div>`;

  // const navRemoveModifie = timelinePost.querySelector('.nav-remove-modifie');
  // pesquisar como pegar user do session
  // if (user.uid === post.userUid) {
  //   navRemoveModifie.innerHTML = `
  //         <button class="btn-config-post">
  //           <span id="balls" class="balls"></span>
  //         </button>
  //         <ul class="configs-post">
  //           <li value="${post.idPost}">Remover</li>
  //           <li><button data-id="${post.idPost}" class="modifie btn-config">Editar</button></li>
  //         </ul>`;
  //   const listNavRemoveModifie = timelinePost.querySelector('.configs-post');
  //   listNavRemoveModifie.addEventListener('click', (e) => {
  //     const { target } = e;
  //     console.log('oi');
  //     const dataId = target.dataset.id;
  //     removePost(dataId).then((a) => console.log(a)).catch((error) => console.log(error));
  //   });
  // }
  return timelinePost;
}

import { removePost } from '../pages/feed/controll.js';

export function postElement(post, uid) {
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

  const navRemoveModifie = timelinePost.querySelector('.nav-remove-modifie');
  // pesquisar como pegar user do session
  if (uid === post.userUid) {
    navRemoveModifie.innerHTML = `
      <button class="btn-config-post">
        <span id="balls" class="balls"></span>
      </button>
      <ul class="configs-post">
        <li><button value="remove" id="${post.idPost}" data-postremove="${post.idPost}" class="remove btn-config">Remover</button></li>
        <li><button value="modifie" id="${post.idPost}" data-post="${post.idPost}" class="modifie btn-config">Editar</button></li>
      </ul>`;
    const btnRemove = timelinePost.querySelector('[data-postremove]');
    btnRemove.addEventListener('click', (e) => {
      const { target } = e;
      // const target = e.target
      const dataPost = target.dataset.postremove;
      removePost(dataPost).then((a) => console.log(a)).catch((error) => console.log(error));
    });
  }
  return timelinePost;
}

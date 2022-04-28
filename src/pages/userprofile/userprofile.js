import {
  getUserPosts,
} from '../../configs/firestore.js';
import { auth } from '../../configs/authentication.js';
import header from '../components/header.js';

import { createCardPost } from '../components/post.js';

export default () => {
  const container = document.createElement('div');
  const templateUserProfile = `
    <main>
      <div class="card-user">
        <div class="imgIcone">
          <img class="icone-user" src="./img/profile-icone.png" alt="Meu Perfil">
        </div>
        <p class="item-user" id="name-user"></p>
        <p class="item-user" id="email-user"></p>
      </div>
      <section class="my-post" id="my-post">
      </section>
    </main>
  `;

  container.appendChild(header());
  container.innerHTML += templateUserProfile;

  const printDisplayName = container.querySelector('#name-user');
  const printEmail = container.querySelector('#email-user');

  printDisplayName.innerHTML = auth.currentUser.displayName;
  printEmail.innerHTML = auth.currentUser.email;

  const myPost = container.querySelector('#my-post');

  const showMyPosts = async () => {
    const id = auth.currentUser.uid;
    const myTimeline = await getUserPosts(id);
    myTimeline.filter((post) => {
      const postCard = createCardPost(post);
      return myPost.appendChild(postCard);
    });
  };
  showMyPosts();
  return container;
};

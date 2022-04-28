import {
  getUserPosts,
} from '../../configs/firestore.js';
import { auth } from '../../configs/authentication.js';
import { 
  header,
  logoutUser
} from '../components/header.js';
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

  const logoutButton = container.querySelector('#btn-exit');
  logoutButton.addEventListener('click', logoutUser)

  // função botão menu hamburguer
  const btnMobile = container.querySelector('#btn-mobile');
  btnMobile.addEventListener('click', toggleMenu);
  btnMobile.addEventListener('touchstart', toggleMenu);

  function toggleMenu(event) {
    if (event.type === 'touchstart') {
      event.preventDefault();
    }
    const nav = container.querySelector('#nav');
    nav.classList.toggle('active');
    const navActive = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', navActive);
    if (navActive) {
      event.currentTarget.setAttribute('aria-label', 'Close Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Open Menu');
    }
  }

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

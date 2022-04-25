import {
  getUserPosts,
} from '../../configs/firestore.js';
import { auth } from '../../configs/authentication.js';
import header from '../components/header.js';

export default () => {
  const container = document.createElement('div');
  const templateUserProfile = `
    <main>
      <div class="card-user">
        <img class="icone-user" src="./img/icone-perfil.jpg" alt="Meu Perfil">
        <p class="item-user" id="name-user"></p>
        <p class="item-user" id="email-user"></p>
      </div>
      <section class="my-post" id="my-post">
        <h1 class="my-poems">Meus Poemas:</h1>
      </section>
    </main>
  `;

  container.appendChild(header());
  container.innerHTML += templateUserProfile;

  const printDisplayName = container.querySelector('#name-user');
  const printEmail = container.querySelector('#email-user');

  printDisplayName.innerHTML = auth.currentUser.displayName;
  printEmail.innerHTML = auth.currentUser.email;

  // template do card do post
  function myPostsCard(text, displayName, date, id = '', likes = []) {
    const containerMyPost = document.createElement('div');
    const templateCardMyPost = `
	  	<div class="card">
		    <p class="date-card">Postado em:${date}</p}
		    <section class="post-infos">
			    <p class="write-message">${text}</p>    
			    <p class="author">${displayName}</p>
			    <button class="button-heart">
				    <i class="fa fa-heart like-btn" id="like-button"></i>
				    <input type="hidden" id="post-id" value="${id}">
				    <span class="button-heart-text" id="number-of-likes" data-number="${likes}">${likes.length}</span>
			    </button>  
				  <button class="button-edit-post" id="button-edit-post">
					  <i class="fa fa-pencil"></i>
				  </button>
				  <button class="button-delete-post" id="button-delete-post">	
					  <i class="fa fa-trash"></i>
				  </button>	
		    </section>
	    </div>    
    `;

    containerMyPost.innerHTML = templateCardMyPost;
    return containerMyPost;
  }

  const myPost = container.querySelector('#my-post');

  const showMyPosts = async () => {
    const id = auth.currentUser.uid;
    const myTimeline = await getUserPosts(id);
    myTimeline.filter((post) => {
      const postCard = myPostsCard(
        post.message,
        post.displayName,
        post.date,
        post.id,
        post.likes,
      );
      return myPost.appendChild(postCard);
    });
  };
  showMyPosts();

  return container;
};

import {
  getUserPosts,
  getFunctionDelet,
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

  /*// template do card do post
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
  }*/

  const myPost = container.querySelector('#my-post');

  const functionDelete = () => {
    Array.from(myPost).forEach((myPost) => {
      deleteBtn = myPost.querySelector('#button-delete-post')
      deleteBtn.addEventListener('click',async()=>{
        const confirmDeleted = window.confirm("Caro poeta, deseja mesmo deletar esse poema?")
        if(!confirmDeleted){
          return;
        }
        else{
          const getIdPost = container.querySelector(myPost.id)
          await getFunctionDelet(post.id)
          getIdPost.parentElement.remove()
          console.log(post.id)
        }
      })
    })
    //const myTimeline = await getUserPosts(id);
    //myTimeline.forEach((posts) => {
      //const getPostId = posts.id
      //console.log(getPostId)
   // })
  }
  functionDelete()

  const showMyPosts = async () => {
    const id = auth.currentUser.uid;
    const myTimeline = await getUserPosts(id);
    myTimeline.filter((post) => {
      const postCard = createCardPost(post)
      console.log(post)
      return myPost.appendChild(postCard);
    
    });
  };
  showMyPosts();

  //const deleteBtn = container.querySelectorAll("#button-delete-post")
  //const editBtn = container.querySelectorAll("#button-edit-post")

  console.log(myPost)
  console.log(typeof(myPost))

  const functionDelete = () => {
    Array.from(myPost).forEach((post) => {
      const deleteBtn = container.querySelector('#button-delete-post')
      deleteBtn.addEventListener('click', async() => {
        const confirmDeleted = window.confirm("Caro poeta, deseja mesmo deletar esse poema?")
        if(!confirmDeleted){
          return;
        }
        else{
          console.log(post.id)
          const getIdPost = container.getElementById(post.id)
          await getFunctionDelet(post.id)
          getIdPost.parentElement.remove()
          console.log(post.id)
        }
      })
    })
    //const myTimeline = await getUserPosts(id);
    //myTimeline.forEach((posts) => {
      //const getPostId = posts.id
      //console.log(getPostId)
   // })
  }
  functionDelete()



  return container;
};

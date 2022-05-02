import { getPosts } from '../lib/firestore.js';

export function postComponent(postObj) {
  const postsContainer = document.createElement('div');
  postsContainer.classList.add('new-post-writePost');

  const templatePost = `
    <div class= "post-container">
      <p>${postObj.date}</p>
        <ol class="posts">
          <li> <b>Titulo:${postObj.title}</b>
            <p>Receita por:${postObj.author}</p> 
            <p>Receita ${postObj.recipe}</p>
          </li>
        </ol>
      
      <div class='post-interations'>
          <a class="cookie-btn"><img src="assets/cookie.png" alt="ícone-cookie" class="cookie-icon"></img></a>
          <span class="cookies-number" id="num-cookies">10</span>
          <a class="pencil-btn"><img src="assets/pencil.png" alt="ícone-lápis" class="pencil-icon"></img></a>
          <a class="trash-btn"><img src="assets/trash.png" alt="ícone-lixo" class="trash-icon"></img></a>
      </div>  
    </div>
    `;
  // const cookie = postsContainer.querySelector('#cookie-btn');
  // const editPost = postsContainer.querySelector('#pencil-btn');
  // const deletePost = postsContainer.querySelector('#trash-btn');
  // deletePost.forEach((icon) => {
  //     icon.addEventListener('click', async(event) => {
  //         event.preventDefault();
  //         try {
  //             swal({
  //                 text:'Tem certeza que quer excluir essa receita?',
  //             });
  //             await deletePosts(event.target.dataset.id);
  //         } catch (error) {
  //             console.error('error', error);
  //         }
  //     });
  // });
  postsContainer.innerHTML = templatePost;
  getPosts();
  return postsContainer;
}

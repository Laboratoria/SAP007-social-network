// export default function showPosts() {
//   const allPosts = document.createElement('main');
//   allPosts.classList.add('posts-container');
//   allPosts.innerHTML = `
//     <main data-post id='${data.id}'>
//     <div class='username-recipe' data-name='${objetoPost.name}'>${objetoPost.name}</div>
//      <div class='data-post'>${objetoPost.data}</div>
//       <div class='post-feed' contenteditable="false">${objetoPost.post}</div>
//         <div id="modal-edit" class="modal-edit" data-item="open-edit">
//           <button type="button" data-item="cancel-edit" class="cancel-btn">Cancelar</button>
//           <button type="button" data-item="confirm-edit" class="confirm-btn">Salvar</button>
//         </div>

//     <div class='post-interactions'>
//       <span class = 'cookies'>
//         <i class="cookie-like-icon" data-item="cookie"></i>
//         <span class = 'cookie-number'>${cookie.length}</span>
//       </span>
// eslint-disable-next-line max-len
//       ${userPost ? '<i id="delete-modal" class="far fa-trash-alt" data-item="open-delete"></i>' : ''}
//       ${userPost ? '<i id="edit-modal" class="fas fa-pen" data-item="open-edit"></i>' : ''}

//     </div>
//     <div id="modal-msg" class="modal" data-item="open-modal">
//       <div class="modal-content">
//         <div class="modal-header">
//           <div class="modal-close" data-item="cancel">x</div>
//           <h1 class="modal-title">Excluir receita</h1>
//         </div>
//         <div class="modal-body">
//           <h2>Tem certeza que quer excluir essa receita?</h2>
//         </div>
//         <div class="modal-btn">
//           <button type="button" data-item="cancel" class="cancel-btn">Cancelar</button>
//           <button type="button" data-item="confirm" "class="confirm-btn">Deletar</button>
//         </div>
//         <div class="modal-footer"></div>

//       </div>
//     </div>

//     </main>
//     `;
// }

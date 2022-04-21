import '../firebase/firebaseconfig.js';
import { addPosts, posts } from '../firebase/firestoreconfig.js';
import { structuresPost } from './post.js';
import { sair, authentication } from '../firebase/authentication.js';

export const timeline = () => {
  const feed = document.createElement('div');
  const link = document.getElementById('stylePages');
  link.href = 'feed/feed.Css';
  const templateFeed = `
    <div class='post' >
      <textarea type='text'  class='text-post' data-ls-module='charCounter' maxlength='300' rows='10' placeholder='o que você está pensando?' required></textarea>
      <button type='submit' class='btn-post'>Postar</button>
    </div>
  
    <button class='btn-logout'>sair</button>
    <ul class='new-post'></ul>
    <ul  id= 'all-post' class='all-posts'></ul>
   
  `;

  feed.innerHTML = templateFeed;

  const message = feed.querySelector('.text-post'); // pegando menssagem do user
  const btnPost = feed.querySelector('.btn-post'); // botão de publicar
  const usersPosts = feed.querySelector('.new-post'); //  novos posts e colocar na lista
  const logout = feed.querySelector('.btn-logout'); // botão para sair

  btnPost.addEventListener('click', async (e) => {
    // pegar o click para printar o post na tela
    e.preventDefault();
    // eslint-disable-next-line max-len
    /*  veio das config firestore, function para  pegar a menssagem do usuário (recebe parâmetro de message, userEmail) */
    addPosts(message.value, authentication.currentUser.email).then((id) => {
      // functicon pronta
      const date = new Date().toLocaleString('pt-br'); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
      const item = {
        userEmail: authentication.currentUser.email, // para saber qual e-mail está postando
        message: message.value, // pega valor da menssagem
        date, // o horario e data
        id,
      };
      usersPosts.prepend(structuresPost(item)); // https://www.youtube.com/watch?v=mAfeyy2bLzI
      message.value = '';
    });
  });
  const userPosts = feed.querySelector('#all-posts'); // section guardar todos os posts

  const showingAllPosts = async () => {
    // mostrar posts na tela (do banco)
    const todosPosts = await posts(); // function vindo do config
    todosPosts.forEach((item) => { // passa pelos elementos do posts
      const infoOfPots = structuresPost(item); // pegando os items do post
      userPosts.prepend(infoOfPots); // incluindo um filho na lista 'os velhos'
    });
  };
  // função para o pessoa sair
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    sair().then(() => {
      window.location.hash = '';
    });
  });

  showingAllPosts();
  return feed;
};

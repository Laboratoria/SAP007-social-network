import '../firebase/firebaseconfig.js';
import { addPosts } from '../firebase/firestoreconfig.js';
import { structuresPost } from '../feed/post.js';
import { sair, authentication } from '../firebase/authentication.js';

export const timeline = () => {
  const feed = document.createElement('div');
  const templateFeed = `
    <form class="post" >
      <input type='text' class='e-mail' placeholder="e-mail"/>
      <textarea type="text"  class='text-post' data-ls-module="charCounter" maxlength="300" rows="10" placeholder="o que você está pensando?" required></textarea>
      <button type="submit" class="post">Postar</button>
    </form>
  
    <button class='sair'>sair</button>
    <ul class="new-post"></ul>
    <ul class="all-posts"></ul>
   
  `;

  feed.innerHTML = templateFeed;
  const form = feed.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addPosts(message.value);
  });

  return feed;
};

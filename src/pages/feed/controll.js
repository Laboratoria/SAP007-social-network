/* eslint-disable no-unused-vars */
// eslint-disable-next-line
import { collection, addDoc, onSnapshot, doc, query, where} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
import { bd } from '../../configurafirebase/configfirestore.js';

export function createPost(text, date) {
  // user, uid) {
  const post = addDoc(collection(bd, 'post'), {
    message: text,
    day: date,
    //   user: ,
    //   uid: ,
  });
  console.log('Document written with ID: ', post.text);
  return post;
}

export function controlPost(posts) {
  const unsubscribe = onSnapshot(collection(bd, 'post'), (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      console.log(change);
      if (change.type === 'added') {
        const post = change.doc.data();
        posts.insertAdjacentHTML('beforebegin', `
          <p class="date">${post.day}</p>
          <p class="p-text">${post.message}</p>
          `);
        // <div class="informations-user">
        //   <figure><img src="" alt=""></figure>
        //   <h1 class="name"></h1>
        //   <p class="modified"></p>
        // </div>
        // <div class="menu-config-posts">
        //   <nav class="nav-remove-modifie">
        //     <button class="remove"></button>
        //     <button class="modifie"></button>
        //   </nav>
        // </div>
        // <div class="post-text">
        //   <p class="p-text"></p>
        // </div>
        // <div class="like-comment">
        //   <button><img src="" alt=""></button>
        //   <button><img src="" alt=""></button>
        // </div>`;
        console.log(change.doc.data());
      }
      if (change.type === 'modified') {
        console.log(change.doc.data());
      }
      if (change.type === 'removed') {
        console.log(change.doc.data());
      }
    });
  });
  return unsubscribe;
}

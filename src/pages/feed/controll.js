/* eslint-disable no-unused-vars */
// eslint-disable-next-line
import { collection, addDoc, onSnapshot, doc, query, where, orderBy } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
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
  // const unsubscribe =
  const q = query(collection(bd, 'post'), orderBy('day'));
  onSnapshot(q, (snapshot) => {
    console.log(snapshot);
    snapshot.docChanges().forEach((change) => {
      console.log(change);
      if (change.type === 'added') {
        // eslint-disable-next-line dot-notation
        console.log(change.doc.id);
        const post = change.doc.data();
        const date = new Date(post.day.seconds * 1000);
        const timeline = document.createElement('div');
        timeline.setAttribute('class', 'box-post');
        timeline.innerHTML = `
        <div class="informations-user">
          <figure><img src="" alt=""></figure>
          <h1 class="name"></h1>
          <p class="modified"></p>
        </div>
        <div class="menu-config-posts">
          <nav class="nav-remove-modifie">
            <button class="remove"></button>
            <button class="modifie"></button>
          </nav>
        </div>
        <div class="post-text-id" data-postid="${change.doc.id}">
          <p class="date">${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</p>
          <p class="p-text">${post.message}</p>
        </div>
        <div class="like-comment">
          <button><img src="" alt=""></button>
          <button><img src="" alt=""></button>
        </div>`;
        console.log(change.doc.data(), timeline);
        posts.prepend(timeline);
      }
      if (change.type === 'modified') {
        console.log(change.doc.data());
        const post = change.doc.data();
        const timeline = document.createElement('div');
        timeline.setAttribute('class', 'box-post');
        timeline.innerHTML = `
          < p class="date" > ${post.day}</p >
            <p class="p-text">${post.message}</p>
        `;
        posts.prepend(timeline);
      }
      if (change.type === 'removed') {
        console.log(change.doc.data());
      }
    });
  });
}

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
  const orderFirestore = query(collection(bd, 'post'), orderBy('day'));
  onSnapshot(orderFirestore, (snapshot) => {
    console.log(snapshot);
    snapshot.docChanges().forEach((change) => {
      console.log(change);
      if (change.type === 'added') {
        // eslint-disable-next-line dot-notation
        console.log(change.doc.id);
        const post = change.doc.data();
        console.log(post.day);
        const date = new Date(post.day.seconds * 1000);
        const timeline = document.createElement('div');
        timeline.setAttribute('class', 'box-post flex');
        timeline.innerHTML = `
        <div class="informations-user flex">
          <div class="photo-name-post flex">
            <figure class="post-img-user" ><img src="" alt=""></figure>
            <div class="name-modifie-status flex">
              <p class="post-name-user">User</p>
              <div class="message-modified-post">
                <p class="post-modified"></p>
              </div>
            </div>
          </div> 
          <nav class="nav-remove-modifie flex">
            <button class="btn-config-post">
              <span id="balls" class="balls"></span>
            </button>
            <ul class="configs-post">
              <li><button data-postid="${change.doc.id}" class="remove btn-config"></button></li>
              <li><button data-postid="${change.doc.id}" class="modifie btn-config"></button></li>
            </ul>
          </nav>
        </div>
        <div class="post-text-id flex" data-postid="${change.doc.id}">
          <p class="post-date">${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}</p>
          <p class="post-text">${post.message}</p>
        </div>
        <div class="like-comment flex">
          <button class="post-like"><img src="" alt="">Gostei</button>
          <button class="post-comment"><img src="" alt="">Comentar</button>
        </div>`;
        console.log(change.doc.data(), timeline);
        posts.prepend(timeline);
      }
      if (change.type === 'modified') {
        console.log(change.doc.data());
        const post = change.doc.data();
        const date = new Date(post.day.seconds * 1000);
        const timeline = document.createElement('div');
        timeline.setAttribute('class', 'box-post flex');
        timeline.innerHTML = `
        <div class="informations-user flex">
        <div class="photo-name-post flex">
          <figure class="post-img-user" >
            <img src="" alt="">
          </figure>
          <div class="name-modifie-status flex">
            <p class="post-name-user">User</p>
            <div class="message-modified-post">
              <p class="post-modified">Editado</p>
            </div>
          </div>
          <nav class="nav-remove-modifie flex">
            <button class="btn-config-post">
              <span id="balls" class="balls"></span>
            </button>
            <ul class="configs-post">
              <li><button data-postid="${change.doc.id}" class="remove"></button></li>
              <li><button data-postid="${change.doc.id}" class="modifie"></button></li>
            </ul>
          </nav>
        </div>
        <div class="post-text-id flex" data-postid="${change.doc.id}">
          <p class="post-date">${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</p>
          <p class="post-text">${post.message}</p> 
        </div>
        <div class="like-comment flex">
          <button class="post-like"><img src="" alt="">Gostei</button>
          <button class="post-comment"><img src="" alt="">Comentar</button>
        </div>`;
        posts.prepend(timeline);
      }
      if (change.type === 'removed') {
        console.log(change.doc.data());
      }
    });
  });
}

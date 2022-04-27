/* eslint-disable no-alert */
/* eslint-disable no-console */
import {
  getFirestore,
  // doc,
  // setDoc,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
import { app } from '../configs/config.firebase.js';
// import writePostContainer from '../pages/writePost.js';

const db = getFirestore(app);

// const postsDb = {
//   title: titleContent,
//   author: authorContent,
//   recipe: recipeContet,
//   date: new Date(),
// };
// export const asyncFunction = async () => {
//   try {
//     await setDoc(doc(db, 'posts',), postsDb);
//   } catch (e) {
//     alert('Algo deu errado');
//   }
// };

export const createPost = async (textPost, userEmail) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      textPost,
      userEmail,
      date: new Date(),
    });
    console.log('Post escrito pelo ID: ', docRef.id);
  } catch (e) {
    console.error('Erro ao adicionar post: ', e);
  }
};

export async function getPosts() {
  const arrPost = [];
  const querySnapshot = await getDocs(collection(db, 'posts'));
  querySnapshot.forEach((doc) => {
    const postObj = doc.data();
    postObj.id = doc.id;
    console.log('Oie', postObj.date, postObj.title, postObj.author, postObj.recipe);
    arrPost.push(postObj);
  });
  return arrPost;
}
// console.log(getPosts());

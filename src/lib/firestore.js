import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  arrayUnion,
  doc,
  // deleteDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

import {auth} from "../configs/config.firebase.js";

const db = getFirestore();

export const createPost = async (textPost, userEmail) => {
  // const displayNameUser = auth.currentUser.displayName;
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      recipe: textPost,
      author: userEmail,
      date: new Date().toLocaleString('pt-br'),
      likes: [],
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};


export async function getPosts() {
  const arrPost = [];
  const sortingPosts = query(collection(db, 'posts'), orderBy('date', 'asc'));
  const querySnapshot = await getDocs(sortingPosts);
  querySnapshot.forEach((doc) => {
    const postObj = doc.data();
    postObj.id = doc.id;
    console.log('Oie', postObj.date, postObj.title, postObj.author, postObj.recipe);
    arrPost.push(postObj);
  });
  return arrPost;
}
console.log(getPosts());

export async function likePost(id, userEmail) {
  try {
    const postId = doc(db, "posts", id);
    return await updateDoc(postId, {
      likes: arrayUnion(userEmail),
    });
  } catch (e) {
    return console.log("Não deu certo o like", e);
  }
}



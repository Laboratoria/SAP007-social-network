import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  orderBy,
  query,
  arrayUnion,
  arrayRemove,
  doc,
  deleteDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

//import { db } from './config-firebase';
const db = getFirestore();

export const createPost = async (textPost, userEmail) => {
  try {
    const docRef = await addDoc(collection(db, 'post'), {
      textPost: textPost,
      userEmail: userEmail,
      date: new Date(),
      like: [],
    });
    console.log('Document written with ID: ', docRef.id);
    return docRef
  } catch (e) {
    console.error('Error adding document: ', e);
    return e
  }
};

export const getPost = async () => {
  const arrPost = [];
  const orderFirestore = query(collection(db, 'post'), orderBy('date'));
  const querySnapshot = await getDocs(orderFirestore);
  querySnapshot.forEach((doc) => {
    const timeline = doc.data();
    // console.log(`${doc.id} => ${doc.data()}`);
    arrPost.push({ ...timeline, id: doc.id });
  });
  console.log(arrPost);
  return arrPost;
};

export const like = async (idPost, userEmail) => {
  try {
    const docId = doc(db, 'post', idPost);
    console.log(idPost);
    // const post = await getDoc(docId);
    // console.log(post.data());
    // const likes = post.data().like;
    return await updateDoc(docId, {
      like: arrayUnion(userEmail),
    });
  } catch (e) {
    console.error('Não deu certo o like', e);
  }
};

export const deslike = async (idPost, userEmail) => {
  try {
    const docId = doc(db, 'post', idPost);
    console.log(idPost);
    return await updateDoc(docId, {
      like: arrayRemove(userEmail),
    });
  } catch (e) {
    console.error('Não deu certo o deslike ', e);
  }
};

export const editPost = async (idPost, textPost) => {
  const postIdEdit = doc(db, 'post', idPost);
  console.log(textPost);
  return await updateDoc(postIdEdit, { textPost: textPost });
};

export function deletePost(item) {
  return deleteDoc(doc(db, 'post', item));
}

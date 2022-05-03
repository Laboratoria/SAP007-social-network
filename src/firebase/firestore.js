import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
import { auth } from './authetication.js';

// import { db } from './config-firebase';
const db = getFirestore();
export const getCurrentUser = () => {
  return auth.currentUser.displayName
};

export const createPost = async (textPost) => {
  try {
    const docRef = await addDoc(collection(db, 'post'), {
      textPost,
      userName: auth.currentUser.displayName,
      date: new Date(),
      like: [],
    });
    console.log('Document written with ID: ', docRef.id);
    return docRef;
  } catch (e) {
    // console.error('Error adding document: ', e);
    // return e
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

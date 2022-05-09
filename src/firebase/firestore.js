import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
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
    return docRef.id;
  } catch (e) {
    // console.error('Error adding document: ', e);
    // return e
  }
};
export const getPost = async () => {
  const arrPost = [];
  const orderFirestore = query(collection(db, 'post'));
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
  const docId = doc(db, "post", idPost);
    return await updateDoc(docId, {
     like: arrayUnion(userEmail),
    });
  } catch (e) {
  } return arrayUnion;
};

export const dislike = async (idPost, userEmail) => {
  try {
    const docId = doc(db, "post", idPost);
    return await updateDoc(docId, {
      like: arrayRemove(userEmail),
    });
  } catch (e) {
  } return arrayRemove;
};
//conectar com o firebase
//encontrar o post certo pelo id (id do post)
//atualizar as informações do post (novo texto)

/*export const editPost = async(id, textPost)
const post = doc(db, "post", "DC");
await updateDoc(post, {
  textPost,
});*/
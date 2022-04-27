import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  arrayUnion,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

import { app } from "./firebase.js";
import { auth } from "./authentication.js";

// PARA FUNÇÃO DELETAR
// import { doc, deleteDoc } from "firebase/firestore";

// await deleteDoc(doc(db, "cities", "DC"));

export const db = getFirestore(app);

export const publicatedPost = async (valueTitle, valueText, data) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      title: valueTitle,
      text: valueText,
      data: new Date(),
      uid: auth.currentUser.uid,
      user: auth.currentUser.displayName,
      likes: [],
    });
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

//export const postUser = query(collection(db, "posts"), where ("uid","==",auth.currentUser.uid));

export const getPost = async () => {
  const collectionSortedByDate = query(
    collection(db, "posts"),
    orderBy("data", "asc")
  );
  const arrPost = [];
  const querySnapshot = await getDocs(collectionSortedByDate);
  querySnapshot.forEach((doc) => {
    const timeline = doc.data();
    timeline.id = doc.id;
    arrPost.push(timeline);
  });
  return arrPost;
};

// export const postUser = async () => {
//   const arrPost = [];
//   const querySnapshot = await getDocs(collection(db, "posts"));
//   const myProfile = where("uid", "==", uid)
//   querySnapshot.forEach((doc)=>{
//     const myPost = doc.data(myProfile);
//     arrPost.push(myPost);
//   });
//     return arrPost
// };

export function docId() {
  const docRef = doc(db, "posts", id);
  const postId = updateDoc(docRef, {
    idPost: id,
  });
  return postId;
}

export async function like(id, user) {
  const post = doc(db, "posts", id);
  await updateDoc(post, {
    likes: arrayUnion(user),
  });
}
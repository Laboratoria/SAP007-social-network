import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

import { app } from "./firebase.js";

export const db = getFirestore(app);

export const publicatedPost = async (valueTitle, valueText, data) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      title: valueTitle,
      text: valueText,
      data: new Date(),
    });

    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getPost = async () => {
  const arrPost = [];
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    const timeline = doc.data();
    // console.log(`${doc.id} => ${doc.data()}`);
    arrPost.push(timeline);
  });
  return arrPost;
};

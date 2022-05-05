import { collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js'
import {db} from "./config-firebase.js"

export const createPost = async (textPost) => {
  try {
    const docRef = await addDoc(collection(db, 'post'), {
      textPost,
      userEmail,
      message: textPost,
      data: new Date(),
      uid: auth.currentUser.uid,
      user: auth.currentUser.displayName,
      likes: [],
    });

    return docRef;} catch (e) {
      e('Post não publicado', e);
    }
  };


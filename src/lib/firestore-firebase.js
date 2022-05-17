import {
  collection,
  getDocs,
  addDoc,
  query,
  deleteDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove
  
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { db } from "./config-firebase.js";
import { auth } from "./authentication.js";

export const createPost = async (textPost) => {
  try {
    const docRef = await addDoc(collection(db, "post"), {
      textPost,
      userEmail: auth.currentUser.email,
      message: textPost,
      data: new Date(),
      uid: auth.currentUser.uid,
      user: auth.currentUser.displayName,
      likes: [],
    });

    return docRef;
  } catch (e) {
    console.log("Post não publicado", e);
  }
};

export const getPosts = async () => {
  console.log("cheguei");
  try {
    const posts = [];
    const q = query(collection(db, "post"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      post.id = doc.id;
      posts.push(post);
    });
    return posts;
  } catch (error) {}
};

export const postDelete= async (id) => {
  console.log(id);
  await deleteDoc(doc(db,"post", id));

};


export function like (id){
  const post = doc(db, "post", id);
  return updateDoc(post, {
    likes: arrayUnion(auth.currentUser.uid),
  });
}

export function dislike (id){
  const post = doc(db, "post", id);
  return updateDoc(post, {
    likes: arrayRemove(auth.currentUser.uid),
  });
}

export const postEdit = async (idPost, textPost) => {
  console.log(idPost)
  const post = doc(db, 'post', idPost);

  return await updateDoc(post, { textPost })}


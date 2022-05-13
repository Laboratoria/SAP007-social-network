import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  query,
  orderBy,
  addDoc,
  updateDoc,
  where,
  arrayRemove,
  arrayUnion,
}
  from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js"; //eslint-disable-line

import { db, auth } from "./config-firebase.js";
import { publishingPosts } from "../componentes/template-post.js"; // eslint-disable-line import/no-cycle

export async function getPosts() {
  const arrPosts = [];
  const orderingPosts = query(collection(db, "posts"), orderBy("date", "asc"));
  const querySnapshot = await getDocs(orderingPosts);
  querySnapshot.forEach((doc) => { // eslint-disable-line no-shadow
    const feed = doc.data();
    feed.id = doc.id;
    arrPosts.push(feed);
  });
  return arrPosts;
}

// Função que alimenta a coleção "posts" no Clound Firestore
export function creatPost(message, titleHQ) {
  return addDoc(collection(db, "posts"), {
    message,
    titleHQ,
    date: new Date(),
    user: auth.currentUser.displayName,
    uid: auth.currentUser.uid,
    like: [],
  }).then((docRef) => {
    return {
      id: docRef.id
    }
  });
}

// Função para deletar o post
export function deletePost(docId) {
  return deleteDoc(doc(db, "posts", docId));
}

// Função para editar o post
export function editPost(id, message, titleHQ) {
  const postRef = doc(db, "posts", id);
  return updateDoc(postRef, {
    message,
    titleHQ,
  });
}

// Função para aparecer só os post do usuario na página perfil
export async function getUserPosts(uid) {
  const collectionUserPosts = query(collection(db, "posts"), where("uid", "==", uid));
  const arrUserPost = [];
  const querySnapshot = await getDocs(collectionUserPosts);
  querySnapshot.forEach((doc) => { // eslint-disable-line no-shadow
    const userPost = doc.data();
    userPost.id = doc.id;
    arrUserPost.push(userPost);
  });
  return arrUserPost;
}

// Função para dar like
export function like(id, user) {
  const post = doc(db, "posts", id);
  return updateDoc(post, {
    like: arrayUnion(user),
  });
}

export function dislike(id, user) {
  const post = doc(db, "posts", id);
  return updateDoc(post, {
    like: arrayRemove(user),
  });
}

export function showPosts(showAllPosts) {
  getPosts().then((allPosts) => {
    allPosts.forEach((item) => {
      const postElement = publishingPosts(item);
      showAllPosts.prepend(postElement);
    });
  });
}

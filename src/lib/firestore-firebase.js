import {
    collection,
    getDocs,
    doc,
    deleteDoc,
    query,
    orderBy,
    addDoc,
    updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';


import { db, auth } from './config-firebase.js';

export async function getPosts() {
    const arrPosts = [];
    const orderingPosts = query(collection(db, "posts"), orderBy("date", "asc"));
    const querySnapshot = await getDocs(orderingPosts);
    querySnapshot.forEach((doc) => {
        const feed = doc.data();
        feed.id = doc.id;
        arrPosts.push(feed);
        //console.log(doc.id, " => ", doc.data());
    });
    return arrPosts
}

//Função que alimenta a coleção "posts" no Clound Firestore
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
            id: docRef.id,
            message,
            titleHQ,
        }
    })
}

//Função para deletar o post
export async function deletePost(docId) {
    return await deleteDoc(doc(db, "posts", docId));
}

//Função para editar o post
export function editPost(id, message, titleHQ) {
    const postRef = doc(db, "posts", id);
    return updateDoc(postRef, {
        message,
        titleHQ,
    });
}

//Função para aparecer só os post do usuario na página perfil
export const postUser = async (uid) => {
    const collectionSortedByUid = query(collection(db, "posts"), orderBy("data", "asc"), where("uid", "==", uid));
    const arrMyPost = [];
    const querySnapshot = await getDocs(collectionSortedByUid);
    querySnapshot.forEach((doc) => {
      const myPost = doc.data();
      myPost.id = doc.id;
      arrMyPost.push(myPost);
    });
    return arrMyPost;
  };

//Função para dar like
export async function like(id, user) {
    const post = doc(db, 'posts', id);
    await updateDoc(post, {
      likes: arrayUnion(user),
    });
  }
  
  export async function dislike(id, user) {
    const post = doc(db, 'posts', id);
    await updateDoc(post, {
      likes: arrayRemove(user),
    });
  }

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
    getDoc,
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
export async function getUserPosts(uid) {
    const collectionUserPosts = query(collection(db, "posts"), where("uid", "==", uid));
    const arrUserPost = [];
    const querySnapshot = await getDocs(collectionUserPosts);
    querySnapshot.forEach((doc) => {
        const userPost = doc.data();
        console.log(userPost)
        userPost.id = doc.id;
        arrUserPost.push(userPost);
    });
    return arrUserPost;
}

//Função para dar like
/*export async function like(id, user) {
    const post = doc(db, "posts", id);
    await updateDoc(post, {
      likes: arrayUnion(user),
    });
  }
  
  export async function dislike(id, user) {
    const post = doc(db, "posts", id);
    await updateDoc(post, {
      likes: arrayRemove(user),
    });
  }*/

export async function like(id, user) {
    const querySinglePost = doc(db, "posts", id);
    const querySnapshot = await getDoc(querySinglePost);
    console.log(querySnapshot.data())
}
import {
    collection,
    getDocs,
    doc,
    addDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

import { db } from './config-firebase.js';

export async function getPosts() {
    const arrPosts = [];
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
        arrPosts.push(doc.data())
        console.log(doc.id, " => ", doc.data());
    });
    return arrPosts
}

export async function creatPost(message, titleHQ) {
    const docRef = await addDoc(collection(db, "posts"), {
        message,
        titleHQ,
        date: new Date().toLocaleString("pt-br"),
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
}

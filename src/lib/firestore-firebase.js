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

//Função que alimenta a coleção "posts" no Clound Firestore
export function creatPost(message, titleHQ, userName) {
    return addDoc(collection(db, "posts"), {
        message,
        titleHQ,
        userName,
        date: new Date().toLocaleString("pt-br"),
    }).then((docRef) => {
        return {
            id:docRef.id,
            message,
            titleHQ,
            userName
        }
    })
}

//Função que alimenta a coleção "Users" no Clound Firestore
export function infoUser(name, user, email) {
    return addDoc(collection(db, "Users"), {
        name,
        user,
        email,
    }).then((docRef) => {
        return {
            id:docRef.id,
            name,
            user,
            email
        }
    })
}

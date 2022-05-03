import {
    collection,
    getDocs,
    doc, 
    deleteDoc,
    query,
    orderBy,
    addDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

import { db } from './config-firebase.js';

export async function getPosts() {
    const arrPosts = [];
    const orderingPosts = query(collection(db, "posts"), orderBy("date", "desc"));
    console.log(orderingPosts)
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
    }).then((docRef) => {
        return {
            id: docRef.id,
            message,
            titleHQ,
        }
    })
}

//Função para deletar o post
export async function deletePost (docId){
    return await deleteDoc(doc(db, "posts", docId));
}

//Função que alimenta a coleção "Users" no Clound Firestore
export function infoUser(name, user, email) {
    return addDoc(collection(db, "Users"), {
        name,
        user,
        email,
    }).then((docRef) => {
        return {
            id: docRef.id,
            name,
            user,
            email
        }
    })
}
